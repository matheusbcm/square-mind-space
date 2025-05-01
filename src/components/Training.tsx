
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    id: 1,
    degree: "Ph.D. in Clinical Psychology",
    institution: "University of Psychology",
    year: "2013",
    details: "Specialized in Cognitive Behavioral Therapy and trauma interventions."
  },
  {
    id: 2,
    degree: "M.A. in Psychology",
    institution: "State University",
    year: "2010",
    details: "Focus on developmental psychology and therapeutic approaches."
  },
  {
    id: 3,
    degree: "B.A. in Psychology",
    institution: "Liberal Arts College",
    year: "2008",
    details: "Graduated with honors, research focus on anxiety disorders."
  }
];

const certifications = [
  "Licensed Clinical Psychologist",
  "Certified Cognitive Behavioral Therapist",
  "Trauma-Informed Care Certification",
  "Mindfulness-Based Stress Reduction (MBSR) Facilitator"
];

const Training = () => {
  return (
    <section id="training" className="section bg-secondary/40">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Education & Training</h2>
        
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4">Educational Background</h3>
          <div className="grid gap-6">
            {education.map((item) => (
              <Card key={item.id} className="shadow-square">
                <CardHeader className="flex flex-row items-start gap-4 pb-2">
                  <GraduationCap className="h-6 w-6 mt-1" />
                  <div>
                    <CardTitle className="text-xl">{item.degree}</CardTitle>
                    <div className="text-sm text-muted-foreground">
                      {item.institution} | {item.year}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{item.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4">Certifications & Specializations</h3>
          <ul className="grid gap-3">
            {certifications.map((cert, index) => (
              <li key={index} className="flex items-start gap-3 p-3 border border-border">
                <div className="h-1.5 w-1.5 mt-2 bg-primary flex-shrink-0"></div>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Training;
