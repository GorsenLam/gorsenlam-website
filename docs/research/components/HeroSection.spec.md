# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Screenshot:** `docs/design-references/mengjian-site/desktop-1440.png`
- **Interaction model:** static

## DOM Structure
- Container: `<section>` with centered content
- Title: `<h1>` with name "孟健"
- Subtitle: `<p>` with "AI 编程创业者 / 技术作者 / 演讲者"
- Description: `<p>` with "前腾讯 T11 | 前字节跳动 3-1 | Nextfield Labs LLC 创始人"

## Computed Styles (exact values from getComputedStyle)

### Container
- display: flex
- flexDirection: column
- alignItems: center
- justifyContent: center
- padding: 4rem 1rem
- minHeight: 100vh

### Title (h1)
- fontSize: 3rem
- fontWeight: 700
- color: oklch(0.205 0 0)
- textAlign: center

### Subtitle (p)
- fontSize: 1.25rem
- color: oklch(0.556 0 0)
- textAlign: center
- marginTop: 1rem

## Text Content (verbatim)
- Title: "孟健"
- Subtitle: "AI 编程创业者 / 技术作者 / 演讲者"
- Description: "前腾讯 T11 | 前字节跳动 3-1 | Nextfield Labs LLC 创始人 | AI 编程、出海产品与技术写作实践者"

## Responsive Behavior
- **Desktop (1440px):** Centered content, large title
- **Mobile (390px):** Same layout, smaller font sizes
