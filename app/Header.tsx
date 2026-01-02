'use client'

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
            <div className="h-1 bg-gradient-to-r from-emerald-500 to-blue-600" />

            <div className="px-4 md:px-6 lg:px-20 mx-auto py-3">
                <nav className="flex items-center justify-between">

                    {/* Logo */}
                    <a href="/" className="flex items-center gap-3">
                        <img src="/logo.png" alt="Nurture PNW Staffing" className="h-12 w-auto" />
                    </a>

                    {/* Navigation */}
                    <NavigationMenu>
                        <NavigationMenuList className="hidden md:flex items-center gap-2">
                            {[
                                { name: "Home", href: "/" },
                                { name: "Services", href: "/services" },
                                { name: "About", href: "/about" },
                                { name: "Careers", href: "/careers" },
                                { name: "Contact", href: "/contact" },
                            ].map((item) => (
                                <NavigationMenuItem key={item.name}>
                                    <NavigationMenuLink
                                        href={item.href}
                                        className="px-4 py-2 text-sm font-medium text-slate-700 rounded-md transition-all hover:text-emerald-600 hover:bg-emerald-50"
                                    >
                                        {item.name}
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Right Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Phone className="h-4 w-4 text-emerald-600" />
                            <span className="font-medium">206-697-4413</span>
                        </div>

                        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                            Request Staffing
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    )
}
