// components/WhyChooseSection.js
export default function WhyChooseSection() {
  return (
    <div className="container mx-auto p-6 bg-gradient-to-b from-white to-blue-50 rounded-2xl ">
      {/* Header */}
      <h2 className="font-semibold text-[43px] leading-[150%] tracking-[0em] text-center text-[#243761] mb-20">
        VÌ SAO HD FUTURE. TECH LÀ{" "}
        <span className="text-[#093FB4]">SỰ LỰA CHỌN HÀNG ĐẦU</span> <br /> ĐẦU
        CHO DOANH NGHIỆP?
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white border border-[#204CDE] shadow-[0px_4px_0px_4px_#1959CFD6] rounded-[70px] overflow-hidden">
          <div className="rounded-b-[70px] overflow-hidden bg-[#1E3788] flex justify-center items-center">
            <img
              src="./save_money.png"
              alt="Finance"
              className="w-full h-full object-cover rounded-b-[70px]"
              loading="lazy"
            />
          </div>
          <div className="text-start p-4 px-8 mb-4">
            <h3 className="font-semibold text-[30px] leading-[150%] text-[#093FB4] py-2">
              TỐI ƯU CHI PHÍ
            </h3>
            <p className="font-normal text-[17px] leading-[150%] mt-2 text-[#151D50]">
              Chi phí được kiểm soát chặt chẽ, Tech vượt xa mọi đối thủ.
            </p>
          </div>
        </div>
        <div className="bg-white border border-[#204CDE] rounded-[70px] overflow-hidden">
          <div className="rounded-b-[70px] overflow-hidden bg-[#1E3788] flex justify-center items-center h-[349px]">
            <img
              src="./protect.png"
              alt="Security"
              className="h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="text-start p-4 px-8 mb-4">
            <h3 className="font-semibold text-[30px] leading-[150%] text-[#093FB4] py-2">
              TỐI ƯU CHI PHÍ
            </h3>
            <p className="font-normal text-[17px] leading-[150%] mt-2 text-[#151D50]">
              Chi phí được kiểm soát chặt chẽ, Tech vượt xa mọi đối thủ.
            </p>
          </div>
        </div>
        <div className="bg-white border border-[#204CDE] rounded-[70px] overflow-hidden">
          <div className="rounded-b-[70px] overflow-hidden bg-[#1E3788] flex justify-center items-center h-[349px]">
            <img
              src="afficientci.png"
              alt="Analytics"
              className="h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="text-start p-4 px-8 mb-4">
            <h3 className="font-semibold text-[30px] leading-[150%] text-[#093FB4] py-2">
              TỐI ƯU CHI PHÍ
            </h3>
            <p className="font-normal text-[17px] leading-[150%] mt-2 text-[#151D50]">
              Chi phí được kiểm soát chặt chẽ, Tech vượt xa mọi đối thủ.
            </p>
          </div>
        </div>
        <div className="bg-white border border-[#204CDE] rounded-[70px] overflow-hidden">
          <div className="rounded-b-[70px] overflow-hidden bg-[#1775CD] flex justify-center items-center h-[349px]">
            <img
              src="/automation.png"
              alt="Automation"
              className="h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="text-start p-4 px-8 mb-4">
            <h3 className="font-semibold text-[30px] leading-[150%] text-[#093FB4] py-2">
              TỐI ƯU CHI PHÍ
            </h3>
            <p className="font-normal text-[17px] leading-[150%] mt-2 text-[#151D50]">
              Chi phí được kiểm soát chặt chẽ, Tech vượt xa mọi đối thủ.
            </p>
          </div>
        </div>
        <div className="bg-white border border-[#204CDE] rounded-[70px] overflow-hidden">
          <div className="rounded-b-[70px] overflow-hidden bg-[#1E3788] flex justify-center items-center h-[349px]">
            <img
              src="/connect the world  2.png"
              alt="Global"
              className="h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="text-start p-4 px-8 mb-4">
            <h3 className="font-semibold text-[30px] leading-[150%] text-[#093FB4] py-2">
              TỐI ƯU CHI PHÍ
            </h3>
            <p className="font-normal text-[17px] leading-[150%] mt-2 text-[#151D50]">
              Chi phí được kiểm soát chặt chẽ, Tech vượt xa mọi đối thủ.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
