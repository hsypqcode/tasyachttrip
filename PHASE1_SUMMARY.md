# Phase 1 实施报告

**项目**: Diver's Fishing Charters Hobart (www.tasyachttrip.com.au)
**实施日期**: 2026-04-12
**状态**: ✅ 已完成

---

## 目标

将原有的 Vue.js SPA 伪静态网站迁移到 Nuxt 3 SSG (Static Site Generation)，修复 SEO 技术问题，迁移全部内容。

---

## 技术方案

| 组件 | 技术选型 |
|------|---------|
| 框架 | Nuxt 3 (Vue 3 + TypeScript) |
| 渲染模式 | SSG (`nuxt generate`) |
| 部署目标 | Vercel (vercel-static preset) |
| i18n | @nuxtjs/i18n (英文/简体中文/繁体中文) |
| 内容管理 | Nuxt Content (Markdown) |
| 样式 | SCSS + CSS Variables |

---

## 项目结构

```
tasyachttrip/
├── nuxt.config.ts              # 核心配置
├── vercel.json                  # Vercel 部署配置
├── app.vue                      # 根组件
├── assets/scss/
│   ├── main.scss               # 全局样式 + CSS Reset
│   ├── _variables.scss         # 颜色/字体/断点变量
│   └── _mixins.scss           # 响应式/布局 mixin
├── components/
│   ├── layout/
│   │   ├── AppHeader.vue      # 顶部导航（含移动端菜单）
│   │   ├── AppFooter.vue      # 页脚（4栏网格）
│   │   ├── LanguageSwitcher.vue # 语言切换下拉
│   │   └── AppBreadcrumb.vue  # 面包屑（含正确 URL 的 JSON-LD）
│   ├── ui/
│   │   ├── UiSection.vue      # 页面区块容器
│   │   ├── UiCard.vue         # 产品卡片
│   │   └── UiButton.vue       # 按钮组件
│   └── seo/
│       └── JsonLdMarkup.vue   # JSON-LD 结构化数据组件
├── composables/
│   ├── useJsonLd.ts           # TravelAgency / TouristTrip / BreadcrumbList / WebSite
│   ├── useImageAlt.ts         # 多语言图片 alt 解决方案
│   └── useGallery.ts          # 相册筛选 + 分页
├── i18n/
│   ├── en.json               # 英文 UI 翻译
│   ├── zh.json               # 简体中文翻译
│   └── zh-hant.json          # 繁体中文翻译
├── pages/                     # 英文版 (默认)
│   ├── index.vue              # 首页
│   ├── products/
│   │   ├── index.vue          # 产品列表
│   │   ├── sightseeing-fishing-cruise.vue
│   │   ├── private-charters.vue
│   │   └── half-day-hook-dive-grill.vue
│   ├── news/
│   │   ├── index.vue          # 新闻列表
│   │   └── [slug].vue         # 新闻详情（slug 路由）
│   ├── gallery/index.vue      # 相册（5分类 + 分页）
│   ├── about.vue
│   ├── contact.vue
│   └── faq.vue
├── pages/zh/                  # 简体中文版
├── pages/zh-hant/             # 繁体中文版
├── public/
│   ├── robots.txt
│   └── favicon.svg
└── server/api/
    └── sitemap.xml.ts          # 动态 sitemap（含 hreflang）
```

---

## SEO 修复清单

| # | 问题 | 原状态 | 修复方案 | 状态 |
|---|------|--------|----------|------|
| 1 | 两个隐藏重复 H1 | CSS clip 隐藏 | 移除，所有页面一个可见 H1 | ✅ |
| 2 | 无语义 Heading | `<div>` 标签 | 正确使用 H1/H2/H3 | ✅ |
| 3 | 图片无 Alt | 所有图片缺 alt | useImageAlt composable | ✅ |
| 4 | BOOK NOW 死链 | `href="javascript:"` | 占位注释，Phase 2 接入 Bokun | ✅ |
| 5 | 面包屑 JSON-LD 错误 | 旧 hash URL `/#/team1` | 静态 URL `/products/xxx` | ✅ |
| 6 | og:image 相对路径 | `/og-image.jpg` | 绝对 URL | ✅ |
| 7 | Canonical 客户端注入 | JS 动态生成 | SSG 天然解决 | ✅ |
| 8 | 新闻 URL 无关键词 | `/news/6` (数字 ID) | `/news/how-to-catch-lobster-tasmania` | ✅ |
| 9 | sitemap.xml 缺失 | 无 | server/api/sitemap.xml.ts | ✅ |
| 10 | robots.txt 缺失 | 无 | public/robots.txt | ✅ |

---

## 内容迁移清单

| 页面 | URL | 状态 |
|------|-----|------|
| 首页 | `/` `/zh/` `/zh-hant/` | ✅ |
| 产品1: 3小时观光海钓巡游 | `/products/sightseeing-fishing-cruise` | ✅ |
| 产品2: 私人包船预订 | `/products/private-charters` | ✅ |
| 产品3: 半日钓鱼潜水烧烤 | `/products/half-day-hook-dive-grill` | ✅ |
| 关于我们 | `/about` | ✅ |
| 相册 | `/gallery` (5分类 + 分页) | ✅ |
| 新闻 | `/news` + `/news/how-to-catch-lobster-tasmania` | ✅ |
| 联系我们 | `/contact` | ✅ |
| 常见问题 | `/faq` (10条) | ✅ |

---

## 关键文件说明

### nuxt.config.ts
- `nitro.preset: 'vercel-static'` — 静态站点输出
- `nitro.prerender.routes` — 预渲染路由列表（含所有语言版本）
- `i18n.strategy: 'prefix_except_default'` — 英文无前缀，中文 `/zh/`，繁体 `/zh-hant/`
- `sitemap` — Vercel 兼容配置

### useJsonLd.ts
生成以下 Schema.org 结构化数据：
- **TravelAgency** — 全站（首页 + 产品页）
- **TouristTrip** — 产品详情页（价格从 AUD 150 起）
- **BreadcrumbList** — 所有页面（正确静态 URL）
- **WebSite + SearchAction** — 首页

### useGallery.ts
- 60 张图片数据（5分类：vessel/fishing/diving/nature/happy-moments）
- 12 张/页分页
- 支持语言切换 alt

### useImageAlt.ts
- 根据当前语言返回 `alt_zh` / `alt_zh_hant` / `alt`
- 所有图片组件使用此 composable

---

## 部署步骤

### 1. 安装依赖
```bash
cd tasyachttrip
npm install
```

### 2. 本地测试构建
```bash
npm run generate
# 检查 .output/public/ 目录是否为纯静态 HTML
```

### 3. 推送到 GitHub
```bash
git init
git add .
git commit -m "Phase 1: Nuxt 3 SSG migration"
git remote add origin https://github.com/your-username/tasyachttrip.git
git push -u origin main
```

### 4. Vercel 部署
1. 登录 [vercel.com](https://vercel.com)
2. Import GitHub Repository
3. Framework: Nuxt (自动检测)
4. Build Command: `npm run generate`
5. Output Directory: `.output/public`
6. Deploy

---

## Phase 2 待办

- [ ] 接入 Bokun 预订系统 Widget
- [ ] 替换所有 `href="#book"` 占位链接
- [ ] 配置 Bokun 产品目录同步
- [ ] 添加预订表单提交到 Bokun API

---

## 文件统计

- **总文件数**: 48 个
- **Vue 组件**: 17 个
- **TypeScript composables**: 3 个
- **i18n 语言文件**: 3 个
- **页面路由**: 15+ 个（含各语言版本）
- **代码行数**: ~3,500 行

---

## 参考

- 旧站分析报告: `C:\Users\hsypq\.claude\projects\E--claudecode\3467df4f\...`
- 实施计划: `C:\Users\hsypq\.claude\plans\temporal-dreaming-tower.md`
