import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WorkflowSection from "@/components/WorkflowSection";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home", active: true },
    { name: "Services", href: "#services", hasDropdown: true },
    { name: "About", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <>
      <Head>
        <title>HD Future Tech - Industry-Standard Technology Solutions</title>
        <meta
          name="description"
          content="We follow industry-standard methodologies and employ effective communication to connect the world through innovative technology solutions."
        />
        <meta
          name="keywords"
          content="HD Future Tech, technology solutions, software development, mobile apps, web development"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="HD Future Tech - Technology Solutions"
        />
        <meta
          property="og:description"
          content="Industry-standard methodologies with effective communication"
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://hdfuturetech.com" />
      </Head>

      <div className="min-h-screen">
        <header className="absolute top-0 left-0 right-0 z-50 bg-[#BFE2F8]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              {/* Logo Section */}
              <div className="w-40 px-6 py-3">
                <img
                  src="./logo_header.png"
                  className="w-full bg-cover"
                  alt=""
                />
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:block">
                <div className="bg-white/95 backdrop-blur-sm rounded-full px-8 py-3 shadow-lg">
                  <div className="flex items-center space-x-8">
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`flex items-center gap-1 px-4 py-2 text-sm lg:text-2xl text-[#093FB4] font-medium transition-colors duration-300 ${
                          item.active
                            ? "border-[#083DA5] border-b-2"
                            : "hover:border-[#083DA5] hover:border-b-2"
                        }`}
                      >
                        {item.name}
                        {item.hasDropdown && (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </nav>

              {/* Contact Button */}
              <div className="hidden lg:block">
                <button className="bg-white text-tech-blue-dark hover:bg-gray-50 text-[20px] transition-all duration-300 hover:scale-105 text-[#093FB4]  px-6 py-3 rounded-full font-bold shadow-[inset_0px_3px_0px_0px_#FFFFFF,inset_0px_6px_7.2px_0px_rgba(87,255,54,0.25),0px_0px_0px_3px_rgba(255,223,96,0.25)]">
                  Contact Us
                </button>
              </div>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white hover:text-gray-200 transition-colors duration-300 p-2"
                >
                  {isMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="lg:hidden mt-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <div className="space-y-4">
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`flex items-center justify-between px-4 py-3 text-base font-medium transition-colors duration-300 rounded-lg ${
                          item.active
                            ? "text-tech-blue-dark bg-tech-blue/10"
                            : "text-gray-600 hover:text-tech-blue-dark hover:bg-gray-50"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                        {item.hasDropdown && (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </a>
                    ))}
                    <div className="pt-4 border-t border-gray-200">
                      <button className="w-full bg-tech-blue-dark text-white hover:bg-tech-blue px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/*  banner */}

          <div className="flex flex-col items-center justify-center text-center px-4">
            {/* Title */}
            <h1 className="text-[97px] leading-[150%] font-semibold text-white">
              HD FUTURE. TECH
            </h1>
            {/* Subtitle */}
            <p className="text-2xl text-white/80 font-normal mb-[-25px]">
              Nơi Định Nghĩa Lại Công Nghệ Của Bạn
            </p>
            {/* Logo placeholders */}
            <div className="flex items-center justify-center gap-x-2 ">
              <div className="w-[75px]">
                <img
                  src="./logo_header.png"
                  alt=""
                  className="object-cover w-full"
                />
              </div>
              <div className="w-48">
                <img
                  src="./banner_logo_code.png"
                  alt=""
                  className="w-full object-cover"
                />
              </div>
              <div className="w-36 mt-[-15px]">
                <img
                  src="./banner_logo_otp_.png"
                  alt=""
                  className="w-full object-cover"
                />
              </div>
            </div>
            {/* Buttons */}
            <div className="flex gap-6 mt-5 text-[26px]">
              {/* Contact Us */}
              <button className="px-8 py-3 rounded-full bg-white text-blue-600 font-semibold shadow-[inset_0px_3px_0px_0px_#FFFFFF,inset_0px_6px_7.2px_0px_rgba(87,255,54,0.25),0px_0px_0px_3px_rgba(255,223,96,0.25)]       hover:brightness-105 active:scale-95 transition">
                Contact Us
              </button>
              {/* Chat With Us */}
              <button className="px-8 py-3 rounded-full bg-[#203E80] text-white font-semibold         shadow-[inset_0px_6px_7.2px_0px_rgba(108,255,54,0.25),0px_0px_0px_3px_rgba(255,223,96,0.25)] hover:brightness-110 active:scale-95 transition">
                Chat With Us
              </button>
            </div>

            {/* vong trong header */}
            <div className="relative w-full h-32">
              {/* <img
                src="./banner-router.png"
                alt=""
                className="w-full obvject-cover absolute top-0 left-0 right-0 bottom-0"
              /> */}
            </div>
          </div>
        </header>
      </div>
      {/* section */}
      <section className="w-full">
        <div className="flex items-center justify-center gap-x-2 ">
          <div className="w-[146px]">
            <img
              src="./banner_ls_logo_future.png"
              alt=""
              className="object-cover w-full"
            />
          </div>
          <div className="w-56">
            <img
              src="./banner_ls_logo_code.png"
              alt=""
              className="w-full object-cover"
            />
          </div>
          <div className="w-60 mt-[-15px]">
            <img
              src="./banner_ls_logo_otp.png"
              alt=""
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
      {/*  */}
      <section className=" relative bg-gradient-to-b from-[#BFE2F8] to-[#FFFFFF] rounded-[20%] flex items-center justify-between px-15 py-20 flex-col">
        <div className=" relative bg-white  rounded-[20%] flex items-center justify-between">
          {/* Left content */}
          <div className="w-1/2  px-16 py-20">
            {/* Logo */}
            <div className="w-[450px] mb-[-30px] mt-[-100px]">
              <img
                src="./banner_ls_logo_future.png"
                alt="HD FutureTech Logo"
                className="w-full object-cover"
              />
            </div>

            {/* Description */}
            <p className="mt-6 text-[#151D50] font-medium text-[20px] xl:text-[28px] leading-[32px]">
              Our experienced project management team ensures that your projects
              are delivered on time, within budget, and according to your
              specifications.
            </p>
            {/* Button */}
            <button
              className="mt-8 px-16 py-3 rounded-full 
             bg-[#122377] text-white text-[18px] xl:text-[37px] font-medium hover:brightness-110 active:scale-95 transition"
            >
              Explore
            </button>
          </div>
          {/* Right content */}
          <div className="w-1/2 flex justify-center">
            <img
              src="./Mesa_de_trabajo.png"
              alt="Illustration"
              className="  w-full object-contain"
            />
          </div>
        </div>

        <div className="text-center mt-30">
          {/* Dòng 1 */}
          <h2 className="font-semibold text-[97px] leading-[104%] tracking-[0] text-[#243761]">
            Take a look at
          </h2>
          {/* Dòng 2 */}
          <h2 className="mt-1 font-semibold text-[97px] leading-[104%] tracking-[0] text-[#093FB4]">
            Our Workflow About Us
          </h2>
        </div>
      </section>
      <div className="mt-10 container mx-auto">
        {/* 2025 */}
        <div className="text-center absolute left-0 right-0">
          <img
            src="./Group 106.png"
            alt=""
            className="object-cover w-[248px] m-auto"
          />
          
          <div className="absolute top-[-18px] right-25      w-[500px] flex items-center gap-4 border border-[#2427BD] rounded-2xl px-6 py-4 bg-white shadow-[0px_8px_3.4px_-3px_#67BBFF82] ">
            {/* Year */}
            <span className="text-[#243761] font-bold text-2xl xl:text-[55px] mr-4">
              2025
            </span>
            {/* Description */}
            <p className="font-normal text-[22px] leading-[28px] tracking-[-0.006em] text-start text-[#243761]">
              We follow industry-standard methodologies and employ effective
              communication
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
