import BackButton from "../../components/BackButton";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <BackButton />
        <div className="backdrop-blur-md bg-white/30 rounded-2xl shadow-xl border border-white/20 p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            Contact Us
          </h1>
          <div className="prose prose-lg max-w-none text-gray-700 text-center">
            <p className="text-lg leading-relaxed mb-8">
              Have questions, suggestions, or need assistance? We&apos;d love to hear from you.
            </p>
            <div className="space-y-6 flex flex-col items-center justify-center">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <a href="mailto:lawgorithmai@gmail.com" className="text-blue-700 hover:underline">lawgorithmai@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <span className="text-gray-700">(864) 501-2259</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 