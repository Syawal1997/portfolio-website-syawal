{/* ===== BUTTONS ===== */}
<div className="flex flex-wrap gap-3 mb-6">
  {/* Tombol 1: View Resume */}
  <a
    href="#resume"
    className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all flex items-center gap-2 shadow-lg shadow-gray-900/20"
  >
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
    View Resume
  </a>
  
  {/* Tombol 2: Download CV */}
  <a
    href="/resume.pdf"
    download
    className="bg-gray-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-600 transition-all flex items-center gap-2"
  >
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
    Download CV
  </a>

  {/* Tombol 3: Let's Connect */}
  <a
    href="#contact"
    className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-600/25"
  >
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
    Let's Connect
  </a>
</div>
