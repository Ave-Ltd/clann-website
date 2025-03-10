import { useState } from "react"
import InvestorSidebar from "./InvestorSidebar"
import InvestorRoadmap from "./InvestorRoadmap"
import InvestorOverview from "./InvestorOverview"
import InvestorGrowth from "./InvestorGrowth"
import InvestorFinancials from "./InvestorFinancials"
import InvestorSecurity from "./InvestorSecurity"
import InvestorBenefits from "./InvestorBenefits"
import InvestorPassiveRevenue from "./InvestorPassiveRevenue"
import InvestorEndorsement from "./InvestorEndorsement"
import InvestorAboutAve from "./InvestorAboutAve"
import InvestorFAQs from "./InvestorFAQs"
import InvestorContactAndNextSteps from "./InvestorContactAndNextSteps"

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
  // Active section is stored in state
  const [activeSection, setActiveSection] = useState("overview")

  // This function matches the (section: string) => void signature
  const handleSetActiveSection = (section: string) => {
    setActiveSection(section)
  }

  const renderSection = () => {
    switch (activeSection) {
      case "roadmap":
        return <InvestorRoadmap />
      case "benefits":
        return <InvestorBenefits />
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
    <div className="relative h-screen bg-background text-foreground">
      {/* Desktop Pinned Sidebar */}
      <div className="hidden lg:block fixed inset-y-0 left-0 w-64 z-50">
        <InvestorSidebar
          setActiveSection={handleSetActiveSection}
          closeSidebar={() => {}}
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

            {/* Same fix here: pass handleSetActiveSection */}
            <InvestorSidebar
              setActiveSection={handleSetActiveSection}
              closeSidebar={() => {}}
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
