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
  { href: "#registerinterest", label: "Contact" },
  { href: "#faq", label: "FAQ" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleAnchorClick = (hash: string) => {
    const id = hash.replace("#", "");
    const el = document.getElementById(id);

    if (!el) return;

    // Get the element's top position relative to page before layout shifts
    const y = el.getBoundingClientRect().top + window.scrollY;

    // Close the drawer first
    setIsOpen(false);

    // Scroll to exact Y after drawer has closed
    setTimeout(() => {
      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }, 300); // Adjust based on Sheet close animation duration
  };



  return (
    <header className="sticky top-0 z-40 w-full bg-white dark:bg-[#1a1a1a] border-b border-border">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between items-center">

          {/* LOGO */}
          <NavigationMenuItem className="flex items-center gap-2">
            <a href="/" className="flex items-center space-x-2">
              <span className="h-10 w-auto flex items-center">
                <LogoIcon className="h-10 w-auto" />
              </span>
            </a>
          </NavigationMenuItem>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex gap-12 items-center">
            {routeList.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                className="text-lg font-medium hover:underline text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* CLUB DASHBOARD + THEME TOGGLE */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => navigate("/login")}
              className="btn-primary text-sm"
            >
              Club Dashboard
            </button>
            <ModeToggle />
          </div>

          {/* MOBILE DRAWER NAVIGATION */}
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
                    <button
                      key={label}
                      onClick={() => handleAnchorClick(href)}
                      className="text-lg font-medium hover:underline text-foreground"
                    >
                      {label}
                    </button>
                  ))}
                </nav>

                <div className="mt-8 flex flex-col items-center gap-3">
                  <ModeToggle />
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      navigate("/login");
                    }}
                    className="text-sm font-medium w-full px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-all"
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
