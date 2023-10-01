import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

import LandingNavabr from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import LandingFooter from "@/components/landing-footer";

const LandingPage = () => {
    return (
        <div className="h-full w-full flex flex-col">
            <LandingNavabr />
            <LandingHero />
            <LandingFooter />
        </div>
    );
};

export default LandingPage;
