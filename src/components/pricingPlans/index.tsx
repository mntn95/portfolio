"use client";

import * as React from "react";
import { Heading } from "@/base-components";
import PricingPlansList from "./pricingPlansList";

const PricingPlans: React.FC = () => (
    <div id="pricing" className="py-20 xs:py-10">
        <Heading text="Pricing Plans" />
        <PricingPlansList />
    </div>
);

export default PricingPlans;
