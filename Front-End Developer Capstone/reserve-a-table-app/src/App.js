import Header from "./components/Header";
import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import TableReserverSection from "./components/TableReserverSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

import './App.css';

function App() {
  return (
      <main>
        <Header />
        <Nav />
        <HeroSection />
        <TableReserverSection />
        <AboutSection />
        <Footer />
      </main>
  );
}

export default App;
