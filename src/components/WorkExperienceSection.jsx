import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const WorkExperienceSection = () => {
  const experiences = [
    {
      company: 'UREEKA Club',
      role: 'Software Development',
      type: 'Team Leader',
      period: 'March 2026 - Present',
      location: 'Hybrid',
      current: true,
      responsibilities: [
        'Led the software development team in planning and executing technical initiatives for the club',
        'Participated in strategic decision-making to shape product direction and validate value propositions',
        'Designed and managed scalable server architecture, ensuring performance and reliability',
        'Evaluated and selected appropriate technologies to support efficient and sustainable development',
      ],
    },
    {
      company: 'FreshVora',
      role: 'Backend Developer',
      type: 'Founding Member',
      period: 'Nov 2024 - Present',
      location: 'Hybdrid',
      current: true,
      responsibilities: [
        'Initiated early-stage outreach by communicating with potential business partners and school leaders to build collaboration opportunities',
        'Contributed to identifying core problems, formulating solutions, and discovering potential business opportunities',
        'Participated in strategic discussions to define the startup\'s direction and validate its value proposition',
        'Managed server scalability and selected efficient technologies for application development',
        'Developed robust server-side logic, including RESTful APIs to support frontend integration and system functionality',
      ],
    },
    {
      company: 'PT. Karya Edukasi & Teknologi Digital',
      role: 'Fullstack Web Developer',
      type: 'Internship',
      period: 'July 2024 - Dec 2024',
      location: 'Remote',
      current: false,
      responsibilities: [
        'Developed the commercial SaaS application Sekolahawan.id using the TALL stack (Tailwind CSS, Alpine.js, Laravel, Livewire) with Laravel Tenancy to enable multi-tenant architecture',
        'Implemented a robust authentication and authorization system with role-based access control for copywriters, super admins, school administrators, and other user roles',
        'Collaborated with a team using tools such as Slack, Azure DevOps, and other project management software',
      ],
    },
    {
      company: 'Cursebyte',
      role: 'Fullstack Developer',
      type: 'Founding Member',
      period: 'Dec 2022 - Jan 2024',
      location: 'Remote',
      current: false,
      responsibilities: [
        'Managed internal team communication to ensure effective collaboration and project alignment',
        'Led the technological direction of the team, including stack decisions and development workflows',
        'Designed and maintained internal systems, processes, and standard operating procedures',
        'Contributed as an internal developer, building and maintaining internal tools and features',
        'Actively worked on client-acquired projects, taking part in both development and execution',
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="bg-black py-[120px] px-10 max-md:py-[60px] max-md:px-6"
    >
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-5xl max-md:text-[32px] max-[414px]:text-[28px] font-semibold text-white mb-5 max-md:mb-4 tracking-[-1px]">
          Work Experience
        </h2>

        <div className="w-[60px] h-1 bg-accent mb-[60px]" />

        <div className="relative pl-10 max-md:pl-4 border-l-2 border-l-white-10 max-md:border-l-accent-30">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative mb-[60px] max-md:mb-10 pl-10 max-md:pl-4"
            >
              {/* Timeline dot */}
              <div
                className={`absolute -left-12 top-2 w-4 h-4 rounded-full border-4 border-black ${
                  exp.current
                    ? 'bg-accent ring-2 ring-accent'
                    : 'bg-accent-dim ring-2 ring-accent-dim'
                }`}
              />

              <div
                className="bg-white-3 border border-white-10 p-8 max-md:p-5 transition-all duration-300"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#00D4FF';
                  e.currentTarget.style.background = 'rgba(0, 212, 255, 0.05)';
                  e.currentTarget.style.transform = 'translateX(8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent-10 flex items-center justify-center text-accent">
                    <Briefcase size={20} />
                  </div>

                  <div>
                    <div
                      className={`text-xs uppercase tracking-[1px] mb-1 ${
                        exp.current ? 'text-accent' : 'text-white/50'
                      }`}
                    >
                      {exp.type}
                    </div>
                    {exp.current && (
                      <span className="text-[11px] bg-accent-20 text-accent px-2 py-0.5 rounded-[2px] font-medium">
                        Current
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-[28px] max-md:text-xl max-[414px]:text-lg font-semibold text-white mb-2 max-md:leading-[1.3]">
                  {exp.role}
                </h3>

                <div className="text-xl max-md:text-lg max-[414px]:text-base text-white-8 mb-3">
                  {exp.company}
                </div>

                <div className="flex items-center gap-6 mb-5 flex-wrap">
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <Calendar size={16} />
                    {exp.period}
                  </div>

                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <MapPin size={16} />
                    {exp.location}
                  </div>
                </div>

                <ul className="list-none p-0 m-0">
                  {exp.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="text-base max-md:text-sm text-white-7 leading-[1.6] mb-3 max-md:mb-2.5 pl-5 relative"
                    >
                      <span className="absolute left-0 text-accent font-semibold">
                        •
                      </span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
