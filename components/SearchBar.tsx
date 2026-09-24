"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
  CircleAlertIcon,
  CircleCheckIcon,
  CircleDashedIcon,
  SquareDashed,
  Bone,
  BadgeDollarSign,
  Gem,
  PartyPopper,
  Map,
  Search,
  Package,
  Server,
  MessageCircleQuestion,
  Grid3x3,
  Sun,
  Moon,
  Download,
} from "lucide-react"

import { useTheme } from "next-themes"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

const navigationItems = {
  gettingStarted: [
    {
      title: "Modrinth",
      href: "/docs/modrinth",
      description: "Installation guide for Modrinth",
      icon: Download,
    },
    {
      title: "Curseforge",
      href: "/docs/curseforge",
      description: "Installation guide for Curseforge",
      icon: Download,
    },
  ],

  faq: [
    {
      title: "Modpack Help",
      href: "/docs/faq",
      description: "Questions about the modpack.",
      icon: Package,
    },
    {
      title: "Server Help",
      href: "/docs/faq",
      description: "Questions about the server.",
      icon: Server,
    },
    {
      title: "Event Help",
      href: "/docs/faq",
      description: "Questions about events.",
      icon: PartyPopper,
    },
    {
      title: "Other Help",
      href: "/docs/faq",
      description: "Other Frequently Asked Questions",
      icon: MessageCircleQuestion,
    },
  ],

  gameplay: [
    {
      title: "Claims",
      href: "/docs/gameplay#claims",
      description: "Learn how to protect your base, create parties, and more.",
      icon: SquareDashed,
    },
    {
      title: "Death",
      href: "/docs/gameplay#death",
      description: "Learn how death is handled, and how to reclaim your items.",
      icon: Bone,
    },
    {
      title: "Economy",
      href: "/docs/gameplay#economy",
      description: "Set up your own shop using create's shop system!",
      icon: BadgeDollarSign,
    },
    {
      title: "Events",
      href: "/docs/gameplay#events",
      description: "Learn how to participate in upcoming server events!",
      icon: PartyPopper,
    },
    {
      title: "Recipes",
      href: "/docs/gameplay#recipes",
      description:
        "Overview of all modified server recipes to help with automation.",
      icon: Grid3x3,
    },
    {
      title: "Mods",
      href: "/docs/gameplay#mods",
      description: "A comprehensive overview of every mod on the server.",
      icon: Gem,
    },
  ],
}

export function SearchBar() {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)

    return () => {
      document.removeEventListener("keydown", down)
    }
  }, [])

  const navigate = (href: string) => {
    setOpen(false)
    router.push(href)
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
    setOpen(false)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex h-9 w-[180px] items-center gap-2 rounded-md border bg-background px-3 text-sm text-muted-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        <Search className="h-4 w-4" />
        <span className="flex-1 text-left">Search...</span>

        <kbd className="pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium select-none">
          <span>⌘</span>K
        </kbd>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="overflow-hidden p-0 sm:max-w-[600px]">
          <DialogTitle className="sr-only">Search Website</DialogTitle>

          <Command className="rounded-lg border-0 shadow-none">
            <CommandInput placeholder="Search Website..." />

            <CommandList className="max-h-[400px]">
              <CommandEmpty>No results found.</CommandEmpty>

              {/* Getting Started */}
              <CommandGroup heading="Getting Started">
                {navigationItems.gettingStarted.map((item) => {
                  const Icon = item.icon

                  return (
                    <CommandItem
                      key={item.href}
                      value={`${item.title} ${item.description}`}
                      onSelect={() => navigate(item.href)}
                    >
                      <Icon className="h-4 w-4 shrink-0" />

                      <div className="flex flex-col">
                        <span>{item.title}</span>
                        <span className="text-xs text-muted-foreground">
                          {item.description}
                        </span>
                      </div>
                    </CommandItem>
                  )
                })}
              </CommandGroup>

              {/* Gameplay */}
              <CommandGroup heading="Gameplay">
                {navigationItems.gameplay.map((item) => {
                  const Icon = item.icon

                  return (
                    <CommandItem
                      key={item.href}
                      value={`${item.title} ${item.description}`}
                      onSelect={() => navigate(item.href)}
                    >
                      <Icon className="h-4 w-4 shrink-0" />

                      <div className="flex flex-col">
                        <span>{item.title}</span>
                        <span className="text-xs text-muted-foreground">
                          {item.description}
                        </span>
                      </div>
                    </CommandItem>
                  )
                })}
              </CommandGroup>

              {/* FAQ */}
              <CommandGroup heading="FAQ">
                {navigationItems.faq.map((item) => {
                  const Icon = item.icon

                  return (
                    <CommandItem
                      key={item.title}
                      value={`${item.title} ${item.description}`}
                      onSelect={() => navigate(item.href)}
                    >
                      <Icon className="h-4 w-4 shrink-0" />

                      <div className="flex flex-col">
                        <span>{item.title}</span>
                        <span className="text-xs text-muted-foreground">
                          {item.description}
                        </span>
                      </div>
                    </CommandItem>
                  )
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  )
}
