export function MilestonesSection() {
  const milestones = [
    { year: '2025.10', event: '全职创业，创办 Nextfield Labs LLC' },
    { year: '2024 – 2025.10', event: '字节跳动 Flow 部门 · 前端技术 Leader（3-1）' },
    { year: '2025', event: 'AI 主题书籍持续出版，个人品牌从技术负责人升级为技术作者与创业者' },
    { year: '2015 – 2024', event: '腾讯 T11 · QQ 大技术五组负责人' },
  ];

  return (
    <section className="px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">里程碑</h2>
      <div className="max-w-2xl mx-auto space-y-8">
        {milestones.map((milestone, index) => (
          <div key={index} className="flex gap-4">
            <div className="text-sm text-muted-foreground w-32 flex-shrink-0">{milestone.year}</div>
            <div className="text-foreground">{milestone.event}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
