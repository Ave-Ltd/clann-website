import { useState, useEffect, useRef } from "react"
import InvestorSidebar from "./InvestorSidebar"
import InvestorRoadmap from "./InvestorRoadmap"
import InvestorOverview from "./InvestorOverview"
import InvestorGrowth from "./InvestorGrowth"
import InvestorFinancials from "./InvestorFinancials"
import InvestorSecurity from "./InvestorSecurity"
import InvestorBenefits from "./InvestorBenefits"
import InvestorMemberBenefits from "./InvestorMemberBenefits";
import InvestorPassiveRevenue from "./InvestorPassiveRevenue"
import InvestorEndorsement from "./InvestorEndorsement"
import InvestorAboutAve from "./InvestorAboutAve"
import InvestorFAQs from "./InvestorFAQs"
import InvestorContactAndNextSteps from "./InvestorContactAndNextSteps"
import InvestorAboutClann from "./InvestorAboutClann"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

export const InvestorDashboard = () => {
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
        return <InvestorRoadmap />
      case "aboutClann":
        return <InvestorAboutClann />
      case "benefits":
        return <InvestorBenefits />
      case "memberBenefits":
        return <InvestorMemberBenefits />
      case "growth":
        return <InvestorGrowth />
      case "financials":
        return <InvestorFinancials />
      case "security":
        return <InvestorSecurity />
      case "passiveRevenue":
        return <InvestorPassiveRevenue />
      case "endorsement":
        return <InvestorEndorsement />
      case "aboutAve":
        return <InvestorAboutAve />
      case "faqs":
        return <InvestorFAQs />
      case "contact":
        return <InvestorContactAndNextSteps />
      default:
        return <InvestorOverview />
    }
  }

  return (
    <div id="investor-dashboard-section-trigger" ref={sectionRef}>
      {/* Desktop Pinned Sidebar */}
      <div className="hidden lg:block fixed inset-y-0 left-0 w-64 z-50">
        <InvestorSidebar
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
              <SheetTitle>Investor Dashboard</SheetTitle>
            </VisuallyHidden>
            <VisuallyHidden>
              <SheetDescription>
                Navigate through investor-related sections in the Clann App.
              </SheetDescription>
            </VisuallyHidden>

            <InvestorSidebar
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
