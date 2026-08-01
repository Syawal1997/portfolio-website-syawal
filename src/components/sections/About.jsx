import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title" data-aos="fade-up">
          About <span>Me</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <p className="text-neutral-600 text-lg leading-relaxed mb-4">
              I am a <strong>Data Analyst</strong> with 4+ years of experience in strategic data visualization, predictive analytics, and operational data optimization. I have a proven track record of designing over <strong>10 interactive dashboards</strong> using Looker Studio, developing Machine Learning models to forecast market trends, and automating data processes to enhance business performance.
            </p>
            <p className="text-neutral-600 text-lg leading-relaxed mb-6">
              Experienced at <strong>Ayo Export</strong> and the <strong>Department of Industry, Trade, Cooperatives, & SMEs</strong>, I have successfully cleaned and processed large-scale datasets from multiple sources using SQL and Google Sheets, and applied clustering techniques to over <strong>2,000 records</strong> to identify patterns and optimize resource allocation.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-neutral-100 text-neutral-700 px-4 py-1.5 rounded-full text-sm font-medium">Data Visualization</span>
              <span className="bg-neutral-100 text-neutral-700 px-4 py-1.5 rounded-full text-sm font-medium">Predictive Analytics</span>
              <span className="bg-neutral-100 text-neutral-700 px-4 py-1.5 rounded-full text-sm font-medium">Machine Learning</span>
              <span className="bg-neutral-100 text-neutral-700 px-4 py-1.5 rounded-full text-sm font-medium">Business Intelligence</span>
              <span className="bg-neutral-100 text-neutral-700 px-4 py-1.5 rounded-full text-sm font-medium">Data Quality</span>
            </div>
          </div>
          <div data-aos="fade-left">
            <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
              <h3 className="text-xl font-bold mb-4">Career Goals</h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                To leverage data analytics and business intelligence to drive strategic decision-making and operational excellence in organizations, while continuously advancing my skills in machine learning and AI.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-neutral-700">Data-Driven Decision Making</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-neutral-700">Advanced Analytics & ML</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-neutral-700">Business Intelligence Strategy</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-neutral-700">Data Product Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
