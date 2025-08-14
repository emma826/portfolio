"use client"

import * as React from "react"

import { useState, useEffect } from "react"

import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/admin/nav-main"
import { NavProjects } from "@/components/admin/nav-projects"
import { NavSecondary } from "@/components/admin/nav-secondary"
import { NavUser } from "@/components/admin/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import Image from "next/image"

const data = {
  user: {
    name: "Amoke Emmanuel",
    email: "emmanuelamoke36@gmail.com",
    avatar: "/img/admin.jpg",
  },
  navMain: [
    {
      title: "Email List",
      url: "/admin/email-list",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Compose",
          url: "#",
        },
        {
          title: "Lead Magnets",
          url: "#",
        },
        // {
        //   title: "Settings",
        //   url: "#",
        // },
      ],
    },
    // {
    //   title: "Playground",
    //   url: "#",
    //   icon: SquareTerminal,
    //   isActive: true,
    //   items: [
    //     {
    //       title: "History",
    //       url: "#",
    //     },
    //     {
    //       title: "Starred",
    //       url: "#",
    //     },
    //     {
    //       title: "Settings",
    //       url: "#",
    //     },
    //   ],
    // }
  ],
  navSecondary: [
    // {
    //   title: "Home",
    //   url: "/admin",
    //   icon: LifeBuoy,
    // },
  ],
  projects: [
    {
      name: "Home",
      url: "/admin",
      icon: Frame,
    },
    {
      name: "Projects",
      url: "/admin/projects",
      icon: PieChart,
    },
    {
      name: "Blog",
      url: "/admin/blogs",
      icon: Map,
    },
    {
      name: "Interview Hub",
      url: "/admin/interview-hub",
      icon: BookOpen,
    },
  ],
}

export function AppSidebar({ ...props }) {
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
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-full overflow-hidden">
                  <Image src="/img/admin.jpg" width={400} height={400} alt="Amoke Emmanuel" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Emmanuel Amoke</span>
                  <span className="truncate text-xs">Personal Website</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
        <NavMain items={data.navMain} />
        {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      {/* <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter> */}
    </Sidebar>
  )
}
