import React from 'react'

const Bestoneforyou = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
      <div className="relative rounded-none overflow-hidden">
        <img src="src/assets/istockphoto-1373017594-612x612.jpg" alt="Headphones" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-none bg-opacity-50 flex flex-col items-start p-6 sm:p-10 text-white">
          <div className="absolute top-4 left-4 w-[80%] md:w-[40%]">
            <h3 className="uppercase text-blue-700 font-bold text-lg sm:text-xl">Great Headphones</h3>
            <h2 className="text-cyan-900 font-bold mb-4 sm:mb-6 text-4xl sm:text-6xl">Find your sound!</h2>
            <button className="bg-blue-600 text-white py-2 px-4 sm:px-6 rounded-full hover:bg-blue-700 transition">Shop Now</button>
          </div>
        </div>
      </div>

      <div className="relative rounded-none overflow-hidden bg-blue-600">
        <img src="src/assets/S12-Ultra-Smart-Watch-4G-Sim-Card-With-Rotating-Camera.png" alt="Smartwatch" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-none bg-opacity-50 flex flex-col items-start p-6 sm:p-10 text-white">
          <div className="absolute top-4 left-4 w-[80%] md:w-[40%]">
            <h3 className="text-lg sm:text-xl font-bold uppercase">Best Smartwatch 2020</h3>
            <h2 className="text-4xl sm:text-6xl font-bold mb-4 sm:mb-6">Smartwatch for you!</h2>
            <button className="bg-white text-black py-2 px-4 sm:px-6 rounded-full hover:bg-blue-100 transition">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bestoneforyou