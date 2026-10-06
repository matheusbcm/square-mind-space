import { Button } from "@/components/ui/button";
import { profile, whatsappUrl } from "@/data/profile";
import photo from "@/assets/WhatsApp Image 2026-07-22 at 01.15.13.jpeg";

const Hero = () => (
  <section className="py-12 md:py-20 px-4 md:px-8">
    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
      <img
        src={photo}
        alt={`Foto de ${profile.name}`}
        className="md:hidden w-56 h-56 object-cover border border-border mb-6"
      />
      <Button asChild className="md:hidden text-base py-6 px-8 mb-8">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          Agendar pelo WhatsApp
        </a>
      </Button>
      <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
        {profile.title} · TCC
      </p>
      <h1 className="text-3xl md:text-5xl font-bold mb-6">
        Psicoterapia com Empatia e Propósito.
      </h1>
      <p className="text-lg md:text-xl mb-8 text-muted-foreground">
        Atendimento psicológico humanizado para ajudar você a compreender suas
        emoções, lidar com a ansiedade e encontrar um caminho mais leve, unindo
        empatia e a segurança da Terapia Cognitivo-Comportamental (TCC).
      </p>
      <Button asChild className="hidden md:inline-flex text-lg py-6 px-8">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          Agendar pelo WhatsApp
        </a>
      </Button>
    </div>
  </section>
);

export default Hero;
