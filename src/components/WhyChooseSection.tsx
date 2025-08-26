// components/WhyChooseSection.js
export default function WhyChooseSection() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-gradient-to-b from-white to-blue-50 rounded-2xl shadow-md border border-blue-900">
      {/* Header */}
      <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">
        VÌ SAO HD FUTURE.TECH LÀ SỰ LỰA CHỌN HÀNG ĐẦU <br /> ĐẦU CHO DOANH
        NGHIỆP?
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-800 text-white p-6 rounded-2xl text-center shadow-lg">
          <img
            src="/placeholder-finance.jpg"
            alt="Finance"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">TỐI ƯU CHI PHÍ</h3>
          <p className="text-sm mt-2">
            Chi phí được kiểm soát chặt chẽ, Tech vượt xa mọi đối thủ.
          </p>
        </div>
        <div className="bg-blue-800 text-white p-6 rounded-2xl text-center shadow-lg">
          <img
            src="/placeholder-security.jpg"
            alt="Security"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">TỐI ƯU CHI PHÍ</h3>
          <p className="text-sm mt-2">
            Chi phí được kiểm soát chặt chẽ, Tech vượt xa mọi đối thủ.
          </p>
        </div>
        <div className="bg-blue-800 text-white p-6 rounded-2xl text-center shadow-lg">
          <img
            src="/placeholder-analytics.jpg"
            alt="Analytics"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">TỐI ƯU CHI PHÍ</h3>
          <p className="text-sm mt-2">
            Chi phí được kiểm soát chặt chẽ, Tech vượt xa mọi đối thủ.
          </p>
        </div>
        <div className="bg-blue-800 text-white p-6 rounded-2xl text-center shadow-lg">
          <img
            src="/placeholder-automation.jpg"
            alt="Automation"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">TỐI ƯU CHI PHÍ</h3>
          <p className="text-sm mt-2">
            Chi phí được kiểm soát chặt chẽ, Tech vượt xa mọi đối thủ.
          </p>
        </div>
        <div className="bg-blue-800 text-white p-6 rounded-2xl text-center shadow-lg">
          <img
            src="/placeholder-global.jpg"
            alt="Global"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">TỐI ƯU CHI PHÍ</h3>
          <p className="text-sm mt-2">
            Chi phí được kiểm soát chặt chẽ, Tech vượt xa mọi đối thủ.
          </p>
        </div>
      </div>
    </div>
  );
}
