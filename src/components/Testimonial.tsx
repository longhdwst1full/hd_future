// components/Testimonial.tsx

export default function Testimonial() {
  const testimonialData = [
    {
      name: "Mark Thompson",
      title: "CEO of EventMasters",
      testimonial:
        "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
    },
    {
      name: "Mark Thompson",
      title: "CEO of EventMasters",
      testimonial:
        "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process. Our experienced  collaboration tools to keep you informed throughout the development process.",
    },
    {
      name: "Mark Thompson",
      title: "CEO of EventMasters",
      testimonial:
        "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools  r specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process",
    },
    {
      name: "Mark Thompson",
      title: "CEO of EventMasters",
      testimonial:
        "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
    },
    {
      name: "Mark Thompson",
      title: "CEO of EventMasters",
      testimonial:
        "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
    },
  ];

  return (
    <div className="mt-10">
      <h2 className="font-semibold text-[43px] leading-[150%] text-center text-[#243761] mb-2">
        TESTIMONIAL
      </h2>
      <p className="font-normal text-center text-[28px] leading-[37px] tracking-[-0.006em] text-[#093FB4] mb-8">
        Here&apos;s what podcasters are saying about Transistor
      </p>
      <div className="bg-[#C1E3F9] lg:rounded-[191px] rounded-[88px] border-[1px] border-[#C1E3F9] overflow-hidden pt-12 lg:px-24 px-9 lg:mx-0 mx-5">
        <div className="w-full columns-3 gap-6 mb-10">
          {testimonialData.map((data, index) => (
            <div
              key={index}
              className="bg-white border border-blue-900 lg:p-9 md:p-4 p-2 shadow-[0_8px_3.4px_-3px_rgba(103,187,255,0.51)] lg:rounded-[77px] rounded-[70px] break-inside-avoid mb-6"
            >
              <div className="flex items-center lg:gap-4 gap-2 mb-4 mt-6">
                <div className="w-20 rounded-xs overflow-hidden">
                  <img
                    src="/Profile.png"
                    alt={data.name}
                    className="w-full object-cover"
                  />
                </div>
                <div className="lg:ml-3">
                  <p className="text-[#151D50] font-normal text-[21px]   ">
                    {data.name}
                  </p>
                  <p className="font-normal text-[12px] text-[#5162CD]">
                    {data.title}
                  </p>
                </div>
              </div>
              <p className="text-[#093FB4] lg:mt-8 md:mt-6 mb-8 lg:mb-10 font-normal lg:text-[24px] md:text-xl text-lg lg:leading-[38px] lg:tracking-[-0.6%] text-[22px] leading-[29px] tracking-[-0.006em]">
                {data.testimonial}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-10 relative lg:h-[420px] h-[350px] m-auto text-center">
        <div className="absolute top-0 left-0 right-0 bottom-0  w-full  overflow-hidden">
          <img
            src="./connect the world  2.png"
            alt=""
            className=" w-full object-cover h-full   "
          />
        </div>

        <button
          className={` absolute left-1/2 -translate-x-1/2  block m-auto bg-[#2857BE] text-[#D8E4FF] px-12 py-3 rounded-[40px] font-semibold text-[29px] leading-[150%] tracking-[0%]  z-[9999999]`}
        >
          Read More
        </button>
      </div>

      <div className="bg-[#BFE2F8] rounded-b-[180px] lg:pb-12 pb-6 overflow-hidden relative">
        <img
          src="./Ellipse 21.png"
          alt=""
          className="  absolute top-[20%] left-[20%]"
        />
        <img
          src="./Ellipse 21.png"
          alt=""
          className="  absolute top-[38%] left-[10%]"
        />
        <img
          src="./Ellipse 21.png"
          alt=""
          className="  absolute top-[10%] right-[10%]"
        />
        <img
          src="./Ellipse 21.png"
          alt=""
          className="  absolute top-[35%] right-[20%]"
        />
        <img
          src="./Ellipse 21.png"
          alt=""
          className="  absolute bottom-[40%] right-[15%]"
        />
        <img
          src="./Ellipse 21.png"
          alt=""
          className="  absolute top-[50%] right-[35%]"
        />
        <div className="bg-[linear-gradient(179.87deg,#2FA8CC_-19.91%,#032D89_73.02%)]  rounded-b-[145px] overflow-hidden">
          <div className="lg:py-10 py-6  text-center mb-10 lg:mt-10 mt-5">
            <h3 className="font-semibold lg:text-[54px] md:text-[37px] text-[30px]  leading-[60px] tracking-[7%] text-white">
              SẴN SÀNG <span className="text-[#50FFE2]">CHUYỂN ĐỔI</span>
              <br />
              DOANH NGHIỆP CỦA BẠN ?
            </h3>
            <p className="text-[#F6F8FF] font-medium lg:text-[22px] md:text-[16px] text-[14px] mt-7 mb-14">
              Hợp tác cùng&nbsp;<span className="font-bold">HD CodeLab</span>
              &nbsp;để tăng tốc hành trình chuyển đổi số. Cùng kiến tạo giá trị
              vượt <br /> trội cho doanh nghiệp bạn.
            </p>
            <div className="lg:mb-10  mb-3">
              <button className="bg-white text-[#093FB4] hover:bg-gray-50 lg:text-[29px] md:text-xl font-semibold transition-all duration-300 hover:scale-105 px-6 py-3 rounded-full shadow-[inset_0px_3px_0px_0px_#FFFFFF,inset_0px_6px_7.2px_0px_rgba(87,255,54,0.25),0px_0px_0px_3px_rgba(255,223,96,0.25)]">
                Get Started
              </button>
            </div>
          </div>

          <div className="relative lg:h-[400px] h-[300px] w-full">
            <div className="absolute top-0 left-[-200px] right-[-180px] bottom-0">
              <img src="./Ellipse 12.png" alt="" className="w-full h-full" />
              <div className="absolute top-[20%] left-[20%]   bottom-0 right-[15%]">
                <img src="./Group 60.png" alt="" className="h-full " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
