import { resumeData } from "@/data/resume";
import { ChevronDown, ExternalLink } from "lucide-react";

export default function Research() {
  const scrollToNext = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="research"
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
        <div className="absolute top-20 right-10 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-cyan-400/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Title */}
        <h2 className="section-title text-center mb-16">科研与成果</h2>

        {/* Research Cards */}
        <div className="space-y-8">
          {resumeData.research.map((paper, index) => (
            <div
              key={index}
              className="research-card animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => {
                if (paper.link) {
                  window.open(paper.link, "_blank");
                }
              }}
            >
              {/* Title */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="research-title flex-1"
                >
                  {paper.title}
                </a>
                {paper.link && (
                  <ExternalLink className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                )}
              </div>

              {/* Metadata */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                <span>期刊：{paper.journal}</span>
                <span>身份：{paper.role}</span>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-4">{paper.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {paper.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-xs font-medium border border-cyan-400/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-gray-500 text-sm mt-12">
          点击论文标题可跳转到外部链接
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
