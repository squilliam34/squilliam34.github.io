import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <section id="projects" className="container py-32">
            <h2>Projects</h2>

            <div className="grid gap-8 md:grid-cols-2">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </section>
    );
}