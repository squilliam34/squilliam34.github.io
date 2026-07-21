export default function Button({ href, children }) {
    return (
        <a href={href} className="nav-button">
            {children}
        </a>
    );
}