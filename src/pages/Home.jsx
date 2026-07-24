import Navbar from "../components/common/Navbar";

import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Gallery from "../components/sections/Gallery";
import Contact from "../components/sections/Contact";
import Footer from "../components/common/Footer";

function Home() {
    return (
        <>
            <Navbar />

            <section id="home">
                <Hero />
                <About />
            </section>

            <section id="services">
                <Services />
            </section>

            <section id="gallery">
                <Gallery />
            </section>

            <section id="contact">
                <Contact />
            </section>
            <Footer />
        </>
    );
}

export default Home;