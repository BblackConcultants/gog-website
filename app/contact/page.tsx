'use client';


import Image from 'next/image';
import { 
  FaEnvelope, 
  FaWhatsapp, 
  FaFacebookF, 
  FaTelegramPlane,
  FaMapMarkerAlt,
  FaPhone,
  FaTiktok
} from 'react-icons/fa';
// Form state will be implemented in future updates
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';

export default function Contact() {
  return (
    <div>
      
      {/* Contact Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <Image
          src="/images/contact-hero.jpg"
          alt="Contact Us"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 flex items-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Contact Us
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in-delay">
              Get in touch with us for more information about our programs
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow space-y-8">
              <h2 className="text-3xl font-bold text-[#1A2B4C] mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="bg-[#F2F2F2] w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-[#1A2B4C] transition-colors">
                    <FaEnvelope className="w-6 h-6 text-[#1A2B4C] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A2B4C]">Email</h3>
                    <a href="mailto:info@gogai.co.za" className="text-[#3399FF] hover:text-[#1A2B4C] transition-colors">
                      info@gogai.co.za
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="bg-[#F2F2F2] w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-[#1A2B4C] transition-colors">
                    <FaWhatsapp className="w-6 h-6 text-[#1A2B4C] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A2B4C]">WhatsApp</h3>
                    <a href="https://wa.me/27765170056" className="text-[#3399FF] hover:text-[#1A2B4C] transition-colors">
                      +27 76 517 0056
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="bg-[#F2F2F2] w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-[#1A2B4C] transition-colors">
                    <FaPhone className="w-6 h-6 text-[#1A2B4C] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A2B4C]">Phone</h3>
                    <a href="tel:+27765170056" className="text-[#3399FF] hover:text-[#1A2B4C] transition-colors">
                      +27 76 517 0056
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="bg-[#F2F2F2] w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-[#1A2B4C] transition-colors">
                    <FaMapMarkerAlt className="w-6 h-6 text-[#1A2B4C] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A2B4C]">Location</h3>
                    <p className="text-gray-600">Vereeniging, Gauteng, South Africa</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-3xl font-bold text-[#1A2B4C] mb-8">Send us a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-lg border-2 border-gray-200 p-3 focus:border-[#1A2B4C] focus:ring-[#1A2B4C] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-lg border-2 border-gray-200 p-3 focus:border-[#1A2B4C] focus:ring-[#1A2B4C] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-lg border-2 border-gray-200 p-3 focus:border-[#1A2B4C] focus:ring-[#1A2B4C] transition-colors"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1A2B4C] text-white px-6 py-3 rounded-lg hover:bg-[#3399FF] transition-colors text-lg font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-gradient-to-b from-[#F2F2F2] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1A2B4C] mb-12">Connect With Us</h2>
          <div className="flex justify-center space-x-8">
            <a 
              href="https://www.facebook.com/profile.php?id=61575006255074" 
              className="bg-[#F2F2F2] w-16 h-16 rounded-lg flex items-center justify-center hover:bg-[#1A2B4C] transition-colors group"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
            >
              <FaFacebookF className="w-8 h-8 text-[#1A2B4C] group-hover:text-white transition-colors" />
            </a>

            <a 
              href="#" 
              className="bg-[#F2F2F2] w-16 h-16 rounded-lg flex items-center justify-center hover:bg-[#1A2B4C] transition-colors group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane className="w-8 h-8 text-[#1A2B4C] group-hover:text-white transition-colors" />
            </a>
            <a 
              href="https://www.tiktok.com/@gospel.of.grace.a" 
              className="bg-[#F2F2F2] w-16 h-16 rounded-lg flex items-center justify-center hover:bg-[#1A2B4C] transition-colors group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok className="w-8 h-8 text-[#1A2B4C] group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
