import { resumeData } from "@/data/resume";
import { ChevronDown } from "lucide-react";

export default function About() {
  const scrollToNext = () => {
    const skillsSection = document.getElementById("skills");
    skillsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
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

      {/* Decorative bubbles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-400/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Title */}
        <h2 className="section-title text-center mb-16">关于我</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar */}
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-full border-4 border-cyan-400 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center overflow-hidden shadow-lg shadow-cyan-400/20">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663550943543/PNgETnHQ86YRv6xSaknBXG/avatar_ff1a4f7f.webp"
                alt="罗家晓"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bio Content */}
          <div className="animate-slideInLeft">
            {/* Bio text */}
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              我是罗家晓，一名大模型开发工程师，具有深厚的计算机视觉和大模型应用经验。在华为和航科广软的工作中，我积累了丰富的后端开发和系统架构经验。同时，我在计算机视觉领域发表了多篇学术论文，专注于将前沿技术应用于实际工程问题。
            </p>

            {/* Education */}
            <div className="space-y-6">
              <h3 className="text-cyan-400 text-xl font-semibold font-poppins">
                教育背景
              </h3>
              {resumeData.education.map((edu, index) => (
                <div key={index} className="border-l-2 border-cyan-400 pl-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-white font-semibold">{edu.school}</p>
                      <p className="text-cyan-400 text-sm">{edu.degree}</p>
                    </div>
                    <span className="text-cyan-300/90 text-sm font-medium whitespace-nowrap">{edu.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
