import { chromium } from 'playwright';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const ROOT = join(import.meta.dirname, '..');
const DOCS = join(ROOT, 'docs', 'research', 'mengjian-site');
const DESIGN_REFS = join(ROOT, 'docs', 'design-references', 'mengjian-site');

// Create directories
mkdirSync(DOCS, { recursive: true });
mkdirSync(DESIGN_REFS, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

console.log('正在访问 mengjian.site...');
await page.goto('https://mengjian.site', { waitUntil: 'networkidle' });

// Take screenshots
console.log('正在截图...');
await page.screenshot({ path: join(DESIGN_REFS, 'desktop-1440.png'), fullPage: true });
await page.setViewportSize({ width: 390, height: 844 });
await page.screenshot({ path: join(DESIGN_REFS, 'mobile-390.png'), fullPage: true });

// Extract content
console.log('正在提取内容...');
const content = await page.evaluate(() => {
  const extractText = (selector) => {
    const el = document.querySelector(selector);
    return el ? el.textContent.trim() : '';
  };

  const extractAllText = (selector) => {
    return [...document.querySelectorAll(selector)].map(el => el.textContent.trim()).filter(Boolean);
  };

  return {
    title: extractText('h1'),
    subtitle: extractText('h2'),
    description: extractText('meta[name="description"]'),
    sections: extractAllText('section, [class*="section"]'),
    links: [...document.querySelectorAll('a[href]')].map(a => ({
      text: a.textContent.trim(),
      href: a.href
    })).filter(l => l.text),
    images: [...document.querySelectorAll('img[src]')].map(img => ({
      src: img.src,
      alt: img.alt
    })),
    styles: {
      fonts: [...new Set([...document.querySelectorAll('*')].slice(0, 100).map(el => 
        getComputedStyle(el).fontFamily
      ))],
      colors: [...new Set([...document.querySelectorAll('*')].slice(0, 100).map(el => 
        getComputedStyle(el).color
      ))]
    }
  };
});

// Save extracted content
writeFileSync(join(DOCS, 'content.json'), JSON.stringify(content, null, 2));
console.log('✅ 内容已保存到 docs/research/mengjian-site/content.json');

await browser.close();
console.log('✅ 提取完成');
