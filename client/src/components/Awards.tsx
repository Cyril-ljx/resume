import { ChevronDown } from "lucide-react";

export default function Awards() {
  const scrollToNext = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const awards = [
    {
      title: "校一等奖学金",
      issuer: "广东工业大学",
      year: "2024",
      description: "学业成绩优异，综合素质突出",
    },
    {
      title: "校联基优秀学生奖学金",
      issuer: "广东工业大学",
      year: "2024",
      description: "综合测评优秀，获得校联基金支持",
    },
    {
      title: "绿盟公益-教育奖助学金",
      issuer: "绿盟信息安全技术有限公司",
      year: "2024",
      description: "公益教育支持计划获得资助",
    },
    {
      title: "广工卓越应用型人才培养计划",
      issuer: "广东工业大学",
      year: "2024",
      description: "相关成果积分排名学院第三",
    },
    {
      title: "华为杯第二十一届中国研究生数学建模竞赛国家三等奖",
      issuer: "中国研究生数学建模竞赛",
      year: "2024",
      description: "国家级数学建模竞赛三等奖",
    },
    {
      title: "蓝桥杯省一等奖",
      issuer: "蓝桥杯全国大学生软件和信息技术大赛",
      year: "2024",
      description: "程序设计竞赛省级一等奖",
    },
  ];

  return (
    <section
      id="awards"
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

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Title */}
        <h2 className="section-title text-center mb-16">所获荣誉</h2>

        {/* Awards Grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="animate-fadeInUp group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-full p-6 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20">
                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {index + 1}
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors pr-8">
                  {award.title}
                </h3>

                <p className="text-sm text-cyan-400 mb-3 font-medium">
                  {award.issuer}
                </p>

                <p className="text-sm text-gray-300 mb-3 leading-relaxed">
                  {award.description}
                </p>

                {/* Accent line */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-transparent w-0 group-hover:w-full transition-all duration-500 rounded-b-lg"></div>
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
