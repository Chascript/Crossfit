import React from 'react';
import Link from 'next/link'; // Import Link from Next.js

const HomePage = () => (
  <section className="flex items-end relative h-unit-9xl bg-[url('/banners/home-hero-1.jpg')] bg-cover bg-center">
    <div className="absolute inset-0 bg-black opacity-50" />
    <div className="container mx-auto px-4">
      <div className="md:w-1/2 mb-8 text-white relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Crossfit Info</h1>
        <p className="text-lg md:text-xl mb-8">Your ultimate source for all things CrossFit</p>
        <p className="text-lg md:text-xl mb-8">Trust the process</p>
        <Link href="/exercises" className="inline-block bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded shadow-md">
          Learn More
        </Link>
      </div>
    </div>
  </section>
);

export default HomePage;
