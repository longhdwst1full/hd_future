import React from "react";

const services = [
  {
    img: "./save_money.png",
    alt: "Finance",
    bg: "bg-[#1E3788]",
    title: "TỐI ƯU CHI PHÍ",
    desc: "Chi phí được kiểm soát chặt chẽ, Tech vượt xa mọi đối thủ.",
  },
  {
    img: "./protect.png",
    alt: "Security",
    bg: "bg-[#1E3788]",
    title: "TỐI ƯU CHI PHÍ",
    desc: "Chi phí được kiểm soát chặt chẽ, Tech vượt xa mọi đối thủ.",
  },
  {
    img: "afficientci.png",
    alt: "Analytics",
    bg: "bg-[#1E3788]",
    title: "TỐI ƯU CHI PHÍ",
    desc: "Chi phí được kiểm soát chặt chẽ, Tech vượt xa mọi đối thủ.",
  },
  {
    img: "/automation.png",
    alt: "Automation",
    bg: "bg-[#1775CD]",
    title: "TỐI ƯU CHI PHÍ",
    desc: "Chi phí được kiểm soát chặt chẽ, Tech vượt xa mọi đối thủ.",
  },
  {
    img: "/connect the world  2.png",
    alt: "Global",
    bg: "bg-[#1E3788]",
    title: "TỐI ƯU CHI PHÍ",
    desc: "Chi phí được kiểm soát chặt chẽ, Tech vượt xa mọi đối thủ.",
  },
];

export default function WhyChooseSection() {
  return (
    <div className="lg:w-[90%] w-full mx-auto lg:p-6 p-4 rounded-2xl relative lg:mt-8">
      <h2 className="font-semibold lg:text-[43px] md:text-[33px] leading-[150%] tracking-[0em] text-center text-[#243761] lg:mb-28 mb-20">
        VÌ SAO HD FUTURE. TECH LÀ{" "}
        <span className="text-[#093FB4]">SỰ LỰA CHỌN HÀNG ĐẦU</span> <br /> ĐẦU
        CHO DOANH NGHIỆP?
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-14 md:gap-7 gap-10 lg:p-0 px-16">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`bg-white border border-[#204CDE] ${
              idx == 0 ? "shadow-[0px_4px_0px_4px_#1959CFD6]" : ""
            }   rounded-[70px] overflow-hidden`}
          >
            <div
              className={`rounded-b-[70px] overflow-hidden ${service.bg} flex justify-center items-center lg:h-[349px] md:h-[310px] h-[250px]`}
            >
              <img
                src={service.img}
                alt={service.alt}
                className="w-full h-full object-cover rounded-b-[70px]"
                loading="lazy"
              />
            </div>
            <div className="text-start lg:pt-6 p-4 px-8 mb-4">
              <h3 className="font-semibold lg:text-[30px] md:text-[24px] text-base leading-[150%] text-[#093FB4] py-2">
                {service.title}
              </h3>
              <p className="font-normal text-[17px] leading-[150%] mt-2 text-[#151D50]">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
