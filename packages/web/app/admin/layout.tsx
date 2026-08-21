import { ReactNode } from "react";
import { requireAdminSession } from "@/lib/auth";
import { AdminShell } from "@/components/admin/AdminShell";
import "@/styles/admin/admin.scss";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  await requireAdminSession();

  return <AdminShell>{children}</AdminShell>;
}
