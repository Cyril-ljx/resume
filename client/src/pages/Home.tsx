import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Research from "@/components/Research";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";

/**
 * 个人简历网页 - 全屏滚动式设计
 *
 * 设计理念：
 * - 深紫色背景 + 青蓝色主色调
 * - 全屏滚动式布局，每个板块占满屏幕
 * - 现代科技风格，具有视觉层次感
 * - 流畅的过渡动画和交互效果
 *
  * 板块顺序：
  * 1. Hero - 首页介绍
  * 2. About - 关于我
  * 3. Skills - 核心技能
  * 4. Research - 科研成果
  * 5. Projects - 项目历程
  * 6. Experience - 实践经历
  * 7. Awards - 所获荣誉
  * 8. Contact - 联系方式
 */
export default function Home() {
  return (
    <div className="w-full bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Research Section */}
      <Research />

      {/* Projects Section */}
      <Projects />

      {/* Experience Section */}
      <Experience />

      {/* Awards Section */}
      <Awards />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
