
export default function Contact() {

  return (
 <div className="min-h-screen bg-white flex flex-col md:flex-row items-center justify-center px-4 py-10 mt-20">
      {/* Left - Intro Content + Contact Form */}
      <div className="w-full max-w-lg md:w-1/2 bg-orange-100 p-8 rounded-lg shadow-lg">

        {/* --- Introductory Content --- */}
        <div className="mb-8">
          <h2 className="text-4xl font-extrabold text-black mb-2">
            Get in Touch with Tripway
          </h2>
          <p className="text-gray-700 text-lg">
            Have questions about your booking, need help planning your travels, or want to share feedback?
            
          </p>
        </div>


        {/* --- Contact Form --- */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
        <form className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your full name"
              required
              className="w-full border border-gray-600 rounded-md px-4 py-2 focus:ring-2  focus:outline-none text-black"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your email address"
              required
              className="w-full border border-gray-600 rounded-md px-4 py-2 focus:ring-2  focus:outline-none text-black"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              className="w-full border border-gray-600 rounded-md px-4 py-2 focus:ring-2  focus:outline-none text-black"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              id="message"
              placeholder="Your message"
              rows={4}
              required
              className="w-full border border-gray-600 rounded-md px-4 py-2 focus:ring-2  focus:outline-none resize-none text-black"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-3 rounded-md transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
     <div className="min-h-screen bg-white flex flex-col  items-center justify-center px-4 py-8">
  <div className="text-black text-3xl font-semibold mb-4 text-center">
    Contact Us
  </div>
  <div className="text-black  leading-relaxed max-w-2xl text-left gap-4">
    We&apos;re Here to Help! At Tripway, your travel experience is our top priority. Whether you have questions about booking, need assistance with your itinerary, or simply want to know more about our travel packages, our dedicated support team is just a message away. Feel free to reach out to us via email, phone, or our online contact form. We&apos;re always ready to provide expert guidance and prompt solutions to make your journey smooth and enjoyable. Let&apos;s make your next trip unforgettable—connect with us today!
  </div>
</div>

    </div>
  );
}
