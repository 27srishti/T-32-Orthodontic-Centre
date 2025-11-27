import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Dentists from "./components/Dentists";
import Contact from "./components/Contact";
import Reviews from "./components/Reviews";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 relative selection:bg-blue-100 selection:text-blue-900">
      {/* Global Background Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/40 blur-[100px] mix-blend-multiply animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-100/40 blur-[100px] mix-blend-multiply animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-pink-100/40 blur-[100px] mix-blend-multiply animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Dentists />
          <Gallery />
          <Reviews />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
