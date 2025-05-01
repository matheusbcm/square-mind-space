
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-20 px-4 md:px-8 flex flex-col items-center">
      <div className="w-full max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Professional Psychological Services
        </h1>
        <p className="text-lg md:text-xl mb-8 text-muted-foreground">
          Helping you navigate life's challenges with evidence-based approaches and compassionate care.
        </p>
        <Button 
          className="text-lg py-6 px-8 transition-all" 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Schedule a Consultation
        </Button>
      </div>
    </section>
  );
};

export default Hero;
