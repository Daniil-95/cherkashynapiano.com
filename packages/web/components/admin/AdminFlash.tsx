"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "@/styles/admin/adminFlash.module.scss";

export function AdminFlash() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const saved = searchParams.get("saved");

    if (saved === "1") {
      setShow(true);

      const timer = setTimeout(() => {
        setShow(false);
        // Remove the saved parameter from URL
        router.replace(window.location.pathname);
      }, 2200);

      return () => clearTimeout(timer);
    }
  }, [searchParams, router]);

  if (!show) return null;

  return (
    <div className={styles.flash}>
      <p>Изменения сохранены</p>
    </div>
  );
}
