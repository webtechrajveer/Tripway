'use client';

import Image from "next/image";
import { useState } from "react";

const itineraryData = {
  day1: {
    title: "Arrival & Classic Kedarnath",
    cards: [
      {
        period: "Morning",
        time: "7:00 AM - 10:00 AM",
        desc: "Airport pickup & hotel check-in",
        details: "Arrive in Kedarnath. Our transfer service will take you to your hotel near the temple.",
        tip: "Pro Tip: Carry warm clothes as temperatures can drop quickly.",
        color: "from-gray-200 to-gray-200",
      },
      {
        period: "Afternoon",
        time: "12:00 PM - 4:00 PM",
        desc: "Visit Kedarnath Temple",
        details: "Take a guided walk to Kedarnath Temple and explore the spiritual surroundings.",
        tip: "Pro Tip: Keep your camera ready for majestic Himalayan views.",
        color: "from-gray-200 to-gray-200",
      },
      {
        period: "Evening",
        time: "6:00 PM - 9:00 PM",
        desc: "Local market + dinner",
        details: "Explore the local market and enjoy a traditional Uttarakhand dinner.",
        tip: "Pro Tip: Try local dishes like Chainsoo or Aloo ke Gutke.",
        color: "from-gray-200 to-gray-200",
      },
    ],
    bottomNote: "End the day with evening aarti at the temple.",
  },
  day2: {
    title: "Exploring Kedarnath Valley",
    cards: [
      {
        period: "Morning",
        time: "6:00 AM - 9:00 AM",
        desc: "Trek to Vasuki Tal",
        details: "Start early and trek to Vasuki Tal, a glacial lake with mesmerizing views.",
        tip: "Pro Tip: Hydrate well and wear trekking shoes.",
        color: "from-gray-500 to-gray-600",
      },
      {
        period: "Afternoon",
        time: "12:00 PM - 3:00 PM",
        desc: "Picnic by the river",
        details: "Enjoy a peaceful picnic lunch by the Mandakini River.",
        tip: "Pro Tip: Carry reusable bottles and avoid plastic.",
        color: "from-gray-500 to-gray-600",
      },
      {
        period: "Evening",
        time: "5:00 PM - 8:00 PM",
        desc: "Cultural performance",
        details: "Watch a local cultural performance and learn about Garhwali traditions.",
        tip: "Pro Tip: Capture memories, not just photos.",
        color: "from-gray-500 to-gray-600",
      },
    ],
    bottomNote: "Sleep under the stars in your mountain camp.",
  },
  day3: {
    title: "Return & Reflection",
    cards: [
      {
        period: "Morning",
        time: "8:00 AM - 10:00 AM",
        desc: "Yoga & Meditation",
        details: "Start with a peaceful yoga session near the temple premises.",
        tip: "Pro Tip: Focus on deep breathing for altitude adaptation.",
        color: "from-gray-500 to-gray-600",
      },
      {
        period: "Afternoon",
        time: "1:00 PM - 3:00 PM",
        desc: "Local sightseeing",
        details: "Visit Bhairavnath Temple and nearby viewpoints.",
        tip: "Pro Tip: Shop for souvenirs before returning.",
        color: "from-gray-500 to-gray-600",
      },
      {
        period: "Evening",
        time: "4:00 PM - 7:00 PM",
        desc: "Departure",
        details: "Begin your return journey with beautiful memories.",
        tip: "Pro Tip: Leave early to avoid traffic and landslides.",
        color: "from-gray-500 to-gray-600",
      },
    ],
    bottomNote: "Hope you had a spiritual and refreshing experience!",
  },
};

const destinations = [
  {
    title: "Rajasthan",
    days: 4,
    nights: 3,
    groupSize: 12,
    description: "Discover the Eternal City with expert guides, luxury hotels, and exclusive access to cultural treasures.",
    highlights: [
      "Colosseum Skip-the-Line",
      "Vatican Private Tour",
      "Luxury Hotels",
      "Traditional Cuisine",
    ],
    rating: 6.8,
    reviews: 1645,
    price: 1200,
    image: "/page2.jpg",
    color: "bg-gradient-to-r from-orange-500 to-red-600 text-white",
  },
  {
    title: "Gujarat",
    days: 5,
    nights: 4,
    groupSize: 10,
    description: "Explore Gujarat’s temples and heritage with exclusive experiences and top-tier accommodations.",
    highlights: [
      "Colosseum Skip-the-Line",
      "Vatican Private Tour",
      "Luxury Hotels",
      "Traditional Cuisine",
    ],
    rating: 4.8,
    reviews: 1542,
    price: 1100,
    image: "./page2.jpg",
    color: "bg-gradient-to-r from-orange-500 to-red-600 text-white",
  },
  {
    title: "Jammu Kashmir",
    days: 4,
    nights: 3,
    groupSize: 8,
    description: "Cruise through Dal Lake and soak in the serenity of Kashmir with handpicked experiences.",
    highlights: [
      "Colosseum Skip-the-Line",
      "Vatican Private Tour",
      "Luxury Hotels",
      "Traditional Cuisine",
    ],
    rating: 9.5,
    reviews: 1935,
    price: 750,
    image: "/jamukashmir.jpg",
    color: "bg-gradient-to-r from-orange-500 to-red-600 text-white",
  }
];

export default function Destination() {
  const [activeDay, setActiveDay] = useState("day1");
  const [rating, setRating] = useState(4);
  const [hoverRating, setHoverRating] = useState(null);
  const [reviews, setReviews] = useState([
    { rating: 5 },
    { rating: 4 },
    { rating: 3 },
    { rating: 2 },
    { rating: 1 },
    { rating: 4 },
  ]);

  const handleRating = (index) => {
    setRating(index);
    setReviews(prev => [...prev, { name: "You", rating: index }]);
  };

  const starElements = Array.from({ length: 5 }, (_, i) => {
    const index = i + 1;
    const isActive = hoverRating ? index <= hoverRating : index <= rating;
    return (
      <svg
        key={index}
        className={`w-6 h-6 cursor-pointer transition-colors duration-150 ${isActive ? "text-yellow-400 hover:text-yellow-500" : "text-gray-300"}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        onClick={() => handleRating(index)}
        onMouseEnter={() => setHoverRating(index)}
        onMouseLeave={() => setHoverRating(null)}
      >
        <path d="M10 15l-5.878 3.09L5.74 12.09.868 7.91l6.364-.91L10 1l2.768 6 6.364.91-4.873 4.18 1.618 5.997z" />
      </svg>
    );
  });

  return (
    <div className="mx-auto max-w-[1100px] px-4">
      {/* Hero Section */}
      <div className="relative h-[400px] sm:h-[500px] lg:h-[550px] xl:h-[600px] mt-17">
        <Image src="/kedarnath.jpg" alt="Hero Image" fill className="object-cover animate-float blur-sm" priority />
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-10 md:px-16 lg:px-20 xl:px-32 text-black">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">Discover</h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400"> Kedarnath </h2>
          <p className="mt-6 max-w-3xl text-sm sm:text-base md:text-lg font-sans text-black">
            Experience the magic of the City of Light with our expertly crafted 5-day journey. From iconic landmarks to hidden gems, immerse yourself in Parisian culture, cuisine, and history while staying in premium hotels in the heart of the city.
          </p>
          <p className="mt-4 text-sm sm:text-base md:text-lg font-bold text-white flex flex-wrap gap-x-4 gap-y-1">
            <span>⏰ 5 Days - 4 Nights</span>
            <span>👥 Small Groups (Max 12)</span>
            <span>📌 Central Uttarakhand</span>
          </p>
          <button className="mt-6 w-fit bg-yellow-500 hover:bg-yellow-600 text-white font-semibold text-sm sm:text-base md:text-lg py-2 sm:py-3 px-5 sm:px-6 md:px-8 rounded-full transition duration-300">
            Book Your Adventure
          </button>
        </div>
      </div>
      <h1 className="text-3xl md:text-5xl lg:text-6xl mt-8 text-center tracking-tight text-black font-serif">Your Perfect Kedarnath Itinerary</h1>
      <p className="text-center text-lg mt-2 text-black">Every moment carefully planned for an unforgettable experience</p>

      {/* Tabs Section */}
      <div className="flex flex-col items-center mt-10 px-4">
        <div className="flex justify-center mb-6 w-full">
          <div className="backdrop-blur-xl bg-black/20 border border-black/10 shadow-xl rounded-full flex gap-2 sm:gap-4 px-2 sm:px-4 py-2 w-full max-w-[360px] sm:max-w-[440px] transition-all duration-300">
            {["day1", "day2", "day3"].map((day, idx) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`w-full px-3 py-1.5 rounded-full text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 ${
                  activeDay === day
                    ? "bg-black/20 text-black shadow-inner ring-black/60"
                    : "text-black/70 hover:text-black hover:bg-black/10 hover:shadow-md"
                }`}
              >
                Day {idx + 1}
              </button>
            ))}
          </div>
        </div>
        <h2 className="text-center text-2xl md:text-3xl font-extrabold mb-8 text-black drop-shadow-md animate-fade-in">
          {itineraryData[activeDay].title}
        </h2>
      </div>

      {/* Day Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {itineraryData[activeDay].cards.map((card) => (
          <div
            key={card.period}
            className={`rounded-xl p-5 bg-gradient-to-br ${card.color} shadow-md hover:shadow-2xl hover:brightness-105 hover:-translate-y-1 transition-transform duration-200 ease-in-out`}
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold">{card.period}</h3>
              <span className="text-[11px] sm:text-sm font-semibold bg-red-500 text-white px-3 py-1 rounded-full break-words sm:whitespace-nowrap text-center">
                {card.time}
              </span>
            </div>
            <p className="font-semibold mb-1">{card.desc}</p>
            <p className="text-sm">{card.details}</p>
            <div className="mt-4 bg-white/20 text-sm px-4 py-2 rounded-lg">{card.tip}</div>
          </div>
        ))}
      </div>
     

      {/* Accommodations Section */}
      <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl mt-8 text-center text-black">Luxury Accommodations</h1>
      <p className="text-center text-2xl mt-5 font-serif text-black">Stay in Paris&apos;s most prestigious hotels, where every detail is perfection</p>
      {[
        { Image: "/hote1.jpg", title: "Chandigarh to Manali" },
        { Image: "/hotel2.jpg", title: "Delhi to Manali" },
        { Image: "/hotel3.jpg", title: "Hotel Plaza Athénée" }
      ].map((hotel, i) => (
        <div
          key={i}
          className="bg-[#353535] text-white rounded-2xl overflow-hidden shadow-xl flex flex-col lg:flex-row gap-6 p-5 lg:p-8 max-w-6xl mx-auto border-1 mt-4"
        >
          {/* Left Image */}
          <div className="flex-shrink-0 w-full lg:w-[300px] h-[200px] lg:h-auto rounded-xl overflow-hidden">
            <Image src={hotel.Image} alt={hotel.title} className="w-full h-full object-cover" />
          </div>
          {/* Middle Content */}
          <div className="flex-1 space-y-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">{hotel.title}</h2>
              <p className="text-xl text-white flex items-center gap-1 ">
                {hotel.title === "Hotel Plaza Athénée"
                  ? "📍 Avenue Montaigne, 8th Arrondissement"
                  : hotel.title === "Delhi to Manali"
                  ? "📍 Avenue Montaigne, 8th Arrondissement The Road to the Mountains"
                  : "The Journey to the Mountains Begins 📍 Avenue Montaigne, 8th Arrondissement"}
              </p>
              <p className="text-sm text-gray-300 mt-1">
                Iconic luxury hotel on prestigious Avenue Montaigne, renowned for haute couture shopping and exquisite dining.
              </p>
            </div>
            {/* Amenities */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm font-medium">
              <div className="text-blue-400">• Free Wi-Fi</div>
              <div className="text-blue-400">• Concierge Service</div>
              <div className="text-blue-400">• Business Center</div>
              <div className="text-blue-400">• Dior Institut Spa</div>
              <div className="text-blue-400">• Fitness Center</div>
              <div className="text-blue-400">• Butler Service</div>
            </div>
            {/* Special Features */}
            <div className="pt-3">
              <h3 className="text-base font-semibold text-white">Special Features:</h3>
              <ul className="list-disc list-inside text-sm mt-1 space-y-1 text-red-400">
                <li>Breakfast Included</li>
                <li>Alain Ducasse restaurant</li>
                <li>Personal shopping service</li>
              </ul>
            </div>
            {/* Price */}
            <p className="text-lg font-semibold text-white pt-4">
              Starting from <span className="text-green-400">{hotel.title === "Hotel Plaza Athénée" ? "₹1,000/night" : "₹1,200/night"}</span>
            </p>
          </div>
          {/* Right Map */}
          <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:w-[250px] lg:h-[400px] rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999522628817!2d2.303065515674849!3d48.866667079287735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc16ccdd11d%3A0x3d0aefdc1f15d218!2sH%C3%B4tel%20Plaza%20Ath%C3%A9n%C3%A9e!5e0!3m2!1sen!2sin!4v1692176354794!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotel Map"
            ></iframe>
          </div>
        </div>
      ))}

      {/* Customer Reviews */}
      <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl mt-8 text-center text-black">What Our Travelers Say</h1>
      <p className="text-center text-xl font-serif lg:text-2xl mt-1 text-black">Real experiences from real travelers</p>
      <div className="max-w-md mx-auto w-ful overflow-hidden transition-shadow duration-300 mt-10 p-4">
        <h1 className="text-center font-semibold py-3 text-lg text-black">Customer Reviews</h1>
        <div className="flex justify-center bg-gray-700 py-2 rounded-full items-center text-black">
          {starElements}
          <span className="ml-2 text-sm font-semibold text-gray-700">{rating.toFixed(1)} / 5</span>
        </div>
        <div className="px-4 pb-4">
          <div className=" mt-5 text-black">
            {[5, 4, 3, 2, 1].map((r) => {
              const users = reviews.filter((u) => u.rating === r);
              const percentage = (users.length / reviews.length) * 100 || 0;
              return (
                <div key={r} className="flex items-center gap-1 mb-2 my-3">
                  <span className="font-medium">{r} Star</span>
                  <div className="flex-grow bg-gray-200 rounded-full h-4 mx-3 overflow-hidden">
                    <div className="bg-yellow-500 h-full" style={{ width: `${percentage}%` }} ></div>
                  </div>
                  <span className="text-sm">{percentage.toFixed(0)}%</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl mt-8 text-center text-black">You Might Also Love</h1>
      <p className="text-center text-xl font-serif lg:text-2xl mt-1 text-black">Discover more amazing destinations with our curated city tours</p>
      <section className="py-10 px-4  text-black">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Explore Our Tours</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {destinations.map((item, idx) => (
            <div key={idx} className="bg-gray-200 text-black rounded-xl overflow-hidden shadow-lg transition hover:-translate-y-1 hover:shadow-xl duration-300">
              <Image src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-sm text-gray-900">
                  ⏱ {item.days} Days / {item.nights} Nights &nbsp; 👥 Max {item.groupSize}
                </p>
                <p className="text-sm text-gray-900">{item.description}</p>
                <div>
                  <h4 className="text-sm font-semibold mt-2 mb-1">Tour Highlights:</h4>
                  <ul className="text-sm text-blue-600 list-disc list-inside">
                    {item.highlights.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <p className="text-yellow-600 text-sm font-semibold">
                    ⭐ {item.rating} <span className="text-gray-600">({item.reviews} reviews)</span>
                  </p>
                  <p className="text-black text-sm font-semibold">From ${item.price}</p>
                </div>
                <button
                  className={`mt-3 text-white ${item.color} hover:opacity-90 px-4 py-2 rounded-full text-sm w-full`}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
     
    </div>
  );
}
