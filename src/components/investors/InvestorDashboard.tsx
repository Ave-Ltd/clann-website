import { useState } from "react";
import InvestorSidebar from "./InvestorSidebar";
import InvestorRoadmap from "./InvestorRoadmap";
import InvestorOverview from "./InvestorOverview";
import InvestorGrowth from "./InvestorGrowth";
import InvestorFinancials from "./InvestorFinancials";
import InvestorSecurity from "./InvestorSecurity";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export const InvestorDashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const renderSection = () => {
    switch (activeSection) {
      case "roadmap":
        return <InvestorRoadmap />;
      case "growth":
        return <InvestorGrowth />;
      case "financials":
        return <InvestorFinancials />;
      case "security":
        return <InvestorSecurity />;
      default:
        return <InvestorOverview />;
    }
  };

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Sidebar for Desktop */}
      <div className="hidden lg:block w-64">
        <InvestorSidebar setActiveSection={setActiveSection} />
      </div>

      {/* Mobile Sidebar Drawer with Fixed Accessibility Issues */}
      <div className="lg:hidden absolute top-4 left-4 z-50">
        <Sheet>
          <SheetTrigger className="p-2 rounded-md border border-border bg-secondary">
            <Menu className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-64 p-4 flex flex-col justify-between border-none shadow-none bg-secondary"
          >
            {/* Hidden Dialog Title to Fix Accessibility Warning */}
            <VisuallyHidden>
              <SheetTitle>Investor Dashboard</SheetTitle>
            </VisuallyHidden>

            {/* Hidden Description for Accessibility (Fixes `aria-describedby` Error) */}
            <VisuallyHidden>
              <SheetDescription>
                Navigate through investor-related sections in the Clann App.
              </SheetDescription>
            </VisuallyHidden>

            <InvestorSidebar setActiveSection={setActiveSection} />
          </SheetContent>
        </Sheet>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">{renderSection()}</div>
    </div>
  );
};
