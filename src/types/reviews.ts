export interface ReviewData {
    image: string;
    name: string;
    comment: string;
    stars: number[];
}

export interface ReviewProps extends ReviewData {
    slides: HTMLDivElement[];
}

export interface ReviewsState {
    index: number;
    direction: boolean;
}
