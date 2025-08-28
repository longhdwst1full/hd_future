"use client";

import { ChevronDown, ChevronUp, X, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const navItems = [
    { name: "Home", href: "#home", active: true },
    {
      name: "Services",
      href: "#services",
      hasDropdown: true,
      children: [
        { name: "Web Development", href: "#web-dev" },
        { name: "Mobile Apps", href: "#mobile-apps" },
        { name: "Cloud Solutions", href: "#cloud" },
      ],
    },
    { name: "About", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "Pricing", href: "#pricing" },
  ];

  const toggleSubMenu = (itemName: string) => {
    setOpenSubMenu(openSubMenu === itemName ? null : itemName);
  };

  return (
    <header className=" w-full lg:w-[90%] mx-auto px-4 sm:px-6 xl:px-8  py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="w-40">
          <img
            src="./logo_header.png"
            className="w-full object-cover"
            alt="logo"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <div className="bg-white/95 backdrop-blur-sm rounded-full xl:px-10 px-5 xl:py-3 py-2 shadow-lg">
            <div className="flex items-center space-x-5  ">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center lg:mr-2 px-10 py-2 text-lg text-[#093FB4] font-medium transition-colors duration-300 ${
                    item.active
                      ? "border-[#083DA5] border-b-2"
                      : "hover:border-[#083DA5] hover:border-b-2"
                  }`}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Contact Button (Desktop) */}
        <div className="hidden lg:block">
          <button className="bg-white hover:bg-gray-50 text-[#093FB4] text-lg transition-all duration-300 hover:scale-105 xl:px-5 px-4 py-2 xl:py-[18px] rounded-full font-bold shadow-[inset_0px_3px_0px_0px_#FFFFFF,inset_0px_6px_7.2px_0px_rgba(87,255,54,0.25),0px_0px_0px_3px_rgba(255,223,96,0.25)]">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setMobileOpen(true)}>
            <Menu className="w-8 h-8 text-[#093FB4]" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 lg:hidden">
          <div className="fixed right-0 top-0 h-full w-72 bg-white shadow-xl p-6 flex flex-col transition-transform duration-300">
            <div className="flex justify-between items-center mb-6">
              <span className="font-bold text-xl text-[#093FB4]">Menu</span>
              <button onClick={() => setMobileOpen(false)}>
                <X className="w-7 h-7 text-[#093FB4]" />
              </button>
            </div>

            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() =>
                      item.hasDropdown
                        ? toggleSubMenu(item.name)
                        : setMobileOpen(false)
                    }
                    className="w-full flex items-center justify-between text-left text-lg text-[#093FB4] font-medium hover:text-blue-600"
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown &&
                      (openSubMenu === item.name ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      ))}
                  </button>

                  {/* Submenu */}
                  {item.hasDropdown && openSubMenu === item.name && (
                    <div className="ml-4 mt-2 flex flex-col space-y-2 transition-all duration-300">
                      {item.children?.map((child) => (
                        <a
                          key={child.name}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-base text-gray-700 hover:text-blue-600"
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Contact button (Mobile) */}
            <div className="mt-auto pt-6">
              <button className="w-full bg-[#093FB4] text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
