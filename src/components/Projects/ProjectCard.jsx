import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

export default function ProjectCard() {
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
                Gravity Model for Stocks
            </h3>

            <p>
                A network-based approach to portfolio construction
                using semantic similarity and factor exposures.
            </p>

            <div className="project-tags">
                <span>Python</span>
                <span>Machine Learning</span>
                <span>Finance</span>
            </div>

            <a href="#" className="project-link">
                View Project 
                <FiArrowUpRight />
            </a>

        </article>
    );
}