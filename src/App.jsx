import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Writing from "./components/Writing/Writing";
import About from "./components/About/About";
import SideNav from "./components/Navbar/SideNav";

function App() {
    return (
        <>
            <SideNav />
            <Hero />
            <Projects />
            <Writing />
            <About />
        </>
    );
}

export default App;