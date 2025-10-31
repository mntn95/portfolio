export interface ProjectData {
    nameKey: string;
    descKey: string;
    imageUrl: string;
    tech: string[];
    url?: string;
}

export interface ProjectProps {
    data: ProjectData;
    index: number;
}

export type ProjectsButtonType = string;

export interface ProjectsState {
    tech: string;
    index: number;
}
