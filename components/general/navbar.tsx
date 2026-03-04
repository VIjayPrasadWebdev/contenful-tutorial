"use client";
import Link from "next/link";
import React from "react";
import { Separator } from "../ui/separator";
import { usePathname } from "next/navigation";
import Navlinks from "@/lib/navlinks";

export default function Navbar() {
  let pathname = usePathname();

  return (
    <header>
      <nav className="p-3 flex justify-between items-center">
        <div className="logo">
          <h1 className="text-xl font-extrabold">Mercer</h1>
        </div>
        <ul className="links flex gap-2 items-center">
          {Navlinks.map((navlink, i) => {
            return (
              <li key={i}>
                <Link
                  className={`${pathname === navlink.href && "text-red-500"}`}
                  href={`${navlink.href}`}
                >
                  {navlink.label}
                </Link>
              </li>
            );
          })}
          {/* <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li> */}
        </ul>
      </nav>
      <Separator />
    </header>
  );
}
