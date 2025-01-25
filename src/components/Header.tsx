import logo from "../assets/logo.png";
import facebook from "../assets/footer/gg_facebook.png";
import twitter from "../assets/footer/prime_twitter.png";
import instagram from "../assets/footer/lets-icons_insta.png";
import youtube from "../assets/footer/mingcute_youtube-line.png";
import contact from "../assets/contact.png";
import call from "../assets/Call Us.png";
import account from "../assets/accountIcon.png";
import home2 from "../assets/home2.png";
import openDrawer from "../assets/openDrawer.png";

import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingCartIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const serviceResetTools = [
  {
    name: "ABS Brake Bleeding Scan Tools",
    href: "#",
    icon: ChevronRightIcon,
  },
  {
    name: "Adaptive Front Lighting System (AFS) Tools",
    href: "#",
    icon: ChevronRightIcon,
  },
  {
    name: "Fuel Adjustment Tools",
    href: "#",
    icon: ChevronRightIcon,
  },
  {
    name: "Air Suspension Diagnostic Tools",
    href: "#",
    icon: ChevronRightIcon,
  },
  {
    name: "Airbag Reset Tools",
    href: "#",
    icon: ChevronRightIcon,
  },
  {
    name: "Automatic Transmission (AT) Adaption Diagnostic Tools",
    href: "#",
    icon: ChevronRightIcon,
  },
  {
    name: "Car Battery Registration Tools",
    href: "#",
    icon: ChevronRightIcon,
  },
  {
    name: "Car Language Change Tools",
    href: "#",
    icon: ChevronRightIcon,
  },
  {
    name: "Change Tyre Size Diagnostic Tools",
    href: "#",
    icon: ChevronRightIcon,
  },
  {
    name: "Clutch Adaption Tools",
    href: "#",
    icon: ChevronRightIcon,
  },
  {
    name: "Diesel Particulate Filter (DPF) Reset Tools",
    href: "#",
    icon: ChevronRightIcon,
  },
  {
    name: "EGR Reset",
    href: "#",
    icon: ChevronRightIcon,
  },
  {
    name: "Electronic Parking Brake Reset (EPB) Tools",
    href: "#",
    icon: ChevronRightIcon,
  },
  {
    name: "EVAP Test and Scan Tools",
    href: "#",
    icon: ChevronRightIcon,
  },
  {
    name: "Gearbox Matching Tools",
    href: "#",
    icon: ChevronRightIcon,
  },
  {
    name: "Immobilizer Reset Tools",
    href: "#",
    icon: ChevronRightIcon,
  },
  {
    name: "Headlights Testers",
    href: "#",
    icon: ChevronRightIcon,
  },
  {
    name: "Injector Coding Tools and Scanners",
    href: "#",
    icon: ChevronRightIcon,
  },
  {
    name: "Odometer Diagnostic Tools",
    href: "#",
    icon: ChevronRightIcon,
  },
  {
    name: "Oil Service Reset Tools",
    href: "#",
    icon: ChevronRightIcon,
  },
  {
    name: "Prime Fuel Pump Diagnostic Tools",
    href: "#",
    icon: ChevronRightIcon,
  },
  {
    name: "Seat Match Diagnostic Tools",
    href: "#",
    icon: ChevronRightIcon,
  },
  {
    name: "Steering Angle Sensor Reset Tools",
    href: "#",
    icon: ChevronRightIcon,
  },
  {
    name: "Sun Roof Diagnostic Tools",
    href: "#",
    icon: ChevronRightIcon,
  },
  {
    name: "TCM Oil Reset Tools",
    href: "#",
    icon: ChevronRightIcon,
  },
  {
    name: "Throttle Position Sensor Adjustment Tools",
    href: "#",
    icon: ChevronRightIcon,
  },
  {
    name: "Tooth/Gear Learning Diagnostic Tools",
    href: "#",
    icon: ChevronRightIcon,
  },
  {
    name: "Car Turbo Diagnostic Tools",
    href: "#",
    icon: ChevronRightIcon,
  },
  {
    name: "Tyre Pressure Sensor Tools",
    href: "#",
    icon: ChevronRightIcon,
  },
  {
    name: "Car Window / Door Diagnostic Tools",
    href: "#",
    icon: ChevronRightIcon,
  },
];

const carMakes = [
  {
    name: "Universal Car Diagnostic Tools & Scanners",
    href: "#",
    icon: home2,
  },
  {
    name: "Audi Diagnostic Tools & Scanners",
    href: "#",
    icon: home2,
  },
  {
    name: "Bentley Diagnostic Tools & Scanners",
    href: "#",
    icon: home2,
  },
  {
    name: "BMW / MINI / Rolls-Royce Diagnostic Tools & Scanners",
    href: "#",
    icon: home2,
  },
  {
    name: "Bugatti Diagnostic Tools & Scanners",
    href: "#",
    icon: home2,
  },
  {
    name: "Volkswagen (VW) Diagnostic Tools & Scanners",
    href: "#",
    icon: home2,
  },
  {
    name: "Citroen Diagnostic Tools & Scanners",
    href: "#",
    icon: home2,
  },
  {
    name: "Ford Diagnostic Tools & Scanners",
    href: "#",
    icon: home2,
  },
  {
    name: "Lamborghini Diagnostic Tools & Scanners",
    href: "#",
    icon: home2,
  },
  {
    name: "Land Rover / Jaguar Diagnostic Tools & Scanners",
    href: "#",
    icon: home2,
  },
  {
    name: "Mercedes-Benz Diagnostic Tools & Scanners",
    href: "#",
    icon: home2,
  },
  {
    name: "Renault Diagnostic Tools & Scanners",
    href: "#",
    icon: home2,
  },
  {
    name: "SAAB Diagnostic Tools & Scanners",
    href: "#",
    icon: home2,
  },
  {
    name: "SEAT Diagnostic Tools & Scanners",
    href: "#",
    icon: home2,
  },
  {
    name: "Skoda Diagnostic Tools & Scanners",
    href: "#",
    icon: home2,
  },
  {
    name: "Vauxhall / Opel Diagnostic Tools & Scanners",
    href: "#",
    icon: home2,
  },
];

const scannerTypes = [
  {
    name: "Car Diagnostic Tools for Smart Phones",
    href: "#",
    icon: ChevronRightIcon,
  },
  {
    name: "Hand-held Scanners (Built-in LCD Screen)",
    href: "#",
    icon: ChevronRightIcon,
  },
];

const otherTools = [
  {
    name: "Fuel Leak Detectors",
    href: "#",
    icon: ChevronRightIcon,
  },
  {
    name: "Car Battery Testers",
    href: "#",
    icon: ChevronRightIcon,
  },
  {
    name: "Car Battery Chargers",
    href: "#",
    icon: ChevronRightIcon,
  },
  {
    name: "Phone Holders",
    href: "#",
    icon: ChevronRightIcon,
  },
  {
    name: "Tyre Pressure Sensors",
    href: "#",
    icon: ChevronRightIcon,
  },
];

const Header = () => {
  return (
    <header className="bg-[#1a1f2b] text-white">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center ">
        <nav className="hidden md:flex items-center space-x-4 text-sm">
          <a href="/" className="hover:text-primary text-primary">
            Home
          </a>
          <span className="h-2 w-px bg-gray-400"></span>{" "}
          <a href="/about" className="hover:text-primary">
            About
          </a>
          <span className="h-2 w-px bg-gray-400"></span>{" "}
          <a href="/blog" className="hover:text-primary">
            Blog
          </a>
          <span className="h-2 w-px bg-gray-400"></span>{" "}
          <a href="/contact" className="hover:text-primary">
            Contact
          </a>
        </nav>

        <div className="hidden sm:flex items-center space-x-4 text-sm">
          <a href="mailto:contact@abc.com" className="hover:text-primary">
            <img src={contact} alt="logo" className="h-5 " />
          </a>
          <span className="h-2 w-px bg-gray-400"></span>{" "}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-primary">
              <img src={facebook} alt="logo" className="h-3 " />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary">
              <img src={twitter} alt="logo" className="h-3" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary">
              <img src={instagram} alt="logo" className="h-3" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary">
              <img src={youtube} alt="logo" className="h-3" />
            </a>
          </div>
        </div>
      </div>

      <div className="lg:hidden flex justify-between items-center text-sm px-4 mt-4">
        <a href="mailto:contact@abc.com" className="hover:text-primary">
          <img src={contact} alt="logo" className="h-5" />
        </a>

        <div className="flex space-x-4 ">
          <a href="#" className="text-gray-400 hover:text-primary">
            <img src={facebook} alt="logo" className="h-3" />
          </a>
          <a href="#" className="text-gray-400 hover:text-primary">
            <img src={twitter} alt="logo" className="h-3" />
          </a>
          <a href="#" className="text-gray-400 hover:text-primary">
            <img src={instagram} alt="logo" className="h-3" />
          </a>
          <a href="#" className="text-gray-400 hover:text-primary">
            <img src={youtube} alt="logo" className="h-3" />
          </a>
        </div>
      </div>

      <span className="block w-full border-t mt-2  border-gray-700"></span>

      <div className="hidden sm:flex">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <img src={logo} alt="logo" className="h-16 " />

            <div className="flex-1 max-w-xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="w-full px-4 py-2 bg-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <MagnifyingGlassIcon className="h-5 w-5 absolute right-3 top-2.5 text-gray-400" />
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <img src={call} alt="logo" className="h-12 " />
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex gap-1">
                  <img src={account} alt="logo" className="h-6 " />
                  <p className="text-gray-400">Account</p>
                </div>

                <button className="hover:text-primary">
                  <HeartIcon className="h-6 w-6" />
                </button>
                <button className="hover:text-primary">
                  <ShoppingCartIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden sm:border-y sm:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src={openDrawer} alt="logo" className="h-4 " />
              <img src={logo} alt="logo" className="h-8 ml-2 " />
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <MagnifyingGlassIcon className="h-5 w-5  text-gray-400" />
              </div>
              <div className="flex items-center space-x-4">
                <button className="hover:text-primary">
                  <ShoppingCartIcon className="h-6 w-6" />
                </button>
                <div className="flex gap-1">
                  <img src={account} alt="logo" className="h-6 " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex justify-center mx-auto px-4 py-3 bg-[#1F242D]">
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 items-center justify-center">
          <a href="#" className="text-sm/6 font-semibold text-white">
            OBDEleven
          </a>

          <Popover className="relative ring-0 outline-none ">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-white">
              Scanner Types
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-white"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-50 mt-3 w-screen max-w-md overflow-hidden rounded-xl bg-[#1F2632] ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {scannerTypes.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg px-4 py-2 text-sm/6"
                  >
                    <div className="flex size-11 flex-none items-center justify-center">
                      <item.icon
                        aria-hidden="true"
                        className="size-4 text-white"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-[#CCCCCC]"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Popover className="relative ring-0 outline-none ">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-white">
              Car Makes
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-white"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-2/3 z-50 mt-3 w-screen max-w-3xl overflow-hidden rounded-xl bg-[#1F2632] ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
                {carMakes.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-2 rounded-lg px-4 py-4 text-sm"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-dotted border-gray-400">
                      <img src={item.icon} alt="logo" className="h-8" />
                    </div>

                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-sm text-[#CCCCCC]"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Popover className="relative ring-0 outline-none ">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-white">
              Service Reset Tools
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-white"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-2/3 z-50 mt-3 w-screen max-w-3xl overflow-hidden rounded-xl bg-[#1F2632] ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
                {serviceResetTools.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-2 rounded-lg px-4 py-1 text-sm"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center ">
                      <item.icon
                        aria-hidden="true"
                        className="h-4 w-4 text-white"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-sm text-[#CCCCCC]"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Popover className="relative ring-0 outline-none ">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-white">
              Other Tools & Accessories
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-white"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-50 mt-3 w-screen max-w-md overflow-hidden rounded-xl bg-[#1F2632] ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {otherTools.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-2 rounded-lg p-2 text-sm/"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-l ">
                      <item.icon
                        aria-hidden="true"
                        className="size-4 text-white"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-[#CCCCCC]"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
        </PopoverGroup>
      </div>
    </header>
  );
};

export default Header;
