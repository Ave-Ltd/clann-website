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
  const sectionRef = useRef<HTMLDivElement | null>(null)

  // Allow programmatic section switching via CustomEvent
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
      {/* Desktop Pinned Sidebar */}
      <div className="hidden lg:block fixed inset-y-0 left-0 w-64 z-50">
        <ClubSidebar
          setActiveSection={handleSetActiveSection}
          closeSidebar={() => { }}
        />
      </div>

      {/* Mobile Sidebar Drawer */}
      <div className="lg:hidden absolute top-4 left-4 z-50">
        <Sheet>
          <SheetTrigger className="p-2 rounded-md border border-border bg-secondary">
            <Menu className="w-6 h-6" />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="w-64 p-4 flex flex-col justify-between border-none shadow-none bg-secondary"
          >
            <VisuallyHidden>
              <SheetTitle>Club Dashboard</SheetTitle>
            </VisuallyHidden>
            <VisuallyHidden>
              <SheetDescription>
                Navigate through Club-related sections in the Clann App.
              </SheetDescription>
            </VisuallyHidden>

            <ClubSidebar
              setActiveSection={handleSetActiveSection}
              closeSidebar={() => { }}
            />
          </SheetContent>
        </Sheet>
      </div>

      {/* Main Content: offset by sidebar on desktop */}
      <main className="lg:ml-64 h-full overflow-y-auto p-6">
        {renderSection()}
      </main>
    </div>
  )
}
