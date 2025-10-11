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
import ContactsBook2LineIcon from "remixicon-react/ContactsBook2LineIcon";
import QuestionAnswerLineIcon from "remixicon-react/QuestionAnswerLineIcon";

export const navbarData = [
    {
        id: "home",
        name: "Home",
        icon: <Home5LineIcon />,
    },
    {
        id: "about",
        name: "About",
        icon: <UserLineIcon />,
    },
    {
        id: "skills",
        name: "Skills",
        icon: <BriefcaseLineIcon />,
    },
    {
        id: "projects",
        name: "Projects",
        icon: <ProjectorLineIcon />,
    },
    {
        id: "reviews",
        name: "Reviews",
        icon: <UserStarLineIcon />,
    },
    {
        id: "services",
        name: "Services",
        icon: <PriceTag3LineIcon />,
    },
    {
        id: "contact",
        name: "Contact",
        icon: <ContactsBook2LineIcon />,
    },
    {
        id: "questions",
        name: "Questions",
        icon: <QuestionAnswerLineIcon />,
    },
];
