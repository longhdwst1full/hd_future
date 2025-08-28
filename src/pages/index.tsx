import CardSlider from "@/components/CardSlider";
import FooterSection from "@/components/FooterSection";
import Header from "@/components/Header";
import Testimonial from "@/components/Testimonial";
import WhyChooseSection from "@/components/WhyChooseSection";
import WorkflowSection from "@/components/WorkflowSection";
import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.15, duration: 0.7, type: "spring" as const },
  },
};

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
        {/* Decorative Images */}
        {[
          { src: "/Ellipse 13.png", className: "absolute top-[35%] left-[0%]" },
          {
            src: "/Ellipse 15.png",
            className: "absolute top-[28%] right-[0%]",
          },
          {
            src: "/Ellipse 21.png",
            className: "absolute top-[28%] left-[10%]",
          },
          {
            src: "/Ellipse 21.png",
            className:
              "w-[100px] absolute top-[12%] md:right-[10%] right-0 md:top-[28%]",
          },
          {
            src: "/Ellipse 21.png",
            className: "w-[50px] absolute top-[38%] right-[30%]",
          },
          {
            src: "/Ellipse 21.png",
            className: "absolute top-[18%] left-[30%]",
          },
          {
            src: "/Ellipse 14.png",
            className: "w-30 absolute top-[20%] left-[16%]",
          },
          { src: "/Group 63.png", className: "absolute top-[25%] left-[16%]" },
          {
            src: "/Group 63.png",
            className: "w-[100px] absolute top-[14%] right-[18%]",
          },
        ].map((img, i) => (
          <Image
            key={i}
            src={img.src}
            alt=""
            width={200}
            height={200}
            className={img.className}
            priority={i < 2}
          />
        ))}

        <motion.section
          className="bg-[#BFE2F8] rounded-b-[180px] lg:pb-7.5 pb-6 z-[9999]"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="bg-[linear-gradient(179.87deg,#2FA8CC_-19.91%,#032D89_73.02%)] rounded-b-[200px] overflow-hidden">
            <Header />

            {/* Banner */}
            <motion.div
              className="flex flex-col items-center justify-center text-center px-4 relative"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={1}
            >
              <motion.h1
                className="lg:text-[97px] md:text-[87px] text-[40px] lg:leading-[150%] font-semibold text-white"
                variants={fadeInUp}
                custom={2}
              >
                HD FUTURE. TECH
              </motion.h1>
              <motion.p
                className="md:text-2xl text-xl text-white/80 font-normal mb-[-25px]"
                variants={fadeInUp}
                custom={3}
              >
                Nơi Định Nghĩa Lại Công Nghệ Của Bạn
              </motion.p>
              {/* Logo placeholders */}
              <motion.div
                className="flex items-center justify-center gap-x-2"
                variants={fadeInUp}
                custom={4}
              >
                <div className="w-[75px]">
                  <Image
                    src="/logo_header.png"
                    alt=""
                    width={75}
                    height={75}
                    className="object-cover w-full"
                  />
                </div>
                <div className="md:w-48">
                  <Image
                    src="/banner_logo_code.png"
                    alt=""
                    width={192}
                    height={48}
                    className="w-full object-cover"
                  />
                </div>
                <div className="md:w-36 mt-[-15px]">
                  <Image
                    src="/banner_logo_otp_.png"
                    alt=""
                    width={144}
                    height={36}
                    className="w-full object-cover"
                  />
                </div>
              </motion.div>
              {/* Buttons */}
              <motion.div
                className="flex gap-6 mt-5 md:text-[26px] text-lg relative"
                variants={fadeInUp}
                custom={5}
              >
                <button className="px-9 py-3 rounded-full bg-white text-blue-600 font-semibold shadow-[inset_0px_3px_0px_0px_#FFFFFF,inset_0px_6px_7.2px_0px_rgba(87,255,54,0.25),0px_0px_0px_3px_rgba(255,223,96,0.25)] hover:brightness-105 active:scale-95 transition cursor-pointer">
                  Contact Us
                </button>
                <button className="px-8 py-3 rounded-full bg-[#203E80] text-white font-semibold shadow-[inset_0px_6px_7.2px_0px_rgba(108,255,54,0.25),0px_0px_0px_3px_rgba(255,223,96,0.25)] hover:brightness-110 active:scale-95 transition cursor-pointer">
                  Chat With Us
                </button>
              </motion.div>
            </motion.div>
            {/* Network Illustration */}
            <motion.div
              className="relative h-[400px] md:h-[630px] xl:h-[750px] w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={6}
            >
              <div className="absolute top-0 left-[-400px] right-[-360px] bottom-0">
                <Image
                  src="/Ellipse 12.png"
                  alt=""
                  width={1200}
                  height={750}
                  className="h-full"
                />
                <div className="absolute top-[15%] left-[25%] right-[22%] 2xl:top-[15%] 2xl:left-[29%] 2xl:right-[0%]">
                  <Image
                    src="/connect-network.png"
                    alt=""
                    width={600}
                    height={400}
                  />
                </div>
                {[
                  "22% 41%",
                  "40% 36%",
                  "50% 50%",
                  "31% 45%",
                  "65% 42%",
                  "20% 38%",
                ].map((pos, i) => {
                  const [top, leftOrRight] = pos.split(" ");
                  const isLeft = i % 2 === 0;
                  return (
                    <Image
                      key={i}
                      src="/Group 95.png"
                      alt=""
                      width={80}
                      height={80}
                      className={`absolute top-[${top}] ${
                        isLeft
                          ? `left-[${leftOrRight}]`
                          : `right-[${leftOrRight}]`
                      }`}
                    />
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>

      {/* Logo Row Section */}
      <motion.section
        className="w-full relative md:m-0 my-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={1}
      >
        <div className="flex items-center justify-center md:gap-x-8 gap-x-1">
          {[
            "/banner_ls_logo_future.png",
            "/banner_ls_logo_code.png",
            "/banner_ls_logo_otp.png",
            "/banner_ls_logo_future.png",
            "/banner_ls_logo_code.png",
            "/banner_ls_logo_otp.png",
          ].map((src, i) => (
            <div
              key={i}
              className={
                i % 3 === 2
                  ? "w-60 mt-[-15px]"
                  : i % 3 === 1
                  ? "w-56"
                  : "w-[146px]"
              }
            >
              <Image
                src={src}
                alt=""
                width={200}
                height={60}
                className="object-cover w-full"
              />
            </div>
          ))}
        </div>
      </motion.section>

      {/* About/Workflow Section */}
      <motion.section
        className="bg-[linear-gradient(180deg,#BFE2F8_0%,#FFFFFF_100%)] bg-gradient-to-b from-[#BFE2F8] to-[#FFFFFF] lg:rounded-[246px] md:rounded-[146px] rounded-[100px] overflow-hidden z-[9999] lg:py-20 !lg:pt-18 xl:px-10 lg:px-8  md:py-14 sm:py-8 pt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={2}
      >
        <div className="w-[95%] m-auto relative bg-white lg:rounded-[125px] rounded-[70px] md:mx-8 mx-4 overflow-hidden">
          <div className="absolute inset-0 md:left-[35%] sm:left-[33%] left-[45%] sm:top-[-10%] md:bottom-[-15%] sm:bottom-[-30%] top-[53%] md:w-auto w-[80%]">
            <Image
              src="/Mesa de trabajo 1 3.png"
              alt="Illustration"
              width={600}
              height={400}
              className="w-full sm:h-full"
            />
          </div>
          <div className="md:w-3/5 w-full lg:pl-16 md:pl-10 pl-5">
            <div className="lg:w-[450px] md:w-[350px] w-[200px] lg:ml-[-60px] ml-[-40px]">
              <Image
                src="/HD_logo_final.png"
                alt="HD FutureTech Logo"
                width={450}
                height={120}
                className="w-full object-cover"
              />
            </div>
            <div className="md:w-2/3 sm:w-[50%] lg:mt-[-50px] md:mt-[-30px] mt-[-30px] lg:mb-10 md:mb-5 mb-10">
              <p className="text-[#151D50] font-medium text-[20px] xl:text-[28px] leading-[37px] mb-10">
                Our experienced project management team ensures that your
                projects are delivered on time, within budget, and according to
                your specifications.
              </p>
              <motion.button
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 8px 32px 0 rgba(9,63,180,0.15)",
                }}
                whileTap={{ scale: 0.96 }}
                className="mt-8 md:px-16 sm:px-14 px-10 py-3 rounded-full bg-[#122377] text-white text-[18px] xl:text-[37px] font-medium hover:brightness-110 active:scale-95 transition lg:mb-28 md:mb-24 sm:mb-16 mb-10 cursor-pointer"
              >
                Explore
              </motion.button>
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
      </motion.section>

      {/* Why Choose Section */}
      <motion.div
        className="relative pb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={3}
      >
        <Image
          src="/Ellipse 28.png"
          alt=""
          width={200}
          height={200}
          className="absolute right-0 bottom-0 w-100"
        />
        <Image
          src="/Ellipse 29.png"
          alt=""
          width={320}
          height={200}
          className="absolute lg:left-4 left-0 lg:top-[-12%] top-0 lg:w-200 md:w-100 w-80"
        />
        <WhyChooseSection />
      </motion.div>

      {/* Testimonial and Footer */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={4}
      >
        <Testimonial />
        <FooterSection />
      </motion.div>
    </>
  );
}
