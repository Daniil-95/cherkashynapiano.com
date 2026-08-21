"use client";

import { ButtonHTMLAttributes, useRef, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import styles from "@/styles/admin/submitButton.module.scss";

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  pendingLabel?: string;
  pendingTimeoutMs?: number;
}

export function SubmitButton({
  pendingLabel = "Сохраняю...",
  pendingTimeoutMs = 7500,
  children = "Сохранить",
  ...props
}: SubmitButtonProps) {
  const { pending } = useFormStatus();
  const timeoutRef = useRef<NodeJS.Timeout>();
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    if (pending) {
      setIsPending(true);
      timeoutRef.current = setTimeout(() => {
        setIsPending(false);
      }, pendingTimeoutMs);
    } else {
      setIsPending(false);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [pending, pendingTimeoutMs]);

  return (
    <button
      type="submit"
      disabled={isPending}
      data-pending={isPending}
      className={styles.button}
      {...props}
    >
      {isPending ? pendingLabel : children}
    </button>
  );
}
