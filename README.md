# Diver's Fishing Charters Hobart — Nuxt 3 SSG

塔斯马尼亚霍巴特专业钓鱼/潜水/观光船旅官网，使用 **Nuxt 3 SSG** (Static Site Generation) 构建，部署在 **Vercel**。

## 技术栈

| 组件 | 技术 |
|------|------|
| 框架 | Nuxt 3 (Vue 3 + TypeScript) |
| 渲染模式 | SSG (`nuxt generate`) |
| 部署 | Vercel |
| i18n | @nuxtjs/i18n (英文/简体中文/繁体中文) |
| 内容管理 | Nuxt Content (Markdown) |
| 样式 | SCSS |

## 快速开始

```bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 本地构建（静态）
npm run generate

# 本地预览静态产物
npm run preview
```

## 项目结构

```
tasyachttrip/
├── assets/scss/           # 全局样式
│   ├── main.scss
│   ├── _variables.scss    # 颜色、断点、字体变量
│   └── _mixins.scss       # 响应式、布局 mixin
├── components/
│   ├── layout/            # AppHeader, AppFooter, LanguageSwitcher, AppBreadcrumb
│   ├── ui/               # UiSection, UiCard, UiButton
│   ├── gallery/           # GalleryGrid, Filter, Pagination (集成在页面内)
│   └── seo/               # JsonLdMarkup
├── composables/
│   ├── useJsonLd.ts       # 结构化数据 (TravelAgency, TouristTrip, BreadcrumbList)
│   ├── useImageAlt.ts     # 多语言图片 alt
│   └── useGallery.ts      # 相册筛选/分页
├── i18n/                  # 3种语言 UI 翻译
│   ├── en.json
│   ├── zh.json
│   └── zh-hant.json
├── pages/                 # 路由页面
│   ├── index.vue          # 首页
│   ├── about.vue
│   ├── contact.vue
│   ├── faq.vue
│   ├── products/
│   │   ├── index.vue      # 产品列表
│   │   ├── sightseeing-fishing-cruise.vue
│   │   ├── private-charters.vue
│   │   └── half-day-hook-dive-grill.vue
│   ├── news/
│   │   ├── index.vue      # 新闻列表
│   │   └── [slug].vue     # 新闻详情（slug 格式）
│   ├── gallery/
│   │   └── index.vue      # 相册（5分类 + 分页）
│   ├── zh/                # 中文版页面
│   └── zh-hant/           # 繁体中文版页面
├── public/
│   ├── robots.txt
│   └── favicon.svg
└── server/api/
    └── sitemap.xml.ts      # 动态 sitemap 生成
```

## SEO 修复清单（相比旧站）

| # | 问题 | 状态 |
|---|------|------|
| 1 | 两个隐藏重复 H1 | ✅ 已修复 — 每页一个可见 H1 |
| 2 | 无语义 Heading | ✅ 已修复 — H1/H2/H3 正确结构 |
| 3 | 图片无 Alt | ✅ 已修复 — useImageAlt composable |
| 4 | 面包屑指向旧 hash URL | ✅ 已修复 — 静态 URL |
| 5 | og:image 相对路径 | ✅ 已修复 — 绝对 URL |
| 6 | Canonical 客户端注入 | ✅ SSG 天然解决 |
| 7 | 新闻 URL 无关键词 | ✅ `/news/6` → `/news/how-to-catch-lobster-tasmania` |
| 8 | sitemap.xml | ✅ server/api/sitemap.xml.ts |
| 9 | robots.txt | ✅ public/robots.txt |

## 预订系统

当前 BOOK NOW 按钮为占位状态，预留 Phase 2 接入 Bokun 预订系统。

## 部署 Vercel

1. 将项目推送到 GitHub
2. 登录 [Vercel](https://vercel.com)，Import GitHub 项目
3. Vercel 自动检测 Nuxt 框架
4. 构建命令：`npm run generate`
5. 输出目录：`.output/public`
6. 点击 Deploy

## 环境要求

- Node.js 20+
- npm 9+
