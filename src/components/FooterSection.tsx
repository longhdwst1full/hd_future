// components/FooterSection.js
export default function FooterSection() {
  return (
    <div className="relative">
      {/* Contact Form Section */}
      <div className="mt-10 lg:pt-12 lg:pr-14 lg:pb-16 lg:pl-16 sm:pt-10 pt-7 sm:pr-4 pr-3 pb-9 sm:pl-6 pl-4 bg-[#BFE2F8] rounded-[87px]">
        <div className="bg-[#FFFFFF] xl:pt-32  xl:p-10 p-4 lg:pt-32 sm:pt-20 pt-8 mt-4 lg:rounded-[107px] md:rounded-[87px] rounded-[57px] shadow-[0px_4px_4px_0px_#1B339140] relative overflow-hidden">
          <div className="absolute 2xl:bottom-[-20%] 2xl:left-[-3%] xl:left-[-3%] lg:bottom-[-20%] lg:left-[-13%] md:left-[-13%] md:bottom-[-20%] sm:left-[-30%]  sm:bottom-[-28%] left-[0%] bottom-[-8%]">
            <img
              src="/Mesa_de_trabajo.png"
              alt="Background"
              className="lg:w-full w-[87%] object-cover"
            />
          </div>
          <div className="flex relative sm:flex-row flex-col">
            <div className="text-[#184BB8] 2xl:w-[32%] xl:w-[50%] lg:w-[55%] md:w-[45%] sm:w-[46%] w-full sm:text-start text-center  pr-2 h-auto lg:mt-0 sm:mt-40 ">
              <h3 className="font-semibold lg:text-[58px] md:text-[40px] sm:text-3xl text-[17px] lg:leading-[58px] md:leading-[48px] tracking-[7%] ">
                GỬI YÊU CẦU TƯ VẤN GIẢI PHÁP
              </h3>
              <p className="sm:mt-4 mt-2 font-medium lg:text-[21px] md:text-[17px] sm:text-[15px] text-[10px] xl:pr-2.5 xl:mr-6 md:leading-[24px] tracking-[1%] sm:mb-5">
                Chúng tôi luôn tư vấn dịch vụ miễn phí. Chúng tôi sẽ liên hệ báo giá theo thông tin mà bạn để lại.
              </p>
            </div>
            <div className="flex-1 2xl:w-2/3 lg:my-0 my-10 sm:mt-14 mt-8 xl:mt-0 xl:mb-0 lg:mb-18 sm:mb-24 mb-[82%]">
              <div className="grid grid-cols-2 md:gap-4 gap-2">
                <div className="lg:p-10 md:p-5 p-3 border-[1px] border-[#262626] text-[#3768C4] flex flex-col rounded-3xl overflow-hidden lg:text-[20px] md:text-lg sm:text-base text-[13px] ">
                  <p className="font-semibold p-2 mb-2 lg:text-[22px] md:text-xl sm:text-lg text-[15px]">
                    Full Name
                  </p>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="p-2 focus:outline-none focus:border-b-2 border-[#184BB8]  w-full border-0 border-b focus:border-blue-500 focus:ring-0 text-blue-600 placeholder-blue-400"
                  />
                </div>
                <div className="lg:p-10 md:p-5 p-3 border-[1px] border-[#262626] text-[#3768C4] flex flex-col rounded-3xl overflow-hidden lg:text-[20px] md:text-lg sm:text-base text-[13px]">
                  <p className="font-semibold p-2 mb-2 lg:text-[22px] md:text-xl sm:text-lg text-[15px]">
                    Email
                  </p>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="p-2 border-[#184BB8] focus:outline-none focus:border-b-2 border-b-[#184BB8] w-full border-0 border-b focus:border-blue-500 focus:ring-0 text-blue-600 placeholder-blue-400"
                  />
                </div>
              </div>
              <div className="lg:p-10 md:p-5 p-3 mt-3 border-[1px] border-[#262626] text-[#3768C4] flex flex-col rounded-3xl overflow-hidden lg:text-[20px] md:text-lg sm:text-base text-[13px]">
                <p className="font-semibold p-2 mb-2 lg:text-[22px] md:text-xl sm:text-lg text-[15px]">
                  Why are you contacting us?
                </p>
                <div className="grid grid-cols-2 gap-2 text-[#3768C4]">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      defaultChecked
                      checked
                      className="mr-2 p-2 inline-block w-7 h-7 focus:border-blue-500 focus:ring-0 outline-none text-[#BFE2F8] border-[1px] border-[#184BB8]"
                    />{" "}
                    HD FutureTech
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2 p-2 inline-block w-7 h-7 text-[#BFE2F8] border-[1px] border-[#184BB8]"
                    />{" "}
                    HD Codelad
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2 p-2 inline-block w-7 h-7 text-[#BFE2F8] border-[1px] border-[#184BB8]"
                    />{" "}
                    Fun FTP
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2 p-2 inline-block w-7 h-7 text-[#BFE2F8] border-[1px] border-[#184BB8]"
                    />{" "}
                    Others
                  </label>
                </div>
              </div>
              <div className="lg:p-10 p-5 mt-3 border-[1px] border-[#262626] text-[#3768C4] flex flex-col rounded-3xl overflow-hidden lg:text-[20px] md:text-lg sm:text-base text-[13px]">
                <p className="font-semibold p-2 sm:mb-2 lg:text-[22px] md:text-xl sm:text-lg text-[15px] mb-2">
                  Your Message
                </p>
                <textarea
                  rows={2}
                  placeholder="Your Message"
                  className="w-full resize-none bg-transparent outline-none border-0 placeholder-blue-400 sm:p-4
                   sm:[background-image:repeating-linear-gradient(to_bottom,transparent_0,transparent_calc(3em-2px),#184BB8_calc(3em-2px),#184BB8_3em)] 
                   [background-image:repeating-linear-gradient(to_bottom,transparent_0,transparent_calc(2em-2px),#184BB8_2em)] 
                   sm:leading-[3em] leading-[2em] sm:[background-position-y:1.2em] [background-position-y:2em]"
                ></textarea>
              </div>
              <button className="mt-4 block m-auto bg-[#122377] text-[#FFFFFF] md:px-12 sm:px-10 px-6 py-3 rounded-[40px] font-semibold sm:text-[29px] text-xl leading-[150%] tracking-[0%] hover:bg-[#1E3F8A] transition-colors duration-300 cursor-pointer">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-[3px] border-[#093FB4] rounded-t-[152px] lg:mt-60 sm:mt-50 mt-32 lg:p-20 sm:p-12 p-8 relative outline-none">
        <div className="absolute top-[-12%] left-1/2 -translate-x-1/2 bg-white w-[318px] h-[318px] overflow-hidden rounded-full">
          <img
            src="/HD_logo_final.png"
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center lg:mb-6 lg:mt-6 md:mt-12 sm:mt-20 mt-26 relative">
          <p className="font-medium text-[#184BB8] sm:text-[22px] text-[13px] sm:leading-[21px] tracking-[7%] text-center max-w-3xl mx-auto">
            Cung cấp dịch vụ proxy chất lượng cao với sự ổn định và bảo mật
            tuyệt đối cho người dùng Việt Nam.
          </p>
        </div>

        {/* Services Section */}
        <div className="lg:max-w-2xl max-w-2xl m-auto grid grid-cols-3 lg:gap-6 sm:gap-3 gap-1.5 sm:mt-18 mx-auto mt-12 relative z-[999]">
          <div>
            <h3 className="font-bold text-[17px] md:text-[22px] sm:leading-[22px] tracking-[0.07em] text-[#093FB4]">
              DỊCH VỤ
            </h3>
            <div className="text-[#151D50] font-medium sm:text-base text-xs md:text-[19px] sm:leading-[30px] mt-2 space-y-1">
              <p>Lập trình phần mềm</p>
              <p>AI & Khoa học dữ liệu</p>
              <p>Thiết kế sản phẩm</p>
              <p>DevOps & Cloud</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-[17px] md:text-[22px] sm:leading-[22px] tracking-[0.07em] text-[#093FB4]">
              SẢN PHẨM
            </h3>
            <div className="text-[#151D50] font-medium sm:text-base text-xs md:text-[19px] sm:leading-[30px] mt-2 space-y-1">
              <p>Tài chính</p>
              <p>Y tế</p>
              <p>Bán lẻ & TMDT</p>
              <p>Công nghệ</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-[17px] md:text-[22px] sm:leading-[22px] tracking-[0.07em] text-[#093FB4]">
              CÔNG TY
            </h3>
            <div className="text-[#151D50] font-medium sm:text-base text-xs md:text-[19px] sm:leading-[30px] mt-2 space-y-1">
              <p>Về chúng tôi</p>
              <p>Tin tức</p>
              <p>Chính sách</p>
              <p>Liên hệ</p>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="max-w-5xl mx-auto grid grid-cols-2 mb-8 lg:mt-30 sm:mt-34 mt-20 border-[3px] border-[#5389EE] rounded-[62px] overflow-hidden">
          <div className="text-center sm:px-10 border-r-[3px] border-[#5389EE] sm:pb-9 pb-6 sm:pt-12 pt-9">
            <p className="text-[#6392FA] font-normal text-[15px] sm:text-xl md:text-[24px] inline-flex capitalize lg:ml-[-16%] ml-[-20%]">
              Follow Our
            </p>
            <p className="text-[#093FB4] font-semibold text-[23px] sm:text-3xl md:text-[39px] capitalize">
              Linkedin{" "}
              <span className="inline-block ml-2 text-blue-500 border rounded-full w-7 h-7 p-1">
                <img
                  src="/Vector.png"
                  alt="LinkedIn Icon"
                  className="w-full h-full"
                />
              </span>
            </p>
          </div>

          <div className="text-center sm:px-10 sm:pb-9 pb-6 sm:pt-12 pt-9">
            <p className="text-[#6392FA] font-normal text-[15px] sm:text-xl md:text-[24px] lg:ml-[-18%] ml-[-21%] inline-flex capitalize">
              Hop Our
            </p>
            <p className="text-[#093FB4] font-semibold text-[23px] sm:text-3xl md:text-[39px] capitalize">
              Twitter{" "}
              <span className="inline-block ml-2 text-blue-500 border rounded-full w-7 h-7 p-1">
                <img
                  src="/Vector.png"
                  alt="Twitter Icon"
                  className="w-full h-full"
                />
              </span>
            </p>
          </div>

          <div className="text-center sm:px-10 sm:pt-20 pt-12 sm:pb-14 pb-12 border-[3px] border-b-0 border-l-0 border-[#5389EE] rounded-tl-[62]">
            <p className="text-[#6392FA] font-normal text-[15px] sm:text-xl md:text-[24px] capitalize lg:ml-[-25%] ml-[-30%] inline-flex">
              Join Our
            </p>
            <p className="text-[#093FB4] font-semibold text-[23px] sm:text-3xl md:text-[39px] capitalize">
              Telegram{" "}
              <span className="inline-block ml-2 text-blue-500 border rounded-full w-7 h-7 p-1">
                <img
                  src="/Vector.png"
                  alt="Telegram Icon"
                  className="w-full h-full"
                />
              </span>
            </p>
          </div>

          <div className="text-center sm:pt-20 pt-12 sm:pb-14 pb-12 border-[3px] border-b-0 border-l-0 border-r-0  border-[#5389EE] rounded-tr-[62px]">
            <p className="text-[#6392FA] font-normal text-[15px] sm:text-xl md:text-[24px] capitalize lg:ml-[-14%] ml-[-17%] inline-flex">
              Follow Us On
            </p>
            <p className="text-[#093FB4] font-semibold text-[23px] sm:text-3xl md:text-[39px] capitalize">
              Instagram{" "}
              <span className="inline-block ml-2 text-blue-500 border rounded-full w-7 h-7 p-1">
                <img
                  src="/Vector.png"
                  alt="Instagram Icon"
                  className="w-full h-full"
                />
              </span>
            </p>
          </div>
        </div>
        {/* Footer */}
        <p className="lg:w-[90%] w-full m-auto text-center text-[#093FB4] font-medium text-[10px] sm:text-base md:text-[18px] lg:pb-10 pb-5 capitalize lg:mt-36 sm:mt-44 mt-24 border-b-2 border-[#093FB4]">
          Copyright © 2025 HD FutureTech.Com | All Rights Reserved
        </p>
      </div>
    </div>
  );
}
