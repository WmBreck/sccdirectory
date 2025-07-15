export default function SiteFooter() {
  return (
    <footer className="w-full bg-white/70 backdrop-blur-md border-t border-white/60 py-4 px-4 mt-auto shadow-md">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-800">
              © 2024 Legal-Info-AI.com. All rights reserved.
            </p>
            <p className="text-xs text-gray-700 mt-1">
              This directory is provided as a free public service for informational purposes only.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <a 
              href="/about" 
              className="text-sm text-gray-900 hover:text-blue-700 transition-colors duration-200"
            >
              About
            </a>
            <a 
              href="/contact" 
              className="text-sm text-gray-900 hover:text-blue-700 transition-colors duration-200"
            >
              Contact
            </a>
            <a 
              href="mailto:lawgorithmai@gmail.com" 
              className="text-sm text-gray-900 hover:text-blue-700 transition-colors duration-200"
            >
              Suggestions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 