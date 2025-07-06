import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home - Gospel of Grace Academy',
  description: 'Welcome to Gospel of Grace Academy',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.jpg"
            alt="Gospel of Grace Academy Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to Gospel of Grace Academy</h1>
          <p className="text-xl md:text-2xl mb-8">Raising a generation that is Christo centric</p>
          <a
            href="/apply"
            className="bg-[#C9A136] text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-[#1A2B4C] transition duration-300"
          >
            Apply Now
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <h3 className="text-2xl font-semibold text-[#1A2B4C] mb-4">Academic Excellence</h3>
            <p className="text-gray-600">Committed to providing high-quality education rooted in Christian values.</p>
          </div>
          <div className="text-center p-6">
            <h3 className="text-2xl font-semibold text-[#1A2B4C] mb-4">Spiritual Growth</h3>
            <p className="text-gray-600">Fostering spiritual development through biblical teaching and discipleship.</p>
          </div>
          <div className="text-center p-6">
            <h3 className="text-2xl font-semibold text-[#1A2B4C] mb-4">Community</h3>
            <p className="text-gray-600">Building a supportive Christian community that nurtures growth and fellowship.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1A2B4C] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your Journey With Us</h2>
          <p className="text-lg mb-8">Join our community of learners and discover your God-given potential.</p>
          <a
            href="/contact"
            className="bg-[#C9A136] text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-[#1A2B4C] transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
