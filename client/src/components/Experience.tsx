import { resumeData } from "@/data/resume";
import { ChevronDown } from "lucide-react";

export default function Experience() {
  const scrollToNext = () => {
    const awardsSection = document.getElementById("awards");
    awardsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="experience"
      className="resume-section relative min-h-screen w-full flex items-center justify-center px-4 py-20"
      style={{
        backgroundImage:
          "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663550943543/PNgETnHQ86YRv6xSaknBXG/hero-background-QnvJYQ8RPU4fS9oNLbVuLX.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 -z-10"></div>

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Title */}
        <h2 className="section-title text-center mb-16">实践经历</h2>

        {/* Experience Cards */}
        <div className="space-y-8">
          {resumeData.experience.map((exp, index) => (
            <div
              key={index}
              className="experience-card animate-fadeInUp p-6 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white font-poppins">
                    {exp.company}
                  </h3>
                  <p className="text-cyan-400 text-lg font-semibold">
                    {exp.position}
                  </p>
                </div>
                <span className="text-gray-400 text-sm whitespace-nowrap">
                  {exp.duration}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:text-cyan-400 transition-colors"
      >
        <ChevronDown className="w-8 h-8 text-cyan-400" />
      </button>
    </section>
  );
}
