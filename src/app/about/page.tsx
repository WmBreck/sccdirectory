export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="backdrop-blur-md bg-white/30 rounded-2xl shadow-xl border border-white/20 p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            About SCC Directory
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              An increasing number of people cannot afford to hire a lawyer. These individuals represent themselves and increasingly rely on AI platforms for assistance in navigating the legal system and transactions with legal implications. An increasing number of such people use AI platforms to create their legal documents. The mission of Legal-Help-AI.com, SCCDirectory.com, and their creator, Wm. Breck Seiniger, J.D., is to provide self-help legal resources and tools for the non-lawyer. These are provided for information purposes only and are not intended to be legal advice, for which the user must rely on a licensed attorney.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              What We Provide
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              This website, <a href="https://sccdirectory.com" target="_blank" rel="noopener noreferrer">sccdirectory.com</a>, contains links to state and local government websites containing information about and/or forms for use in their small claims court. This information is provided solely for the user's information. Nothing contained herein is intended to be legal advice and should not be considered as such.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              About the Creator of this Website
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              William Breck Seiniger J.D. is an experienced attorney with extensive education, bar memberships, professional experience, teaching, and publications in law. His career spans several decades with notable involvement in Idaho legal circles and beyond.
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Contact and Education:</strong> Seiniger is reachable at 31 Jones Street, Greenville, SC, with a B.A. in Psychology from the University of Massachusetts (1972), a J.D. from University of Idaho College of Law (1978), and additional negotiation and mediation training from Harvard Law School and Pepperdine (1986, 2016).</li>
              <li><strong>Bar Memberships and Court Admissions:</strong> He holds admissions in Idaho (Emeritus status 2022), District of Columbia (Active), Ninth Circuit Court of Appeals, and the U.S. Supreme Court.</li>
              <li><strong>Professional Experience:</strong> His career includes roles from speechwriter for Congressman Conte to various legal positions culminating in Seiniger Law (1980-2021).</li>
              <li><strong>Awards and Recognitions:</strong> He has received the Idaho State Bar Outstanding Service Award (1996), maintained a Martindale-Hubbell AV rating since 2002, and has been featured in Best Lawyers in America and other prestigious directories.</li>
              <li><strong>Committee and Leadership Roles:</strong> Seiniger served on multiple Idaho Supreme Court and District Court committees, chaired Idaho State Bar sections, and held leadership roles in the Idaho Trial Lawyers Association.</li>
              <li><strong>Additional Roles and Teaching:</strong> He was a candidate for Idaho Supreme Court Justice (2014) and served as General Counsel for West Ada School District (2015-2016). He has delivered numerous CLE lectures on legal topics including trial advocacy, employment law, and technology use in law.</li>
              <li><strong>Publications:</strong> He authored articles on legal doctrines, workers compensation, and legal technology, published in Advocate and other professional compilations.</li>
              <li><strong>Reported Cases:</strong> Seiniger has been counsel in numerous reported Idaho appellate cases spanning from 1983 to 2020, reflecting significant litigation experience.</li>
              <li><strong>Federal Cases:</strong> He has been involved in several federal district and appellate court cases, including the U.S. Supreme Court, demonstrating a broad scope of civil litigation experience.</li>
              <li><strong>Literary Interests:</strong> Beyond law, Seiniger studied literature at Oxford and writes poetry and song lyrics, which he shares on SubStack at <a href="https://substack.com/@hooleythepoet" target="_blank" rel="noopener noreferrer">https://substack.com/@hooleythepoet</a> and songs containing his original lyrics shared on SoundCloud at <a href="https://soundcloud.com/hooley-the-poet" target="_blank" rel="noopener noreferrer">https://soundcloud.com/hooley-the-poet</a>.</li>
            </ul>

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