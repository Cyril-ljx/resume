import { resumeData } from "@/data/resume";
import { ChevronDown } from "lucide-react";

export default function Projects() {
  const scrollToNext = () => {
    const experienceSection = document.getElementById("experience");
    experienceSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="projects"
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
        <h2 className="section-title text-center mb-16">项目历程</h2>

        {/* Projects Timeline */}
        <div className="space-y-8">
          {resumeData.projects.map((project, index) => (
            <div
              key={index}
              className="project-card animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white font-poppins">
                    {project.title}
                  </h3>
                  <p className="text-cyan-400 text-sm font-medium">
                    {project.role}
                  </p>
                </div>
                <span className="text-gray-400 text-sm whitespace-nowrap">
                  {project.duration}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-xs font-medium border border-cyan-400/30 hover:bg-cyan-400/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
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
