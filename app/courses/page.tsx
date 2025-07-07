
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaCross, 
  FaUserCircle, 
  FaUsers, 
  FaChurch, 
  FaBullhorn, 
  FaFileAlt, 
  FaRing,
  FaBuilding,
  FaHandHoldingHeart,
  FaSeedling
} from 'react-icons/fa';

export default function Courses() {
  return (
    <div>
      
      {/* Courses Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <Image
          src="/images/courses-hero.jpg"
          alt="Our Courses"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 flex items-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Our Courses
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in-delay">
              Comprehensive theological education from Certificate to PhD level
            </p>
          </div>
        </div>
      </div>

      {/* Main Courses */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Our Main Courses</h2>
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700 mb-4">
              In partnership With SOTERIA Theological Seminary<br />
              We are offering qualifications from, Certificate to PhD.
            </p>
            <p className="text-lg text-gray-600">
              All our courses will be offered online through Telegram and Facebook
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/apply" className="block">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="bg-[#F2F2F2] w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#1A2B4C] transition-colors">
                <FaCross className="w-8 h-8 text-[#1A2B4C] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#1A2B4C]">Gospel of Grace</h3>
              </div>
            </Link>
            <Link href="/apply" className="block">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="bg-[#F2F2F2] w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#1A2B4C] transition-colors">
                <FaUserCircle className="w-8 h-8 text-[#1A2B4C] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#1A2B4C]">Christian Faith</h3>
              </div>
            </Link>
            <Link href="/apply" className="block">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="bg-[#F2F2F2] w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#1A2B4C] transition-colors">
                <FaUsers className="w-8 h-8 text-[#1A2B4C] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#1A2B4C]">Our Identity in Christ</h3>
              </div>
            </Link>
            <Link href="/apply" className="block">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="bg-[#F2F2F2] w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#1A2B4C] transition-colors">
                <FaChurch className="w-8 h-8 text-[#1A2B4C] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#1A2B4C]">The Five Fold Ministry</h3>
              </div>
            </Link>
            <Link href="/apply" className="block">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="bg-[#F2F2F2] w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#1A2B4C] transition-colors">
                <FaUsers className="w-8 h-8 text-[#1A2B4C] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#1A2B4C]">Christian Leadership</h3>
              </div>
            </Link>
            <Link href="/apply" className="block">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="bg-[#F2F2F2] w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#1A2B4C] transition-colors">
                <FaBullhorn className="w-8 h-8 text-[#1A2B4C] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#1A2B4C]">Evangelism and Church Multiplication</h3>
              </div>
            </Link>
            <Link href="/apply" className="block">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="bg-[#F2F2F2] w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#1A2B4C] transition-colors">
                <FaFileAlt className="w-8 h-8 text-[#1A2B4C] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#1A2B4C]">Church Administration and Financial Management</h3>
              </div>
            </Link>
            <Link href="/apply" className="block">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="bg-[#F2F2F2] w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#1A2B4C] transition-colors">
                <FaRing className="w-8 h-8 text-[#1A2B4C] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#1A2B4C]">Marriage Officership and Counseling</h3>
              <p className="text-gray-600 text-sm">(Preparation for registration with Department of Home Affairs)</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Short Courses */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Short Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/apply" className="block">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="bg-[#F2F2F2] w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#1A2B4C] transition-colors">
                <FaBuilding className="w-8 h-8 text-[#1A2B4C] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#1A2B4C]">Business and Financial Management</h3>
              </div>
            </Link>
            <Link href="/apply" className="block">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="bg-[#F2F2F2] w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#1A2B4C] transition-colors">
                <FaSeedling className="w-8 h-8 text-[#1A2B4C] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#1A2B4C]">Construction and Farming Health & Safety</h3>
              <p className="text-gray-600 text-sm">(Building a Safety File)</p>
              </div>
            </Link>
            <Link href="/apply" className="block">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="bg-[#F2F2F2] w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#1A2B4C] transition-colors">
                <FaHandHoldingHeart className="w-8 h-8 text-[#1A2B4C] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#1A2B4C]">Community Development and Income Generating Projects</h3>
              </div>
            </Link>
            <Link href="/apply" className="block">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="bg-[#F2F2F2] w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#1A2B4C] transition-colors">
                <FaRing className="w-8 h-8 text-[#1A2B4C] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#1A2B4C]">Marriage Officership</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Online Learning */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Online Learning Platforms</h2>
          <p className="text-lg text-gray-600 mb-8">
            All our courses are offered online through Telegram and Facebook platforms
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="https://t.me/+rNxa0H15HKsxNmRk" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700"
            >
              Join on Telegram
            </a>
            <a href="#" className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700">
              Join on Facebook
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
