import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 md:pt-24 pb-16 bg-gradient-to-br from-neutral-50 via-white to-blue-50/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1" data-aos="fade-right">
            <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <span className="mr-2">👋</span> Data Analyst
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Syawal <span className="gradient-text">Maulana Akbari</span>
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-neutral-700 mb-4">
              Data Analyst · Visualization · Predictive Analytics
            </p>
            <p className="text-neutral-600 text-lg leading-relaxed mb-8 max-w-lg">
              Transforming complex data into actionable business insights with 4+ years of experience in data visualization, predictive analytics, and operational data optimization.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 flex items-center gap-2"
              >
                View Projects <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="bg-white text-navy px-6 py-3 rounded-full font-semibold border-2 border-neutral-200 hover:border-primary hover:text-primary transition-all duration-300"
              >
                Contact Me
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-neutral-200">
              <div>
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-sm text-neutral-500">Dashboards Built</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">4+</p>
                <p className="text-sm text-neutral-500">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">50%</p>
                <p className="text-sm text-neutral-500">Efficiency Gain</p>
              </div>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center" data-aos="fade-left">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://drive.google.com/thumbnail?id=1Ptgl7EjK3byNJU55J_3cwF9Bm9RCWpWc&sz=w1000"
                  alt="Syawal Maulana Akbari"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-200/30 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
