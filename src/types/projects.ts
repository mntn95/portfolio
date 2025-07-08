export interface ProjectData {
    name: string;
    desc: string;
    url: string;
    tech: (string | undefined)[];
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
