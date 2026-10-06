import { about, profile, skills } from "@/data/profile";
import aboutPhoto from "@/assets/WhatsApp Image 2026-07-22 at 01.15.13.jpeg";

const About = () => (
  <section id="sobre" className="section bg-secondary/40">
    <div className="max-w-4xl mx-auto">
      <h2 className="section-title">Sobre Mim</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="hidden md:block overflow-hidden rounded-[28px] border border-border bg-secondary/60 p-2 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
          <img
            src={aboutPhoto}
            alt={`Foto de ${profile.name}`}
            className="h-[440px] w-full rounded-[20px] object-cover object-center"
          />
        </div>
        <div>
          {about.map((p) => (
            <p
              key={p}
              className="mb-4 text-base leading-relaxed text-foreground/90"
            >
              {p}
            </p>
          ))}
          <div className="flex flex-wrap gap-2 mt-6">
            {skills.map((s) => (
              <span
                key={s}
                className="text-sm px-3 py-1 border border-border bg-background rounded-full"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
