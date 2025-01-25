import music from "../assets/music.png";
import tools from "../assets/vaadin_tools.png";
import carbonDelevery from "../assets/carbon_delivery.png";
import id1 from "../assets/1.png";
import id2 from "../assets/2.png";
import id3 from "../assets/3.png";

const WhyChooseUs = () => {
  const features = [
    {
      id: id1,
      icon: music,
      title: "Excellent customer service",
      description:
        "We pride ourselves the key to success is serving our customers. Being there for you before, during use. We are on hand to help with any questions you may have. GREAT care about our customers.",
    },
    {
      id: id2,
      icon: tools,
      title: "Tools you can trust",
      description:
        "We know the diagnostics industry can be a minefield, terms such as EOBD, OBD2, CAN-BUS, can end up as being someone else's problem. We are here to help you decide what to buy that will you through the options and see if have all the features and functions you need.",
    },
    {
      id: id3,
      icon: carbonDelevery,
      title: "FREE next day delivery",
      description:
        "We know when you order a scanner for your car, you may need it fast! All of our scanners are dispatched and from M-F before 4pm. Most orders placed before cut off time at 12pm.",
    },
  ];

  return (
    <>
      <section className="bg-[#1a1f2b] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center sm:text-left">
            <h2 className="text-3xl font-bold mt-2 italic">WHY CHOOSE US?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col py-2">
                <div className="flex p-4  mb-4">
                  <img src={feature.icon} alt="logo" className="h-12 " />
                  <h2 className="font-bold text-[27px] ml-2">
                    {feature.title}
                  </h2>
                </div>

                <div className="flex p-4 mt-4">
                  <img src={feature.id} alt="logo" className="h-12 mr-3 " />
                  <p className="text-gray-400 text-sm ml-2">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
