import Header from "./components/Header";
import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import BookingPage from "./components/BookingPage";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

import './App.css';

function App() {
  return (
      <main>
        <Header />
        <Nav />
        <HeroSection />
        <BookingPage />
        <AboutSection />
        <Footer />
      </main>
  );
}

export default App;
