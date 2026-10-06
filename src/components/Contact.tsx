import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";
import { profile, whatsappUrl } from "@/data/profile";

const Contact = () => (
  <section id="contato" className="section">
    <div className="max-w-4xl mx-auto">
      <h2 className="section-title">Contato</h2>
      <p className="mb-8 max-w-2xl">
        Quer agendar uma consulta ou tirar dúvidas sobre o atendimento? Fale comigo pelo WhatsApp ou por e-mail.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        <Button asChild className="h-auto py-5 justify-start gap-3 text-base">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-5 w-5" /> WhatsApp · {profile.phoneDisplay}
          </a>
        </Button>
        <Button asChild variant="outline" className="h-auto py-5 justify-start gap-3 text-base">
          <a href={`mailto:${profile.email}`}><Mail className="h-5 w-5" /> {profile.email}</a>
        </Button>
      </div>
    </div>
  </section>
);

export default Contact;
