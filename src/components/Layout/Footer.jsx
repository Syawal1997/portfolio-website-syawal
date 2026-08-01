import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-400">
            &copy; {currentYear} Syawal Maulana Akbari. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#home" className="text-neutral-400 hover:text-white transition-colors text-sm">Home</a>
            <a href="#about" className="text-neutral-400 hover:text-white transition-colors text-sm">About</a>
            <a href="#projects" className="text-neutral-400 hover:text-white transition-colors text-sm">Projects</a>
            <a href="#contact" className="text-neutral-400 hover:text-white transition-colors text-sm">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
