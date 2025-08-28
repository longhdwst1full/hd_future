import CardSlider from "@/components/CardSlider";
import FooterSection from "@/components/FooterSection";
import Header from "@/components/Header";
import Testimonial from "@/components/Testimonial";
import WhyChooseSection from "@/components/WhyChooseSection";
import WorkflowSection from "@/components/WorkflowSection";
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
          className="w-[100px]  absolute top-[12%] md:right-[10%] right-0 md:top-[28%]"
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
        <section className="bg-[#BFE2F8] rounded-b-[180px] lg:pb-7.5 pb-6 z-[9999]">
          <div className="bg-[linear-gradient(179.87deg,#2FA8CC_-19.91%,#032D89_73.02%)]  rounded-b-[200px] overflow-hidden">
            <Header />

            {/*  banner */}
            <div className="flex flex-col items-center justify-center text-center px-4 relative">
              {/* Title */}
              <h1 className="lg:text-[97px] md:text-[87px]  text-[40px] lg:leading-[150%] font-semibold text-white">
                HD FUTURE. TECH
              </h1>
              {/* Subtitle */}
              <p className="md:text-2xl text-xl text-white/80 font-normal mb-[-25px]">
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
                <div className="md:w-48">
                  <img
                    src="./banner_logo_code.png"
                    alt=""
                    className="w-full object-cover"
                  />
                </div>
                <div className="md:w-36 mt-[-15px]">
                  <img
                    src="./banner_logo_otp_.png"
                    alt=""
                    className="w-full object-cover"
                  />
                </div>
              </div>
              {/* Buttons */}
              <div className="flex gap-6 mt-5 md:text-[26px]  text-lg relative">
                <button className="px-9 py-3 rounded-full bg-white text-blue-600 font-semibold shadow-[inset_0px_3px_0px_0px_#FFFFFF,inset_0px_6px_7.2px_0px_rgba(87,255,54,0.25),0px_0px_0px_3px_rgba(255,223,96,0.25)] hover:brightness-105 active:scale-95 transition cursor-pointer">
                  Contact Us
                </button>
                {/* Chat With Us */}
                <button className="px-8 py-3 rounded-full bg-[#203E80] text-white font-semibold shadow-[inset_0px_6px_7.2px_0px_rgba(108,255,54,0.25),0px_0px_0px_3px_rgba(255,223,96,0.25)] hover:brightness-110 active:scale-95 transition cursor-pointer">
                  Chat With Us
                </button>
              </div>

              <div className="relative w-full lg:h-32 h-20">
                {/* <img
                src="./banner-router.png"
                alt=""
                className="w-full obvject-cover absolute top-0 left-0 right-0 bottom-0"
              /> */}
              </div>
            </div>
            <div className="relative h-[400px] md:h-[630px] xl:h-[750px]  w-full">
              <div className="absolute top-0 left-[-400px] right-[-360px] bottom-0">
                <img src="./Ellipse 12.png" alt="" className=" h-full" />
                <div className="absolute top-[15%] left-[25%] right-[22%] 2xl:top-[15%] 2xl:left-[29%] 2xl:right-[0%]">
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
      <section className="w-full relative md:m-0 my-4 ">
        <div className="flex items-center justify-center md:gap-x-8 gap-x-1 ">
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
      <section className="bg-[linear-gradient(180deg,#BFE2F8_0%,#FFFFFF_100%)] bg-gradient-to-b from-[#BFE2F8] to-[#FFFFFF] lg:rounded-[246px] md:rounded-[146px] rounded-[100px] overflow-hidden z-[9999] lg:py-20 !lg:pt-18 xl:px-10 lg:px-8  md:py-14 sm:py-8 pt-10">
        <div className="w-[95%] m-auto relative bg-white  lg:rounded-[125px] rounded-[70px] md:mx-8 mx-4 overflow-hidden">
          <div className="absolute inset-0 md:left-[35%] sm:left-[33%] left-[45%] sm:top-[-10%] md:bottom-[-15%] sm:bottom-[-30%] top-[53%] md:w-auto w-[80%]]">
            <img
              src="./Mesa de trabajo 1 3.png"
              alt="Illustration"
              className="w-full sm:h-full"
            />
          </div>

          <div className="md:w-3/5 w-full lg:pl-16 md:pl-10 pl-5">
            <div className="lg:w-[450px] md:w-[350px] w-[200px] lg:ml-[-60px] ml-[-40px]">
              <img
                src="./HD_logo_final.png"
                alt="HD FutureTech Logo"
                className="w-full object-cover"
              />
            </div>
            <div className="md:w-2/3 sm:w-[50%]  lg:mt-[-50px] md:mt-[-30px] mt-[-30px] lg:mb-10 md:mb-5 mb-10">
              {/* Description */}
              <p className="text-[#151D50] font-medium text-[20px] xl:text-[28px] leading-[37px] mb-10">
                Our experienced project management team ensures that your
                projects are delivered on time, within budget, and according to
                your specifications.
              </p>
              {/* Button */}
              <button className="mt-8 md:px-16 sm:px-14 px-10 py-3 rounded-full bg-[#122377] text-white text-[18px] xl:text-[37px] font-medium hover:brightness-110 active:scale-95 transition lg:mb-28 md:mb-24 sm:mb-16 mb-10 cursor-pointer">
                Explore
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 lg:mb-40 md:mb-30 mb-20">
          <h2 className="font-semibold xl:text-[97px] lg:text-[70px] md:text-[60px] text-[50px] leading-[104%] text-[#243761]">
            Take a look at
          </h2>

          <h2 className="mt-1 font-semibold xl:text-[97px] lg:text-[70px] md:text-[60px] text-[50px] leading-[104%] text-[#093FB4]">
            Our Workflow About Us
          </h2>
        </div>

        <WorkflowSection />
        <div className="w-full sm:rounded-b-[246px] rounded-b-[125px] pb-3">
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
          className="absolute lg:left-4 left-0 lg:top-[-12%] top-0 lg:w-200 md:w-100 w-80"
        />
        <WhyChooseSection />
      </div>

      <Testimonial />

      <FooterSection />
    </>
  );
}
