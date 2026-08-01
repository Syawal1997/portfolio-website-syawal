import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'SQL', level: 90, icon: '📊' },
    { name: 'Python', level: 85, icon: '🐍' },
    { name: 'Looker Studio', level: 90, icon: '📈' },
    { name: 'Power BI', level: 80, icon: '📊' },
    { name: 'Tableau', level: 75, icon: '📉' },
    { name: 'Machine Learning', level: 70, icon: '🧠' },
    { name: 'Data Cleaning', level: 85, icon: '🧹' },
    { name: 'Data Visualization', level: 90, icon: '📊' },
    { name: 'Pandas', level: 80, icon: '🐼' },
    { name: 'NumPy', level: 75, icon: '🔢' },
    { name: 'Statistics', level: 80, icon: '📐' },
    { name: 'ETL', level: 75, icon: '🔄' },
  ];

  return (
    <section id="skills" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title" data-aos="fade-up">
          Skills & <span>Expertise</span>
        </h2>
        <p className="text-center text-neutral-500 max-w-2xl mx-auto mb-12" data-aos="fade-up">
          Technical proficiencies and tools I work with to transform data into actionable insights
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white rounded-xl p-6 border border-neutral-200 card-hover"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{skill.icon}</span>
                <span className="font-semibold text-neutral-800">{skill.name}</span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-2.5">
                <div
                  className="bg-gradient-to-r from-primary to-blue-500 h-2.5 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="text-sm text-neutral-500 mt-1 block">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
