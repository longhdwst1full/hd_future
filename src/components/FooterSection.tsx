// components/FooterSection.js
export default function FooterSection() {
  return (
    <div className="relative">
      {/* Contact Form Section */}
      <div className="mt-10 p-14 bg-[#BFE2F8] rounded-[87px]">
        <div className="bg-[#FFFFFF] p-14 pt-36 mt-4 rounded-[107px] shadow-[0px_4px_4px_0px_#1B339140] relative overflow-hidden">
          <div className="absolute bottom-[-17%] left-0">
            <img
              src="/Mesa_de_trabajo.png"
              alt="Background"
              className="w-full object-cover"
            />
          </div>
          <div className="flex relative">
            <div className="text-[#184BB8] w-full md:w-[40%] px-4">
              <h3 className="font-semibold text-[58px] leading-[58px] tracking-[0.07em] ">
                GỬI YÊU CẦU TƯ VẤN GIẢI PHÁP
              </h3>
              <p className="mt-5 font-medium text-[21px] leading-[24px] tracking-[0.21px] mb-5">
                Chúng tôi luôn tư vấn dịch vụ miễn phí. Chúng tôi sẽ liên hệ báo
                giá theo thông tin mà bạn để lại.
              </p>
            </div>
            <div className="w-full md:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-10 border-[1px] border-[#262626] text-[#3768C4] flex flex-col rounded-3xl overflow-hidden">
                  <p className="text-[22px] font-semibold p-2 mb-2">
                    Full Name
                  </p>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="p-2 focus:outline-none focus:border-b-2 border-[#184BB8]  w-full border-0 border-b b  focus:border-blue-500 focus:ring-0 text-blue-600 placeholder-blue-400"
                  />
                </div>
                <div className="p-10 border-[1px] border-[#262626] text-[#3768C4] flex flex-col rounded-3xl overflow-hidden">
                  <p className="text-[22px] font-semibold p-2 mb-2">Email</p>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="p-2   border-[#184BB8] focus:outline-none focus:border-b-2 border-b-[#184BB8]  w-full border-0 border-b   focus:border-blue-500 focus:ring-0 text-blue-600 placeholder-blue-400"
                  />
                </div>
              </div>
              <div className="p-10 mt-3 border-[1px] border-[#262626] text-[#3768C4] flex flex-col rounded-3xl overflow-hidden">
                <p className="text-[22px] font-medium p-2 mb-2">
                  Why are you contacting us?
                </p>
                <div className="grid grid-cols-2 gap-2 text-[#3768C4]">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> HD FutureTech
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> HD Codelad
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Fun FTP
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Others
                  </label>
                </div>
              </div>
              <div className="p-10 mt-3 border-[1px] border-[#262626] text-[#3768C4] flex flex-col rounded-3xl overflow-hidden">
                <p className="text-[22px] font-medium p-2 mb-2">Your Message</p>
                <textarea
                  rows={2}
                  placeholder="Your Message"
                  className="w-full resize-none bg-transparent outline-none border-0 
             placeholder-blue-400 p-4 [background-image:repeating-linear-gradient(to_bottom,transparent_0,transparent_calc(3em-2px),#184BB8_calc(3em-2px),#184BB8_3em)] leading-[3em] "
                ></textarea>
              </div>
              <button className="mt-4 block m-auto bg-[#122377] text-[#FFFFFF] px-12 py-3 rounded-[40px] font-semibold text-[29px] leading-[150%] tracking-[0%] hover:bg-[#1E3F8A] transition-colors duration-300">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-[3px] border-[#093FB4] rounded-t-[152px] mt-60 p-20 relative outline-none">
        <div className="absolute top-[-12%] left-1/2 -translate-x-1/2 bg-white w-[318px] h-[318px] overflow-hidden rounded-full">
          <img
            src="/HD_logo_final.png"
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center mb-6 mt-3 relative">
          <p className="font-medium text-[#184BB8] text-[22px] leading-[21px] tracking-[0.07em] text-center max-w-3xl mx-auto">
            Cung cấp dịch vụ proxy chất lượng cao với sự ổn định và bảo mật
            tuyệt đối cho người dùng Việt Nam.
          </p>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mt-20 pt-10 w-2/3 mx-auto pl-60">
          <div>
            <h3 className="font-bold text-[22px] leading-[22px] tracking-[0.07em] text-[#093FB4]">
              DỊCH VỤ
            </h3>
            <ul className="text-[#151D50] font-medium text-[19px] leading-[30px] tracking-normal mt-2 space-y-1">
              <li>Lập trình phần mềm</li>
              <li>AI & Khoa học dữ liệu</li>
              <li>Thiết kế sản phẩm</li>
              <li>DevOps & Cloud</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-[22px] leading-[22px] tracking-[0.07em] text-[#093FB4]">
              SẢN PHẨM
            </h3>
            <ul className="text-[#151D50] font-medium text-[19px] leading-[30px] tracking-normal mt-2 space-y-1">
              <li>Tài chính</li>
              <li>Bán lẻ & TMDT</li>
              <li>Công nghệ</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-[22px] leading-[22px] tracking-[0.07em] text-[#093FB4]">
              CÔNG TY
            </h3>
            <ul className="text-[#151D50] font-medium text-[19px] leading-[30px] tracking-normal mt-2 space-y-1">
              <li>Về chúng tôi</li>
              <li>Tin tức</li>
              <li>Chính sách</li>
              <li>Liên hệ</li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="w-2/3 mx-auto grid grid-cols-1 md:grid-cols-2 mb-8 mt-40   border-[3px] border-[#5389EE] rounded-[62px]">
          <div className="text-center p-5 border-r-[3px] border-[#5389EE] py-10">
            <p className="text-[#6392FA] font-normal text-[24px] inline-flex capitalize ml-[-16%]">
              Follow Our
            </p>
            <p className="text-[#093FB4] font-semibold text-[39px] capitalize">
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

          <div className="text-center px-5 py-10 ">
            <p className="text-[#6392FA] font-normal text-[24px] ml-[-14%] inline-flex capitalize">
              Hop Our
            </p>
            <p className="text-[#093FB4]   font-semibold text-[39px] capitalize">
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
          <div className="text-center px-5 py-20  border-[3px] border-b-0 border-l-0   border-[#5389EE] rounded-tl-[62] ">
            <p className="text-[#6392FA] font-normal text-[24px] leading-[28px] tracking-[0] capitalize ml-[-18%] inline-flex">
              Join Our
            </p>
            <p className="text-[#093FB4] mt-2 font-semibold text-[39px] capitalize">
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
          <div className="text-center px-5 py-20 border-[3px] border-b-0 border-l-0 border-r-0  border-[#5389EE] rounded-tr-[62px]">
            <p className="text-[#6392FA] font-normal text-[24px] leading-[28px] tracking-[0] capitalize ml-[-16%] inline-flex">
              Follow Us On
            </p>
            <p className="text-[#093FB4] mt-2 font-semibold text-[39px] capitalize">
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
        <p className="w-[85%] m-auto text-center text-[#093FB4] font-medium text-[18px] leading-[28px] pb-10 capitalize mt-50 border-b-2 border-[#093FB4]  ">
          Copyright © 2025 HD FutureTech.Com | All Rights Reserved
        </p>
      </div>
    </div>
  );
}
