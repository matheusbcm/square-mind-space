
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { profile } from "@/content/profile";

const Contact = () => {
  return (
    <section id="contato" className="section border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className="section-kicker">Contato</p>
            <h2 className="section-title max-w-3xl">Vamos conversar sobre seu cuidado psicológico?</h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
              Para informações sobre disponibilidade e atendimento clínico, entre em contato diretamente pelo WhatsApp ou por e-mail.
            </p>
          </div>
          <div className="grid gap-3">
            <Button asChild size="lg" className="h-14 justify-between px-5">
              <a href={profile.whatsappUrl} target="_blank" rel="noreferrer">
                <span className="flex items-center gap-3"><MessageCircle aria-hidden="true" /> WhatsApp</span>
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 justify-between px-5">
              <a href={`mailto:${profile.email}`}>
                <span className="flex items-center gap-3"><Mail aria-hidden="true" /> E-mail</span>
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
            <p className="break-all pt-2 text-sm text-muted-foreground">{profile.email}</p>
            <p className="text-sm text-muted-foreground">{profile.phoneLabel}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
