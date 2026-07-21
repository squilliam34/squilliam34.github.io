import {
    FiFileText,
    FiLinkedin,
    FiBookOpen,
    FiArrowUpRight
} from "react-icons/fi";


const links = [
    {
        name: "Resume",
        icon: FiFileText,
        href: "/William Fan Resume.pdf",
        external: true,
    },
    {
        name: "LinkedIn",
        icon: FiLinkedin,
        href: "https://www.linkedin.com/in/william-fan/",
        external: true,
    },
    {
        name: "Substack",
        icon: FiBookOpen,
        href: "https://substack.com/@williamfan2",
        external: true,
    },
];


export default function Links() {
    return (
        <div className="about-section">

            <h3>Elsewhere</h3>
            <div className="about-links">

                {links.map((link) => {

                    const Icon = link.icon;

                    return (
                        <a
                            key={link.name}
                            href={link.href}
                            className="about-link"
                            target={link.external ? "_blank" : undefined}
                            rel={link.external ? "noopener noreferrer" : undefined}
                        >
                            <Icon size={16} />

                            <span>
                                {link.name}
                            </span>

                            <FiArrowUpRight size={14} />

                        </a>
                    );
                })}
            </div>
        </div>
    );
}