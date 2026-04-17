# 个人简历网页 - 部署指南

## 项目概述

这是一个现代化的全屏滚动式个人简历网页，采用 React 19 + Tailwind CSS 4 开发。网页包含 7 个主要板块，支持响应式设计，可在各种设备上流畅运行。

## 快速开始

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:3000
```

### 生产构建

```bash
# 构建项目
npm run build

# 启动生产服务器
npm start
```

## 项目结构

```
personal_resume_site/
├── client/
│   ├── public/              # 静态资源（favicon 等）
│   ├── src/
│   │   ├── components/      # React 组件
│   │   │   ├── Hero.tsx           # 首页
│   │   │   ├── About.tsx          # 关于我
│   │   │   ├── Skills.tsx         # 核心技能
│   │   │   ├── Research.tsx       # 科研成果
│   │   │   ├── Projects.tsx       # 项目历程
│   │   │   ├── Experience.tsx     # 实践经历
│   │   │   └── Contact.tsx        # 联系方式
│   │   ├── pages/
│   │   │   ├── Home.tsx           # 首页（集成所有组件）
│   │   │   └── NotFound.tsx       # 404 页面
│   │   ├── data/
│   │   │   └── resume.ts          # 简历数据
│   │   ├── App.tsx                # 主应用组件
│   │   ├── main.tsx               # React 入口
│   │   └── index.css              # 全局样式
│   └── index.html           # HTML 模板
├── server/
│   └── index.ts             # Express 服务器
├── package.json             # 项目配置
└── DEPLOYMENT_GUIDE.md      # 本文件
```

## 修改内容指南

### 修改个人信息

编辑 `client/src/data/resume.ts` 文件，更新以下内容：

```typescript
export const resumeData = {
  name: "你的名字",                    // 姓名
  title: "你的职位",                   // 职位
  tagline: "你的个人slogan",           // 个人标语
  bio: "你的个人介绍",                 // 个人介绍
  education: [...],                   // 教育背景
  skills: [...],                      // 技能列表
  research: [...],                    // 科研成果
  projects: [...],                    // 项目历程
  experience: [...],                  // 实践经历
  contact: {
    email: "你的邮箱",
    phone: "你的电话",
    github: "GitHub链接",
    linkedin: "LinkedIn链接",
    wechat: "微信号",
  },
};
```

### 修改头像

1. 上传头像图片到项目目录
2. 编辑 `client/src/components/About.tsx`，替换头像部分的占位符

### 修改背景和颜色

全局颜色配置在 `client/src/index.css` 中：

```css
:root {
  --primary: #00d4ff;           /* 主色调（青蓝色） */
  --background: #0f0f1e;        /* 背景色（深紫色） */
  --foreground: #e0e0e0;        /* 文字色 */
  /* 其他颜色配置... */
}
```

## 部署到阿里云 ECS

### 前置条件

- 已购买阿里云 ECS 实例（推荐 Ubuntu 20.04 或更新版本）
- 已安装 Node.js（v16 或更新版本）和 npm
- 已配置 SSH 密钥或密码登录

### 部署步骤

#### 1. 连接到 ECS 实例

```bash
ssh -i your-key.pem ubuntu@your-ecs-ip
```

#### 2. 克隆或上传项目

**方式 A：使用 Git 克隆**

```bash
cd /home/ubuntu
git clone <your-repository-url> personal_resume_site
cd personal_resume_site
```

**方式 B：上传项目文件**

```bash
# 在本地机器上
scp -r -i your-key.pem ./personal_resume_site ubuntu@your-ecs-ip:/home/ubuntu/

# 在 ECS 上
cd /home/ubuntu/personal_resume_site
```

#### 3. 安装依赖

```bash
npm install
```

#### 4. 构建项目

```bash
npm run build
```

#### 5. 配置 PM2（进程管理）

```bash
# 安装 PM2
npm install -g pm2

# 启动应用
pm2 start npm --name "resume-site" -- start

# 设置开机自启
pm2 startup
pm2 save
```

#### 6. 配置 Nginx 反向代理（可选但推荐）

```bash
# 安装 Nginx
sudo apt-get update
sudo apt-get install nginx

# 创建配置文件
sudo nano /etc/nginx/sites-available/resume-site
```

添加以下配置：

```nginx
server {
    listen 80;
    server_name your-domain.com;  # 替换为你的域名

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

启用配置：

```bash
sudo ln -s /etc/nginx/sites-available/resume-site /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### 7. 配置 SSL 证书（HTTPS）

使用 Let's Encrypt 和 Certbot：

```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

#### 8. 配置防火墙

```bash
# 允许 HTTP 和 HTTPS
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

### 常见问题

**Q: 如何更新网页内容？**

A: 编辑 `client/src/data/resume.ts` 文件，然后执行：
```bash
npm run build
pm2 restart resume-site
```

**Q: 如何查看日志？**

A: 使用 PM2 查看日志：
```bash
pm2 logs resume-site
```

**Q: 如何停止或重启应用？**

A:
```bash
pm2 stop resume-site      # 停止
pm2 restart resume-site   # 重启
pm2 delete resume-site    # 删除
```

**Q: 如何配置自定义域名？**

A: 在阿里云控制台中配置 DNS 解析，将域名指向 ECS 实例的公网 IP，然后按照上述 Nginx 配置步骤操作。

## 性能优化建议

1. **启用 Gzip 压缩**：在 Nginx 配置中添加 `gzip on;`
2. **使用 CDN**：将静态资源上传到 CDN（如阿里云 OSS）
3. **缓存策略**：配置浏览器缓存和 Nginx 缓存
4. **数据库连接**：如需后端功能，考虑使用连接池

## 技术栈

- **前端框架**：React 19
- **样式**：Tailwind CSS 4
- **路由**：Wouter
- **动画**：Framer Motion（可选）
- **图标**：Lucide React
- **服务器**：Express.js
- **构建工具**：Vite
- **包管理**：npm/pnpm

## 支持和帮助

如有问题，请检查：

1. Node.js 版本是否正确（`node --version`）
2. 依赖是否完全安装（`npm install`）
3. 防火墙是否允许相应端口
4. 域名 DNS 解析是否正确
5. SSL 证书是否有效

## 许可证

MIT License

---

**祝您的简历网页部署顺利！** 🚀
