export interface ProjectData {
    nameKey: string;
    descKey: string;
    url: string;
    tech: string[];
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
