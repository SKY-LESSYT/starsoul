"use client"

import * as React from "react"
import Link from "next/link"
import {
  SquareDashed,
  Bone,
  BadgeDollarSign,
  Gem,
  PartyPopper,
  Grid3x3,
  Home,
  MessagesCircle,
  Download,
} from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { SearchBar } from "./SearchBar"
import { FaDiscord, FaYoutube } from "react-icons/fa6"

const gameplayMenu = [
  {
    title: "Claims",
    href: "/docs/gameplay",
    description:
      "Learn how to protect your base, create parties, and more.",
    icon: <SquareDashed />,
  },
  {
    title: "Death",
    href: "/docs/gameplay",
    description:
      "Learn how death is handled, and how to reclaim your items.",
    icon: <Bone />,
  },
  {
    title: "Economy",
    href: "/docs/gameplay",
    description:
      "Set up your own shop using Create's shop system!",
    icon: <BadgeDollarSign />,
  },
  {
    title: "Events",
    href: "/docs/gameplay",
    description:
      "Learn how to participate in upcoming server events!",
    icon: <PartyPopper />,
  },
  {
    title: "Recipes",
    href: "/docs/gameplay",
    description:
      "Overview of all modified server recipes to help with automation.",
    icon: <Grid3x3 />,
  },
  {
    title: "Mods",
    href: "/docs/gameplay",
    description:
      "A comprehensive overview of every mod on the server.",
    icon: <Gem />,
  },
]

const triggerClassName =
  "h-9 cursor-pointer rounded-md border bg-background px-3 text-sm shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"

const linkClassName =
  "flex h-9 cursor-pointer items-center rounded-md border bg-background px-3 text-sm shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"

export function NavBar() {
  const [serverOnline, setServerOnline] = React.useState<boolean | null>(null)

  React.useEffect(() => {
    let cancelled = false

    const checkServer = async () => {
      try {
        const response = await fetch("/api/status")

        if (!response.ok) {
          throw new Error("Failed to fetch server status")
        }

        const data = await response.json()

        if (!cancelled) {
          setServerOnline(Boolean(data.online))
        }
      } catch {
        if (!cancelled) {
          setServerOnline(false)
        }
      }
    }

    checkServer()

    const interval = setInterval(checkServer, 30_000)

    return () => {
      cancelled = true
      clearInterval(interval)
    }
  }, [])

  return (
    <NavigationMenu className="fixed left-0 top-0 z-50 w-full max-w-none px-3 py-3">
      <NavigationMenuList className="w-full gap-1">
        {/* Home */}
        <NavigationMenuItem>
          <NavigationMenuLink
            render={
              <Link
                href="/"
                aria-label="Home"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border bg-background shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Home className="h-4 w-4" />
              </Link>
            }
          />
        </NavigationMenuItem>

        {/* Getting Started */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className={triggerClassName}>
            Getting started
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="w-auto">
              <ListItem
                href="/docs/modrinth"
                title="Modrinth"
                icon={
                  <Download className="h-4 w-4 text-muted-foreground" />
                }
              >
                Installation guide for Modrinth
              </ListItem>

              <ListItem
                href="/docs/curseforge"
                title="CurseForge"
                icon={
                  <Download className="h-4 w-4 text-muted-foreground" />
                }
              >
                Installation guide for CurseForge
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Gameplay */}
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger className={triggerClassName}>
            Gameplay
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {gameplayMenu.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  href={item.href}
                  icon={item.icon}
                >
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* FAQ */}
        <NavigationMenuItem>
          <NavigationMenuLink
            render={
              <Link
                href="/docs/faq"
                className={linkClassName}
              >
                <MessagesCircle className="mr-2 h-4 w-4" />
                FAQ
              </Link>
            }
          />
        </NavigationMenuItem>

        {/* Right side */}
        <div className="ml-auto flex items-center gap-1">
          {/* Server Status */}
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={`${triggerClassName} min-w-[105px]`}
              aria-label="Server status"
            >
              <span className="relative mr-2 flex h-3 w-3 items-center justify-center">
                {serverOnline === null ? (
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                ) : (
                  <>
                    <span
                      className={`absolute h-3 w-3 animate-ping rounded-full opacity-60 ${
                        serverOnline ? "bg-green-400" : "bg-red-400"
                      }`}
                      style={{ animationDuration: "1.5s" }}
                    />

                    <span
                      className={`relative h-2.5 w-2.5 rounded-full ${
                        serverOnline ? "bg-green-400" : "bg-red-400"
                      }`}
                    />
                  </>
                )}
              </span>

              {serverOnline === null
                ? "Checking..."
                : serverOnline
                  ? "Online"
                  : "Offline"}
            </NavigationMenuTrigger>

            <NavigationMenuContent>
              <div className="w-auto flex-col text-center">

                <div className=" rounded-md bg-muted px-2 py-1.5 font-mono text-sm text-muted-foreground">
                  starsoul.industries
                </div>

                <div className="text-xs p-2 text-muted-foreground">
                  {serverOnline === null
                    ? "Checking server status..."
                    : serverOnline
                      ? "Server is currently online."
                      : "Server is currently offline."}
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>


          {/* Discord */}
          <NavigationMenuItem>
            <NavigationMenuLink
              render={
                <a
                  href="https://discord.gg/7AqVnCwH7Z"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discord"
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border bg-background text-indigo-400 shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <FaDiscord className="h-4 w-4" />
                </a>
              }
            />
          </NavigationMenuItem>

          {/* YouTube */}
          <NavigationMenuItem>
            <NavigationMenuLink
              render={
                <a
                  href="https://www.youtube.com/@SKY-LESSS"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border bg-background text-red-400 shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <FaYoutube className="h-4 w-4" />
                </a>
              }
            />
          </NavigationMenuItem>

          {/* Search */}
          <NavigationMenuItem>
            <SearchBar />
          </NavigationMenuItem>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  icon,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string
  title: React.ReactNode
  icon?: React.ReactNode
}) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={
          <Link
            href={href}
            className="block cursor-pointer rounded-md p-2 transition-colors hover:bg-accent"
          >
            <div className="flex flex-col gap-1 text-sm">
              <div className="flex items-center gap-2 font-medium leading-none">
                {icon}
                {title}
              </div>

              <div className="line-clamp-2 text-muted-foreground">
                {children}
              </div>
            </div>
          </Link>
        }
      />
    </li>
  )
}
