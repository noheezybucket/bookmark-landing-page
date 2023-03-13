import Extensions from "./components/Extensions";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MobileHeader from "./components/MobileNav";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <MobileHeader />
      <Hero />
      <Features />
      <Extensions />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
