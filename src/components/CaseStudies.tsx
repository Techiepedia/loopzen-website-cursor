import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CaseStudies = () => {
  const caseStudies = [
    {
      company: "Innovate Inc.",
      project: "E-commerce Platform",
      timeline: "3 weeks",
      status: "Completed"
    },
    {
      company: "QuantumLeap",
      project: "SaaS Dashboard",
      timeline: "4 weeks",
      status: "Completed"
    },
    {
      company: "Stellar Solutions",
      project: "Brand Website",
      timeline: "Ongoing",
      status: "In Progress"
    },
    {
      company: "Apex Digital",
      project: "Mobile App UI",
      timeline: "In Progress",
      status: "In Progress"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">Case Studies</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudies.map((study, index) => (
            <Card key={index} className="gradient-card border-border hover-glow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-xl gradient-text">{study.company}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {study.project}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{study.timeline}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    study.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-primary/20 text-primary'
                  }`}>
                    {study.status}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;