export function CoursesSection() {
  const courses = [
    {
      series: 'Agent智能体系列',
      description: '从零搭建你的AI助手，掌握Prompt Engineering、工具调用、多Agent协作',
      courses: ['AI Agent 基础入门', '高级Prompt工程', '多Agent系统设计'],
      color: 'blue'
    },
    {
      series: 'AI一人公司系列',
      description: '用AI武装自己，一个人就是一支军队，实现高效创业',
      courses: ['AI内容创作', 'AI电商运营', 'AI获客系统'],
      color: 'green'
    },
    {
      series: '企业AI+系列',
      description: '帮助传统企业完成AI转型，提升团队效率',
      courses: ['企业AI战略规划', '团队AI技能培训', 'AI工作流落地'],
      color: 'purple'
    },
  ];

  const colorMap: Record<string, string> = {
    blue: 'bg-blue-50 border-blue-200',
    green: 'bg-green-50 border-green-200',
    purple: 'bg-purple-50 border-purple-200',
  };

  return (
    <section id="courses" className="px-4 py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">课程体系</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {courses.map((course, index) => (
          <div key={index} className={`p-6 rounded-lg border ${colorMap[course.color]}`}>
            <h3 className="text-xl font-bold mb-3">{course.series}</h3>
            <p className="text-gray-600 text-sm mb-4">{course.description}</p>
            <ul className="space-y-2">
              {course.courses.map((c, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
