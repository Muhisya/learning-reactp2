import React from 'react';

const Navbar = () => {
  return(
    <nav className="bg-blue-600 w-full text-white p-4 shadow-lg">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold">AdzConnect</h2>
        <ul className="flex gap-8">
          <li><a href="#home" className="hover:text-gray-200">Home</a></li>
          <li><a href="#about" className="hover:text-gray-200">About</a></li>
          <li><a href="#services" className="hover:text-gray-200">Services</a></li>
          <li><a href="#contact" className="hover:text-gray-200">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
