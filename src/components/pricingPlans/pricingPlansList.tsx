"use client";

import * as React from "react";
import { pricingPlans } from "@/assets";
import type { PricingPlanData } from "@/types";
import PricingPlan from "./pricingPlan";

const PricingPlansList: React.FC = () => (
    <div className="h-full flex lg:flex-col items-center justify-between gap-8">
        {pricingPlans.map((plan: PricingPlanData, index: number) => (
            <PricingPlan key={index} index={index} plan={plan} />
        ))}
    </div>
);

export default PricingPlansList;
