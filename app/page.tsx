import Navigation from './(components)/Navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { FaGraduationCap, FaHandshake } from 'react-icons/fa';
import { BsLaptop } from 'react-icons/bs';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
      <div className="relative h-[600px] w-full">
        <Image
          src="/images/hero.jpg"
          alt="Gospel of Grace Academy"
          fill
          sizes="100vw"
          quality={100}
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/75 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Welcome to Gospel of Grace Academy
            </h1>
            <p className="text-xl text-white mb-8 max-w-2xl">
              Raising a generation that is Christo centric and educated about the gospel of grace
            </p>
            <div className="flex gap-4">
              <Link 
                href="/courses" 
                className="bg-[#1A2B4C] text-white px-6 py-3 rounded-md inline-flex items-center group hover:bg-[#C9A136] transition-all duration-300 transform hover:translate-x-1"
              >
                Explore Courses
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/apply" 
                className="bg-[#D4AF37] text-white px-6 py-3 rounded-md inline-flex items-center group hover:bg-[#C9A136] transition-all duration-300 transform hover:translate-x-1"
              >
                Apply Now
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              To finish the Great Commission. Making disciples of Jesus Christ, to teach the Grace of God to the poor, 
              the sick, the outcasts and the brokenhearted of the whole world and to proclaim the year of the Lord's favour.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-[#F2F2F2]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A2B4C] text-center mb-8">Our Vision</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-[#1A2B4C] leading-relaxed">
              To raise a generation that is Christo centric and educated about the gospel of grace. 
              We aim to equip leaders with sound biblical knowledge and practical ministry skills 
              through comprehensive theological education.
            </p>
            <p className="text-[#1A2B4C]">In partnership with SOTERIA Theological Seminary</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-block p-4 bg-[#F2F2F2] rounded-full mb-4">
                <BsLaptop className="w-8 h-8 text-[#1A2B4C]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#1A2B4C]">Online Learning</h3>
              <p className="text-[#1A2B4C]">Access courses through Telegram and Facebook platforms</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-block p-4 bg-[#F2F2F2] rounded-full mb-4">
                <FaGraduationCap className="w-8 h-8 text-[#1A2B4C]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#1A2B4C]">Comprehensive Programs</h3>
              <p className="text-[#1A2B4C]">From Certificate to PhD qualifications available</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-block p-4 bg-[#F2F2F2] rounded-full mb-4">
                <FaHandshake className="w-8 h-8 text-[#1A2B4C]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#1A2B4C]">Partnership</h3>
              <p className="text-[#1A2B4C]">In partnership with SOTERIA Theological Seminary</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Begin Your Journey Today</h2>
          <p className="text-xl mb-8">Join us in our mission to spread the gospel of grace</p>
          <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100">
            Contact Us
          </Link>
        </div>
      </section>
      </main>
    </div>
  );
}
