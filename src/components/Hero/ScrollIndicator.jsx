export default function ScrollIndicator() {
    return (
        <a
            href="#projects"
            className="flex flex-col items-center gentle-bounce cursor-pointer no-underline"
        >
            <span className="text-2xl interactive-muted">↓</span>

            <span
                className="text-sm uppercase tracking-widest"
                style={{ color: "var(--text-secondary)" }}
            >
                Scroll
            </span>
        </a>
    );
}