
const About = () => {
  return (
    <section id="about" className="section bg-secondary/40">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=800" 
              alt="Psychologist Portrait" 
              className="w-full object-cover h-[400px]"
            />
          </div>
          <div>
            <p className="mb-4">
              With over 10 years of experience in clinical psychology, I am dedicated to providing compassionate and effective psychological services to individuals, couples, and families.
            </p>
            <p className="mb-4">
              My approach is collaborative and integrative, drawing from various evidence-based modalities including Cognitive Behavioral Therapy, Psychodynamic approaches, and Mindfulness-based interventions.
            </p>
            <p>
              I believe that therapy is a journey we undertake together, with the goal of enhancing your wellbeing and helping you lead a more fulfilling life aligned with your values and aspirations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
