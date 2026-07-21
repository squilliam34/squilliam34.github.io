import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Writing from "./components/Writing/Writing";
import About from "./components/About/About";
import SideNav from "./components/Navbar/SideNav";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <SideNav />
            <Hero />
            <Projects />
            <Writing />
            <About />
            <Footer />
        </>
    );
}

export default App;