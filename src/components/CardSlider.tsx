// components/CardSlider.js
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CardSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  const cards = [
    {
      title: "Fun OTP",
      description:
        "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications.",
      image: "/slide.png", // Thay bằng đường dẫn thực tế
      bgColor:
        "white border-[1px] border-[#B2B6FF] shadow-[0px_4px_5px_0px_#110C5240]",
      with: "w-full",
      left: "xl:left-[25%] xl:top-0 lg:left-[30%] md:left-[32%] left-[12%] lg:top-[30%] md:top-[27%] bottom-0",
      styleDescription: "2xl:w-[55%] xl:w-[60%] lg:w-[80%] md:w-[80%]",
    },
    {
      title: "HD Future. Tech",
      description:
        "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications.",
      image: "/slide_2.png", // Thay bằng đường dẫn thực tế
      bgColor: "bg-[#C2E3F8] border border-[#CFD1FF]",
      titleStyle: "text-blue-900",
      styleDescription: "2xl:w-[55%] xl:w-[60%] lg:w-[80%] md:w-[80%] w-full",
      with: "w-full",
      left: "2xl:top-[0%] xl:left-[52%] xl:top-[20%] xl:right-[4%] lg:left-[50%] lg:top-[25%] lg:right-[3%] md:left-[50%] md:top-[40%] md:right-[5%] left-[45%] top-[-13%] right-[4%]",
    },
    {
      title: "HD Codelad",
      description:
        "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications.",
      image: "/slide_3.png", // Thay bằng đường dẫn thực tế
      bgColor: "bg-[#1F4392] border border-[#B2B6FF]",
      with: "w-full text-white",
      left: "left-[45%] top-[-13%] right-[4%] lg:left-[45%] lg:top-[20%] lg:right-[4%] md:left-[45%] md:top-[25%] md:right-[0%] xl:left-[52%] xl:top-[18%] xl:right-[4%] 2xl:top-[0%] 2xl:left-[52%] 2xl:right-[4%]",
      styleDescription: "text-white 2xl:w-[50%] xl:w-[63%] md:w-[70%] lg:w-[80%]",
      styleBtn: "bg-white !text-[#122377]",
      styleTitle: "text-white",
    },
  ];

  return (
    <div className="w-[90%] mx-auto mb-10 lg:mt-10 mt-22 overflow-hidden">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative w-full mx-auto p-6 rounded-[125px] ${card.bgColor} overflow-hidden  `}
          >
            <div className={`absolute inset-0 ${card.left} `}>
              <img src={card.image} alt={card.title} className="w-full" />
            </div>
            <div
              className={`relative z-10 text-start pl-5 lg:pl-10 py-10  ${card?.with}`}
            >
              <h3
                className={`font-semibold xl:text-[97px] md:text-[84px] text-[64px] lg-text-[87px] tracking-[-0.006em] text-[#093FB4] ${card?.styleTitle} mt-7 `}
              >
                {card.title}
              </h3>
              <p
                className={`font-normal lg:text-[28px] md:text-[21px] text-lg leading-[37px] tracking-[-0.006em]  text-[#151D50]  mb-24 ${card?.styleDescription}`}
              >
                {card.description}
              </p>
              <button
                className={`block bg-[#122377] text-white lg:px-12 px-6 py-3 rounded-full font-medium lg:text-[37px] md:text-[31px] text-xl leading-[150%] tracking-[0em] ${card?.styleBtn}`}
              >
                Contact Us
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
