const TrustedBy = () => {
  const companies = [
    "Innovate Inc.", "QuantumLeap", "Stellar Solutions", 
    "Apex Digital", "NextGen Labs", "FusionWorks"
  ];

  // Duplicate companies for seamless infinite scroll
  const scrollingCompanies = [...companies, ...companies, ...companies];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-muted-foreground">
          Trusted by <span className="gradient-text">30+ agencies, startups, and consultants</span> worldwide
        </h2>
        
        <div className="overflow-hidden relative">
          <div className="flex space-x-16 scroll-left whitespace-nowrap">
            {scrollingCompanies.map((company, index) => (
              <div 
                key={index}
                className="text-2xl font-medium text-foreground/60 hover:text-foreground transition-colors"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;