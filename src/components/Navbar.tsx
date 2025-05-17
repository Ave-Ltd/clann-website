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
import { useNavigate } from "react-router-dom";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  { href: "#about", label: "About" },
  { href: "#features", label: "Features" },
  { href: "#fundraising", label: "Fundraising" },
  { href: "#contact", label: "Contact" },
  { href: "#faq", label: "FAQ" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background border-b-[1px]">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between items-center">

          {/* LOGO & TITLE */}
          <NavigationMenuItem className="flex items-center gap-2">
            <a href="/" className="flex items-center space-x-2">
              <span className="h-8 w-8">
                <LogoIcon />
              </span>
              <span className="text-xl font-bold">Clann</span>
            </a>
          </NavigationMenuItem>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex gap-12 items-center">
            {routeList.map(({ href, label }) => (
              <a key={label} href={href} className="text-lg font-medium hover:underline">
                {label}
              </a>
            ))}
          </nav>

          {/* CLUB DASHBOARD + TOGGLE */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => navigate("/login")}
              className="text-sm font-medium px-4 py-2 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50 transition-all"
            >
              Club Dashboard
            </button>
            <ModeToggle />
          </div>

          {/* MOBILE NAVIGATION (Drawer) */}
          <span className="flex lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu className="h-6 w-6" onClick={() => setIsOpen(true)} />
              </SheetTrigger>

              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">Navigation</SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col justify-start items-center gap-3 mt-4">
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
                </nav>

                {/* BOTTOM SECTION */}
                <div className="mt-8 flex flex-col items-center gap-3">
                  <ModeToggle />
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      navigate("/login");
                    }}
                    className="text-sm font-medium w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-all"
                  >
                    Club Dashboard
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </span>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
