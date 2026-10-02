import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Games from "./components/Games";
import Culture from "./components/Culture";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Games />
        <Culture />
      </main>
      <Footer />
    </div>
  );
}
