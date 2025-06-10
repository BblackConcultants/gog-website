import Navigation from '../(components)/Navigation';
import Image from 'next/image';

export default function Visionaries() {
  return (
    <div>
      <Navigation />
      
      {/* Visionaries Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Visionaries</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Meet the founders and visionaries behind Gospel of Grace Academy and University International
            </p>
          </div>
        </div>
      </section>

      {/* Visionaries Profiles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="/images/visionaries.jpg"
                  alt="Dr. Prophetess Zanele Mlambo"
                  width={300}
                  height={300}
                  className="rounded-lg mx-auto"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Dr. Prophetess Zanele Mlambo</h2>
              <p className="text-gray-600">Co-Founder and Visionary</p>
            </div>
            
            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="/images/visionaries.jpg"
                  alt="Apostle Billy Ben Mlambo"
                  width={300}
                  height={300}
                  className="rounded-lg mx-auto"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Apostle Billy Ben Mlambo</h2>
              <p className="text-gray-600">Co-Founder and Visionary</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Under their leadership, we strive to raise a generation that is Christo centric and educated about the gospel of grace.
              Through their guidance, we are committed to finishing the Great Commission and making disciples of Jesus Christ.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
