import { about, profile, skills } from "@/data/profile";
import aboutPhoto from "@/assets/WhatsApp Image 2026-07-22 at 01.15.13.jpeg";

const About = () => (
  <section id="sobre" className="section bg-secondary/40">
    <div className="max-w-4xl mx-auto">
      <h2 className="section-title">Sobre Mim</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <img
          src={aboutPhoto}
          alt={`Foto de ${profile.name}`}
          className="hidden md:block w-full object-cover h-[400px] rounded-xl border border-border shadow-sm"
        />
        <div>
          {about.map((p) => (
            <p key={p} className="mb-4">
              {p}
            </p>
          ))}
          <div className="flex flex-wrap gap-2 mt-6">
            {skills.map((s) => (
              <span key={s} className="text-sm px-3 py-1 border border-border">
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
