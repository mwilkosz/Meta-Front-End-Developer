import Header from "./Header";
import HeroSection from "./HeroSection";
import BookingPage from "./BookingPage";
import AboutSection from "./AboutSection";
import Footer from "./Footer";

export default function Home() {
    return (
        <main>
            <Header />
            <HeroSection />
            <BookingPage />
            <AboutSection />
            <Footer />
        </main>
    )
  }