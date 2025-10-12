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
        name: "Accueil",
        icon: <Home5LineIcon />,
    },
    {
        id: "about",
        name: "À propos",
        icon: <UserLineIcon />,
    },
    {
        id: "skills",
        name: "Skills",
        icon: <BriefcaseLineIcon />,
    },
    {
        id: "projects",
        name: "Projets",
        icon: <ProjectorLineIcon />,
    },
    {
        id: "reviews",
        name: "Avis",
        icon: <UserStarLineIcon />,
    },
    {
        id: "services",
        name: "Prestations",
        icon: <PriceTag3LineIcon />,
    },
    {
        id: "questions",
        name: "Questions",
        icon: <QuestionAnswerLineIcon />,
    },
];
