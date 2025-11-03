import LinkedInLineIcon from "remixicon-react/LinkedinLineIcon";
import MailLineIcon from "remixicon-react/MailLineIcon";

export const heroIcons = [
    <LinkedInLineIcon key={0} />,
    <MailLineIcon key={2} />,
];

export const heroLinks = [
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/mathieu-ng/",
        icon: <LinkedInLineIcon />,
    },
    {
        label: "Contact",
        href: "mailto:mathieu.nguyen@proton.me",
        icon: <MailLineIcon />,
    },
];
