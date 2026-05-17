import React from 'react';
import { Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-white-10 bg-black px-10 pb-10 pt-20 max-md:px-6 max-md:pb-10 max-md:pt-[60px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-[60px] text-center">
          <h2 className="mb-5 text-[48px] font-semibold -tracking-[1px] text-white max-md:mb-4 max-md:text-[32px] max-[414px]:text-[28px]">
            Get In Touch
          </h2>

          <p className="mx-auto mb-10 max-w-[600px] text-[18px] text-white-7 max-md:mb-8 max-md:text-[15px] max-md:leading-[1.6] max-[414px]:text-[14px]">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <a
            href="mailto:fazril.hillaby@binus.ac.id"
            className="group inline-flex items-center gap-3 bg-accent px-8 py-4 text-[18px] font-medium text-black no-underline transition-all duration-300 hover:bg-accent-10 hover:text-accent max-md:px-7 max-md:py-[14px] max-md:text-[16px] max-[414px]:px-6 max-[414px]:py-3 max-[414px]:text-[15px]"
          >
            <Mail size={20} />
            fazril.hillaby@binus.ac.id
          </a>
        </div>

        <div className="mb-10 flex items-center justify-center gap-6 max-md:mb-8 max-md:gap-4">
          <a
            href="https://github.com/fzrilsh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center bg-white-5 text-white no-underline transition-all duration-300 hover:bg-accent hover:text-black"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>

          <a
            href="https://www.linkedin.com/in/fazrilsyaveralhillaby/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center bg-white-5 text-white no-underline transition-all duration-300 hover:bg-accent hover:text-black"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
          </a>

          <a
            href="https://www.fazrilsh.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center bg-white-5 text-white no-underline transition-all duration-300 hover:bg-accent hover:text-black"
          >
            <ExternalLink size={24} />
          </a>
        </div>

        <div className="border-t border-white-10 pt-10 text-center text-[14px] text-white/50">
          &copy; {new Date().getFullYear()} Fazril Syaveral Hillaby. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
