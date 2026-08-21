"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import styles from "@/styles/admin/adminShell.module.scss";
import { AdminFlash } from "./AdminFlash";

const MENU_ITEMS = [
  { href: "/admin", label: "Дашборд", icon: "📊" },
  { href: "/admin/biography", label: "Биография", icon: "📝" },
  { href: "/admin/repertoire", label: "Репертуар", icon: "🎵" },
  { href: "/admin/concerts", label: "Концерты", icon: "🎤" },
  { href: "/admin/photos", label: "Фото", icon: "📸" },
  { href: "/admin/videos", label: "Видео", icon: "🎬" },
  { href: "/admin/messages", label: "Сообщения", icon: "💬" },
];

interface AdminShellProps {
  children: React.ReactNode;
}

export function AdminShell({ children }: AdminShellProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <div className={styles.shell}>
      {/* Mobile Header */}
      <header className={styles.mobileHeader}>
        <div className={styles.mobileHeaderContent}>
          <div className={styles.logo}>🎹 Админ</div>
          <button
            className={styles.hamburger}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={styles.mobileBackdrop}
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      <nav
        className={`${styles.mobileDrawer} ${
          mobileMenuOpen ? styles.mobileDrawerOpen : ""
        }`}
      >
        <ul className={styles.mobileMenu}>
          {MENU_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={pathname === item.href ? styles.active : ""}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className={styles.icon}>{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <form onSubmit={handleLogout} className={styles.mobileLogout}>
          <button type="submit" className={styles.logoutButton}>
            Выход
          </button>
        </form>
      </nav>

      {/* Desktop Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <div className={styles.logo}>🎹 Админ</div>
          <nav className={styles.menu}>
            <ul>
              {MENU_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={pathname === item.href ? styles.active : ""}
                  >
                    <span className={styles.icon}>{item.icon}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Logout Button */}
        <form onSubmit={handleLogout} className={styles.footer}>
          <button type="submit" className={styles.logoutButton}>
            Выход
          </button>
        </form>
      </aside>

      {/* Main Content */}
      <main className={styles.main}>
        <AdminFlash />
        {children}
      </main>
    </div>
  );
}
