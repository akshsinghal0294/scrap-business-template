import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import FloatingWhatsApp from "../common/FloatingWhatsApp";
import CallButton from "../common/CallButton";

function MainLayout({ children }) {
    return (
        <>
            <Navbar />

            <main>
                {children}
            </main>

            <FloatingWhatsApp />
            <CallButton />

            <Footer />
        </>
    );
}

export default MainLayout;