export interface ServiceData {
    key: string;
    title: string;
    subtitle: string;
    description: string[];
    examples: {
        title: string;
        content: string[];
    };
}

export interface ServiceCardProps {
    index: number;
    service: ServiceData;
}
