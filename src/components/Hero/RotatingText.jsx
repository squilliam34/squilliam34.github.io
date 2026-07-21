import { useEffect, useState } from "react";

const words = [
    "Quantitative Finance",
    "Machine Learning",
    "Systematic Investing",
    "Research & Writing",
];

export default function RotatingText() {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {

            setVisible(false);

            setTimeout(() => {
                setIndex((prev) => (prev + 1) % words.length);
                setVisible(true);
            }, 300);

        }, 3000);

        return () => clearInterval(interval);

    }, []);

    return (
        <p
            className={`
                text-2xl
                font-medium
                mb-6
                transition-opacity
                duration-300
                ${visible ? "opacity-100" : "opacity-0"}
            `}
            style={{ color: "var(--accent)" }}
        >
            {words[index]}
        </p>
    );
}