import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { additionalTraining, education } from "@/data/profile";

const trainingItems = [...education, ...additionalTraining];

const Training = () => (
  <section id="formacao" className="section bg-secondary/40">
    <div className="max-w-5xl mx-auto">
      <h2 className="section-title">Formação Acadêmica</h2>
      <div className="grid gap-6">
        {trainingItems.map((item) => (
          <Card
            key={item.degree}
            className="shadow-square border-border/80 bg-background/90"
          >
            <CardHeader className="flex flex-row items-start gap-4 pb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-xl leading-tight">
                  {item.degree}
                </CardTitle>
                <div className="mt-1 text-sm text-muted-foreground">
                  {item.institution} | {item.period}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed text-foreground/80">
                {item.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Training;
