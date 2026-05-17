import React from 'react';

const AboutSection = () => {
  const skills = {
    'Programming Languages': ['C', 'Javascript', 'PHP', 'Python', 'Go'],
    Frontend: ['React.JS', 'Next.JS'],
    Backend: ['Laravel', 'Expressjs', 'Prisma'],
    Database: ['MongoDB', 'MySQL'],
    'Tools & Others': ['Arduino', 'Raspberry Pi', 'Git', 'Docker'],
  };

  return (
    <section
      id="about"
      className="bg-black py-[120px] px-10 relative max-md:py-[60px] max-md:px-6"
    >
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[48px] font-semibold text-white mb-5 tracking-[-1px] max-md:text-[32px] max-md:mb-4 max-[414px]:text-[28px]">
          About Me
        </h2>

        <div className="w-[60px] h-1 bg-accent mb-[60px]" />

        <p className="text-[20px] text-white/85 leading-[1.7] mb-20 max-w-[900px] max-md:text-base max-md:leading-[1.7] max-md:mb-[60px] max-[414px]:text-[15px]">
          A Fullstack Web Developer specializing in Laravel, React.js, and
          Next.js, while expanding backend skills with Golang. Currently a
          Computer Science undergraduate at Bina Nusantara University.
          Experienced in building scalable web applications and system
          architecture within startup environments. An accomplished competitor
          recognized with multiple awards at both national and international
          levels.
        </p>

        <h3 className="text-[32px] font-semibold text-white mb-10 tracking-[-0.5px] max-md:text-[22px] max-md:mb-8 max-[414px]:text-[20px]">
          Technical Skills
        </h3>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-10 max-md:grid-cols-1 max-md:gap-5">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-white/[0.03] border border-white/[0.1] p-8 transition-all duration-300 hover:border-accent hover:bg-accent/[0.05] max-md:p-6"
            >
              <div className="text-lg font-semibold text-accent mb-5">
                {category}
              </div>

              <div className="flex flex-wrap gap-2.5">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-white/80 bg-white/[0.05] px-4 py-2 border border-white/[0.1]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
