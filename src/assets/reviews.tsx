import StarFillIcon from "remixicon-react/StarFillIcon";
import StarHalfLineIcon from "remixicon-react/StarHalfLineIcon";
import StarLineIcon from "remixicon-react/StarLineIcon";
import ArrowLeftSLineIcon from "remixicon-react/ArrowLeftSLineIcon";
import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";

export const starIcons = [
    <StarFillIcon key={0} />,
    <StarHalfLineIcon key={1} />,
    <StarLineIcon key={2} />,
];
export const arrowIcons = [
    <ArrowLeftSLineIcon key={0} />,
    <ArrowRightSLineIcon key={1} />,
];

export const reviews = [
    {
        nameKey: "reviews.mark_t.name",
        commentKey: "reviews.mark_t.comment",
        stars: [1, 1, 1, 1, 0.5],
    },
    {
        nameKey: "reviews.sarah_b.name",
        commentKey: "reviews.sarah_b.comment",
        stars: [1, 1, 1, 1, 1],
    },
    {
        nameKey: "reviews.emily_r.name",
        commentKey: "reviews.emily_r.comment",
        stars: [1, 1, 1, 1, 1],
    },
    {
        nameKey: "reviews.bob_w.name",
        commentKey: "reviews.bob_w.comment",
        stars: [1, 1, 1, 1, 0.5],
    },
    {
        nameKey: "reviews.david_h.name",
        commentKey: "reviews.david_h.comment",
        stars: [1, 1, 1, 1, 1],
    },
];
