// components/HeroSection.tsx
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-8 h-8 bg-white/15 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <header className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-4">
            <img
              src="https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645-t.jpg"
              alt="HD Future Tech Logo"
              width={120}
              height={40}
              className="h-auto"
            />
          </div>
          <nav className="hidden md:flex space-x-8 text-white">
            <a href="#about" className="hover:text-blue-200 transition-colors">
              About Us
            </a>
            <a
              href="#workflow"
              className="hover:text-blue-200 transition-colors"
            >
              Workflow
            </a>
            <a
              href="#services"
              className="hover:text-blue-200 transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="hover:text-blue-200 transition-colors"
            >
              Contact
            </a>
          </nav>
        </header>

        {/* Hero Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between py-20">
          <div className="lg:w-1/2 text-white space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              HD FUTURE TECH
              <span className="block text-2xl sm:text-3xl font-light mt-2 text-blue-200">
                Connect the World
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-blue-100 max-w-2xl">
              We follow industry-standard methodologies and employ effective
              communication
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
            <div className="relative">
              <img
                src="https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645-t.jpg"
                alt="HD Future Tech - Codelad Technology Solutions"
                width={460}
                height={198}
                priority
                className="h-auto max-w-full drop-shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Global Connection Visual */}
        <div className="absolute bottom-0 left-0 right-0 opacity-20">
          <img
            src="https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645-t.jpg"
            alt="Global Connection Network"
            width={1200}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
