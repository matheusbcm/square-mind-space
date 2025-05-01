
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    period: "2018 - Present",
    role: "Clinical Psychologist",
    organization: "Private Practice",
    description: "Providing individual and group therapy sessions focusing on anxiety, depression, trauma, and relationship issues."
  },
  {
    id: 2,
    period: "2015 - 2018",
    role: "Staff Psychologist",
    organization: "Community Mental Health Center",
    description: "Conducted psychological assessments, therapy sessions, and coordinated mental health programs for diverse populations."
  },
  {
    id: 3,
    period: "2013 - 2015",
    role: "Research Associate",
    organization: "University Psychology Department",
    description: "Participated in research studies on effective therapeutic interventions for anxiety disorders and published findings in peer-reviewed journals."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Professional Experience</h2>
        <div className="grid gap-6">
          {experiences.map((experience) => (
            <Card key={experience.id} className="shadow-square">
              <CardHeader className="flex flex-row items-start gap-4 pb-2">
                <Briefcase className="h-6 w-6 mt-1" />
                <div>
                  <CardTitle className="text-xl">{experience.role}</CardTitle>
                  <div className="text-sm text-muted-foreground">
                    {experience.organization} | {experience.period}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p>{experience.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
