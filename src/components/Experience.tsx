
import { Check } from "lucide-react";
import { profile } from "@/content/profile";

const Experience = () => {
  return (
    <section id="experiencia" className="section">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker">Experiência profissional</p>
        <h2 className="section-title max-w-2xl">Psicologia clínica baseada em evidências.</h2>
        <div className="mt-10 grid border-l border-t border-border md:grid-cols-2">
          {profile.experience.map((item, index) => (
            <div key={item} className="flex gap-4 border-b border-r border-border p-6 md:p-8">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-border text-xs font-semibold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="leading-relaxed text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
