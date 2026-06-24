export function ContactSection() {
  return (
    <section id="contact" className="px-4 py-20 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">合作咨询</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-semibold mb-6">联系方式</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-blue-400">微信</span>
              <span>gorsenlam</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-400">公众号</span>
              <span>一人成事</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-400">邮箱</span>
              <span>admin@gorsenlam.com</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-400">线下</span>
              <span>广州</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-6">留言咨询</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="您的姓名"
              className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="您的邮箱"
              className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="咨询内容"
              rows={4}
              className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              提交咨询
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
