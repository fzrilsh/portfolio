import React from "react";
import { GraduationCap, Award } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Bina Nusantara University",
      period: "Expected Graduation: 2029",
      status: "ongoing",
    },
    {
      degree: "Intensive Training Web Technologies (WorldSkills ASEAN 2025 Preparation)",
      institution: "BINUS University",
      period: "4 Month",
      status: "Completed",
    },
    {
      degree: "Computer and Network Engineering",
      institution: "SMKN 1 Kota Tangerang",
      period: "Graduated: 2025",
      status: "completed",
    },
  ];

  return (
    <section className="bg-black py-[120px] px-10 max-md:py-[60px] max-md:px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[48px] font-semibold text-white mb-5 tracking-[-1px] max-md:text-[32px] max-md:mb-4 max-[414px]:text-[28px]">
          Education & Certifications
        </h2>

        <div className="w-[60px] h-1 bg-accent mb-[60px]" />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 max-md:grid-cols-1 max-md:gap-6 mb-[60px]">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white/[0.03] border border-white/[0.1] p-10 transition-all duration-300 hover:border-accent hover:-translate-y-1 max-md:p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent/[0.1] flex items-center justify-center text-accent">
                  <GraduationCap size={24} />
                </div>

                <div>
                  <div className="text-xs text-white/50 uppercase tracking-[1px] mb-1">
                    {edu.status === "ongoing" ? "In Progress" : "Completed"}
                  </div>
                  <div className="text-sm text-white/60">{edu.period}</div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-2 max-md:text-xl max-[414px]:text-lg">
                {edu.degree}
              </h3>

              <p className="text-base text-white/70">{edu.institution}</p>
            </div>
          ))}
        </div>

        {/* Certification */}
        <div className="bg-accent/[0.05] border-2 border-accent p-10 flex items-center gap-6 max-md:p-6">
          <div className="w-16 h-16 bg-accent flex items-center justify-center text-black shrink-0">
            <Award size={32} />
          </div>

          <div>
            <div className="text-xs text-accent uppercase tracking-[1px] mb-2">
              Professional Certification
            </div>
            <h3 className="text-2xl font-semibold text-white mb-1 max-md:text-xl max-[414px]:text-lg">
              Certified KKNI Level II
            </h3>
            <p className="text-base text-white/70">Computer Network Engineering</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
