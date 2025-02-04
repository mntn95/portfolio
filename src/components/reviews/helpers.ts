import { starIcons } from "@/assets";

const getStarIcon = (starValue: number) => {
    if (starValue === 1) return starIcons[0];
    else if (starValue === 0.5) return starIcons[1];

    return starIcons[2];
};

const getStarValue = (stars: number[]) => stars.reduce(
    (aggregatedValue, currentValue) =>
        (aggregatedValue += currentValue),
    0,
)

export {getStarIcon, getStarValue}