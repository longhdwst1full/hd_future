import { motion } from "framer-motion";
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
      image: "/slide.png",
      styleTitle: "text-[40px] md:py-0 py-3",
      bgColor:
        "white border-[1px] border-[#B2B6FF] shadow-[0px_4px_5px_0px_#110C5240]",
      with: "w-full",
      left: "xl:left-[25%] xl:top-0 lg:left-[30%] md:left-[32%] left-[12%] lg:top-[30%] md:top-[45%] bottom-0 sm:top-[35%] top-[60%]",
      styleDescription: "2xl:w-[55%] xl:w-[60%] lg:w-[80%] md:w-[80%]",
    },
    {
      title: "HD Future. Tech",
      description:
        "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications.",
      image: "/slide_2.png",
      bgColor: "bg-[#C2E3F8] border border-[#CFD1FF]",
      styleTitle: "text-blue-900 text-[40px] md:py-0 py-3",
      styleDescription:
        "2xl:w-[55%] xl:w-[60%] lg:w-[80%] md:w-[80%] sm:w-[80%] w-full",
      with: "w-full",
      left: "2xl:top-[0%] xl:left-[52%] xl:top-[20%] xl:right-[4%] lg:left-[50%] lg:top-[25%] lg:right-[3%] md:left-[50%] md:top-[40%] md:right-[5%] left-[45%] sm:top-[45%] top-[56%] right-[4%]",
    },
    {
      title: "HD Codelad",
      description:
        "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications.",
      image: "/slide_3.png",
      bgColor: "bg-[#1F4392] border border-[#B2B6FF]",
      with: "w-full text-white",
      left: "left-[45%] top-[-13%] right-[4%] lg:left-[45%] lg:top-[20%] lg:right-[4%] md:left-[45%] md:top-[25%] md:right-[0%] xl:left-[52%] xl:top-[18%] xl:right-[4%] 2xl:top-[0%] 2xl:left-[52%] 2xl:right-[4%] sm:top-[45%] top-[55%]",
      styleDescription:
        "text-white 2xl:w-[50%] xl:w-[63%] md:w-[70%] lg:w-[80%]",
      styleBtn: "bg-white !text-[#122377]",
      styleTitle: "text-white ",
    },
  ];

  return (
    <div className="w-[90%] mx-auto sm:mb-10 lg:mt-10 mt-22 overflow-hidden">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`relative w-full mx-auto p-6 rounded-[125px] ${card.bgColor} overflow-hidden  `}
          >
            <div
              className={`absolute inset-0 opacity-90 pointer-events-none ${card.left} `}
            >
              <img src={card.image} alt={card.title} className="w-full" />
            </div>
            <div
              className={`relative z-10 text-start sm:pl-5 pl-0 lg:pl-10 py-10  ${card?.with}`}
            >
              <h3
                className={`font-semibold xl:text-[97px] md:text-[84px] sm:text-[64px] lg-text-[87px] text-[50px] tracking-[-0.006em] text-[#093FB4] ${card?.styleTitle} mt-7 `}
              >
                {card.title}
              </h3>
              <p
                className={`font-normal lg:text-[28px] md:text-[21px] text-lg leading-[37px] tracking-[-0.006em] text-[#151D50] sm:mb-24 mb-14 ${card?.styleDescription}`}
              >
                {card.description}
              </p>
              <button
                className={`block bg-[#122377] text-white lg:px-12 px-6 py-3 rounded-full font-medium lg:text-[37px] md:text-[31px] text-xl leading-[150%] tracking-[0em] hover:scale-105 transform transition duration-300 ${card?.styleBtn} cursor-pointer`}
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
}
