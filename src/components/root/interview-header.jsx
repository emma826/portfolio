'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"

import { Sun, Moon, SearchIcon } from "lucide-react"

export default function InterviewHeader() {
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

        if (theme == "dark") {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <nav className="w-full h-14 sticky top-0 z-50 lg:px-4 backdrop-filter backdrop-blur-xl bg-opacity-5 border-b">
            <div className="sm:container h-full max-sm:px-3 flex items-center justify-between ">
                <div className="flex items-center gap-9">
                    <Logo />
                    <div className="lg:flex hidden items-center gap-5 text-sm font-medium text-black dark:text-muted-foreground">
                        <Link href="/projects" className="hover:text-primary transition-colors p-2">Projects</Link>
                        <Link href="/blog" className="hover:text-primary transition-colors p-2">Blog</Link>
                        <Link href="/interview-hub" className="hover:text-primary transition-colors p-2">Interview Hub</Link>
                        <Link href="/about" className="hover:text-primary transition-colors p-2">About</Link>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <Input type="text" placeholder="Search..." className="w-64" />
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
            </div>
        </nav>
    )
}

function Logo() {
    return (
        <Link href="/" className="flex items-center gap-3">
            <Image src={`/img/admin.jpg`} className="w-8 h-8 rounded-full object-cover" width={400} height={400} alt="Amoke Emmanuel" />
        </Link>
    );
}