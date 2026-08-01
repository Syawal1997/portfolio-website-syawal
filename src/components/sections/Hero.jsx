import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-12 pb-8 bg-gradient-to-br from-neutral-50 via-white to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
          
          {/* ===== LEFT CONTENT ===== */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium mb-2">
              👋 Data Analyst
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-1">
              Syawal <span className="text-blue-600">Maulana Akbari</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg font-semibold text-gray-700 mb-2">
              Data Analyst · Visualization · Predictive Analytics
            </p>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed mb-2 max-w-lg">
              Data Analyst with 4+ years of experience in strategic data visualization, predictive analytics, and operational data optimization. Experienced at Ayo Export and the Department of Industry, Trade, Cooperatives, & SMEs.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3 max-w-lg">
              Beyond work, I actively develop interactive dashboards, participate in data competitions, share knowledge through articles, and build data products as side projects.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-2.5 mb-4">
              <a
                href="#resume"
                className="bg-gray-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all flex items-center gap-2 shadow-lg shadow-gray-900/20"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Resume
              </a>
              <a
                href="#contact"
                className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-600/25"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Let's Connect
              </a>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              <span className="bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full text-xs font-medium">📊 Looker Studio</span>
              <span className="bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full text-xs font-medium">🐍 Python</span>
              <span className="bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full text-xs font-medium">📈 SQL</span>
              <span className="bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full text-xs font-medium">📉 Google Analytics</span>
              <span className="bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full text-xs font-medium">⚙️ Power BI</span>
              <span className="bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full text-xs font-medium">🧠 ML</span>
              <span className="bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full text-xs font-medium">📋 Google Sheets</span>
              <span className="bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full text-xs font-medium">📦 ETL</span>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-5 pt-3 border-t border-gray-200">
              <div>
                <p className="text-2xl font-bold text-blue-600">10+</p>
                <p className="text-xs text-gray-500">Dashboards</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">4+</p>
                <p className="text-xs text-gray-500">Years Exp.</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">50%</p>
                <p className="text-xs text-gray-500">Efficiency</p>
              </div>
            </div>
          </div>

          {/* ===== RIGHT - PROFILE ===== */}
          <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://drive.google.com/thumbnail?id=1Ptgl7EjK3byNJU55J_3cwF9Bm9RCWpWc&sz=w1000"
                  alt="Syawal Maulana Akbari"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-blue-100 rounded-full -z-10"></div>
              <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-blue-50 rounded-full -z-10"></div>
              <div className="absolute -bottom-1 -right-1 bg-white rounded-full shadow-lg px-2.5 py-1 border border-gray-200">
                <span className="text-[10px] font-semibold text-blue-600">✨ 4+ Years</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
