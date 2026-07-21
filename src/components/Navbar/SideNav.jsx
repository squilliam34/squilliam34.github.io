import { useEffect, useState } from "react";

const sections = [
    {
        name: "Projects",
        href: "#projects",
        id: "projects",
    },
    {
        name: "Writing",
        href: "#writing",
        id: "writing",
    },
    {
        name: "About",
        href: "#about",
        id: "about",
    },
];

export default function SideNav() {

    const [active, setActive] = useState("projects");
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {threshold: 0.25,}
        );

        sections.forEach((section) => {

            const element = document.getElementById(section.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, []);


    return (
        <nav className="side-nav">
            <div className="side-nav-inner">
                {sections.map((section) => (
                    <a
                        key={section.id}
                        href={section.href}
                        className={
                            active === section.id
                                ? "active"
                                : ""
                        }
                    >
                        {section.name}
                    </a>
                ))}
            </div>
        </nav>
    );
}