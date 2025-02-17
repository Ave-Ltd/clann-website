import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import ModeToggle from "./mode-toggle";
import { LogoIcon } from "./Icons";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  { href: "#features", label: "Features" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background border-b-[1px]">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between items-center">
          
          {/* LOGO & TITLE - Ensuring it aligns centrally */}
          <NavigationMenuItem className="flex items-center gap-2">
            <a href="/" className="flex items-center space-x-2">
              <span className="h-8 w-8">
                <LogoIcon />
              </span>
              <span className="text-xl font-bold">Clann</span>
            </a>
          </NavigationMenuItem>

          {/* NAVIGATION LINKS - Spaced out */}
          <nav className="hidden lg:flex gap-12 items-center">
            {routeList.map(({ href, label }) => (
              <a key={label} href={href} className="text-lg font-medium hover:underline">
                {label}
              </a>
            ))}
          </nav>

          {/* LIGHT/DARK MODE TOGGLE (Only for large screens) */}
          <div className="hidden lg:flex items-center">
            <ModeToggle />
          </div>

          {/* MOBILE MENU (Drawer) */}
          <span className="flex lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu className="h-6 w-6" onClick={() => setIsOpen(true)} />
              </SheetTrigger>

              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">Navigation</SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col justify-center items-center gap-3 mt-4">
                  {routeList.map(({ href, label }) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium hover:underline"
                    >
                      {label}
                    </a>
                  ))}

                  {/* LIGHT/DARK TOGGLE (For Mobile Menu Only) */}
                  <div className="mt-4 block lg:hidden">
                    <ModeToggle />
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </span>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
