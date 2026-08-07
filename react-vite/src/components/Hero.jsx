import React from 'react';

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-slate-50 px-4 py-16 gap-3 text-center">
      <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
        Welcome User, to <span className="text-blue-600">AdzConnect!</span>
      </h1>
      
      <p className="text-base sm:text-lg text-slate-600 w-2xl mb-8 leading-relaxed">
        Connect your business with the right audience. Manage ads, track performance, and grow your brand all from one simple platform.
      </p>

      <div className="flex gap-3">
        <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm transition">
          Get Started
        </button>
        <button className="px-6 py-2.5 border border-slate-300 text-slate-700 font-medium rounded-md hover:bg-slate-100 transition">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Hero;