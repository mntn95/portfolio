// ASSETS

// Hero content
import GithubLineIcon from "remixicon-react/GithubLineIcon";
import LinkedInLineIcon from "remixicon-react/LinkedInLineIcon";
import MailLineIcon from "remixicon-react/MailLineIcon";

export const heroIcons = [
    <LinkedInLineIcon key={0} />,
    <GithubLineIcon key={1} />,
    <MailLineIcon key={2} />,
];
// End of hero content

// AboutMe content
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import Projector2LineIcon from "remixicon-react/Projector2LineIcon";
import GroupLineIcon from "remixicon-react/GroupLineIcon";
import AwardFillIcon from "remixicon-react/AwardFillIcon";

export const aboutData = [
    {
        title: "Github Repos",
        amount: 348,
        icon: <GithubFillIcon />,
    },
    {
        title: "Successful Projects",
        amount: 227,
        icon: <Projector2LineIcon />,
    },
    {
        title: "Satisfied clients",
        amount: 176,
        icon: <GroupLineIcon />,
    },
    {
        title: "Awards and Recognition",
        amount: 107,
        icon: <AwardFillIcon />,
    },
];

import DownloadLineIcon from "remixicon-react/DownloadLineIcon";
import ArrowLeftSFillIcon from "remixicon-react/ArrowLeftSFillIcon";

export const downloadIcon = <DownloadLineIcon />;
export const arrowLeftIcon = <ArrowLeftSFillIcon />;

export const aboutText =
    "Hi, I'm Mathieu, a Front-End Web Developer specializing in React. I build dynamic, responsive user interfaces using a modern tech stack that includes Next.js for server-side rendering, TypeScript or Flow for robust, type-safe code and Tailwind CSS for streamlined styling. With a strong attention to detail and a passion for delivering smooth user experiences, I’m dedicated to creating scalable applications that make a real impact. Let’s bring your vision to life!";
// End of AboutMe content

// Experiences
export const experiences = [
    {
        year: 2018,
        title: "Foundation and Basics",
        education:
            "O'Clock School: Learning the basics of Web Development, then specializing in React and Javascript ecosystem",
        experience: [
            "HTML/CSS/Javascript/PHP/MySQL.",
            "Final year team project (4 people): Creation of an interactive and connected role-playing game board, accompanied by a blog and a forum.",
        ],
    },
    {
        year: 2019,
        title: "First Front-end Developer Experience",
        education: "Learning ",
        experience: ["AA"],
    },
    {
        year: 2021,
        title: "Building Expertise and Expanding Skills",
        education: "",
        experience: ["Extia"],
    },
    {
        year: 2025,
        title: "Freelancing",
        education: "",
        experience: [""],
    },
];
