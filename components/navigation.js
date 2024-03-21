"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/styles/navigation.module.css"

export default function Navigation() {
  const path = usePathname();

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          {/* a 태그 말고 link 쓸것 */}
          <Link href="/">Home</Link> {path === "/" ? "❤" : ""}
        </li>
        <li>
          <Link href="/about-us">About</Link> {path === "/about-us" ? "❤" : ""}
        </li>
      </ul>
    </nav>
  )
}