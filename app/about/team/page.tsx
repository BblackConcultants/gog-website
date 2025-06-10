'use client';

import Image from 'next/image';
import Navigation from '../../(components)/Navigation';
import { useState, useRef } from 'react';

export default function Team() {
  const [imageError, setImageError] = useState<{[key: string]: boolean}>({});
  const errorHandled = useRef<{[key: string]: boolean}>({});

  const handleImageError = (key: string) => {
    if (!errorHandled.current[key]) {
      errorHandled.current[key] = true;
      setImageError(prev => ({ ...prev, [key]: true }));
    }
  };
  return (
    <main className="flex-1">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        <Image
          src="/images/team-hero.jpg"
          alt="Our Visionaries"
          fill
          sizes="100vw"
          className="object-cover transform scale-105 animate-slow-zoom"
          priority
          quality={75}
          onError={() => handleImageError('hero')}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Our Team
            </h1>
            <p className="text-xl text-white/90 max-w-2xl animate-fade-in-delay">
              Meet the dedicated individuals who are shaping the future of theological education
            </p>
          </div>
        </div>
      </div>

      {/* Visionaries Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A2B4C] to-[#0A1525] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl p-12 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1 border-t-4 border-[#D4AF37]">
            <div className="flex flex-col items-center">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#D4AF37] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg">
                Our Visionaries
              </div>
              {/* Circular Image with Gold Border */}
              <div className="relative w-64 h-64 md:w-96 md:h-96 mb-12 rounded-full transform hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 rounded-full border-8 border-[#D4AF37] shadow-2xl animate-pulse-slow">
                  <Image
                    src="/images/visionaries/visionaries.jpg"
                    alt="Dr Profetess Zanele Mlambo and Apostle Billy Ben Mlambo"
                    fill
                    sizes="(max-width: 768px) 256px, 320px"
                    className="rounded-full object-cover"
                    quality={75}
                    onError={() => handleImageError('visionaries')}
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="text-center">
                <h2 className="text-4xl font-bold text-[#1A2B4C] mb-6 mt-4">
                  Dr Profetess Zanele Mlambo & Apostle Billy Ben Mlambo
                </h2>
                <div className="h-1 w-32 bg-[#D4AF37] mb-8 rounded-full"></div>
                <div className="max-w-2xl mx-auto">
                  <p className="text-[#1A2B4C] leading-relaxed">
                    Leading with divine wisdom and purpose, our visionaries are committed to 
                    spreading the message of grace through comprehensive theological education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Board Members Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A2B4C] text-center mb-12">
            Quality Assurance Board Members
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dr Zanele Mlambo */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center">
                <div className="relative w-48 h-48 mb-6 rounded-full">
                  <div className="absolute inset-0 rounded-full border-4 border-[#D4AF37] shadow-lg">
                    <Image
                      src="/images/quality_assurance/Dr Zanele Mlambo - CEO.jpg"
                      alt="Dr Zanele Mlambo"
                      fill
                      sizes="192px"
                      className="rounded-full object-cover"
                      quality={75}
                      onError={() => handleImageError('zanele-qa')}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1A2B4C] text-center mb-2">Dr Zanele Mlambo</h3>
                <p className="text-[#1A2B4C] text-center">CEO</p>
              </div>
            </div>

            {/* Apostle Billy Mlambo */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center">
                <div className="relative w-48 h-48 mb-6 rounded-full">
                  <div className="absolute inset-0 rounded-full border-4 border-[#D4AF37] shadow-lg">
                    <Image
                      src="/images/quality_assurance/Apostle Billy Mlambo - Registrar.jpg"
                      alt="Apostle Billy Mlambo"
                      fill
                      sizes="192px"
                      className="rounded-full object-cover"
                      quality={75}
                      onError={() => handleImageError('billy-qa')}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1A2B4C] text-center mb-2">Apostle Billy Mlambo</h3>
                <p className="text-[#1A2B4C] text-center">Registrar</p>
              </div>
            </div>

            {/* Dr Eli Shadung */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center">
                <div className="relative w-48 h-48 mb-6 rounded-full">
                  <div className="absolute inset-0 rounded-full border-4 border-[#D4AF37] shadow-lg">
                    <Image
                      src="/images/quality_assurance/Dr Eli Shadung - Compliance Officer.jpg"
                      alt="Dr Eli Shadung"
                      fill
                      sizes="192px"
                      className="rounded-full object-cover"
                      quality={75}
                      onError={() => handleImageError('eli')}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1A2B4C] text-center mb-2">Dr Eli Shadung</h3>
                <p className="text-[#1A2B4C] text-center">Compliance Officer</p>
              </div>
            </div>

            {/* Minister Mathew Dlamini */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center">
                <div className="relative w-48 h-48 mb-6 rounded-full">
                  <div className="absolute inset-0 rounded-full border-4 border-[#D4AF37] shadow-lg">
                    <Image
                      src="/images/quality_assurance/Minister Mathew Dlamini - Administrator.jpg"
                      alt="Minister Mathew Dlamini"
                      fill
                      sizes="192px"
                      className="rounded-full object-cover"
                      quality={75}
                      onError={() => handleImageError('mathew')}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1A2B4C] text-center mb-2">Minister Mathew Dlamini</h3>
                <p className="text-[#1A2B4C] text-center">Administrator</p>
              </div>
            </div>

            {/* Princess Khuthala Ntombela */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center">
                <div className="relative w-48 h-48 mb-6 rounded-full">
                  <div className="absolute inset-0 rounded-full border-4 border-[#D4AF37] shadow-lg">
                    <Image
                      src="/images/quality_assurance/Princess Khuthala Ntombela - Secretary.jpg"
                      alt="Princess Khuthala Ntombela"
                      fill
                      sizes="192px"
                      className="rounded-full object-cover"
                      quality={75}
                      onError={() => handleImageError('khuthala')}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1A2B4C] text-center mb-2">Princess Khuthala Ntombela</h3>
                <p className="text-[#1A2B4C] text-center">Secretary</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section className="py-20 bg-gradient-to-b from-[#F2F2F2] to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1A2B4C] text-center mb-16 relative inline-block">
            <span className="relative z-10">Our Management</span>
            <div className="absolute bottom-0 left-0 w-full h-3 bg-[#D4AF37] opacity-20 transform -rotate-1"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dr Jennifer Mashaba */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center">
                <div className="relative w-48 h-48 mb-6 rounded-full">
                  <div className="absolute inset-0 rounded-full border-4 border-[#D4AF37] shadow-lg">
                    <Image
                      src="/images/management/Dr Jennifer Mashaba - Lecturing Marriage Officership.jpg"
                      alt="Dr Jennifer Mashaba"
                      fill
                      sizes="192px"
                      className="rounded-full object-cover"
                      quality={75}
                      onError={() => handleImageError('jennifer')}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1A2B4C] text-center mb-2">Dr Jennifer Mashaba</h3>
                <p className="text-[#1A2B4C] text-center">Marriage Officership Lecturer</p>
              </div>
            </div>

            {/* Mr Amos Khumalo */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center">
                <div className="relative w-48 h-48 mb-6 rounded-full">
                  <div className="absolute inset-0 rounded-full border-4 border-[#D4AF37] shadow-lg">
                    <Image
                      src="/images/management/amos.jpg"
                      alt="Mr Amos Khumalo"
                      fill
                      sizes="192px"
                      className="rounded-full object-cover"
                      quality={75}
                      onError={() => handleImageError('amos')}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1A2B4C] text-center mb-2">Mr Amos Khumalo</h3>
                <p className="text-[#1A2B4C] text-center">Gospel of Grace Module Lecturer</p>
              </div>
            </div>

            {/* Mr Lennick Ngwenyama */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center">
                <div className="relative w-48 h-48 mb-6 rounded-full">
                  <div className="absolute inset-0 rounded-full border-4 border-[#D4AF37] shadow-lg">
                    <Image
                      src="/images/management/lennick.jpg"
                      alt="Mr Lennick Ngwenyama"
                      fill
                      sizes="192px"
                      className="rounded-full object-cover"
                      quality={75}
                      onError={() => handleImageError('lennick')}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1A2B4C] text-center mb-2">Mr Lennick Ngwenyama</h3>
                <p className="text-[#1A2B4C] text-center">Identity in Christ Lecturer</p>
              </div>
            </div>

            {/* Mr Mlambo */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center">
                <div className="relative w-48 h-48 mb-6 rounded-full">
                  <div className="absolute inset-0 rounded-full border-4 border-[#D4AF37] shadow-lg">
                    <Image
                      src="/images/management/mlambo.jpg"
                      alt="Mr Mlambo"
                      fill
                      sizes="192px"
                      className="rounded-full object-cover"
                      quality={75}
                      onError={() => handleImageError('mlambo')}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1A2B4C] text-center mb-2">Mr Mlambo</h3>
                <p className="text-[#1A2B4C] text-center">Registrar & Church Administration Lecturer</p>
              </div>
            </div>

            {/* Mr Steven Motshabi */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center">
                <div className="relative w-48 h-48 mb-6 rounded-full">
                  <div className="absolute inset-0 rounded-full border-4 border-[#D4AF37] shadow-lg">
                    <Image
                      src="/images/management/stephen.jpg"
                      alt="Mr Steven Motshabi"
                      fill
                      sizes="192px"
                      className="rounded-full object-cover"
                      quality={75}
                      onError={() => handleImageError('steven')}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1A2B4C] text-center mb-2">Mr Steven Motshabi</h3>
                <p className="text-[#1A2B4C] text-center">Christian Faith Lecturer</p>
              </div>
            </div>

            {/* Ms Nobuhle Mkhize */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center">
                <div className="relative w-48 h-48 mb-6 rounded-full">
                  <div className="absolute inset-0 rounded-full border-4 border-[#D4AF37] shadow-lg">
                    <Image
                      src="/images/management/nobuhle.jpg"
                      alt="Ms Nobuhle Mkhize"
                      fill
                      sizes="192px"
                      className="rounded-full object-cover"
                      quality={75}
                      onError={() => handleImageError('nobuhle')}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1A2B4C] text-center mb-2">Ms Nobuhle Mkhize</h3>
                <p className="text-[#1A2B4C] text-center">Bible Interpretation Lecturer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
