import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/profile";

const Training = () => (
  <section id="formacao" className="section bg-secondary/40">
    <div className="max-w-4xl mx-auto">
      <h2 className="section-title">Formação Acadêmica</h2>
      <div className="grid gap-6">
        {education.map((item) => (
          <Card key={item.degree} className="shadow-square">
            <CardHeader className="flex flex-row items-start gap-4 pb-2">
              <GraduationCap className="h-6 w-6 mt-1" />
              <div>
                <CardTitle className="text-xl">{item.degree}</CardTitle>
                <div className="text-sm text-muted-foreground">{item.institution} | {item.period}</div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">{item.details.map((d) => <li key={d}>{d}</li>)}</ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Training;
