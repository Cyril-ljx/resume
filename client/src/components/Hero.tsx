import { resumeData } from "@/data/resume";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="resume-section relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-20"
      style={{
        backgroundImage:
          "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663550943543/PNgETnHQ86YRv6xSaknBXG/hero-background-QnvJYQ8RPU4fS9oNLbVuLX.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 -z-10"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto animate-fadeInUp">
        {/* Name */}
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 font-poppins">
          {resumeData.name}
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl text-cyan-400 font-semibold mb-6 font-poppins">
          大模型应用开发工程师
        </h2>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 font-poppins max-w-2xl mx-auto">
          {resumeData.tagline}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-3 justify-center mb-16">
          {[
            "Python",
            "PyTorch",
            "MLLMs",
            "Agent",
            "RAG",
            "LangChain",
            "Java",
          ].map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Bio snippet */}
        <p className="text-gray-400 text-sm md:text-base mb-12 max-w-2xl mx-auto">
          
        </p>


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
