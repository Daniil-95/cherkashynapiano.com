"use client";

import { useEffect } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";

interface FancyboxProps {
  children: React.ReactNode;
}

export default function Fancybox({ children }: FancyboxProps) {
  useEffect(() => {
    NativeFancybox.bind("[data-fancybox]", {});

    return () => {
      NativeFancybox.destroy();
    };
  }, []);

  return <>{children}</>;
}