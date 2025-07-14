export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="backdrop-blur-md bg-white/30 rounded-2xl shadow-xl border border-white/20 p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            About SCC Directory
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg leading-relaxed mb-6">
              Welcome to the Small Claims Court Directory - your comprehensive resource for accessing 
              small claims court information across all 50 states and the District of Columbia.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              [Your mission statement will go here]
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              What We Provide
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              [Description of services and resources will go here]
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              How to Use This Directory
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              [Usage instructions will go here]
            </p>
            
            <div className="mt-8 p-6 bg-blue-50/50 rounded-xl border border-blue-200/30">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                Need Help?
              </h3>
              <p className="text-blue-700">
                If you have questions or need assistance, please visit our{' '}
                <a href="/contact" className="text-blue-600 hover:text-blue-800 underline">
                  Contact page
                </a>{' '}
                to get in touch with us.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 