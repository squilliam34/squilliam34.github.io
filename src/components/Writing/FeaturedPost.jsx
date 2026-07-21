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
                href="https://substack.com/home/post/p-207799513"
                className="external-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                Read on Substack
                <FiArrowUpRight />
            </a>

        </article>
    );
}