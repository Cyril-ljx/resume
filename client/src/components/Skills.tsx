import { resumeData } from "@/data/resume";
import { ChevronDown, Code, Brain, Database, Cpu } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const iconMap: Record<string, React.ReactNode> = {
  code: <Code className="w-6 h-6" />,
  brain: <Brain className="w-6 h-6" />,
  database: <Database className="w-6 h-6" />,
  cpu: <Cpu className="w-6 h-6" />,
};

// 单根技能柱：滚动进入视口时，柱子从 0 涨到 target，数字同步从 0 跳到 target
function SkillBar({
  skill,
  index,
  active,
}: {
  skill: { name: string; percentage: number; icon: string };
  index: number;
  active: boolean;
}) {
  const [displayPercent, setDisplayPercent] = useState(0);

  useEffect(() => {
    if (!active) {
      setDisplayPercent(0);
      return;
    }
    const duration = 1500;               // 和柱子 transition 时长对齐
    const delay = index * 200;           // 每根柱子错开 0.2s
    const startAt = performance.now() + delay;
    let raf = 0;

    const tick = (now: number) => {
      const elapsed = now - startAt;
      if (elapsed < 0) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic，和柱子 cubic-bezier 的感觉接近
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayPercent(Math.round(skill.percentage * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, skill.percentage, index]);

  return (
    <div>
      <div className="flex items-center gap-4 mb-3">
        <div className="text-cyan-400">
          {iconMap[skill.icon] || <Code className="w-6 h-6" />}
        </div>
        <span className="text-white font-semibold text-lg flex-1">
          {skill.name}
        </span>
        <span className="text-cyan-400 font-bold tabular-nums">
          {displayPercent}%
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-4 bg-slate-700 rounded-full overflow-hidden shadow-lg">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 to-cyan-300 rounded-full shadow-md"
          style={{
            width: active ? `${skill.percentage}%` : "0%",
            transition: `width 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
            transitionDelay: `${index * 0.2}s`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // 进入视口时播放动画，离开后重置，下次滚回来重新播
          setInView(entry.isIntersecting);
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollToNext = () => {
    const researchSection = document.getElementById("research");
    researchSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
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
        <h2 className="section-title text-center mb-16">核心技能</h2>

        {/* Skills Grid */}
        <div className="space-y-8">
          {resumeData.skills.map((skill, index) => (
            <SkillBar
              key={`${skill.name}-${index}`}
              skill={skill}
              index={index}
              active={inView}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:text-cyan-400 transition-colors"
        aria-label="滚动到下一节"
      >
        <ChevronDown className="w-8 h-8 text-cyan-400" />
      </button>
    </section>
  );
}
