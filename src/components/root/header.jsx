"use client";

import { MenuIcon, Sun, Moon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react";

export default function Header() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setTheme(prefersDark ? "dark" : "light");
        }
    }, []);

    useEffect(() => {

        if(theme == "dark") {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (

        <section className="py-2 z-[999] bg-white dark:bg-zinc-900" style={{ position: "sticky", top: "0", left: "0" }}>
            <div className="container mx-auto">
                <nav className="flex items-center justify-between px-6">
                    <Link href="/" className="flex items-center gap-2" >
                        <Image
                            src="/img/admin.jpg"
                            className="h-10 w-10 rounded-full"
                            alt="Amoke Emmanuel Chinonye"
                            width={500}
                            height={500}
                        />
                    </Link>
                    <NavigationMenu className="hidden lg:block">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link
                                    href="/projects"
                                    className={`${navigationMenuTriggerStyle()} bg-white dark:bg-zinc-900`}
                                >
                                    Projects
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link
                                    href="/blog"
                                    className={`${navigationMenuTriggerStyle()} bg-white dark:bg-zinc-900`}
                                >
                                    Blog
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link
                                    href="/Amoke Emmanuel Chinonye - Resume.pdf"
                                    className={`${navigationMenuTriggerStyle()} bg-white dark:bg-zinc-900`}
                                >
                                    Resume
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link
                                    href="/about"
                                    className={`${navigationMenuTriggerStyle()} bg-white dark:bg-zinc-900`}
                                >
                                    About Me
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className="hidden items-center gap-4 lg:flex">
                        {theme === "light" ? (
                            <Button variant="outline" size="icon" className="dark:bg-zinc-800 dark:text-white cursor-pointer rounded-full" onClick={() => setTheme("dark")}>
                                <Moon className="h-4 w-4 m-3" />
                            </Button>
                        ) : (
                            <Button variant="outline" size="icon" className="dark:bg-zinc-800 dark:text-white cursor-pointer rounded-full" onClick={() => setTheme("light")}>
                                <Sun className="h-4 w-4 m-3" />
                            </Button>
                        )}
                    </div>
                    <Sheet>
                        <SheetTrigger asChild className="lg:hidden">
                            <Button variant="outline" size="icon">
                                <MenuIcon className="h-4 w-4" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="top" className="max-h-screen overflow-auto bg-white dark:bg-zinc-900">
                            <SheetHeader>
                                <SheetTitle>
                                    <Link
                                        href="/"
                                        className="flex items-center gap-2"
                                    >
                                        <Image
                                            src="/img/admin.jpg"
                                            className="w-10 h-10 rounded-full"
                                            alt="Amoke Emmanuel Chinonye"
                                            width={500}
                                            height={500}
                                        />
                                    </Link>
                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col p-4">
                                <div className="flex flex-col gap-6">
                                    <Link href="/projects" className="font-medium">
                                        Projects
                                    </Link>
                                    <Link href="/blog" className="font-medium">
                                        Blog
                                    </Link>
                                    <Link href="/Amoke Emmanuel Chinonye - Resume.pdf" className="font-medium">
                                        Resume
                                    </Link>
                                    <Link href="/about" className="font-medium">
                                        About Us
                                    </Link>
                                </div>
                                <div className="mt-6 flex flex-col gap-4">
                                    {theme === "light" ? (
                                        <Button variant="outline" size="icon" className="dark:bg-zinc-800 dark:text-white cursor-pointer flex items-center gap-1 w-full" onClick={() => setTheme("dark")}>
                                            <Moon className="h-4 w-4 my-3"/>
                                            Dark
                                        </Button>
                                    ) : (
                                        <Button variant="outline" size="icon" className="dark:bg-zinc-800 dark:text-white cursor-pointer flex items-center gap-1 w-full" onClick={() => setTheme("light")}>
                                            <Sun className="h-4 w-4 my-3" onClick={() => setTheme("light")} />
                                            Light
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </nav>
            </div>
        </section>
    )
}