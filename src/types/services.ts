export interface ServiceData {
    variant: "software-dev" | "frontend-dev" | "flutter-dev";
    title: string;
    subtitle?: string;
    description: string[];
    examples: {
        title: string;
        content: string[];
    }[];
}

export interface ServiceCardProps {
    index: number;
    service: ServiceData;
}
