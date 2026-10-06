
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Training from "@/components/Training";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Training />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
