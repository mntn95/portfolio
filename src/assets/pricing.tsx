export const pricingPlans = [
    {
        title: "Basic",
        pricing: "$500 - $1,000",
        features: [
            "Up to 5 pages",
            "Responsive design ",
            "Basic SEO ",
            "Contact form",
            "Social media links",
            "1 month support",
        ],
        isHighlighted: false,
        recommended: "Small businesses, personal websites, bloggers",
    },
    {
        title: "Premium",
        pricing: "$5,000 - $10,000",
        features: [
            "Unlimited pages",
            "Responsive design",
            "Comprehensive SEO",
            "Contact form ",
            "Social media links",
            "Advanced security",
            "E-commerce (unlimited products)",
            "Blog setup",
            "Google Analytics with custom reports",
            "6 months support",
        ],
        isHighlighted: true,
        recommended:
            "Medium-sized businesses, online stores, service providers",
    },
    {
        title: "Standard",
        pricing: "$1,500 - $3,000",
        features: [
            "Up to 10 pages",
            "Responsive design",
            "Advanced SEO",
            "CContact form",
            "Social media links",
            "E-commerce (20 products)",
            "Blog setup",
            "Google Analytics",
            "3 months support",
        ],
        isHighlighted: false,
        recommended:
            "Large businesses, complex e-commerce sites, custom web applications",
    },
];

import CheckLineIcon from "remixicon-react/CheckLineIcon";

export const CheckIcon = <CheckLineIcon />;
