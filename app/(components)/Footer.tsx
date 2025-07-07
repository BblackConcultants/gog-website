import Link from 'next/link';
import { FaTiktok, FaFacebookF, FaTelegramPlane } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
              <li><Link href="/courses" className="hover:text-blue-400">Courses</Link></li>
              <li><Link href="/apply" className="hover:text-blue-400">Apply</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Courses</h3>
            <ul className="space-y-2">
              <li>Certificate Programs</li>
              <li>Diploma Programs</li>
              <li>Degree Programs</li>
              <li>Short Courses</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@gogai.co.za" className="hover:text-blue-400">
                  info@gogai.co.za
                </a>
              </li>
              <li>
                <a href="https://wa.me/27765170056" className="hover:text-blue-400">
                  WhatsApp: +27 76 517 0056
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.facebook.com/profile.php?id=61575006255074" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center hover:text-blue-400"
                >
                  <FaFacebookF className="mr-2" /> Facebook
                </a>
              </li>
              <li>
                <a 
                  href="https://t.me/+rNxa0H15HKsxNmRk" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center hover:text-blue-400"
                >
                  <FaTelegramPlane className="mr-2" /> Telegram
                </a>
              </li>
              <li>
                <a 
                  href="https://www.tiktok.com/@gospel.of.grace.a" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center hover:text-blue-400"
                >
                  <FaTiktok className="mr-2" /> TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Gospel of Grace Academy and University International. NPO Ref: 319-550
          </p>
        </div>
      </div>
    </footer>
  );
}
