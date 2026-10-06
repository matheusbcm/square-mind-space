
import { profile } from "@/content/profile";

const Training = () => {
  return (
    <section id="formacao" className="section bg-secondary/40">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker">Formação acadêmica</p>
        <h2 className="section-title">Formação e competências.</h2>
        <div className="mt-10 border-t border-border">
          {profile.education.map((item) => (
            <article key={item.title} className="grid gap-3 border-b border-border py-6 md:grid-cols-[150px_1fr]">
              <p className="text-sm font-medium text-muted-foreground">{item.period}</p>
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm font-medium">{item.institution}</p>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.details}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;
