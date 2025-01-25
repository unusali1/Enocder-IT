import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import home2 from "../assets/home2.png";
import home from "../assets/home.jpg";
import freeDelivery from "../assets/delivery_33x 1.png";
import star from "../assets/star.png";
import clock from "../assets/clock.png";
import tick from "../assets/tick.png";

const Hero = () => {
  return (
    <div className="relative bg-[#1a1f2b] text-white">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${home})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "lighten",
          opacity: 0.1,
        }}
      ></div>

      <div className="bg-[#1a1f2b]/50 py-2">
        <div className="container mx-auto px-4">
          <div className="hidden md:flex items-center justify-between text-sm">
            <span className="flex items-center">
              <img src={freeDelivery} alt="logo" className="h-5 mr-1" />
              Free Delivery
            </span>
            <span>iCarsoft UK Authorised Dealer</span>
            <div className="flex items-center">
              <img src={star} alt="logo" className="h-3 mr-1" />
              Rated Excellent
            </div>

            <div className="flex items-center">
              <img src={clock} alt="logo" className="h-5 mr-1" />
              Buy Now, Pay Later
            </div>

            <div className="flex items-center">
              <img src={tick} alt="logo" className="h-5 mr-1" />
              Found it Cheaper?
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 sm:py-12 py-2 relative z-10">
        <div className="flex items-center justify-between">
          <div className="sm:max-w-lg max-w-3/2 sm:mt-0 mt-4 sm:ml-4">
            <h1 className="sm:text-4xl text-[14px] sm:font-bold font-semibold sm:mb-6 mb-1">
              TOPDON PHOENIX ELITE
            </h1>
            <p className="text-gray-300 mb-6 sm:text-lg text-[10px]">
              TOPDON Phoenix Elite dealer-level diagnostics at a fraction of the
              cost. If you don't need the online programming capabilities, you
              may want to consider the PHOENIX LITE 2 which offers excellent
              value for money.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white sm:px-8 mb-4 sm:py-3 px-2 py-1 rounded-md uppercase font-normal sm:font-semibold">
              Learn More
            </button>
          </div>

          <div className="relative">
            <img
              src={home2}
              alt="TOPDON PHOENIX ELITE"
              className="sm:h-[450px] h-full sm:w-full w-[600px] "
            />
          </div>
        </div>
      </div>

      <button className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20">
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20">
        <ChevronRightIcon className="h-6 w-6" />
      </button>

      <div className="absolute sm:bottom-4 bottom-0  left-1/2 -translate-x-1/2 flex space-x-2 ">
        <button className="w-2 h-2 rounded-full bg-primary"></button>
        <button className="w-2 h-2 rounded-full bg-white/50"></button>
        <button className="w-2 h-2 rounded-full bg-white/50"></button>
      </div>
    </div>
  );
};

export default Hero;
