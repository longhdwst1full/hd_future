// components/CardSlider.js
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CardSlider() {
  const settings = {
    dots: true,
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
      image: "/placeholder-security.jpg", // Thay bằng đường dẫn thực tế
      bgColor: "bg-blue-100",
    },
    {
      title: "HD Future. Tech",
      description:
        "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications.",
      image: "/placeholder-tech.jpg", // Thay bằng đường dẫn thực tế
      bgColor: "bg-blue-200",
    },
    {
      title: "HD Codelad",
      description:
        "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications.",
      image: "/placeholder-codelad.jpg", // Thay bằng đường dẫn thực tế
      bgColor: "bg-blue-300",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl shadow-lg ${card.bgColor} text-blue-900`}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-center mb-2">
              {card.title}
            </h3>
            <p className="text-center mb-4">{card.description}</p>
            <button className="mx-auto block bg-blue-900 text-white px-4 py-2 rounded-full">
              Contact Us
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
}
