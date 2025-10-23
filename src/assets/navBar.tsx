// import { PiCopyrightThin } from 'react-icons/pi'
import CopyrightLineIcon from "remixicon-react/CopyrightLineIcon";

// export const copyRightIcon = <PiCopyrightThin />
export const copyRightIcon = <CopyrightLineIcon />;

import Home5LineIcon from "remixicon-react/Home5LineIcon";
import UserLineIcon from "remixicon-react/UserLineIcon";
import BriefcaseLineIcon from "remixicon-react/BriefcaseLineIcon";
import UserStarLineIcon from "remixicon-react/UserStarLineIcon";
import ProjectorLineIcon from "remixicon-react/ProjectorLineIcon";
import PriceTag3LineIcon from "remixicon-react/PriceTag3LineIcon";
import QuestionAnswerLineIcon from "remixicon-react/QuestionAnswerLineIcon";

export const navbarData = [
    {
        id: "home",
        nameKey: "home",
        icon: <Home5LineIcon />,
    },
    {
        id: "about",
        nameKey: "about",
        icon: <UserLineIcon />,
    },
    {
        id: "skills",
        nameKey: "skills",
        icon: <BriefcaseLineIcon />,
    },
    {
        id: "projects",
        nameKey: "projects",
        icon: <ProjectorLineIcon />,
    },
    {
        id: "reviews",
        nameKey: "reviews",
        icon: <UserStarLineIcon />,
    },
    {
        id: "services",
        nameKey: "services",
        icon: <PriceTag3LineIcon />,
    },
    {
        id: "questions",
        nameKey: "questions",
        icon: <QuestionAnswerLineIcon />,
    },
];
