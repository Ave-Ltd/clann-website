import { useState, useEffect, useRef } from "react"
import ClubSidebar from "./ClubSidebar"
import ClubRoadmap from "./ClubRoadmap"
import ClubOverview from "./ClubOverview"
import ClubGrowth from "./ClubGrowth"
import ClubFinancials from "./ClubFinancials"
import ClubSecurity from "./ClubSecurity"
import ClubBenefits from "./ClubBenefits"
import ClubMemberBenefits from "./ClubMemberBenefits"
import ClubPassiveRevenue from "./ClubPassiveRevenue"
import ClubAboutAve from "./ClubAboutAve"
import ClubFAQs from "./ClubFAQs"
import ClubContactAndNextSteps from "./ClubContactAndNextSteps"
import ClubAboutClann from "./ClubAboutClann"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

export const ClubDashboard = () => {
  const [activeSection, setActiveSection] = useState("overview")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const sectionRef = useRef<HTMLDivElement | null>(null)

  // Programmatic switching
  useEffect(() => {
    if (!sectionRef.current) return
    const el = sectionRef.current

    const handleSectionSwitch = (e: Event) => {
      const customEvent = e as CustomEvent<string>
      const next = customEvent.detail
      if (typeof next === "string") setActiveSection(next)
    }

    el.addEventListener("switch-section", handleSectionSwitch)
    return () => el.removeEventListener("switch-section", handleSectionSwitch)
  }, [])

  const handleSetActiveSection = (section: string) => {
    setActiveSection(section)
  }

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false)
  }

  const renderSection = () => {
    switch (activeSection) {
      case "roadmap":
        return <ClubRoadmap />
      case "aboutClann":
        return <ClubAboutClann />
      case "benefits":
        return <ClubBenefits />
      case "memberBenefits":
        return <ClubMemberBenefits />
      case "growth":
        return <ClubGrowth />
      case "financials":
        return <ClubFinancials />
      case "security":
        return <ClubSecurity />
      case "passiveRevenue":
        return <ClubPassiveRevenue />
      case "aboutAve":
        return <ClubAboutAve />
      case "faqs":
        return <ClubFAQs />
      case "contact":
        return <ClubContactAndNextSteps />
      default:
        return <ClubOverview />
    }
  }

  return (
    <div id="club-dashboard-section-trigger" ref={sectionRef}>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed inset-y-0 left-0 w-64 z-50">
        <ClubSidebar
          setActiveSection={handleSetActiveSection}
          closeSidebar={() => {}}
        />
      </div>

      {/* Mobile Sidebar */}
      <div className="lg:hidden absolute top-4 left-4 z-50">
        <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
          <SheetTrigger className="p-2 rounded-md border border-border bg-white dark:bg-muted">
            <Menu className="w-6 h-6" />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="w-64 p-4 flex flex-col justify-between border-none shadow-none bg-white dark:bg-muted"
          >
            <VisuallyHidden>
              <SheetTitle>Club Dashboard</SheetTitle>
              <SheetDescription>
                Navigate through Club-related sections in the Clann App.
              </SheetDescription>
            </VisuallyHidden>

            <ClubSidebar
              setActiveSection={(section) => {
                handleSetActiveSection(section)
                handleCloseSidebar()
              }}
              closeSidebar={handleCloseSidebar}
            />
          </SheetContent>
        </Sheet>
      </div>

      {/* Main Content */}
      <main className="lg:ml-64 h-full overflow-y-auto p-6">
        {renderSection()}
      </main>
    </div>
  )
}
