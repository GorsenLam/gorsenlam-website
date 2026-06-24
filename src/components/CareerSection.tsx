export function CareerSection() {
  const timeline = [
    {
      period: '2022 - 至今',
      title: 'AI企业培训师 / 社群主理人',
      company: '一人成事社群 / OPC夜校',
      achievements: ['服务20+企业AI转型', '培养1000+AI实战人才', 'AI项目变现超6位数']
    },
    {
      period: '2018 - 2022',
      title: '银行项目经理',
      company: '某大型银行',
      achievements: ['主导数字化转型项目', '风控系统AI升级', '团队管理10+人']
    },
    {
      period: '2012 - 2018',
      title: '电力行业技术总监',
      company: '某电力集团',
      achievements: ['智能电网技术架构', '自动化系统建设', '技术团队管理']
    },
  ];

  return (
    <section className="px-4 py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">职业背景</h2>
      <div className="max-w-3xl mx-auto">
        {timeline.map((item, index) => (
          <div key={index} className="flex gap-6 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
              {index < timeline.length - 1 && <div className="w-0.5 h-full bg-gray-300"></div>}
            </div>
            <div className="flex-1 pb-8">
              <div className="text-sm text-blue-600 font-semibold">{item.period}</div>
              <h3 className="text-xl font-bold mt-1">{item.title}</h3>
              <div className="text-gray-500 mt-1">{item.company}</div>
              <ul className="mt-3 space-y-1">
                {item.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
