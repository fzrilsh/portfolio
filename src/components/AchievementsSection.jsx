import React from 'react';
import { Trophy, MapPin, Calendar } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      title: 'Medallion For Excellence',
      organization: 'Worldskills ASEAN Manila 2025',
      organizer: 'Worldskills, TESDA',
      location: 'Manila, Philippines',
      date: 'July 7th 2025',
      discipline: 'Web Technologies',
      description: 'Developing a product management website within 3 hours using Laravel and Bootstrap, focusing on eligibility, data management, and UI clarity. Building a mobile application using React.js, ensuring responsive functionality and smooth interactions.',
    },
    {
      title: 'Representative for Indonesia – K-STAR Programme',
      organization: 'Korea\'s Skills Transfer for Aspiring Region (K-STAR)',
      organizer: 'Human Resouces Development Service of Korea (HRDK)',
      location: 'Incheon, Korea',
      date: 'July 7th 2025',
      discipline: 'Web Technologies',
      description: 'Selected as a delegate of Indonesia for the Korea\'s Skills Transfer for Aspiring Regions (K-STAR) programme, a 20-day intensive capacity-building program in Web Technologies.',
    },
    {
      title: 'Silver Medal',
      organization: 'Indonesian Skills Competition',
      organizer: 'Ministry of Manpower (Kemenaker) RI',
      location: 'Jakarta, Indonesia',
      date: 'November 10th 2024',
      discipline: 'Web Technologies',
      description: 'Developed a car installment platform that manages society data, including validating society eligibility, setting income thresholds to qualify for specific car types, and providing real-time updates on installments applications.',
    },
    {
      title: 'Top 10 Finalist',
      organization: 'Regional Skills Selection',
      organizer: 'Ministry of Manpower (Kemenaker) RI',
      location: 'Online Competition',
      date: 'August 29th 2024',
      discipline: 'Web Technologies',
      description: 'Ranked 9th nationally in the regional selection for Web Technologies, serving as the initial stage to determine Indonesia\'s delegates for WorldSkills ASEAN Philippines 2025.',
    },
    {
      title: 'Gold Medal',
      organization: 'Student Skills Competition (LKS) National Level 2024',
      organizer: 'Ministry of Education (Kemendikbud) RI',
      location: 'Lampung, Indonesia',
      date: 'August 24th 2024',
      discipline: 'Web Technologies',
      description: 'Developed an online course platform named WebTech Academy, featuring two interfaces: an admin panel (API-only) to manage lessons, and a user interface for participants to access and complete available lessons.',
    },
    {
      title: 'Gold Medal',
      organization: 'Student Skills Competition (LKS) Banten Province 2024',
      organizer: 'Association of School Principals (MKKS) - Banten Province',
      location: 'Banten, Indonesia',
      date: 'August 24th 2024',
      discipline: 'Web Technologies',
      description: 'Developed an online browser-based gaming platform that consists of a Developer Portal for game developers to upload their games, an Administrator Portal for managing users and game content, and a Gaming Portal where users can play games directly in the browser.',
    },
    {
      title: 'Gold Medal',
      organization: 'Student Skills Competition (LKS) Tangerang City 2024',
      organizer: 'Department of Education Tangerang City',
      location: 'Tangerang, Indonesia',
      date: 'February 27th 2024',
      discipline: 'Web Technologies',
      description: 'Developed a dynamic recipe platform website with full CRUD functionality, allowing users to create, view, edit, and delete recipes. The platform also includes user rating features and a public API for accessing shared recipe data.',
    },
  ];

  return (
    <section id="achievements" className="bg-black px-10 py-[120px] max-md:px-6 max-md:py-[60px]">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mb-5 text-[48px] font-semibold -tracking-[1px] text-white max-md:mb-4 max-md:text-[32px] max-[414px]:text-[28px]">
          Achievements
        </h2>

        <div className="mb-[60px] h-[4px] w-[60px] bg-accent" />

        <div className="relative border-l-2 border-white-10 pl-10 max-md:border-accent-30 max-md:pl-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="relative mb-[60px] pl-10 max-md:mb-10 max-md:pl-4">
              <div className="absolute -left-12 top-2 h-4 w-4 rounded-full bg-accent border-4 border-black ring-2 ring-accent" />

              <div className="group border border-white-10 bg-white-3 p-8 transition-all duration-300 hover:translate-x-2 hover:border-accent hover:bg-accent-5 max-md:p-5">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center bg-accent-10 text-accent">
                    <Trophy size={20} />
                  </div>

                  <div className="text-[12px] uppercase tracking-[1px] text-accent">
                    {achievement.discipline}
                  </div>
                </div>

                <h3 className="mb-2 text-[28px] font-semibold text-white max-md:text-[20px] max-md:leading-[1.3] max-[414px]:text-[18px]">
                  {achievement.title}
                </h3>

                <div className="mb-3 text-[18px] text-white-8 max-md:text-[16px]">
                  {achievement.organization}
                </div>

                <div className="mb-4 text-[14px] text-white/60 max-md:text-[13px]">
                  Awarded by: {achievement.organizer}
                </div>

                <div className="mb-4 flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2 text-[14px] text-white/60 max-md:text-[13px]">
                    <MapPin size={16} />
                    {achievement.location}
                  </div>

                  <div className="flex items-center gap-2 text-[14px] text-white/60 max-md:text-[13px]">
                    <Calendar size={16} />
                    {achievement.date}
                  </div>
                </div>

                <p className="text-[16px] leading-[1.6] text-white-7">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
