export interface ReviewData {
    nameKey?: string;
    commentKey?: string;
    stars: number[];
}

export interface ReviewProps extends ReviewData {
    slides: HTMLDivElement[];
    review: ReviewData;
    stars: number[];
}

export interface ReviewsState {
    index: number;
    direction: boolean;
}
