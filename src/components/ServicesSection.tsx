// components/ServicesSection.tsx
import Image from "next/image";

export default function ServicesSection() {
  const services = [
    {
      title: "Customer Support",
      description: "24/7 dedicated support for all your needs",
      image:
        "https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645-t.jpg",
      features: [
        "Live Chat",
        "Phone Support",
        "Email Support",
        "Technical Assistance",
      ],
    },
    {
      title: "HD OTP Solutions",
      description: "Secure authentication and verification systems",
      image:
        "https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645-t.jpg",
      features: [
        "Two-Factor Auth",
        "SMS Verification",
        "Email OTP",
        "Biometric Security",
      ],
    },
    {
      title: "Mobile Development",
      description: "Cross-platform mobile applications",
      image:
        "https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645-t.jpg",
      features: [
        "iOS Development",
        "Android Development",
        "React Native",
        "Flutter",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive technology solutions with industry-standard
            methodologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  width={80}
                  height={80}
                  className="h-auto"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4 text-center">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
