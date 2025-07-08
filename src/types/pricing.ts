export interface PricingPlanData {
    title: string;
    pricing: string;
    features: string[];
    isHighlighted: boolean;
    recommended: string;
}

export interface PricingPlanProps {
    index: number;
    plan: PricingPlanData;
}
