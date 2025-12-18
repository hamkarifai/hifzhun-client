import "@/styles/landing.css"
import { LandingFooter } from "@/components/landing/footer/LandingFooter";
import { LandingNavbar } from "@/components/landing/navbar/LandingNavbar";
import { Outlet } from "react-router";

export const LandingLayout = () => {
  return (
    <>
      <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-purple-200 selection:text-purple-900 overflow-x-hidden">
        <LandingNavbar />
        <Outlet />
        <LandingFooter />
      </div>
    </>
  );
};
