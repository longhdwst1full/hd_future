// components/FooterSection.js
export default function FooterSection() {
  return (
    <div className="relative w-full max-w-6xl mx-auto p-6 bg-gradient-to-b from-white to-blue-50 rounded-2xl shadow-lg border border-blue-900">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-blue-900 flex items-center justify-center gap-2">
          <span>HD</span>
          <span className="text-xl">FutureTech</span>
        </h1>
        <p className="text-blue-700 text-sm mt-2">
          Chúng tôi đã và đang không ngừng nỗ lực để mang lại giá trị cao nhất
          cho khách hàng Việt Nam.
        </p>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-blue-900">DỊCH VỤ</h3>
          <ul className="text-blue-700 mt-2 space-y-1">
            <li>Lập trình phần mềm</li>
            <li>AI & Khoa học dữ liệu</li>
            <li>Thiết kế sản phẩm</li>
            <li>DevOps & Cloud</li>
          </ul>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold text-blue-900">SẢN PHẨM</h3>
          <ul className="text-blue-700 mt-2 space-y-1">
            <li>Tài chính</li>
            <li>Bán lẻ & TMDT</li>
            <li>Công nghệ</li>
          </ul>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold text-blue-900">CÔNG TY</h3>
          <ul className="text-blue-700 mt-2 space-y-1">
            <li>Về chúng tôi</li>
            <li>Tin tức</li>
            <li>Chính sách</li>
            <li>Liên hệ</li>
          </ul>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="text-center bg-blue-50 p-4 rounded-xl border border-blue-900">
          <p className="text-blue-700 font-semibold">Follow Our</p>
          <p className="text-blue-700 mt-2">
            Linkedin <span className="text-blue-500">🌐</span>
          </p>
        </div>
        <div className="text-center bg-blue-50 p-4 rounded-xl border border-blue-900">
          <p className="text-blue-700 font-semibold">Hop Our</p>
          <p className="text-blue-700 mt-2">
            Twitter <span className="text-blue-500">🐦</span>
          </p>
        </div>
        <div className="text-center bg-blue-50 p-4 rounded-xl border border-blue-900">
          <p className="text-blue-700 font-semibold">Join Our</p>
          <p className="text-blue-700 mt-2">
            Telegram <span className="text-blue-500">📡</span>
          </p>
        </div>
        <div className="text-center bg-blue-50 p-4 rounded-xl border border-blue-900">
          <p className="text-blue-700 font-semibold">Follow Us On</p>
          <p className="text-blue-700 mt-2">
            Instagram <span className="text-blue-500">📸</span>
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white p-6 rounded-xl border border-blue-900 shadow-md">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">
          GỬI YÊU CẦU TƯ VẤN GIẢI PHÁP
        </h2>
        <p className="text-blue-700 text-sm mb-6">
          Chúng tôi luôn sẵn sàng hỗ trợ bạn trong mọi lúc. Hãy để lại thông tin
          để được tư vấn.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 border border-blue-300 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 border border-blue-300 rounded"
          />
        </div>
        <div className="mt-4">
          <p className="text-blue-700 mb-2">Why are you contacting us?</p>
          <div className="grid grid-cols-2 gap-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> HD FutureTech
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> HD Codelad
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Fun FTP
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Others
            </label>
          </div>
        </div>
        <div className="mt-4">
          <textarea
            placeholder="Your Message"
            className="w-full p-2 border border-blue-300 rounded h-24"
          ></textarea>
        </div>
        <button className="mt-4 bg-blue-900 text-white px-6 py-2 rounded-full">
          Submit
        </button>
      </div>

      {/* Footer */}
      <p className="text-center text-blue-700 text-sm mt-6">
        Copyright © 2025 HD FutureTech.Com | All Rights Reserved
      </p>
    </div>
  );
}
