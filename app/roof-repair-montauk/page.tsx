import React from 'react';
import Head from 'next/head';

export default function RoofRepairMontauk() {
  return (
    <>
      <Head>
        <title>Roof Repair Montauk NY - Fast & Reliable Roofing Services</title>
        <meta
          name="description"
          content="Looking for fast and reliable roof repair in Montauk, NY? Our certified roofing professionals offer 24/7 emergency roof repair services. Call now for a free estimate."
        />
        <meta
          name="keywords"
          content="Roof Repair Montauk NY, Emergency Roof Repair Montauk, Roof Leak Repair Montauk, Roofing Contractors Montauk NY"
        />
        <link rel="canonical" href="https://yourwebsite.com/roof-repair-montauk" />
      </Head>

      {/* Hero Section */}
      <div className="bg-[#FFF5F5] py-[94px] mt-[30px] card-shadow md:rounded-[20px] flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-black">
          Roof Repair Montauk, NY
        </h1>
        <p className="mt-4 text-lg md:text-2xl font-semibold text-center text-[#555]">
          24-Hour Same-Day Roof Repairs in Montauk, NY. Call Now: <a href="tel:8001234567">(800) 123-4567</a>
        </p>
        <div className="bg-[#CC0000] px-8 py-3 text-white text-2xl md:text-3xl font-bold mt-6 rounded-lg">
          SCHEDULE MY REPAIR
        </div>
      </div>

      {/* Service List Section */}
      <div className="container mx-auto px-4 md:px-8 mt-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center">
          Expert Roof Repair Services in Montauk, NY
        </h2>
        <p className="mt-4 text-gray-600 text-center text-lg md:text-xl">
          We specialize in all types of roof repairs, from minor leaks to major storm damage. Here
          are the services we offer in Montauk:
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="flex items-center gap-4">
            <img src="/_next/static/media/roof-repair.28260b5e.svg" alt="Roof Repair" className="h-8 w-8" />
            <span className="text-xl md:text-2xl font-medium">Roof Leak Repair</span>
          </div>
          <div className="flex items-center gap-4">
            <img src="/_next/static/media/roof-replacement.dfa8df21.svg" alt="Roof Replacement" className="h-8 w-8" />
            <span className="text-xl md:text-2xl font-medium">Shingle Replacement</span>
          </div>
          <div className="flex items-center gap-4">
            <img src="/_next/static/media/roof-inspections.a8780de7.svg" alt="Roof Inspections" className="h-8 w-8" />
            <span className="text-xl md:text-2xl font-medium">Chimney & Skylight Leak Repair</span>
          </div>
          <div className="flex items-center gap-4">
            <img src="/_next/static/media/roof-leak-repairs.904f092e.svg" alt="Roof Leak Repairs" className="h-8 w-8" />
            <span className="text-xl md:text-2xl font-medium">Emergency Roof Repairs</span>
          </div>
          <div className="flex items-center gap-4">
            <img src="/_next/static/media/roof-installation.4d9da1e6.svg" alt="Roof Installation" className="h-8 w-8" />
            <span className="text-xl md:text-2xl font-medium">Roof Maintenance</span>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container mx-auto px-4 md:px-8 mt-12">
        <h3 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center">
          Why Choose Us for Roof Repair in Montauk?
        </h3>
        <p className="mt-4 text-gray-600 text-lg md:text-xl text-center">
          We understand the unique challenges of roofing in Montauk, from saltwater damage to harsh
          winds. Our local roofing experts provide long-lasting solutions.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-medium text-gray-700">24/7 Emergency Roof Repair in Montauk</h4>
            <p className="mt-2 text-gray-600">Roof emergencies don't wait. We offer 24/7 emergency roof repair services to keep your home safe.</p>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-xl font-medium text-gray-700">Free Roof Repair Estimates</h4>
            <p className="mt-2 text-gray-600">Get a no-obligation estimate for your roof repair project in Montauk. Our quotes are transparent and upfront, with no hidden fees.</p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-[#CC0000] text-white text-center py-8 my-12">
        <h3 className="text-3xl font-bold">Call Now for Roof Repair in Montauk, NY</h3>
        <p className="text-lg md:text-2xl mt-4">
          Get your free estimate today. Call us at <a href="tel:8001234567" className="font-bold">(800) 123-4567</a>
        </p>
      </div>

      {/* Customer Reviews Section */}
      <div className="container mx-auto px-4 md:px-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center">Customer Reviews for Roof Repair in Montauk, NY</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <p className="text-gray-800">"Fast and reliable! They fixed our roof leak within hours of our call. Highly recommend!"</p>
            <p className="mt-2 text-sm text-gray-500">- John D., Montauk, NY</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <p className="text-gray-800">"Great service! They were professional and efficient. Our roof looks brand new."</p>
            <p className="mt-2 text-sm text-gray-500">- Sarah W., Montauk, NY</p>
          </div>
        </div>
      </div>
    </>
  );
}
