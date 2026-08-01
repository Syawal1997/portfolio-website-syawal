import React from 'react';
import { ExternalLink } from 'lucide-react';
import { projectsData } from '../../data/projectsData';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title" data-aos="fade-up">
          Data <span>Projects</span>
        </h2>
        <p className="text-center text-neutral-500 max-w-2xl mx-auto mb-12" data-aos="fade-up">
          A showcase of data analytics projects demonstrating skills in visualization, machine learning, and business intelligence
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200 card-hover"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{project.image}</div>
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  Project {project.id}
                </span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">{project.title}</h3>
              <p className="text-neutral-600 text-sm mb-3">{project.description}</p>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold text-navy">Dataset:</span> {project.dataset}</p>
                <div>
                  <span className="font-semibold text-navy">Tools:</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {project.tools.map((tool) => (
                      <span key={tool} className="bg-neutral-200 text-neutral-700 px-2.5 py-0.5 rounded-full text-xs font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-primary font-medium text-sm">💡 {project.insight}</p>
              </div>
              <div className="flex gap-3 mt-4 pt-4 border-t border-neutral-200">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                >
                  <ExternalLink size={16} /> View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
