import laptopImage from "../../assets/dell-laptops-04-01-2024-34-272725665-as4oa7qe.avif";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#161631] to-[#141429] text-white py-4 md:py-20">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-5 text-center lg:text-left">
        <div className="mb-10 lg:mb-0 lg:w-1/3">
          <h5 className="text-blue-400 font-semibold uppercase mb-3">Creating a Feature Now!</h5>
          <h1 className="text-4xl md:text-6xl font-bold mb-3">Best Laptops!</h1>
          <p className="text-lg text-gray-400 mb-5">Our extensive collection of men’s and women’s!</p>
          <button className="bg-blue-600 lg:flex hidden hover:bg-blue-700 text-white px-6 py-3 rounded-lg uppercase tracking-wider">
            Shop Now
          </button>
        </div>

        <div className="relative w-full lg:w-1/3 text-center mb-10 lg:mb-0">
          <img src={laptopImage} alt="Laptop" className="w-full max-w-xs md:max-w-md lg:max-w-lg mx-auto drop-shadow-lg" />
        </div>

        <div className="lg:w-1/3 text-center lg:text-right">
          <p className="text-lg md:text-2xl lg:text-3xl mb-4 text-gray-400">Great deals every weekend!</p>
          <div className="border-b-2 border-blue-400 w-20 mx-auto lg:ml-auto mb-2"></div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            From <span className="text-blue-400">$699</span>
          </h2>
          <button className="bg-blue-600 ml-10 md:ml-20 flex mt-2 lg:hidden hover:bg-blue-700 text-white px-6 py-3 rounded-lg uppercase tracking-wider">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;