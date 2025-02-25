"use client";

import * as React from "react";

import Heading from "../base-components/heading";
import PricingPlan from "./pricingPlan";

import { pricingPlans } from "@/assets";

const PricingPlans = () => (
    <div className="py-20 px-96">
        <Heading text="Pricing Plans" />
        <div className="h-full flex lg:flex-col items-center justify-between gap-8">
            {pricingPlans.map((plan, index) => (
                <PricingPlan key={index} index={index} plan={plan} />
            ))}
        </div>
    </div>
);

export default PricingPlans;
