"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { BsGithub } from "react-icons/bs";
import { LuMenu } from "react-icons/lu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  return (
    <nav className="fixed z-50 flex items-center justify-between w-full h-24 px-4 py-10 backdrop-blur-md bg-background bg-opacity-30 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      {/* Logo */}
      <Link href="/">
        <Image
          alt="logo"
          className="w-40 cursor-pointer dark:invert"
          src="/images/logo.png"
          height={100}
          width={170}
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden gap-1 md:gap-2 lg:gap-4 md:flex">
        <Link href="/">
          <Button variant="ghost" className="font-semibold text-md">
            Home
          </Button>
        </Link>
        <Link href="/about">
          <Button variant="ghost" className="font-semibold text-md">
            About
          </Button>
        </Link>
        <Link href="/privacy-policy">
          <Button variant="ghost" className="font-semibold text-md">
            Privacy Policy
          </Button>
        </Link>
        <Link href="/steganografi">
          <Button variant="ghost" className="font-semibold text-md">
            Steganografi
          </Button>
        </Link>
      </div>

      {/* Theme Toggle - Desktop */}
      <div className="items-center hidden gap-2 md:flex">
        <ModeToggle />
      </div>

      {/* Mobile Nav */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="block md:hidden">
            <LuMenu className="text-2xl text-slate-950 dark:text-slate-200" />
          </Button>
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>
              <div className="flex flex-col gap-2 mt-4">
                <Button asChild variant="link" className="w-full font-semibold text-md">
                  <Link href="/">Home</Link>
                </Button>
                <Button asChild variant="link" className="w-full font-semibold text-md">
                  <Link href="/about">About</Link>
                </Button>
                <Button asChild variant="link" className="w-full font-semibold text-md">
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </Button>
                <Button asChild variant="link" className="w-full font-semibold text-md">
                  <Link href="/steganografi">Steganografi</Link>
                </Button>

                <div className="mt-4">
                  <ModeToggle />
                </div>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
