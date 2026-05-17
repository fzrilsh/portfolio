import React from "react";
import { Mail, MapPin } from "lucide-react";
import NetworkBackground from "./NetworkBackground";

const floatingBadges = [
  {
    label: "Laravel",
    className: "top-[-14px] left-[-36px] md:left-[-60px] lg:left-[-70px]",
    delayMs: 0,
  },
  {
    label: "React",
    className: "top-[-6px] right-[-28px] md:right-[-50px] lg:right-[-60px]",
    delayMs: 400,
  },
  {
    label: "Next.js",
    className: "top-[28%] right-[-48px] md:right-[-80px] lg:right-[-90px]",
    delayMs: 800,
  },
  {
    label: "Golang",
    className: "bottom-[28%] right-[-42px] md:right-[-72px] lg:right-[-82px]",
    delayMs: 1200,
  },
  {
    label: "PHP",
    className: "bottom-[-18px] left-[-32px] md:left-[-52px] lg:left-[-62px]",
    delayMs: 1600,
  },
  {
    label: "TypeScript",
    className: "top-[32%] left-[-52px] md:left-[-88px] lg:left-[-100px]",
    delayMs: 600,
  },
  {
    label: "Docker",
    className: "bottom-[-10px] right-[24px] md:right-[44px] lg:right-[54px]",
    delayMs: 1400,
  },
  {
    label: "MySQL",
    className: "bottom-[36%] left-[-58px] md:left-[-96px] lg:left-[-110px]",
    delayMs: 2000,
  },
];

const rightItems = [
  { label: "Building Scalable Web Applications" },
  { label: "National & International Award Winner" },
  { label: "Tech Team Leader & Founder" },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden"
    >
      <NetworkBackground />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-10 py-20 md:py-28 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-8 lg:items-center lg:justify-between">
          <div className="flex-1 text-left order-2 lg:order-1 max-w-[400px] mx-auto lg:mx-0">
            <h1 className="text-[42px] lg:text-[48px] font-semibold text-foreground mb-3 tracking-[-1.5px] leading-[1.15] max-[414px]:text-[34px]">
              Fazril Syaveral Hillaby
            </h1>

            <div className="text-[22px] lg:text-[24px] font-medium text-accent mb-5 tracking-[-0.3px] max-[414px]:text-lg">
              Fullstack Web Developer
            </div>

            <p className="text-base text-white-8 leading-[1.65] mb-7 max-w-[380px] max-[414px]:text-[15px]">
              A Fullstack Web Developer specializing in Laravel and React,
              building scalable web applications and recognized with multiple
              awards at national and international levels.
            </p>

            <div className="flex flex-col gap-3 mb-7 text-sm">
              <a
                href="mailto:fazril.hillaby@binus.ac.id"
                className="flex items-center gap-2.5 text-white-7 no-underline transition-colors duration-300 hover:text-accent group"
              >
                <Mail
                  size={18}
                  className="transition-colors duration-300 group-hover:text-accent"
                />
                fazril.hillaby@binus.ac.id
              </a>

              <div className="flex items-center gap-2.5 text-white-7">
                <MapPin size={18} />
                Tangerang City, Banten
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/fzrilsh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 bg-white-10 text-foreground no-underline transition-all duration-300 hover:bg-accent hover:text-background hover:shadow-[0_0_16px_rgba(0,212,255,0.4)]"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/fazrilsyaveralhillaby/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 bg-white-10 text-foreground no-underline transition-all duration-300 hover:bg-accent hover:text-background hover:shadow-[0_0_16px_rgba(0,212,255,0.4)]"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          <div className="relative flex-shrink-0 order-1 lg:order-2 mt-4 lg:mt-0">
            {floatingBadges.map((badge) => (
              <span
                key={badge.label}
                className={`absolute ${badge.className} z-20 px-2.5 py-1 text-[11px] md:text-xs font-semibold text-accent bg-black/80 border border-accent shadow-[0_0_10px_rgba(0,212,255,0.35)] select-none whitespace-nowrap`}
                style={{
                  animation: `floatBadge 3.5s ease-in-out infinite`,
                  animationDelay: `${badge.delayMs}ms`,
                }}
              >
                {badge.label}
              </span>
            ))}

            <div
              className="relative w-[230px] h-[230px] md:w-[280px] md:h-[280px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden"
              style={{
                animation: `floatBadge 3.5s ease-in-out infinite`,
              }}
            >
              <img
                src="/images/me.png"
                alt="Fazril Syaveral Hillaby"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 text-left lg:text-right order-3 lg:order-3 max-w-[340px] mx-auto lg:mx-0">
            <div className="flex-col gap-4 lg:flex hidden">
              {rightItems.map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 lg:flex-row-reverse lg:gap-3 px-4 py-3 bg-white-5 border-l-2 border-accent lg:border-l-0 lg:border-r-2 border-accent transition-all duration-300 hover:bg-accent-10 hover:shadow-[0_0_16px_rgba(0,212,255,0.2)]"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <span className="text-sm md:text-[15px] text-white-85 font-medium leading-snug">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 hidden lg:block">
              <div className="inline-block px-4 py-2 bg-accent-5 border border-accent-20">
                <span className="text-xs text-accent-dim uppercase tracking-[0.2em] font-semibold">
                  &lt; Open for opportunities /&gt;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
