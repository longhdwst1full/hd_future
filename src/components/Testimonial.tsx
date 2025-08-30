import { useRef, useEffect } from "react";

// Simple fade-in animation using Intersection Observer
function useFadeInOnVisible() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("animate-fadein");
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return ref;
}

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

export default function Testimonial() {
  const sectionRef = useFadeInOnVisible();

  return (
    <div className="mt-10" ref={sectionRef}>
      <h2 className="font-semibold sm:text-[43px] text-[32px] leading-[150%] text-center text-[#243761] sm:mb-2">
        TESTIMONIAL
      </h2>
      <p className="font-normal text-center sm:text-[28px] text-[15px] leading-[37px] tracking-[-0.006em] text-[#093FB4] mb-8">
        Here&apos;s what podcasters are saying about Transistor
      </p>
      <div className="bg-[#C1E3F9] lg:rounded-[191px] rounded-[88px] border-[1px] border-[#C1E3F9] overflow-hidden pt-12 lg:px-24 sm:px-9 px-2 lg:mx-0 sm:mx-5">
        <div className="w-full sm:columns-3 columns-2 sm:gap-6 gap-2 mb-10">
          {testimonialData.map((data, index) => (
            <div
              key={index}
              className="bg-white border border-blue-900 lg:p-9 md:p-4 p-2 shadow-[0_8px_3.4px_-3px_rgba(103,187,255,0.51)] lg:rounded-[77px] sm:rounded-[70px] rounded-[35px] break-inside-avoid sm:mb-6 mb-3 transition-transform duration-500 ease-in-out hover:scale-105 animate-fadein-up"
              style={{ animationDelay: `${index * 120}ms` }}
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
                  <p className="text-[#151D50] font-normal md:text-[21px] sm:text-lg  text-[7px]">
                    {data.name}
                  </p>
                  <p className="font-normal sm:text-[12px] text-[6px] text-[#5162CD]">
                    {data.title}
                  </p>
                </div>
              </div>
              <p className="text-[#093FB4] lg:mt-8 md:mt-6 sm:mb-6 mb-4 lg:mb-10 font-normal lg:text-[24px] md:text-xl sm:text-lg text-[7px] lg:leading-[38px] lg:tracking-[-0.6%] md:leading-[29px] sm:leading-[20px] leading-[13px] tracking-[-0.006em] sm:line-clamp-none line-clamp-[12]">
                {data.testimonial}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-10 relative lg:h-[420px] sm:h-[350px] h-[180px] m-auto text-center">
        <div className="absolute top-0 left-0 right-0 bottom-0  w-full  overflow-hidden">
          <img
            src="./connect the world  2.png"
            alt=""
            className=" w-full object-cover h-full animate-fadein"
          />
        </div>

        <button className="absolute left-1/2 -translate-x-1/2 block m-auto bg-[#2857BE] text-[#D8E4FF] sm:px-12 px-7 py-3 rounded-[40px] font-semibold sm:text-[29px] text-base leading-[150%] tracking-[0%] z-[9999999] hover:bg-blue-700 transition-all duration-300 cursor-pointer animate-bounce">
          Read More
        </button>
      </div>

      <div className="bg-[#BFE2F8] rounded-b-[180px] lg:pb-12 pb-6 overflow-hidden relative">
        <img
          src="./Ellipse 21.png"
          alt=""
          className="  absolute top-[20%] left-[20%] animate-pulse"
        />
        <img
          src="./Ellipse 21.png"
          alt=""
          className="  absolute top-[38%] left-[10%] animate-pulse"
        />
        <img
          src="./Ellipse 21.png"
          alt=""
          className="  absolute top-[10%] right-[10%] animate-pulse"
        />
        <img
          src="./Ellipse 21.png"
          alt=""
          className="  absolute top-[35%] right-[20%] animate-pulse"
        />
        <img
          src="./Ellipse 21.png"
          alt=""
          className="  absolute bottom-[40%] right-[15%] animate-pulse"
        />
        <img
          src="./Ellipse 21.png"
          alt=""
          className="  absolute top-[50%] right-[35%] animate-pulse"
        />
        <div className="bg-[linear-gradient(179.87deg,#2FA8CC_-19.91%,#032D89_73.02%)]  rounded-b-[145px] overflow-hidden">
          <div className="lg:py-10 py-6  text-center sm:mb-10 mb-5 lg:mt-10 sm:mt-5">
            <h3 className="font-semibold lg:text-[54px] md:text-[37px] sm:text-[30px] text-[15px]  lg:leading-[60px] md:leading-[41px] tracking-[7%] text-white">
              SẴN SÀNG <span className="text-[#50FFE2]">CHUYỂN ĐỔI</span>
              <br />
              DOANH NGHIỆP CỦA BẠN ?
            </h3>
            <p className="text-[#F6F8FF] font-medium lg:text-[22px] md:text-[16px] md:leading-[21px] leading-[11px] lg:mt-[18px] sm:text-[14px] text-[9px] mt-3 sm:mt-4 md:mb-9 sm:mb-10 mb-8 md:w-full sm:w-[90%] w-[80%] mx-auto animate-fadein">
              Hợp tác cùng&nbsp;<span className="font-bold">HD CodeLab</span>
              &nbsp;để tăng tốc hành trình chuyển đổi số. Cùng kiến tạo giá trị
              vượt <br className="hidden sm:inline-block" /> trội cho doanh nghiệp bạn.
            </p>
            <div className="lg:mb-10  mb-3">
              <button className="bg-white text-[#093FB4] hover:bg-gray-50 lg:text-[29px] md:text-[21px]  text-[12px] sm:text-lg font-semibold transition-all duration-300 hover:scale-105 px-6 py-3 rounded-full shadow-[inset_0px_3px_0px_0px_#FFFFFF,inset_0px_6px_7.2px_0px_rgba(87,255,54,0.25),0px_0px_0px_3px_rgba(255,223,96,0.25)] cursor-pointer animate-fadein">
                Get Started
              </button>
            </div>
          </div>

          <div className="relative xl:h-[450px] lg:h-[400px] sm:h-[300px] h-[200px] w-full">
            <div className="absolute top-0 left-[-200px] right-[-180px] bottom-0">
              <img
                src="./Ellipse 12.png"
                alt=""
                className="w-full h-full animate-fadein"
              />
              <div className="absolute top-[20%] left-[20%] bottom-0 right-[15%]">
                <img
                  src="./Group 60.png"
                  alt=""
                  className="h-full animate-fadein-up"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
