import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

export default function Projects() {
    return (
        <section
            id="projects"
            className="container py-32"
        >

            <div className="section-header">
                <h2>Projects</h2>

                <p>
                    Building quantitative tools and research systems 
                    at the intersection of finance, data, and machine learning.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">

                {projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        project={project}
                    />
                ))}

            </div>

        </section>
    );
}