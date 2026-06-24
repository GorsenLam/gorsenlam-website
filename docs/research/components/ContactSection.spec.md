# ContactSection Specification

## Overview
- **Target file:** `src/components/ContactSection.tsx`
- **Screenshot:** `docs/design-references/mengjian-site/desktop-1440.png`
- **Interaction model:** static

## DOM Structure
- Container: `<section>` with centered content
- Title: `<h2>` with "联系 & 社群"
- Links: GitHub, 知乎, 掘金, 公众号

## Computed Styles (exact values from getComputedStyle)

### Container
- display: flex
- flexDirection: column
- alignItems: center
- gap: 2rem
- padding: 4rem 1rem

### Link
- color: oklch(0.205 0 0)
- textDecoration: underline

## Text Content (verbatim)
- GitHub: @mengjian-github
- 知乎: 孟健
- 掘金: 孟健
- 公众号: 孟健AI编程

## Responsive Behavior
- **Desktop (1440px):** Centered layout
- **Mobile (390px):** Same layout
