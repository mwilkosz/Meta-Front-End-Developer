import Header from "./Header";
import Nav from "./Nav";
import HeroSection from "./HeroSection";
import BookingPage from "./BookingPage";
import AboutSection from "./AboutSection";
import Footer from "./Footer";

export default function Home() {
    return (
        <main>
            <Header />
            <Nav />
            <HeroSection />
            <BookingPage />
            <AboutSection />
            <Footer />
        </main>
    )
  }