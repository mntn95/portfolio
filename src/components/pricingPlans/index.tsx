"use client";

import * as React from "react";

import { Heading } from "@/base-components";
import type { PricingPlanData } from "@/types";

import PricingPlan from "./pricingPlan";

import { pricingPlans } from "@/assets";

const PricingPlans: React.FC = () => (
    <div className="py-20 px-96">
        <Heading text="Pricing Plans" />
        <div className="h-full flex lg:flex-col items-center justify-between gap-8">
            {pricingPlans.map((plan: PricingPlanData, index: number) => (
                <PricingPlan key={index} index={index} plan={plan} />
            ))}
        </div>
    </div>
);

export default PricingPlans;
