import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import CardSlider from "@/components/CardSlider";
import FooterSection from "@/components/FooterSection";
import Header from "@/components/Header";
import Testimonial from "@/components/Testimonial";
import WhyChooseSection from "@/components/WhyChooseSection";
import Head from "next/head";

export default function Home() {
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

      <div className="relative">
        <img
          src="./Ellipse 13.png"
          alt=""
          className="  absolute top-[35%] left-[0%]"
        />
        <img
          src="./Ellipse 15.png"
          alt=""
          className="   absolute top-[28%] right-[0%]"
        />
        <img
          src="./Ellipse 21.png"
          alt=""
          className="  absolute top-[28%] left-[10%]"
        />
        <img
          src="./Ellipse 21.png"
          alt=""
          className="w-[100px]  absolute top-[28%] right-[10%]"
        />
        <img
          src="./Ellipse 21.png"
          alt=""
          className="w-[50px]  absolute top-[38%] right-[30%]"
        />
        <img
          src="./Ellipse 21.png"
          alt=""
          className="  absolute top-[18%] left-[30%]"
        />
        <img
          src="./Ellipse 14.png"
          alt=""
          className="w-30  absolute top-[20%] left-[16%]"
        />
        <img
          src="./Group 63.png"
          alt=""
          className="  absolute top-[25%] left-[16%]"
        />
        <img
          src="./Group 63.png"
          alt=""
          className=" w-[100px] absolute top-[14%] right-[18%]"
        />
        <section className="bg-[#BFE2F8] rounded-b-[180px] pb-24">
          <div className="bg-[linear-gradient(179.87deg,#2FA8CC_-19.91%,#032D89_73.02%)]  rounded-b-[200px] overflow-hidden">
            <Header />

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
            <div className="relative h-[800px] w-full">
              <div className="absolute top-0 left-[-400px] right-[-360px] bottom-0">
                <img src="./Ellipse 12.png" alt="" className="w-full h-full" />
                <div className="absolute top-[15%] left-[29%] right-[0%]">
                  <img src="./connect-network.png" alt="" className="  " />
                </div>
                <img
                  src="./Group 95.png"
                  alt=""
                  className="absolute top-[22%] left-[41%]"
                />
                <img
                  src="./Group 95.png"
                  alt=""
                  className="absolute top-[40%] right-[36%]"
                />
                <img
                  src="./Group 95.png"
                  alt=""
                  className="absolute top-[50%] left-[50%]"
                />
                <img
                  src="./Group 95.png"
                  alt=""
                  className="absolute top-[31%] right-[45%]"
                />
                <img
                  src="./Group 95.png"
                  alt=""
                  className="absolute top-[65%] left-[42%]"
                />
                <img
                  src="./Group 95.png"
                  alt=""
                  className="absolute top-[20%] right-[38%]"
                />
              </div>
            </div>
          </div>
        </section>
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
      <section className="bg-[linear-gradient(180deg,#BFE2F8_0%,#FFFFFF_100%)] bg-gradient-to-b from-[#BFE2F8] to-[#FFFFFF] rounded-[246px] overflow-hidden z-[9999]    py-20  ">
        <div className="  w-[95%] m-auto relative bg-white  rounded-[125px]  mx-14 overflow-hidden">
          <div className="absolute inset-0 left-[35%] top-[-10%] bottom-[-15%]">
            <img
              src="./Mesa de trabajo 1 3.png"
              alt="Illustration"
              className=" w-full h-full "
            />
          </div>

          <div className=" w-3/5 pl-32 ">
            <div className="w-[450px] ml-[-60px]">
              <img
                src="./HD_logo_final.png"
                alt="HD FutureTech Logo"
                className="w-full object-cover"
              />
            </div>
            <div className=" w-2/3 mt-[-50px] mb-10">
              {/* Description */}
              <p className="text-[#151D50] font-medium text-[20px] xl:text-[28px] leading-[37px] mb-10">
                Our experienced project management team ensures that your
                projects are delivered on time, within budget, and according to
                your specifications.
              </p>
              {/* Button */}
              <button
                className="mt-8 px-16 py-3 rounded-full 
             bg-[#122377] text-white text-[18px] xl:text-[37px] font-medium hover:brightness-110 active:scale-95 transition mb-14"
              >
                Explore
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-30 mb-10">
          <h2 className="font-semibold text-[97px] leading-[104%] tracking-[0] text-[#243761]">
            Take a look at
          </h2>

          <h2 className="mt-1 font-semibold text-[97px] leading-[104%] tracking-[0] text-[#093FB4]">
            Our Workflow About Us
          </h2>
        </div>

        <div className="my-10 container mx-auto  ">
          <div className="relative">
            <div className="text-center mb-16">
              <img
                src="./Group 106.png"
                alt=""
                className="object-cover w-[200px] m-auto"
              />
            </div>
            <div className="absolute top-[-22px] right-35 w-[500px] flex items-center gap-4 border border-[#2427BD] rounded-2xl px-6 py-4 bg-white shadow-[0px_8px_3.4px_-3px_#67BBFF82] after:content-[' '] after:absolute after:left-[-35px] after:text-4xl after:text-blue-900 after:border-l-[35px] after:border-t-4 ">
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
            <div className="absolute bottom-[36.5%] right-52 w-[500px] flex items-center gap-4 border border-[#2427BD] rounded-2xl px-6 py-4 bg-white shadow-[0px_8px_3.4px_-3px_#67BBFF82] after:content-[' '] after:absolute after:left-[-35px] after:text-4xl after:text-blue-900 after:border-l-[35px] after:border-t-4 ">
              {/* Year */}
              <span className="text-[#243761] font-bold text-2xl xl:text-[55px] mr-4">
                2023
              </span>
              {/* Description */}
              <p className="font-normal text-[22px] leading-[28px] tracking-[-0.006em] text-start text-[#243761]">
                We follow industry-standard methodologies and employ effective
                communication
              </p>
            </div>
            <div className="absolute top-[30%] left-52 w-[500px] flex items-center gap-4 border border-[#2427BD] rounded-2xl px-6 py-4 bg-white shadow-[0px_8px_3.4px_-3px_#67BBFF82] after:content-[' '] after:absolute after:right-[-35px] after:text-4xl after:text-blue-900 after:border-r-[35px] after:border-t-4 ">
              {/* Year */}
              <span className="text-[#243761] font-bold text-2xl xl:text-[55px] mr-4">
                2024
              </span>
              {/* Description */}
              <p className="font-normal text-[22px] leading-[28px] tracking-[-0.006em] text-start text-[#243761]">
                We follow industry-standard methodologies and employ effective
                communication
              </p>
            </div>
            <div className="absolute bottom-[1%] opacity-65 left-52 w-[500px] flex items-center gap-4 border border-[#2427BD] rounded-2xl px-6 py-4 bg-white shadow-[0px_8px_3.4px_-3px_#67BBFF82] after:content-[' '] after:absolute after:right-[-35px] after:text-4xl after:text-blue-900 after:border-r-[35px] after:border-t-4 ">
              {/* Year */}
              <span className="text-[#243761] font-bold text-2xl xl:text-[55px] mr-4">
                2022
              </span>
              {/* Description */}
              <p className="font-normal text-[22px] leading-[28px] tracking-[-0.006em] text-start text-[#243761]">
                We follow industry-standard methodologies and employ effective
                communication
              </p>
            </div>
          </div>
        </div>
        <div className="  w-full rounded-b-[246px] pb-3">
          <CardSlider />
        </div>
      </section>
      <div className="relative pb-20">
        <img
          src="./Ellipse 28.png"
          alt=""
          className="absolute right-0 bottom-0 w-100"
        />
        <img
          src="./Ellipse 29.png"
          alt=""
          className="absolute left-4 top-[-12%] w-200"
        />
        <WhyChooseSection />
      </div>
      {/* Testimonial */}
      <Testimonial />

      <FooterSection />
    </>
  );
}
