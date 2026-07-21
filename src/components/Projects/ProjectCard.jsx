import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

export default function ProjectCard({ project }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    function handleMouseMove(e) {
        const rect = e.currentTarget.getBoundingClientRect();

        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    }

    return (
        <article
            className="project-card"
            onMouseMove={handleMouseMove}
            style={{
                "--x": `${position.x}px`,
                "--y": `${position.y}px`,
            }}
        >

            <h3>
                {project.title}
            </h3>

            <p>
                {project.description}
            </p>

            <div className="project-tags">
                {project.technologies.map((tech) => (
                    <span key={tech}>
                        {tech}
                    </span>
                ))}
            </div>

            <a
                href={project.link}
                className="external-link"
            >
                View Project
                <FiArrowUpRight />
            </a>

        </article>
    );
}