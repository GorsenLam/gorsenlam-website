# MilestonesSection Specification

## Overview
- **Target file:** `src/components/MilestonesSection.tsx`
- **Screenshot:** `docs/design-references/mengjian-site/desktop-1440.png`
- **Interaction model:** static

## DOM Structure
- Container: `<section>` with timeline layout
- Title: `<h2>` with "里程碑"
- Timeline: Vertical timeline with dates and events

## Computed Styles (exact values from getComputedStyle)

### Container
- display: flex
- flexDirection: column
- gap: 2rem
- padding: 4rem 1rem

### Timeline Item
- display: flex
- gap: 1rem
- alignItems: flex-start

## Text Content (verbatim)
- Milestones:
  - 2025.10: 全职创业，创办 Nextfield Labs LLC
  - 2024 – 2025.10: 字节跳动 Flow 部门 · 前端技术 Leader（3-1）
  - 2015 – 2024: 腾讯 T11 · QQ 大技术五组负责人

## Responsive Behavior
- **Desktop (1440px):** Vertical timeline
- **Mobile (390px):** Same layout, smaller text
