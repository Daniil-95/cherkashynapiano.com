"use client";

import { FormHTMLAttributes } from "react";

interface ConfirmFormProps extends FormHTMLAttributes<HTMLFormElement> {
  message: string;
}

export function ConfirmForm({ message, ...props }: ConfirmFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!window.confirm(message)) {
      e.preventDefault();
    }
    props.onSubmit?.(e);
  };

  return <form {...props} onSubmit={handleSubmit} />;
}
