export function ProductsSection() {
  const products = [
    { name: '字流', description: '主产品 14 平台一键发布工具', link: 'https://ziliu.online' },
    { name: 'MCP Hub', description: '中国 MCP 服务综合平台', link: 'https://mcp-cn.com' },
    { name: 'OpenClaw 101', description: 'AI 助手入门导航站', link: 'https://openclaw101.dev' },
    { name: '飞书转公众号', description: '格式转换工具', link: 'https://larkmd.online' },
  ];

  return (
    <section className="px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">产品矩阵</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {products.map((product) => (
          <a
            key={product.name}
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-muted-foreground mt-2">{product.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
