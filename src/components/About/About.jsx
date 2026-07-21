import Education from "./Education";
import Links from "./Links";
import Interests from "./Interests";

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
                        I have always been drawn to building and exploring,
                        whether that's been creating worlds with LEGO and 
                        Pokémon as a kid or building tools that help me 
                        understand complex systems today.
                        <br /><br />
                        That curiosity eventually led me to financial markets.
                        After opening my first investment account during college,
                        I became fascinated by the intersection of data, technology,
                        and decision-making that drives markets.
                    </p>
                    <Interests />
                </div>
                <aside className="about-sidebar">
                    <Education />
                    <Links />
                </aside>
            </div>

        </section>
    );
}