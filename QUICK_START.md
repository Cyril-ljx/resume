# 快速修改指南

## 最常见的修改操作

### 1. 修改个人基本信息

编辑文件：`client/src/data/resume.ts`

```typescript
export const resumeData = {
  name: "你的名字",                    // 修改这里
  title: "你的职位",                   // 修改这里
  tagline: "你的个人slogan",           // 修改这里
  bio: "你的个人介绍",                 // 修改这里
  // ...
};
```

### 2. 添加/修改技能

在 `client/src/data/resume.ts` 中找到 `skills` 数组：

```typescript
skills: [
  { name: "Python", percentage: 90, icon: "code" },
  { name: "PyTorch", percentage: 80, icon: "brain" },
  // 添加新技能：
  { name: "你的技能", percentage: 85, icon: "code" },
],
```

可用的图标：`code`、`brain`、`database`、`cpu`

### 3. 添加/修改科研成果

在 `client/src/data/resume.ts` 中找到 `research` 数组：

```typescript
research: [
  {
    title: "论文标题",
    journal: "期刊名称",
    role: "作者身份",
    description: "论文描述",
    tags: ["标签1", "标签2"],
    link: "https://论文链接.com",  // 可选，不填则不可点击
  },
  // 添加更多论文...
],
```

### 4. 添加/修改项目

在 `client/src/data/resume.ts` 中找到 `projects` 数组：

```typescript
projects: [
  {
    title: "项目名称",
    duration: "2025.03 - 2025.05",
    role: "你的角色",
    description: "项目描述",
    tags: ["技术1", "技术2"],
  },
  // 添加更多项目...
],
```

### 5. 添加/修改工作经历

在 `client/src/data/resume.ts` 中找到 `experience` 数组：

```typescript
experience: [
  {
    company: "公司名称",
    position: "职位",
    duration: "2025.04 - 至今",
    description: "工作描述",
    tags: ["技能1", "技能2"],
  },
  // 添加更多经历...
],
```

### 6. 修改联系方式

在 `client/src/data/resume.ts` 中找到 `contact` 对象：

```typescript
contact: {
  email: "your.email@example.com",
  phone: "+86 138 1234 5678",
  github: "https://github.com/yourname",
  linkedin: "https://linkedin.com/in/yourname",
  wechat: "your_wechat_id",
},
```

### 7. 修改头像

1. 准备一张头像图片（推荐 500x500px 的正方形图片）
2. 上传到 `/home/ubuntu/webdev-static-assets/` 目录
3. 使用 `manus-upload-file --webdev` 获取 CDN URL
4. 编辑 `client/src/components/About.tsx`，替换头像部分

找到这段代码：

```tsx
<div className="w-64 h-64 rounded-full border-4 border-cyan-400 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center overflow-hidden shadow-lg shadow-cyan-400/20">
  <div className="text-center">
    <div className="text-6xl mb-4">👤</div>
    <p className="text-cyan-400 text-sm">头像图片</p>
  </div>
</div>
```

替换为：

```tsx
<img 
  src="你的头像CDN链接" 
  alt="头像" 
  className="w-64 h-64 rounded-full border-4 border-cyan-400 object-cover shadow-lg shadow-cyan-400/20"
/>
```

### 8. 修改颜色主题

编辑 `client/src/index.css`，修改 `:root` 中的颜色变量：

```css
:root {
  --primary: #00d4ff;           /* 主色调 */
  --background: #0f0f1e;        /* 背景色 */
  --foreground: #e0e0e0;        /* 文字色 */
  --secondary: #2d1b4e;         /* 次要色 */
  --accent: #00d4ff;            /* 强调色 */
}
```

### 9. 修改背景图片

编辑各个组件文件（如 `client/src/components/Hero.tsx`），找到 `backgroundImage` 属性，替换为新的 CDN 链接。

## 修改后的步骤

1. **本地测试**（可选）：
   ```bash
   npm run dev
   # 访问 http://localhost:3000 查看效果
   ```

2. **构建项目**：
   ```bash
   npm run build
   ```

3. **部署到服务器**：
   ```bash
   # 如果使用 PM2
   pm2 restart resume-site
   ```

## 常见修改场景

### 场景 1：我想添加一个新的科研成果

1. 打开 `client/src/data/resume.ts`
2. 在 `research` 数组中添加新对象
3. 填写论文信息和链接
4. 保存文件
5. 构建并部署

### 场景 2：我想修改首页的 slogan

1. 打开 `client/src/data/resume.ts`
2. 找到 `tagline` 字段
3. 修改文本
4. 保存文件
5. 构建并部署

### 场景 3：我想改变网页的颜色

1. 打开 `client/src/index.css`
2. 修改 `:root` 中的颜色值
3. 保存文件
4. 构建并部署

## 文件对应关系

| 修改内容 | 文件位置 |
|---------|---------|
| 个人信息、技能、项目等 | `client/src/data/resume.ts` |
| 首页内容 | `client/src/components/Hero.tsx` |
| 关于我内容 | `client/src/components/About.tsx` |
| 技能显示 | `client/src/components/Skills.tsx` |
| 科研成果 | `client/src/components/Research.tsx` |
| 项目历程 | `client/src/components/Projects.tsx` |
| 工作经历 | `client/src/components/Experience.tsx` |
| 联系方式 | `client/src/components/Contact.tsx` |
| 全局样式和颜色 | `client/src/index.css` |

## 需要帮助？

- 查看 `DEPLOYMENT_GUIDE.md` 了解部署相关问题
- 查看 `DESIGN_PLAN.md` 了解设计决策
- 检查 `package.json` 了解项目依赖

祝修改顺利！🎉
