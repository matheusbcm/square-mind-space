import { profile } from "@/content/profile";

const About = () => {
  return (
    <section id="sobre" className="section bg-secondary/40">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div>
            <p className="section-kicker">Perfil profissional</p>
            <h2 className="section-title">Cuidado clínico com escuta e método.</h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
