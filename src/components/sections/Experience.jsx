import React from 'react';

const Experience = () => {
  const experiences = [
    {
      period: '2022 - Present',
      title: 'Data Analyst',
      company: 'Ayo Export',
      description: 'Developed 10+ interactive dashboards using Looker Studio, implemented ML models for export market forecasting, and optimized data pipelines.',
    },
    {
      period: '2020 - Present',
      title: 'Data & Operational Analyst',
      company: 'Dept. of Industry, Trade, Cooperatives, & SMEs',
      description: 'Processed historical data for policy development, engineered data tracking systems, and applied clustering on 2,000+ records.',
    },
    {
      period: '2020 - 2021',
      title: 'Junior Software Engineer (Data-Focus)',
      company: 'Ayo Export',
      description: 'Developed user registration modules with 99.9% data accuracy, collaborated on UI/UX designs for internal data portals.',
    },
  ];

  const education = [
    {
      year: '2017 - 2021',
      title: 'Bachelor of Computer Science',
      institution: 'Universitas Mercu Buana',
      detail: 'GPA: 3.69 · Focus on data systems, database management, and software development.',
    },
  ];

  const certifications = [
    { name: 'Data Analysis & Visualization Bootcamp', issuer: 'MySkill x Deloitte', year: '2024' },
    { name: 'Fundamental SQL', issuer: 'DQ2.48', year: '2024' },
    { name: 'Power BI Short Course', issuer: 'XQ+', year: '2024' },
    { name: 'IDCamp Scholarship', issuer: 'Indosat Ooredoo', year: '2020' },
  ];

  return (
    <section id="experience" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title" data-aos="fade-up">
          Experience & <span>Education</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-navy mb-6" data-aos="fade-up">Career Timeline</h3>
          <div className="relative pl-8 border-l-2 border-primary space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="absolute -left-[9px] w-4 h-4 bg-primary rounded-full border-2 border-white"></div>
                <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm card-hover">
                  <span className="text-sm font-medium text-primary">{exp.period}</span>
                  <h4 className="text-lg font-bold text-navy">{exp.title}</h4>
                  <p className="text-neutral-600 font-medium">{exp.company}</p>
                  <p className="text-neutral-500 text-sm mt-2">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-12" data-aos="fade-up">
            <h3 className="text-xl font-bold text-navy mb-6">Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
                <span className="text-sm font-medium text-primary">{edu.year}</span>
                <h4 className="text-lg font-bold text-navy">{edu.title}</h4>
                <p className="text-neutral-600 font-medium">{edu.institution}</p>
                <p className="text-neutral-500 text-sm mt-2">{edu.detail}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-12" data-aos="fade-up">
            <h3 className="text-xl font-bold text-navy mb-6">Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white p-4 rounded-xl border border-neutral-200 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-navy text-sm">{cert.name}</p>
                    <p className="text-xs text-neutral-500">{cert.issuer} · {cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
