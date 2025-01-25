import { StarIcon, HeartIcon } from "@heroicons/react/24/solid";
import product1 from "../assets/products/product1.png";
import product2 from "../assets/products/product2.png";
import product3 from "../assets/products/product3.png";
import product4 from "../assets/products/product4.png";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import left from "../assets/left.png";
import right from "../assets/right.png";

interface Product {
  id: number;
  image: string;
  rating: number;
  title: string;
  price: number;
  oldPrice: number;
  badge?: string;
  isNew?: boolean;
}

const FeaturedProducts = () => {
  const products: Product[] = [
    {
      id: 1,
      image: product1,
      rating: 5,
      title: "Professional Key Programming for VW, Audi, Seat",
      price: 79.99,
      oldPrice: 89.99,
      badge: "SALE",
    },
    {
      id: 2,
      image: product2,
      rating: 5,
      title: "ANCEL VD700 FOR VAG, BMW, SKODA, VOLKSWAGEN...",
      price: 89.99,
      oldPrice: 129.99,
      badge: "NEW",
    },
    {
      id: 3,
      image: product3,
      rating: 5,
      title: "OBDProg M1 Pack (Standard) Bluetooth Scanner...",
      price: 134.99,
      oldPrice: 119.99,
      badge: "SOLD OUT",
      isNew: true,
    },
    {
      id: 4,
      image: product4,
      rating: 5,
      title: "MaxiSYS MS906 J2534 Full System All Makes...",
      price: 249.99,
      oldPrice: 429.99,
      isNew: true,
    },
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
    <section className="bg-[#1a1f2b] text-white py-16">
      <div className="container mx-auto px-4">
        <div className=" mb-8">
          <h2 className="text-2xl font-bold italic">FEATURED PRODUCTS</h2>
          <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex items-center space-x-4 md:space-x-4 overflow-x-auto md:overflow-visible mt-8 scrollbar-hidden">
              <button className="text-sm text-white py-1 px-3 font-semibold rounded-sm hover:text-white bg-red-600">
                All
              </button>
              <button className="text-sm text-white hover:text-white">
                Special
              </button>
              <button className="text-sm text-white hover:text-white">
                Popular
              </button>
              <button className="text-sm text-white hover:text-white">
                New/Used
              </button>
              <button className="text-sm text-white hover:text-white">
                Certified
              </button>
              <a href="#" className="hidden sm:block text-sm text-gray-400 hover:text-white">
                See All Products &gt;
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-2 mt-8">
              <button className="text-sm text-white p-2 text-semibold rounded-sm hover:text-white bg-gray-700">
                <img src={left} alt="icon" className="w-2 h-2 object-cover" />
              </button>
              <button className="text-sm text-white p-2 text-semibold rounded-sm hover:text-white bg-gray-700">
                <img src={right} alt="icon" className="w-2 h-2 object-cover" />
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="md:hidden overflow-x-auto">
            <div className="flex gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-[#242936] rounded-lg overflow-hidden group border border-gray-700 flex-shrink-0 w-64"
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />

                    <button className="absolute top-2 left-2 p-1.5 rounded-md bg-[#253146] hover:bg-white/20">
                      <HeartIcon className="h-5 w-5 text-white" />
                    </button>

                    

                    {product.badge && (
                      <span
                        className={`absolute top-2 right-2 px-2 py-1 text-xs rounded ${product.badge === "SOLD OUT"
                            ? "bg-gray-600"
                            : product.badge === "SALE"
                              ? "bg-primary"
                              : "bg-yellow-400"
                          }`}
                      >
                        {product.badge}
                      </span>
                    )}
                  </div>

                  <div className="p-4">
                    <div className="flex text-[#838896] mt-2">
                      <p className="mr-2 mt-1">Rating:</p>
                      <div className="flex text-[#838896] mt-2">
                        {renderStars(product.rating)}
                      </div>
                    </div>

                    <span className="block w-full border-t mt-4 mb-4 border-gray-700"></span>

                    <h3 className="text-[14px] mb-2 line-clamp-2 text-[#838896]">
                      {product.title}
                    </h3>
                    <span className="block w-full border-t border-gray-700"></span>
                    <div className="flex mt-2">
                      <p className="text-lg text-red-600">
                        £{product.price.toFixed(2)}{" "}
                        <del className="text-sm text-gray-400">
                          £{product.oldPrice.toFixed(2)}
                        </del>{" "}
                      </p>
                      <p className="text-xs text-[#CCCCCC] ml-1 mt-2">inc. VAT</p>
                    </div>

                    <div className="flex justify-center items-center mt-4">
                      <button className="flex px-12 py-1.5 bg-slate-600 text-white text-sm rounded-2xl hover:bg-primary/90">
                        <ShoppingCartIcon className="h-4 w-4" />
                        <p className="ml-2">Add to Cart</p>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-[#242936] rounded-lg overflow-hidden group border border-gray-700"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />

                  <button className="absolute top-2 left-2 p-1.5 rounded-md bg-[#253146] hover:bg-white/20">
                    <HeartIcon className="h-5 w-5 text-white" />
                  </button>

                  {product.badge && (
                    <span
                      className={`absolute top-2 right-2 px-2 py-1 text-xs rounded ${product.badge === "SOLD OUT"
                          ? "bg-gray-600"
                          : product.badge === "SALE"
                            ? "bg-primary"
                            : "bg-yellow-600"
                        }`}
                    >
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="p-4">
                  <div className="flex text-[#838896] mt-2">
                    <p className="mr-2 mt-1">Rating:</p>
                    <div className="flex text-[#838896] mt-2">
                      {renderStars(product.rating)}
                    </div>
                  </div>

                  <span className="block w-full border-t mt-4 mb-4 border-gray-700"></span>

                  <h3 className="text-[14px] mb-2 line-clamp-2 text-[#838896]">
                    {product.title}
                  </h3>
                  <span className="block w-full border-t border-gray-700"></span>
                  <div className="flex mt-2">
                    <p className="text-lg text-red-600">
                      £{product.price.toFixed(2)}{" "}
                      <del className="text-sm text-gray-400">
                        £{product.oldPrice.toFixed(2)}
                      </del>{" "}
                    </p>
                    <p className="text-xs text-[#CCCCCC] ml-1 mt-2">inc. VAT</p>
                  </div>

                  <div className="flex justify-center items-center mt-4">
                    <button className="flex px-12 py-1.5 bg-slate-600 text-white text-sm rounded-2xl hover:bg-primary/90">
                      <ShoppingCartIcon className="h-4 w-4" />
                      <p className="ml-2">Add to Cart</p>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>


        <div className="flex md:hidden items-center justify-center space-x-2 mt-8">
          <button className="text-sm text-white p-2 font-semibold rounded-sm hover:text-white bg-gray-700">
            <img src={left} alt="icon" className="w-2 h-2 object-cover" />
          </button>
          <button className="text-sm text-white p-2 font-semibold rounded-sm hover:text-white bg-gray-700">
            <img src={right} alt="icon" className="w-2 h-2 object-cover" />
          </button>
        </div>
      </div>
      
    </section>
  );
};

export default FeaturedProducts;
