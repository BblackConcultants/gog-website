import Image from 'next/image';
import { FaEye, FaCrosshairs } from 'react-icons/fa';
import Navigation from '../(components)/Navigation';

export default function About() {
  return (
    <main className="flex-1">
      <Navigation />
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <Image
          src="/images/about-hero.jpg"
          alt="About Gospel of Grace Academy"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/75 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Us
            </h1>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-[#F2F2F2]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="inline-block p-4 bg-[#F2F2F2] rounded-full mb-4">
                <FaEye className="w-8 h-8 text-[#1A2B4C]" />
              </div>
              <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4">Our Vision</h2>
              <p className="text-[#1A2B4C] leading-relaxed">
                To raise a generation that is Christo centric and educated about the gospel of grace. 
                We aim to equip leaders with sound biblical knowledge and practical ministry skills 
                through comprehensive theological education.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="inline-block p-4 bg-[#F2F2F2] rounded-full mb-4">
                <FaCrosshairs className="w-8 h-8 text-[#1A2B4C]" />
              </div>
              <h2 className="text-2xl font-bold text-[#1A2B4C] mb-4">Our Mission</h2>
              <p className="text-[#1A2B4C] leading-relaxed">
                To provide accessible, high-quality theological education that empowers individuals 
                to understand and share the message of grace effectively in their communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statement Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-[#1A2B4C] rounded-lg shadow-lg p-8 text-center">
            <p className="text-white text-xl md:text-2xl font-semibold leading-relaxed">
              WE TEACH BELIEVERS AND NON BELIEVERS THAT IT IS ONLY BY GRACE THAT 
              ONE GETS SAVED AND THAT JESUS IS THE ONLY MEDIATOR BETWEEN
              MAN AND GOD
            </p>
            <p className="text-[#D4AF37] mt-4 font-medium">
              (EPHESIANS 2:8)
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
