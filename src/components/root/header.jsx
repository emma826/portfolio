"use client";

import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
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

export default function Header() {
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
                                <NavigationMenuLink
                                    href="/projects"
                                    className={navigationMenuTriggerStyle()}
                                >
                                    Projects
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="/blog"
                                    className={navigationMenuTriggerStyle()}
                                >
                                    Blog
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="/resume"
                                    className={navigationMenuTriggerStyle()}
                                >
                                    Resume
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="/about"
                                    className={navigationMenuTriggerStyle()}
                                >
                                    About Me
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className="hidden items-center gap-4 lg:flex">
                        {/* <Button variant="outline">Sign in</Button> */}
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
                                    <Link href="/resume" className="font-medium">
                                        Resume
                                    </Link>
                                    <Link href="/about" className="font-medium">
                                        About Us
                                    </Link>
                                </div>
                                {/* <div className="mt-6 flex flex-col gap-4">
                                    <Button variant="outline">Sign in</Button>
                                </div> */}
                            </div>
                        </SheetContent>
                    </Sheet>
                </nav>
            </div>
        </section>
    )
}