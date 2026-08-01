import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 md:pt-20 pb-12 md:pb-16 bg-gradient-to-br from-neutral-50 via-white to-blue-50/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* ===== LEFT CONTENT ===== */}
          <div className="order-2 lg:order-1" data-aos="fade-right">
            {/* Badge */}
            <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
              <span className="mr-1">👋</span> Data Analyst
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2 md:mb-3">
              Syawal <span className="gradient-text">Maulana Akbari</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-700 mb-3 md:mb-4">
              Data Analyst · Visualization · Predictive Analytics
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-4 md:mb-6 max-w-lg">
              Data Analyst with 4+ years of experience in strategic data visualization, predictive analytics, and operational data optimization. Experienced at Ayo Export and the Department of Industry, Trade, Cooperatives, & SMEs.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-5 md:mb-7 max-w-lg">
              Beyond work, I actively develop interactive dashboards, participate in data competitions, share knowledge through articles, and build data products as side projects.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-8">
              <a
                href="#resume"
                className="bg-navy text-white px-5 py-2.5 md:px-6 md:py-3 rounded-full text-sm md:text-base font-semibold hover:bg-navy-light transition-all duration-300 shadow-lg shadow-navy/20 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Resume
              </a>
              <a
                href="#contact"
                className="bg-primary text-white px-5 py-2.5 md:px-6 md:py-3 rounded-full text-sm md:text-base font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/25 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Let's Connect
              </a>
            </div>

            {/* Tag Cloud */}
            <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-5">
              <span className="bg-neutral-100 text-neutral-600 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full text-xs md:text-sm font-medium">📊 Looker Studio</span>
              <span className="bg-neutral-100 text-neutral-600 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full text-xs md:text-sm font-medium">🐍 Python</span>
              <span className="bg-neutral-100 text-neutral-600 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full text-xs md:text-sm font-medium">📈 SQL</span>
              <span className="bg-neutral-100 text-neutral-600 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full text-xs md:text-sm font-medium">📉 Google Analytics</span>
              <span className="bg-neutral-100 text-neutral-600 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full text-xs md:text-sm font-medium">⚙️ Power BI</span>
              <span className="bg-neutral-100 text-neutral-600 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full text-xs md:text-sm font-medium">🧠 Machine Learning</span>
              <span className="bg-neutral-100 text-neutral-600 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full text-xs md:text-sm font-medium">📋 Google Sheets</span>
              <span className="bg-neutral-100 text-neutral-600 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full text-xs md:text-sm font-medium">📦 ETL</span>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 md:gap-8 pt-4 md:pt-5 border-t border-neutral-200">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-primary">10+</p>
                <p className="text-xs md:text-sm text-neutral-500">Dashboards</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-primary">4+</p>
                <p className="text-xs md:text-sm text-neutral-500">Years Exp.</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-primary">50%</p>
                <p className="text-xs md:text-sm text-neutral-500">Efficiency</p>
              </div>
            </div>
          </div>

          {/* ===== RIGHT - PROFILE IMAGE ===== */}
          <div className="order-1 lg:order-2 flex justify-center" data-aos="fade-left">
            <div className="relative">
              {/* Profile Image */}
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://drive.google.com/thumbnail?id=1Ptgl7EjK3byNJU55J_3cwF9Bm9RCWpWc&sz=w1000"
                  alt="Syawal Maulana Akbari"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-3 -right-3 w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full -z-10"></div>
              <div className="absolute -bottom-3 -left-3 w-20 h-20 md:w-24 md:h-24 bg-blue-200/30 rounded-full -z-10"></div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-white rounded-full shadow-lg px-3 py-1.5 md:px-4 md:py-2 border border-neutral-200">
                <span className="text-xs md:text-sm font-semibold text-primary">✨ 4+ Years</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
