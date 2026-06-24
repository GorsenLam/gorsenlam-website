export function ContactSection() {
  const links = [
    { name: 'GitHub', url: 'https://github.com/mengjian-github', handle: '@mengjian-github' },
    { name: '知乎', url: 'https://www.zhihu.com/people/meng-jian-39-32', handle: '孟健' },
    { name: '掘金', url: 'https://juejin.cn/user/4212984287073895', handle: '孟健' },
    { name: '公众号', url: 'https://mp.weixin.qq.com/s/Z4k_5_waWJbRRo5lZBZmog', handle: '孟健AI编程' },
  ];

  return (
    <section className="px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">联系 & 社群</h2>
      <div className="flex flex-wrap justify-center gap-8 max-w-2xl mx-auto">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:underline"
          >
            {link.name}: {link.handle}
          </a>
        ))}
      </div>
    </section>
  );
}
