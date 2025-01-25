import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import patner1 from "../assets/patner/patner1.png";
import patner2 from "../assets/patner/patner2.png";
import patner3 from "../assets/patner/patner3.png";
import patner4 from "../assets/patner/patner4.png";
import patner5 from "../assets/patner/patner5.png";
import patner6 from "../assets/patner/patner6.png";
import patner7 from "../assets/patner/patner7.png";
import auth1 from "../assets/auth1.png";
import auth2 from "../assets/auth2.png";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  avatar: string;
  rating: number;
  comment: string;
  daysAgo: number;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "PAUL L",
      title: "Executive Director at",
      company: "Company Name",
      avatar: auth1,
      rating: 5,
      comment:
        "Awesome service, next day delivery, friendly staff that know their stuff. Reassured support is always available should it be needed. It was like dealing with someone you've known 20 years.",
      daysAgo: 4,
    },
    {
      id: 2,
      name: "DAVID G",
      title: "Service Manager at",
      company: "Company Name",
      avatar: auth2,
      rating: 5,
      comment: "Excellent service and support",
      daysAgo: 5,
    },
    {
      id: 3,
      name: "LEE W",
      title: "Technical Director at",
      company: "Company Name",
      avatar: auth1,
      rating: 5,
      comment: "Great product and service",
      daysAgo: 6,
    },
  ];

  const carBrands = [
    { name: "Volkswagen", logo: patner1 },
    { name: "Audi", logo: patner2 },
    { name: "BMW", logo: patner3 },
    { name: "Jaguar", logo: patner4 },
    { name: "Seat", logo: patner5 },
    { name: "Skoda", logo: patner6 },
    { name: "Land Rover", logo: patner7 },
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <StarIcon
        key={index}
        className={`h-4 w-4 ${index < rating ? "text-yellow-400" : "text-gray-300"
          }`}
      />
    ));
  };

  return (
    <section className="bg-[#1D232D] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="sm:text-2xl text-lg font-bold italic">
            THE LOVE FROM OUR
            <br />
            CUSTOMERS
          </h2>
          <a href="#" className="text-sm text-gray-400 hover:text-white">
            See All Reviews &gt;
          </a>
        </div>

        <div className="flex flex-col gap-[-4px] sm:px-10 px-0">
          <div className="bg-[#242936] rounded-lg sm:p-12 p-4">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-lg font-bold text-gray-400">
                  Very Good
                </span>
                <div className="flex">{renderStars(5)}</div>
                <span className="text-xs bg-yellow-400 text-black px-1 rounded">
                  PILOT
                </span>
              </div>
              <span className="text-sm text-gray-400">4 days ago</span>
            </div>

            <div className="mb-4">
              <p className="text-lg text-gray-300 italic px-4">
                "Awesome service, next day delivery, friendly staff that know
                their stuff. Reassured support is always available should it be
                needed. It was like dealing with someone you've known 20 years."
              </p>
            </div>
          </div>

          <div className="sm:ml-28 ml-24 ">
            <div className="w-12 h-12 overflow-hidden rotate-180">
              <div className="w-24 h-32 bg-gray-800 [clip-path:polygon(50%_0%,_100%_50%,_50%_100%,_0%_50%)]"></div>
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <div className="md:hidden overflow-x-auto">
            <div className="flex gap-0">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 w-80 rounded-lg px-2"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-gray-400">
                          {testimonial.title}
                          <br />
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="rounded-lg px-6 mb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-400">
                        {testimonial.title}
                        <br />
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-16 sm:px-8 px-0">
          {carBrands.map((brand, index) => (
            <img
              key={index}
              src={brand.logo}
              alt={brand.name}
              className="h-10 grayscale hover:grayscale-0 bg-white text-white rounded-full p-1 duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
