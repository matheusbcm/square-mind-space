import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { experiences } from "@/data/profile";

const Experience = () => (
  <section id="experiencia" className="section">
    <div className="max-w-4xl mx-auto">
      <h2 className="section-title">Experiência Profissional</h2>
      <Card className="shadow-square">
        <CardHeader className="flex flex-row items-start gap-4 pb-2">
          <Briefcase className="h-6 w-6 mt-1" />
          <div>
            <CardTitle className="text-xl">Psicólogo Clínico</CardTitle>
            <div className="text-sm text-muted-foreground">
              Consultório particular | 7 anos de atuação
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="grid gap-3">
            {experiences.map((e) => (
              <li key={e} className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 mt-2 bg-primary flex-shrink-0" />
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default Experience;
