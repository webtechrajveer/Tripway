export default function aboutus() {
  return (
    <div className="pt-16 min-h-screen ">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-700 to-yellow-700 text-white">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us – Tripway Holidays</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Where journeys transcend the ordinary and become extraordinary memories.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-[1100px] px-6 py-12 rounded-lg mb-20">
        {/* Who We Are */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1f2937] mb-6">Who We Are</h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
            Welcome to Tripway Holidays, where journeys transcend the ordinary and become extraordinary memories. As India's premier travel curator, we specialize in delivering seamless, personalized, and luxurious travel experiences that capture the spirit of exploration and the comfort of refined hospitality.
          </p>
        </div>

        {/* Our Philosophy */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#1f2937] mb-4 text-center">Our Philosophy</h3>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed text-center">
            Travel is not just a destination—it is about living the moment. At Tripway, we commit to transforming your travel dreams into realities, blending authenticity with bespoke luxury at every step. Every itinerary is crafted with passion, every encounter designed to surprise and delight.
          </p>
        </div>

        {/* Our Mission */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#1f2937] mb-4 text-center">Our Mission</h3>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed text-center">
            To inspire and empower travelers to embrace the world with elegance, ease, and awe. We provide exceptional transportation, private tours, and exclusive experiences—all underpinned by attentive, heartfelt service.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#1f2937] mb-8 text-center">Why Choose Tripway Holidays?</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200">
              <h4 className="text-lg font-semibold text-orange-600 mb-2">Luxury, Personalized</h4>
              <p className="text-gray-700">Bespoke itineraries tailored to your unique preferences and pace.</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200">
              <h4 className="text-lg font-semibold text-orange-600 mb-2">Elite Expertise</h4>
              <p className="text-gray-700">Experienced guides and drivers dedicated to your safety and comfort.</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200">
              <h4 className="text-lg font-semibold text-orange-600 mb-2">24/7 Attention</h4>
              <p className="text-gray-700">Round-the-clock concierge support—your peace of mind is our top priority.</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200">
              <h4 className="text-lg font-semibold text-orange-600 mb-2">Transparent Value</h4>
              <p className="text-gray-700">Premium experiences at honest, competitive prices.</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200 md:col-span-2 lg:col-span-1">
              <h4 className="text-lg font-semibold text-orange-600 mb-2">Proven Excellence</h4>
              <p className="text-gray-700">Thousands of delighted clients return to Tripway for their next adventure.</p>
            </div>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="my-20">
          <h2 className="text-3xl font-bold text-center text-[#1f2937] mb-12">Our Journey</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-500"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              <div className="relative flex items-center justify-between">
                <div className="w-5/12 pr-8 text-right">
                  <h3 className="font-bold text-xl text-orange-600">2020</h3>
                  <p className="text-gray-600">Founded Tripway with a vision to revolutionize luxury travel experiences in India</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full"></div>
                <div className="w-5/12 pl-8"></div>
              </div>

              <div className="relative flex items-center justify-between">
                <div className="w-5/12 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full"></div>
                <div className="w-5/12 pl-8">
                  <h3 className="font-bold text-xl text-orange-600">2021</h3>
                  <p className="text-gray-600">Expanded our premium services to 15+ exclusive destinations across India</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between">
                <div className="w-5/12 pr-8 text-right">
                  <h3 className="font-bold text-xl text-orange-600">2022</h3>
                  <p className="text-gray-600">Launched bespoke luxury tour packages and elite transportation services</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full"></div>
                <div className="w-5/12 pl-8"></div>
              </div>

              <div className="relative flex items-center justify-between">
                <div className="w-5/12 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full"></div>
                <div className="w-5/12 pl-8">
                  <h3 className="font-bold text-xl text-orange-600">2023</h3>
                  <p className="text-gray-600">Achieved milestone of serving 10,000+ delighted travelers with excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-[#1f2937] mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-x-5">
              <div className="relative h-64 w-full">
                <img
                  src="/car-wash.png"
                  alt="Team Member"
                  className="w-full h-full"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900">Sarah Johnson</h3>
                <p className="text-orange-600 font-medium">CEO & Founder</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-x-110">
              <div className="relative h-64 w-full">
                <img
                  src="/driver.png"
                  alt="Team Member"
                  className="w-full h-full"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900">Michael Chen</h3>
                <p className="text-orange-600 font-medium">Head of Operations</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:translate-x-5">
              <div className="relative h-64 w-full">
                <img
                  src="/form4.jpg"
                  alt="Team Member"
                  className="w-full h-full"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900">Emily Brown</h3>
                <p className="text-orange-600 font-medium">Customer Experience Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
