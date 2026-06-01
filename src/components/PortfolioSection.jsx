import { ArrowUpRight } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "EduNote",
      description:
        "A full-stack note-taking and task management application built with the MERN stack to deliver a dynamic and responsive user experience. It features a clean dashboard for creating notes and tracking tasks, organization via custom labels, and a secure authentication flow powered by Google OAuth.",
      tech: ["MERN Stack", "Google OAuth"],
      image: "/images/portfolio_edunote.webp",
    },
    {
      id: 2,
      title: "BlindMaze",
      description:
        "A challenging 2D puzzle game that tests your memory and spatial awareness. Inspired by a segment in Ruang Guru's 'Clash of Champions' competition, BlindMaze presents players with a complete maze for a memorize period. After the maze disappears, players must rely on their memory alone to guide their character through the unseen walls and reach the finish line.",
      tech: ["HTML5 Canvas", "JavaScript"],
      image: "/images/portfolio_blindmaze.webp",
      url: "/games/blindmaze",
    },
    {
      id: 3,
      title: "E-Voting Portal",
      description:
        "A secure and real-time electronic voting platform developed as a final year project (Tugas Akhir) for Telkom University. Powered by the TALL stack (Laravel & Livewire), the platform features robust voter registration using student credentials (NIM), a secure token/serial number system to enforce a strict 'one person, one vote' policy, and an interactive quick count dashboard for real-time election transparency.",
      tech: ["Laravel", "Livewire", "Tailwind CSS", "SQLite"],
      image: "/images/portfolio_e-voting.webp",
      url: "https://e-voting.fzrby.web.id/",
    },
    {
      id: 4,
      title: "SekolahAwan.id",
      description:
        "A Software-as-a-Service (SaaS) application for school management, built on the TALL stack. It utilizes Laravel Tenancy to provide a robust multi-tenant architecture, allowing each school to operate with its own isolated and secure data.",
      tech: ["TALL Stack", "Tenancy"],
      image: "/images/portfolio_sekolahawan.webp",
      url: "https://sekolahawan.id/",
    },
    {
      id: 5,
      title: "FreshVora",
      description:
        "Contributed to the FreshVora platform by developing several key frontend components for its Learning Management System (LMS) using Next.js. On the backend, I designed and implemented multiple microservices in Go to power core functionalities, including systems for form submission, learning management, payment processing, and content management.",
      tech: ["NextJS", "Go Microservices"],
      image: "/images/portfolio_freshvora.webp",
      url: "https://freshvora.com/",
    },
    {
      id: 6,
      title: "Damai Agung Florist",
      description:
        "Built an e-commerce website for a local flower shop using Laravel and Tailwind CSS. The project included a custom CMS to give the client full control over their product listings and content.",
      tech: ["Laravel", "Tailwind", "Flowbite"],
      image: "/images/portfolio_damaiagungflorist.webp",
      url: "https://damaiagungflorist.com/",
    },
    {
      id: 7,
      title: "PT. Abuhasdha & CO.",
      description:
        "Developed a company profile website for PT. Abuhasdha & CO. by building a custom WordPress theme from the ground up. This solution empowers the client to dynamically update and manage website content with ease, without needing any technical assistance.",
      tech: ["Wordpress"],
      image: "/images/portfolio_abuhasdha.webp",
      url: "https://abuhasdha.com/",
    },
    {
      id: 8,
      title: "Voyago (Mock-up)",
      description:
        "Voyago is your gateway to meaningful travel experiences — from neighbourhood excursions to cross-border adventures. We make it simple, personal, and locally rooted.",
      tech: ["TALL Stack", "FluxUI"],
      image: "/images/portfolio_voyago.webp",
      url: "/voyago",
    },
    {
      id: 9,
      title: "TemuLokal",
      description:
        "Built an prototype platform to manage and promote local UMKM in indonesia using ReactJS and TailwindCSS. The project have many TODO to make the platform have a great flow and feature.",
      tech: ["ReactJS", "TailwindCSS"],
      image: "/images/portfolio_temulokal.webp",
      url: "/temulokal",
    },
    {
      id: 10,
      title: "Revibe",
      description:
        "PWA mobile web app designed as a community cosmetics directory POC. It features product discovery, user contributions, interactive forums, and engagement challenges. Currently a prototype focused on refining user flow and core features.",
      tech: ["NextJS", "Supabase"],
      image: "/images/portfolio_revibe.webp",
      url: "https://revibe-azure.vercel.app/",
    },
    {
      id: 11,
      title: "RiskGuard",
      description:
        'AI-based Risk and Trust Monitoring System developed by the "Kent Jadi Normal" team. The project is designed to secure growth within digital payment ecosystems, specifically for Paylabs, by solving the complexities of high transaction volumes and the limitations of static, rule-based monitoring.',
      tech: ["Python", "ReactJS"],
      image: "/images/portfolio_riskguard.webp",
      url: "/pitch-deck-riskguard.pdf",
    },
    {
      id: 12,
      title: "ReMon",
      description:
        "A comprehensive personal finance management web application designed to simplify money reallocation. It features an automated expense & income tracker, split bill management with asynchronous AI-powered payment proof verification, debt tracking (hutang-piutang), monthly financial analytics with interactive Chart.js visualizations, and a progressive web app (PWA) experience.",
      tech: [
        "Node.js",
        "Express",
        "EJS",
        "Tailwind CSS",
        "PostgreSQL",
        "Prisma",
        "Chart.js",
        "Tesseract.js",
      ],
      image: "/images/portfolio_remon.webp",
      url: "https://remon.fzrby.web.id/",
    },
    {
      id: 13,
      title: "MyDrive",
      description:
        "A custom cloud-based code storage and file sharing platform built on the TALL stack. It allows users to upload entire project codebases as ZIP archives, which are automatically unpacked on the server and parsed into a relational directory tree. Features include a re-created recursive folder explorer with dynamic breadcrumbs, auto-calculated file metadata, and a secure token-based file download system.",
      tech: ["Laravel", "Livewire", "Tailwind CSS", "ZipArchive", "SQLite"],
      image: "/images/portfolio_my-drive.webp",
      url: "https://my-drive.fzrby.web.id/",
    },
  ].reverse();

  return (
    <section
      id="portfolio"
      className="bg-black px-10 py-[120px] max-md:px-6 max-md:py-[60px]"
    >
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mb-5 text-[48px] font-semibold -tracking-[1px] text-white max-md:mb-4 max-md:text-[32px] max-[414px]:text-[28px]">
          Portfolio
        </h2>

        <div className="mb-[80px] h-[4px] w-[60px] bg-accent" />

        <div className="flex flex-col gap-24 max-md:gap-16">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={project.id}
                className={`flex flex-col gap-8 lg:gap-16 items-center ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } group`}
              >
                {/* Image Showcase Container */}
                <div className="w-full lg:w-1/2 aspect-[16/10] overflow-hidden border border-white-10 bg-white-3 rounded-lg relative transition-all duration-300 hover:border-accent hover:shadow-[0_0_30px_rgba(0,212,255,0.15)]">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full cursor-pointer"
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} - Project Screenshot`}
                        className="w-full h-full object-cover transition-transform duration-750 ease-out group-hover:scale-103"
                      />
                    </a>
                  ) : (
                    <img
                      src={project.image}
                      alt={`${project.title} - Project Screenshot`}
                      className="w-full h-full object-cover transition-transform duration-750 ease-out group-hover:scale-103"
                    />
                  )}
                </div>

                {/* Content Details Container */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <h3 className="mb-4 text-3xl max-md:text-2xl font-semibold text-white tracking-tight leading-tight">
                    {project.title}
                  </h3>

                  <p className="mb-6 text-[15px] leading-[1.7] text-white-7 max-md:text-[14px]">
                    {project.description}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-accent-10 px-3 py-[6px] border border-accent-30 text-[12px] text-accent font-medium rounded-[2px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.url ? (
                    <div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors duration-300 font-semibold group/btn text-[15px] max-md:text-[14px]"
                      >
                        View Project
                        <ArrowUpRight
                          size={18}
                          className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                        />
                      </a>
                    </div>
                  ) : (
                    <span className="text-[13px] text-white-10 border border-white-10 px-3 py-1 font-medium select-none self-start rounded-[2px]">
                      Internal Platform
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );

};

export default PortfolioSection;
