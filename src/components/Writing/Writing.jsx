import FeaturedPost from "./FeaturedPost";
import ReadingList from "./ReadingList";

export default function Writing() {
    return (
        <section
            id="writing"
            className="container py-32"
        >
            <div className="section-header">
                <h2>
                    Writing
                </h2>
                <p>
                    Essays, notes, and ideas exploring
                    markets, technology, and the world around me.
                </p>
            </div>


            <div className="writing-grid">
                <FeaturedPost />
                <ReadingList />
            </div>
        </section>
    );
}