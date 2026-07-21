import Education from "./Education";
import Links from "./Links";
// import Interests from "./Interests";

export default function About() {
    return (
        <section
            id="about"
            className="container py-32"
        >

            <div className="section-header">
                <h2>
                    About
                </h2>
                <p>
                    A little context about my background,
                    interests, and what I'm exploring.
                </p>
            </div>

            <div className="about-grid">

                <div>
                    <p className="about-content">
                        I build tools and explore ideas at the
                        intersection of finance, technology,
                        and data.

                        Recently studied Computer Science
                        and Economics at William & Mary
                        and joining Chicago Booth's Master
                        in Finance program.
                    </p>
                    {/* <Interests /> */}
                </div>
                <aside className="about-sidebar">
                    <Education />
                    <Links />
                </aside>
            </div>

        </section>
    );
}