'use client';

import { useState } from 'react';
import { FaDownload, FaChevronUp } from 'react-icons/fa';

export default function DownloadsMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className={`bg-white rounded-lg shadow-lg transition-all duration-300 ${isOpen ? 'mb-2' : ''}`}>
        {isOpen && (
          <div className="p-4 min-w-[250px]">
            <h3 className="text-lg font-semibold text-[#1A2B4C] mb-3">Downloads</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/downloads/soteria.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#1A2B4C] hover:text-[#3399FF] transition-colors"
                >
                  <FaDownload className="w-4 h-4 mr-2" />
                  <span className="text-sm">Certificate of Affiliation - Soteria Theological Seminary</span>
                </a>
              </li>
            </ul>
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full px-4 py-2 bg-[#1A2B4C] text-white rounded-lg hover:bg-[#3399FF] transition-colors"
        >
          <span className="mr-2">Downloads</span>
          <FaChevronUp className={`w-4 h-4 transition-transform ${isOpen ? '' : 'rotate-180'}`} />
        </button>
      </div>
    </div>
  );
}
