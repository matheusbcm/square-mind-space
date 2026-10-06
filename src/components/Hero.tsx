import { Button } from "@/components/ui/button";
import { profile, whatsappUrl } from "@/data/profile";
import photo from "@/assets/matheus-carvalho.png.asset.json";

const Hero = () => (
  <section className="py-12 md:py-20 px-4 md:px-8">
    <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
      <div className="order-2 md:order-1 text-center md:text-left">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">{profile.title} · TCC</p>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Cuidado psicológico baseado em evidências</h1>
        <p className="text-lg md:text-xl mb-8 text-muted-foreground">
          Atendimento com {profile.approach} para ajudar você a lidar com ansiedade, depressão e outros desafios emocionais.
        </p>

        <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4">
          <Button asChild className="text-base md:text-lg py-6 px-8">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Agendar pelo WhatsApp</a>
          </Button>
        </div>
      </div>

      <div className="order-1 md:order-2 flex justify-center">
        <div className="relative">
          <div className="absolute inset-0 rounded-[32px] bg-primary/10 blur-2xl scale-105" />
          <img
            src={photo.url}
            alt={`Foto de ${profile.name}`}
            className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-[32px] border border-border shadow-lg shadow-black/10"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
