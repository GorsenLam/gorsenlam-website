export function AboutSection() {
  const highlights = [
    { title: '国家认证高级AI训练师', description: '专业认证，权威背书' },
    { title: '5.7万+社群组局官', description: '一人成事社群主理人' },
    { title: '广州OPC夜校发起人', description: '推动AI教育普及' },
    { title: 'AI项目变现超6位数', description: '实战出真知' },
  ];

  return (
    <section className="px-4 py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">关于我</h2>
      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-lg text-gray-600 leading-relaxed">
          前电力行业技术总监、银行项目经理，现专注AI企业培训与社群运营。
          帮助20+企业完成AI转型，培养超过1000+名AI实战人才。
          擅长将复杂的AI技术转化为可落地的业务场景，让每个人都能用AI提效。
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {highlights.map((item, index) => (
          <div key={index} className="p-6 bg-gray-50 rounded-lg text-center">
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
