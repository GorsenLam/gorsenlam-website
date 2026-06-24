# ProductsSection Specification

## Overview
- **Target file:** `src/components/ProductsSection.tsx`
- **Screenshot:** `docs/design-references/mengjian-site/desktop-1440.png`
- **Interaction model:** static

## DOM Structure
- Container: `<section>` with grid layout
- Title: `<h2>` with "产品矩阵"
- Grid: 2x2 grid of product cards
- Each card: title, description, link

## Computed Styles (exact values from getComputedStyle)

### Container
- display: grid
- gridTemplateColumns: repeat(2, 1fr)
- gap: 2rem
- padding: 4rem 1rem

### Product Card
- padding: 2rem
- borderRadius: 0.5rem
- border: 1px solid oklch(0.922 0 0)
- backgroundColor: oklch(1 0 0)

## Text Content (verbatim)
- Products: 字流, MCP Hub, OpenClaw 101, 飞书转公众号

## Responsive Behavior
- **Desktop (1440px):** 2-column grid
- **Mobile (390px):** Single column
