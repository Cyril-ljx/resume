import { resumeData as baseData } from "@/data/resume";

export interface Skill {
  name: string;
  percentage: number;
  icon: string;
}

export interface Research {
  title: string;
  journal: string;
  role: string;
  description: string;
  tags: string[];
  link: string;
}

export interface Project {
  title: string;
  duration: string;
  role: string;
  description: string;
  tags: string[];
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
}

export const resumeData = {
  // Hero section
  name: "罗家晓",
  title: "大模型应用开发工程师",
  tagline: "从代码到创新，用技术解决真实问题",
  bio: "我是罗家晓，一名大模型开发工程师，具有深厚的计算机视觉和大模型应用经验。在华为和航科广软的工作中，我积累了丰富的后端开发和系统架构经验。同时，我在计算机视觉领域发表了多篇学术论文，专注于将前沿技术应用于实际工程问题。",
  education: [
    {
      school: "广东工业大学",
      degree: "计算机技术 - 硕士",
      duration: "2024.09 - 2027.06 (预期)",
    },
    {
      school: "岭南师范学院",
      degree: "软件工程-学士",
      duration: "2017.09 - 2021.06",
    },
  ],

  // Skills
  skills: [
    { name: "Python", percentage: 90, icon: "code" },
    { name: "Java", percentage: 90, icon: "code" },
    { name: "PyTorch", percentage: 90, icon: "brain" },
    { name: "LLMs", percentage: 85, icon: "brain" },
    { name: "Agent", percentage: 85, icon: "cpu" },
    { name: "RAG", percentage: 85, icon: "database" },
  ] as Skill[],

  // Research & Publications
  research: [
    {
      title: "A One-Step Transformer-based Adaptive Tracking Network for hyperspectral videos",
      journal: "Signal, Image and Video Processing Article",
      role: "导师第一作者，本人第二作者",
      description: "高光谱视频目标追踪的深度学习方法",
      tags: ["Vision Transformer", "高光谱目标跟踪", "深度学习"],
      link: "https://link.springer.com/article/10.1007/s11760-025-04536-3",
    },
    {
      title: "ISeeShip: A Multi-Task Benchmark with Reinforcement Learning for Semantically Explainable Ship Visual Intelligence",
      journal: "Information Sciences",
      role: "导师第一作者，本人第二作者",
      description: "多模态大模型在船舶智能感知中的应用",
      tags: ["多模态大模型", "智能船舶感知", "强化学习"],
      link: "",
    },
  ] as Research[],

  // Projects
  projects: [
    {
      title: "海事事故智能分析系统",
      duration: "2026.01 - 2026.03",
      role: "独立开发",
      description:
        "传统 RAG 难以承载多步推理，海事调查官人工撑写单份报告需 3-4 小时。本项目旨在构建基于图结构的多 Agent 系统，实现分钟级、符合官方体例的自动化根因分析。基于 LangGraph 编排 9 节点工作流，引入 Pydantic 异常回传与 Try-Catch 降级双层兵底，保障极端解析失败流转不中断；构建 ChromaDB 分层库实施 Fan-out 检索，通过 BGE-Reranker 设 0.15 硬阈值前置拦截低质上下文；结合 interrupt/resume 实现 HITL 审批无缛恢复，并基于 astream_events 流式渲染推理时间线。输出包含「5 Whys×4M1E」归因的 11 章节结构化报告。",
      tags: ["LangGraph", "Agent", "RAG", "ChromaDB", "Pydantic"],
    },
    {
      title: "智能海上光电吊舱监测系统",
      duration: "2025.06 - 2025.08",
      role: "后端开发",
      description:
        "负责基于Spring Boot的后端服务开发，基于MTS-M600协议对C#原生吊舱控制逻辑二次开发，封装通用指令构造器并将40+控制指令抽象为RESTful接口。利用OpenCV完成RTSP流捕获与编码优化，对接YOLO、SAM、SpTFuse等异构推理服务，实现端到端视频检测延迟稳定控制在100ms以内。",
      tags: ["Spring Boot", "OpenCV", "YOLO", "RESTful API", "RTSP"],
    },
  ] as Project[],

  // Experience
  experience: [
    {
      company: "北京外企德科人力资源服务有限公司(华为OD)",
      position: "Java开发工程师",
      duration: "2022.05 - 2023.07",
      description: "参与华为云链DevOps平台开发，负责后端微服务开发和系统架构设计。工作内容：1. 采用外观模式 + 自定义注解设计可扩展的检查点采集框架，新增检查点只需加注解与配置、无需修改核心流程；2. 基于Redis缓存检查点API元数据实现动态配置与热更新，规则调整无需发版；在分布式架构下使用分布式锁保证单节点定时任务集成第三方数据，避免多实例重复执行；3. 基于MQ实现微服务间异步消息流并对接WeLink应用号完成告警推送，解耦采集与通知链路；4. 负责每周生产异常日志分析与采集逻辑优化，持续提升稳定性。",
    },
    {
      company: "航科广软(广州)数字科技有限公司",
      position: "Java开发工程师",
      duration: "2021.05 - 2022.05",
      description: "作为后端开发工程师参与两个政企SaaS项目（南海一岗双责和白云智慧环保项目）的研发。基于POI实现Excel动态导入导出，支持模板化配置以适配多业务场景；基于RabbitMQ实现OA系统通知公告的异步数据推送，解耦上下游系统；基于EventBus实现考核任务模块与评分模块的跨模块业务联动；通过定时任务轮询第三方WebService接口同步污染源监测数据，并引入线程池优化串行for循环，显著缩短同步耗时；基于Activiti工作流引擎实现企业新增/更新审批流程，覆盖多级审批与驳回重办场景。",
    },
  ] as Experience[],

  // Contact
  contact: {
    email: "1939945226@qq.com",
    phone: "+86 158 8983 6831",
    github: "https://github.com/Cyril-ljx",
    wechat: "Cyril-0728",
  },
};
