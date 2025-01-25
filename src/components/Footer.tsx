import logo from "../assets/logo.png";
import footerImg from "../assets/footer.png";
import footer1 from "../assets/footer/footer1.png";
import footer2 from "../assets/footer/footer2.png";
import footer3 from "../assets/footer/footer3.png";
import footer4 from "../assets/footer/footer4.png";
import footer5 from "../assets/footer/footer5.png";
import facebook from "../assets/footer/gg_facebook.png";
import twitter from "../assets/footer/prime_twitter.png";
import instagram from "../assets/footer/lets-icons_insta.png";
import youtube from "../assets/footer/mingcute_youtube-line.png";

const Footer = () => {
  return (
    <footer
      className="bg-[#0d1117] text-white py-10"
      style={{
        backgroundImage: `url(${footerImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "black",
      }}
    >
      <div className="container mx-auto px-4 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={logo} alt="logo" className="h-16 mb-4" />
            <p className="text-sm text-gray-400">
              When you need the best auto parts for your ride, turn to Autoio.
              Limited-time offer for only new customers: also get free shipping
              on orders.
            </p>
            <div className="flex space-x-8 mt-4">
              <a href="#" className="text-gray-400 hover:text-primary">
                <img src={facebook} alt="logo" className="h-6 mt-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <img src={twitter} alt="logo" className="h-6 mt-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <img src={instagram} alt="logo" className="h-6 mt-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <img src={youtube} alt="logo" className="h-6 mt-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">OUR COMPANY</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-primary">
                  Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Legal Notice
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Secure Payment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Stores
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">OUR SERVICES</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-primary">
                  Car Diagnostic Tools
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Hand-Held Scanners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Universal Car Diagnostic
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Audi Diagnostic
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  ABS Brake Bleeding
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Adaptive Front Lighting System
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">CONTACT US</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <span className="font-bold text-red-600">Address:</span>
                128 Horton Grange Road, Bradford, West Yorkshire, BD7 2DW
              </li>
              <li>
                <span className="font-bold text-red-600">Phone:</span> +18
                36.815.016
              </li>
              <li>
                <span className="font-bold text-red-600">Fax:</span> 12345
              </li>
              <li>
                <span className="font-bold text-red-600">Mail:</span>{" "}
                contact@abc.co.uk
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col-reverse gap-4 md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            Copyright &copy; 2024 <span className="text-primary">abc</span>. All
            Rights Reserved.
          </p>
          <div className="flex mt-4 md:mt-0 space-x-4">
            <img src={footer1} alt="Visa" className="h-6" />
            <img src={footer2} alt="Mastercard" className="h-6" />
            <img src={footer3} alt="PayPal" className="h-6" />
            <img src={footer4} alt="Discover" className="h-6" />
            <img src={footer5} alt="Discover" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
