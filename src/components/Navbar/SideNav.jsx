const sections = [
    {
        name: "Projects",
        href: "#projects",
    },
    {
        name: "Writing",
        href: "#writing",
    },
    {
        name: "About",
        href: "#about",
    },
];

export default function SideNav() {
    return (
        <nav className="side-nav">

            <div className="side-nav-inner">

                {sections.map((section) => (
                    <a
                        key={section.name}
                        href={section.href}
                    >
                        {section.name}
                    </a>
                ))}

            </div>

        </nav>
    );
}