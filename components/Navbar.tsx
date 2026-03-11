/*
 *   Copyright (c) 2026 Massimiliano Porzio
 *   All rights reserved.
 */
"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Show,
  UserButton,
  SignInButton,
  SignUpButton,
  useUser,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Library", href: "/" },
  { label: "Add New", href: "/books/new" },
];

const Navbar = () => {
  const pathName = usePathname();
  const { user } = useUser();

  return (
    <header className="bg-('--bg-primary') w-full z-50 fixed">
      <div className="wrapper navbar-height py-4 flex justify-between items-center">
        <Link href="/" className="flex gap-0.5 items-center">
          <Image
            src="/assets/logo.png"
            alt="Bookified"
            width={42}
            height={26}
            className="object-contain"
          />
          <span className="logo-text">Bookified</span>
        </Link>
        <div className="flex items-center gap-10">
          <nav className="w-fit flex gap-7.5 items-center">
            {navItems.map(({ label, href }) => {
              const isActive =
                pathName === href ||
                (href !== "/" && pathName.startsWith(href));
              return (
                <Link
                  key={label}
                  href={href}
                  className={cn(
                    "nav-link-base",
                    isActive
                      ? "nav-link-active"
                      : "text-black hover:opacity-70",
                  )}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
          <div className="flex gap-2">
            <Show when="signed-out">
              <SignInButton mode="modal">
                <Button>Sign In</Button>
              </SignInButton>
              <SignUpButton>
                <Button variant="outline">Sign Up</Button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <div className="nav-user-link">
                <UserButton />
                {user?.firstName && (
                  <Link href="//subscriptions" className="nav-user-name">
                    {user.firstName}
                  </Link>
                )}
              </div>
            </Show>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
