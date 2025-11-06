import DownloadLineIcon from "remixicon-react/DownloadLineIcon";
import MailLineIcon from "remixicon-react/MailLineIcon";

export const aboutLinks = [
    {
        label: "downloadButton",
        href: "/my-cv.pdf",
        icon: <DownloadLineIcon />,
        isDownloadLink: true,
    },
    {
        label: "contactButton",
        href: "mailto:mathieu.nguyen@proton.me",
        icon: <MailLineIcon />,
        isDownloadLink: false,
    },
];
