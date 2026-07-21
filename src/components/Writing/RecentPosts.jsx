const posts = [
    {
        title: "Margin Notes #1",
        date: "July 2026",
        description:
            "A short description of the ideas explored in this piece.",
        link: "#",
    },
    {
        title: "Margin Notes #2",
        date: "June 2026",
        description:
            "A short description of the ideas explored in this piece.",
        link: "#",
    },
];

export default function RecentPosts() {
    return (
        <div className="recent-posts">

            <h3>
                Recent Writing
            </h3>

            <div>
                {posts.map((post) => (
                    <a
                        key={post.title}
                        href={post.link}
                        className="post-row"
                    >
                        <div>
                            <h4>
                                {post.title}
                            </h4>

                            <p>
                                {post.description}
                            </p>
                        </div>

                        <span>
                            {post.date}
                        </span>

                    </a>
                ))}
            </div>

        </div>
    );
}