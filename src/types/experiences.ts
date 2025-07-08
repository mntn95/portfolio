export interface ExperienceData {
    year: number;
    title: string;
    education: string;
    experience: string[];
}

export interface ExperienceProps extends ExperienceData {
    index: number;
    key: string;
}
