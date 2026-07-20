export default function Button({ href, children }) {
    return (
        <a
            href={href}
            className="
                px-6
                py-3
                rounded-full
                border
                transition-all
                duration-200
                hover:-translate-y-1
            "
            style={{
                borderColor: "var(--border)",
                color: "var(--text)",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--accent)";
                e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--text)";
            }}
        >
            {children}
        </a>
    );
}