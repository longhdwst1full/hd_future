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
        "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process. Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
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
      <div className="bg-[#C1E3F9] rounded-[191px] border-[1px] border-[#C1E3F9] overflow-hidden pt-12 px-24">
        <div className="flex gap-6 mb-10 items-start w-full flex-wrap">
          {testimonialData.map((data, index) => (
            <div
              key={index}
              className="bg-white border border-blue-900 p-10 shadow-[0_8px_3.4px_-3px_rgba(103,187,255,0.51)] basis-[calc(33.333%-1rem)] rounded-[77px]"
            >
              <div className="flex items-center gap-4 mb-4 mt-6">
                <div className="w-20 rounded-xs overflow-hidden">
                  <img
                    src="/Profile.png"
                    alt={data.name}
                    className="w-full object-cover"
                  />
                </div>
                <div className="ml-3">
                  <p className="text-[#151D50] font-normal text-[21px] leading-[150%] tracking-[0px]">
                    {data.name}
                  </p>
                  <p className="font-normal text-[12px] leading-[150%] tracking-[0px] text-[#5162CD]">
                    {data.title}
                  </p>
                </div>
              </div>
              <p className="text-[#093FB4] mt-8 mb-10 font-normal text-[24px] leading-[38px] tracking-[-0.6%]">
                {data.testimonial}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-10 relative h-[420px] m-auto text-center">
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

      <div className="bg-[#BFE2F8] rounded-b-[180px] pb-20 relative">
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
          <div className="py-10 text-center mb-10 mt-10">
            <h3 className="font-semibold text-[54px] leading-[60px] tracking-[7%] text-white">
              SẴN SÀNG <span className="text-[#50FFE2]">CHUYỂN ĐỔI</span>
              <br />
              DOANH NGHIỆP CỦA BẠN ?
            </h3>
            <p className="text-[#F6F8FF] font-medium text-[22px] mt-7 mb-14">
              Hợp tác cùng&nbsp;<span className="font-bold">HD CodeLab</span>
              &nbsp;để tăng tốc hành trình chuyển đổi số. Cùng kiến tạo giá trị
              vượt <br /> trội cho doanh nghiệp bạn.
            </p>
            <div className="mb-10">
              <button className="bg-white text-[#093FB4] hover:bg-gray-50 text-[29px] font-semibold transition-all duration-300 hover:scale-105 px-6 py-3 rounded-full shadow-[inset_0px_3px_0px_0px_#FFFFFF,inset_0px_6px_7.2px_0px_rgba(87,255,54,0.25),0px_0px_0px_3px_rgba(255,223,96,0.25)]">
                Get Started
              </button>
            </div>
          </div>

          <div className="relative h-[400px] w-full">
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
