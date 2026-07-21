import { FiArrowUpRight } from "react-icons/fi";

export default function FeaturedPost() {
    return (
        <article className="featured-post">

            <p className="eyebrow">
                Featured Essay
            </p>
            <h3>
                Leveraged ETFs and Portfolio Insurance
            </h3>
            <p>
                Exploring the mechanics, risks, and
                misconceptions surrounding leveraged
                exchange-traded funds.
            </p>
            <a
                href="#"
                className="external-link"
            >
                Read on Substack
                <FiArrowUpRight />
            </a>

        </article>
    );
}