import Reveal from "../Motion/Reveal";
import FeaturedPost from "./FeaturedPost";
import ReadingList from "./ReadingList";
import RecentPosts from "./RecentPosts";

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


            <div className="writing-top">
                <div className="writing-grid">
                    <Reveal>
                        <FeaturedPost />
                    </Reveal>
                        <ReadingList />
                </div>
            </div>

            <RecentPosts />
        </section>
    );
}