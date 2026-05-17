import React from 'react';

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: 'EduNote',
      description: 'A full-stack note-taking and task management application built with the MERN stack to deliver a dynamic and responsive user experience. It features a clean dashboard for creating notes and tracking tasks, organization via custom labels, and a secure authentication flow powered by Google OAuth.',
      tech: ['MERN Stack', 'Google OAuth'],
      image: '/images/portfolio_edunote.webp',
    },
    {
      id: 2,
      title: 'BlindMaze',
      description: 'A challenging 2D puzzle game that tests your memory and spatial awareness. Inspired by a segment in Ruang Guru\'s \'Clash of Champions\' competition, BlindMaze presents players with a complete maze for a memorize period. After the maze disappears, players must rely on their memory alone to guide their character through the unseen walls and reach the finish line.',
      tech: ['HTML5 Canvas', 'JavaScript'],
      image: '/images/portfolio_blindmaze.webp',
      url: '/games/blindmaze',
    },
    {
      id: 3,
      title: 'SekolahAwan.id',
      description: 'A Software-as-a-Service (SaaS) application for school management, built on the TALL stack. It utilizes Laravel Tenancy to provide a robust multi-tenant architecture, allowing each school to operate with its own isolated and secure data.',
      tech: ['TALL Stack', 'Tenancy'],
      image: '/images/portfolio_sekolahawan.webp',
      url: 'https://sekolahawan.id/',
    },
    {
      id: 4,
      title: 'FreshVora',
      description: 'Contributed to the FreshVora platform by developing several key frontend components for its Learning Management System (LMS) using Next.js. On the backend, I designed and implemented multiple microservices in Go to power core functionalities, including systems for form submission, learning management, payment processing, and content management.',
      tech: ['NextJS', 'Go Microservices'],
      image: '/images/portfolio_freshvora.webp',
      url: 'https://freshvora.com/',
    },
    {
      id: 5,
      title: 'Damai Agung Florist',
      description: 'Built an e-commerce website for a local flower shop using Laravel and Tailwind CSS. The project included a custom CMS to give the client full control over their product listings and content.',
      tech: ['Laravel', 'Tailwind', 'Flowbite'],
      image: '/images/portfolio_damaiagungflorist.webp',
      url: 'https://damaiagungflorist.com/'
    },
    {
      id: 6,
      title: 'PT. Abuhasdha & CO.',
      description: 'Developed a company profile website for PT. Abuhasdha & CO. by building a custom WordPress theme from the ground up. This solution empowers the client to dynamically update and manage website content with ease, without needing any technical assistance.',
      tech: ['Wordpress'],
      image: '/images/portfolio_abuhasdha.webp',
      url: 'https://abuhasdha.com/'
    },
    {
      id: 7,
      title: 'Voyago (Mock-up)',
      description: 'Voyago is your gateway to meaningful travel experiences — from neighbourhood excursions to cross-border adventures. We make it simple, personal, and locally rooted.',
      tech: ['TALL Stack', 'FluxUI'],
      image: '/images/portfolio_voyago.webp',
      url: '/voyago'
    },
    {
      id: 8,
      title: 'TemuLokal',
      description: 'Built an prototype platform to manage and promote local UMKM in indonesia using ReactJS and TailwindCSS. The project have many TODO to make the platform have a great flow and feature.',
      tech: ['ReactJS', 'TailwindCSS'],
      image: '/images/portfolio_temulokal.webp',
      url: '/temulokal'
    },
    {
      id: 9,
      title: 'Revibe',
      description: 'PWA mobile web app designed as a community cosmetics directory POC. It features product discovery, user contributions, interactive forums, and engagement challenges. Currently a prototype focused on refining user flow and core features.',
      tech: ['NextJS', 'Supabase'],
      image: '/images/portfolio_revibe.webp',
      url: 'https://revibe-azure.vercel.app/'
    },
    {
      id: 10,
      title: 'RiskGuard',
      description: 'AI-based Risk and Trust Monitoring System developed by the "Kent Jadi Normal" team. The project is designed to secure growth within digital payment ecosystems, specifically for Paylabs, by solving the complexities of high transaction volumes and the limitations of static, rule-based monitoring.',
      tech: ['Python', 'ReactJS'],
      image: '/images/portfolio_riskguard.webp',
      url: '/pitch-deck-riskguard.pdf'
    },
  ].reverse()

  return (
    <section id="portfolio" className="bg-black px-10 py-[120px] max-md:px-6 max-md:py-[60px]">
      <div className="mx-auto max-w-[1400px]">
        <h2 className="mb-5 text-[48px] font-semibold -tracking-[1px] text-white max-md:mb-4 max-md:text-[32px] max-[414px]:text-[28px]">
          Portfolio
        </h2>

        <div className="mb-[60px] h-[4px] w-[60px] bg-accent" />

        <div className="grid gap-10 [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))] max-md:gap-6 max-md:grid-cols-1">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              className="group block w-full cursor-pointer overflow-hidden border border-white-10 bg-white-3 transition-all duration-300 hover:-translate-y-2 hover:border-accent"
            >
              <div className="relative w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} - Project Screenshot`}
                  style={{ objectFit: 'contain' }}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-8 max-md:p-6">
                <h3 className="mb-3 text-[22px] font-semibold text-white max-md:mb-[10px] max-md:text-[19px] max-[414px]:text-[18px]">
                  {project.title}
                </h3>

                <p className="mb-5 min-h-[60px] text-[15px] leading-[1.6] text-white-7 max-md:min-h-0 max-md:text-[14px] max-md:leading-[1.5]">
                  {project.description}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-accent-10 px-3 py-[6px] border border-accent-30 text-[12px] text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
