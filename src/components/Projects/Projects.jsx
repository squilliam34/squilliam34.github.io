import ProjectCard from "./ProjectCard";
import Reveal from "../Motion/Reveal";
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
                    Projects and analytical tools diving into the 
                    intersection of finance, programming, and mathematics.
                </p>
            </div>
                <div className="grid gap-8 md:grid-cols-2">
                    {projects.map((project) => (
                        <Reveal>
                            <ProjectCard
                                key={project.title}
                                project={project}
                            />
                        </Reveal>
                    ))}

                </div>
        </section>
    );
}