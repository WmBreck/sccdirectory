import Link from 'next/link';

export default function SiteHeader() {
  return (
    <div className="w-full bg-white/70 backdrop-blur-md border-b border-white/60 py-2 px-4 shadow-md">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="text-center sm:text-left">
          <h2 className="text-lg font-semibold text-gray-900 drop-shadow-sm">
            50 State Small Claims Court URL Directory <span className="text-sm font-normal text-gray-700">(A free public service provided by Legal-Info-AI.com)</span>
          </h2>
          <p className="text-sm text-gray-700">
            sccdirectory.com
          </p>
        </div>
        
        <nav className="mt-2 sm:mt-0 flex space-x-6">
          <Link 
            href="/" 
            className="text-gray-900 hover:text-blue-700 transition-colors duration-200 text-sm font-medium"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="text-gray-900 hover:text-blue-700 transition-colors duration-200 text-sm font-medium"
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="text-gray-900 hover:text-blue-700 transition-colors duration-200 text-sm font-medium"
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
} 