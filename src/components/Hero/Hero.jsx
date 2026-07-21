import Button from "../Button";
import ThemeToggle from "../ThemeToggle";
import { useTheme } from "../../hooks/useTheme";
import RotatingText from "./RotatingText";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {

    const { theme, toggleTheme } = useTheme();

    return (
        <section 
            id="hero" 
            className=
                "relative min-h-screen flex flex-col items-center justify-center px-8 text-center"
        >

            {/* Theme Toggle */}
            <div className="absolute top-8 right-8">
                <ThemeToggle 
                    theme={theme} 
                    toggleTheme={toggleTheme}
                />
            </div>

            {/* Name */}
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-4">
                William Fan
            </h1>

            {/* Education */}
            <p className="text-xl mb-2">
                Incoming Chicago Booth Master in Finance
            </p>

            {/* Rotating subtitle */}
            <div className="h-10 flex items-center justify-center mb-6">
                <RotatingText />
            </div>      

            {/* Short description */}
            <p
                className="max-w-xl text-lg leading-relaxed mb-10"
                style={{ color: "var(--text-secondary)" }}
            >
                Building quantitative tools for understanding financial
                markets through machine learning, networks, and data.
            </p>

            {/* Navigation Buttons */}
            <div className="flex flex-wrap justify-center gap-6 mb-16">
                <Button href="#projects" primary>Projects</Button>
                <Button href="#writing">Writing</Button>
                <Button href="#about">About</Button>
                <Button href="#contact">Contact</Button>
            </div>

            {/* Scroll */}
            <ScrollIndicator />

        </section>
    );
}