import { resumeData } from "@/data/resume";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  MessageCircle,
  ArrowUp,
} from "lucide-react";

export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const contactLinks = [
    {
      icon: <Mail className="w-8 h-8" />,
      label: "邮箱",
      value: "1939945226@qq.com",
      href: "mailto:1939945226@qq.com",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      label: "电话",
      value: "+86 158 8983 6831",
      href: "tel:+86 158 8983 6831",
    },
    {
      icon: <Github className="w-8 h-8" />,
      label: "GitHub",
      value: "Cyril-ljx",
      href: "https://github.com/Cyril-ljx",
    },

    {
      icon: <MessageCircle className="w-8 h-8" />,
      label: "微信",
      value: "Cyril-0728",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
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

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
        {/* Title */}
        <h2 className="section-title mb-16">联系方式</h2>

        {/* Contact Grid - 2 rows x 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-2xl mx-auto">
          {contactLinks.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group p-6 rounded-lg bg-slate-900/50 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-cyan-400 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {contact.icon}
              </div>
              <h3 className="text-white font-semibold mb-2">{contact.label}</h3>
              <p className="text-gray-400 text-sm break-all">{contact.value}</p>
            </a>
          ))}
        </div>

        {/* Footer message */}
        <div className="space-y-4">
          <p className="text-gray-400">
            感谢您浏览我的简历网页，期待与您交流！
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 {resumeData.name}. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:text-cyan-400 transition-colors"
      >
        <ArrowUp className="w-8 h-8 text-cyan-400" />
      </button>
    </section>
  );
}
