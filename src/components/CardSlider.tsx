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
    autoplay: true,
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
      with: "w-1/2",
      left: "left-[30%]",
    },
    {
      title: "HD Future. Tech",
      description:
        "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications.",
      image: "/slide_2.png", // Thay bằng đường dẫn thực tế
      bgColor: "bg-[#C2E3F8] border border-[#CFD1FF]",
      titleStyle: "text-blue-900",
      with: "w-[56%]",
      left: "left-[45%] top-[-13%] right-[4%]",
    },
    {
      title: "HD Codelad",
      description:
        "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications.",
      image: "/slide_3.png", // Thay bằng đường dẫn thực tế
      bgColor: "bg-[#1F4392] border border-[#B2B6FF]",
      with: "w-[56%] text-white",
      left: "left-[45%] top-[-13%] right-[4%]",
      styleDescription: "text-white",
      styleBtn: "bg-white !text-[#122377]",
      styleTitle: "text-white",
    },
  ];

  return (
    <div className="w-full container mx-auto my-10 overflow-hidden">
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
              className={`relative z-10 text-start pl-10 py-10  ${card?.with}`}
            >
              <h3
                className={`font-semibold text-[97px] tracking-[-0.006em] text-[#093FB4]  ${card?.styleTitle} `}
              >
                {card.title}
              </h3>
              <p
                className={`font-normal text-[28px] leading-[37px] tracking-[-0.006em]  text-[#151D50]  mb-24 ${card?.styleDescription}`}
              >
                {card.description}
              </p>
              <button
                className={`block bg-[#122377] text-white px-12 py-3 rounded-full font-medium text-[37px] leading-[150%] tracking-[0em] ${card?.styleBtn}`}
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
