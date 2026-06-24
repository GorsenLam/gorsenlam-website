export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <h1 className="text-5xl md:text-7xl font-bold text-center">林高山</h1>
      <p className="text-xl md:text-2xl text-slate-300 mt-4 text-center">AI 企业培训师 / 社群主理人 / OPC 夜校发起人</p>
      <div className="flex flex-wrap justify-center gap-8 mt-12">
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-400">10+</div>
          <div className="text-slate-400">年行业经验</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-green-400">4</div>
          <div className="text-slate-400">年AI领域</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-purple-400">6位数</div>
          <div className="text-slate-400">AI项目变现</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-orange-400">20+</div>
          <div className="text-slate-400">企业服务</div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-12">
        <a href="#courses" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">课程体系</a>
        <a href="#contact" className="px-8 py-3 border border-white hover:bg-white/10 rounded-lg transition-colors">合作咨询</a>
      </div>
    </section>
  );
}
