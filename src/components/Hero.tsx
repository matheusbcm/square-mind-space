
import { Button } from "@/components/ui/button";
import { ArrowDown, MessageCircle } from "lucide-react";
import portraitAsset from "@/assets/matheus-carvalho.png.asset.json";
import { profile } from "@/content/profile";

const Hero = () => {
  return (
    <section id="inicio" className="border-b border-border px-5 py-8 md:px-10 md:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <div className="order-2 md:order-1">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            {profile.displayName}
          </h1>
          <p className="mt-4 text-lg font-medium text-foreground md:text-xl">{profile.specialty}</p>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">{profile.summary}</p>
          <div className="mt-8 hidden items-center gap-3 md:flex">
            <Button asChild size="lg">
              <a href={profile.whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" /> Agendar conversa
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#sobre">Conheça meu trabalho <ArrowDown aria-hidden="true" /></a>
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="aspect-[4/5] max-h-[570px] overflow-hidden border border-border bg-muted">
            <img
              src={portraitAsset.url}
              alt={`Retrato profissional de ${profile.displayName}`}
              className="h-full w-full object-cover object-top grayscale-[15%]"
            />
          </div>
          <Button asChild size="lg" className="mt-4 w-full md:hidden">
            <a href={profile.whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" /> Entrar em contato
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
