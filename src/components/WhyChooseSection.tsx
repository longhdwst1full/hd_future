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
      <h2 className="font-semibold lg:text-[43px] md:text-[33px] sm:text-2xl text-[20px] leading-[150%] tracking-[0em] text-center text-[#243761] lg:mb-28 sm:mb-20 mb-10 sm:w-full w-[90%] m-auto">
        VÌ SAO HD FUTURE. TECH LÀ{" "}
        <span className="text-[#093FB4]">SỰ LỰA CHỌN HÀNG ĐẦU</span> <br className="xl:block hidden" /> ĐẦU
        CHO DOANH NGHIỆP?
      </h2>
      <div className="flex flex-wrap sm:justify-center justify-around gap-y-3 xl:gap-14 md:gap-7 sm:gap-5 lg:p-0 sm:px-16">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`bg-white border border-[#204CDE] sm:rounded-[70px] rounded-[30px] overflow-hidden lg:w-[30%] w-[46%] transform transition duration-500 hover:scale-105 hover:shadow-xl`}
          >
            <div
              className={`sm:rounded-b-[70px] rounded-b-[30px] overflow-hidden ${service.bg} flex justify-center items-center lg:h-[349px] md:h-[310px] sm:h-[250px] h-[152px]`}
            >
              <img
                src={service.img}
                alt={service.alt}
                className="w-full h-full object-cover rounded-b-[70px]"
                loading="lazy"
              />
            </div>
            <div className="lg:text-start text-center lg:pt-6 p-4 sm:px-6 px-4  sm:mb-4">
              <h3 className="font-semibold lg:text-[30px] md:text-[24px] sm:text-base text-[13px] md:leading-[150%] text-[#093FB4] sm:py-2">
                {service.title}
              </h3>
              <p className="font-normal sm:text-[17px] text-[8px]  md:leading-[150%] lg:mt-2 text-[#151D50]">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
