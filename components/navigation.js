"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();

  return (
    <nav>
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