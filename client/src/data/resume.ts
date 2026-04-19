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
  background?: string;
  description?: string;
  responsibilities?: {
    title: string;
    detail: string;
  }[];
  achievement?: string;
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
      degree: "软件工程 - 学士",
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
      title:
        "A One-Step Transformer-based Adaptive Tracking Network for hyperspectral videos",
      journal: "Signal, Image and Video Processing Article",
      role: "导师第一作者，本人第二作者",
      description: "高光谱视频目标追踪的深度学习方法",
      tags: ["Vision Transformer", "高光谱目标跟踪", "深度学习"],
      link: "https://link.springer.com/article/10.1007/s11760-025-04536-3",
    },
    {
      title:
        "ISeeShip: A Multi-Task Benchmark with Reinforcement Learning for Semantically Explainable Ship Visual Intelligence",
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
      background:
        "传统 RAG 难以承载多步推理，海事调查官人工撰写单份报告需 3-4 小时。本项目旨在构建基于图结构的多 Agent 系统，实现分钟级、符合官方体例的自动化根因分析。",
      responsibilities: [
        {
          title: "混合架构编排",
          detail:
            "设计「路由 + ReAct 子 Agent + 9 节点 DAG」混合架构，ReAct 承接开放式工具调用、DAG 承载定责流程；引入 Pydantic 契约与降级兜底强制 JSON 校验，消除船名与法规的格式幻觉。",
        },
        {
          title: "高阶 RAG 与评测闭环",
          detail:
            "基于 PyMuPDF 解析 + 256 字符分块，BGE-M3 向量化后存入 ChromaDB 三类分层知识库；检索侧采用 Dense + BM25 双路召回、RRF 融合排序、BGE-Reranker 阈值过滤 (0.15) 三阶段；结合 ship_type 实体注入与 kb_filter 元数据隔离，Fan-out 并发让查询耗时减半；基于 RAGas + 50 条测试集构建评测闭环，context_recall 达 82.7%。",
        },
        {
          title: "长期记忆与 HITL 审批",
          detail:
            "接入 SQLite Checkpointer 实现跨会话长期记忆，支持对生成报告的多轮追问；运用 interrupt/resume 完成高风险节点的 HITL 审批断点恢复。",
        },
      ],
      tags: [
        "LangGraph",
        "ReAct",
        "RAG",
        "ChromaDB",
        "BGE-M3",
        "Pydantic",
        "RAGas",
      ],
    },
    {
      title: "智能海上光电吊舱监测系统",
      duration: "2025.06 - 2025.08",
      role: "后端开发",
      description:
        "负责基于 Spring Boot 的后端服务开发，基于 MTS-M600 协议对 C# 原生吊舱控制逻辑二次开发，封装通用指令构造器并将 40+ 控制指令抽象为 RESTful 接口。利用 OpenCV 完成 RTSP 流捕获与编码优化，对接 YOLO、SAM、SpTFuse 等异构推理服务，实现端到端视频检测延迟稳定控制在 100ms 以内。",
      tags: ["Spring Boot", "OpenCV", "YOLO", "RESTful API", "RTSP"],
    },
  ] as Project[],

  // Experience
  experience: [
    {
      company: "北京外企德科人力资源服务有限公司 (华为 OD)",
      position: "Java 开发工程师",
      duration: "2022.05 - 2023.07",
      description:
        "参与华为云链 DevOps 平台开发，负责后端微服务开发和系统架构设计。工作内容：1. 采用外观模式 + 自定义注解设计可扩展的检查点采集框架，新增检查点只需加注解与配置、无需修改核心流程；2. 基于 Redis 缓存检查点 API 元数据实现动态配置与热更新，规则调整无需发版；在分布式架构下使用分布式锁保证单节点定时任务集成第三方数据，避免多实例重复执行；3. 基于 MQ 实现微服务间异步消息流并对接 WeLink 应用号完成告警推送，解耦采集与通知链路；4. 负责每周生产异常日志分析与采集逻辑优化，持续提升稳定性。",
    },
    {
      company: "航科广软 (广州) 数字科技有限公司",
      position: "Java 开发工程师",
      duration: "2021.05 - 2022.05",
      description:
        "作为后端开发工程师参与两个政企 SaaS 项目（南海一岗双责和白云智慧环保项目）的研发。基于 POI 实现 Excel 动态导入导出，支持模板化配置以适配多业务场景；基于 RabbitMQ 实现 OA 系统通知公告的异步数据推送，解耦上下游系统；基于 EventBus 实现考核任务模块与评分模块的跨模块业务联动；通过定时任务轮询第三方 WebService 接口同步污染源监测数据，并引入线程池优化串行 for 循环，显著缩短同步耗时；基于 Activiti 工作流引擎实现企业新增 / 更新审批流程，覆盖多级审批与驳回重办场景。",
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
