'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { FaArrowRight, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import { motion } from "motion/react"
import { useInView } from "framer-motion";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { useRef } from 'react';
export default function Homepage() {
  const FirstRef = useRef(null);
  const isFirstInView = useInView(FirstRef, {once: true,});

  const testimonials = [
    {
      name: "Priya Sharma",
      review: 5,
      description:
        "Tripway Holidays made my Kedarnath trip stress-free! Beautiful hotels and friendly guides.",
    },
    {
      name: "Ravi Patel",
      review: 5,
      description:
        "Prompt support and excellent package options. This site is my family's new favorite for trips.",
    },
    {
      name: "Anjali Kumar",
      review: 5,
      description:
        "Their Rajasthan tour was spot on. Love the attention to detail in everything.",
    },

  ];
  // Slider images
  const sliderImages = [
    {
      src: '/kedarnath.jpg',
      alt: 'Kedarnath Temple',
      title: 'Explore Kedarnath',
      subtitle: 'Discover the spiritual journey in the Himalayas'
    },
    {
      src: '/rajasthan123.jpg',
      alt: 'Rajasthan Palace',
      title: 'Royal Rajasthan',
      subtitle: 'Experience the royal heritage and vibrant culture'
    },
    {
      src: '/jamukashmir.jpg',
      alt: 'Kashmir Valley',
      title: 'Paradise on Earth',
      subtitle: 'Visit the breathtaking landscapes of Kashmir'
    },
    {
      src: '/Gujrat1.jpg',
      alt: 'Gujarat',
      title: 'Vibrant Gujarat',
      subtitle: 'Explore the land of traditions and festivals'
    },
  ];

  // Featured destinations
  const destinations = [
    {
      name: 'Kedarnath',
      image: '/kedarnath1.jpg',
      rating: 4.8,
      price: '₹15,999',
      location: 'Uttarakhand'
    },
    {
      name: 'Rajasthan Tour',
      image: '/rajasthan1.jpg',
      rating: 4.7,
      price: '₹12,499',
      location: 'Rajasthan'
    },
    {
      name: 'Kashmir Valley',
      image: '/jamukashmir.jpg',
      rating: 4.9,
      price: '₹18,999',
      location: 'Jammu & Kashmir'
    },
    {
      name: 'Gujarat Heritage',
      image: '/gujrat.jpeg',
      rating: 4.6,
      price: '₹10,999',
      location: 'Gujarat'
    },
    {
      name: 'Hotel Experience',
      image: '/hotel1.jpg',
      rating: 4.5,
      price: '₹8,999',
      location: 'Multiple Locations'
    },
    {
      name: 'Luxury Stay',
      image: '/hotel3.jpg',
      rating: 4.7,
      price: '₹14,999',
      location: 'Premium Resorts'
    },
  ];

  const ThardSections = [
    {
      heading: "About TravelEase",
      items: [
        {
          title: "Our Mission",
          description: "To provide exceptional travel experiences that inspire and enrich lives. Your journey begins here. Discover breathtaking destinations and create unforgettable memories.",
        },
        {
          title: "Our Vision",
          description: "To be the leading travel company recognized for innovation and customer satisfaction.Your journey begins here. Discover breathtaking destinations and create unforgettable memories.",
        },
      ],
    },
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Section with Image Slider */}
      <section className="relative w-full h-screen md:h-screen flex flex-col">
        <div className="relative w-full flex-1 ">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            className="w-full h-full banner-swiper"
          >
            {sliderImages.map((image, index) => (
              <SwiperSlide key={index} className="relative w-full h-full">
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 z-10" />
                {/* Image */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  className="object-cover"
                />
                {/* Slide Content */}
                <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center text-white px-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fadeIn ">
                    {image.title}
                  </h1>
                  <p className="text-lg md:text-xl max-w-2xl mb-8 animate-fadeIn">
                    {image.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn">
                    <Link href="/booknow">
                      <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold transition duration-300 flex items-center justify-center">
                        Book a Tour <FaArrowRight className="ml-2" />
                      </button>
                    </Link>
                    <Link href="/cabs">
                      <button className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-md font-semibold transition duration-300 flex items-center justify-center">
                        Rent a Car <FaArrowRight className="ml-2" />
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <div className=' max-w-[1100px] mx-auto'>
        {/* Featured Destinations Section */}
        <section className="py-16 px-4 max-w-[1100px] mx-auto rounded-3xl relative">
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-orange-600 text-transparent bg-clip-text">Featured Destinations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our handpicked destinations for your next adventure. From spiritual journeys to royal experiences, we have something for everyone.
            </p>
          </div>

          {/* Destination Cards Slider with Auto-slide */}
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 3 },
            }}
            className="cards-swiper px-2 py-4"
          >
            {destinations.map((destination, index) => (
              <SwiperSlide key={index}>
                <div className="h-[400px] backdrop-blur-lg bg-black/5 border border-black/30 hover:border-orange-300/50 rounded-lg overflow-auto shadow-lg hover:shadow-xl transition-all duration-300  flex flex-col hover:-translate-y-2 text-black">
                  <div className="relative h-48 w-full overflow-auto rounded-t-lg">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="p-5 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{destination.name}</h3>
                      <div className="flex items-center bg-yellow-100/70 backdrop-blur-sm px-2 py-1 rounded-full text-sm">
                        <FaStar className="text-yellow-500 mr-1" />
                        <span>{destination.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-700 mb-3 backdrop-blur-sm bg-white/20 px-2 py-1 rounded-full w-fit">
                      <FaMapMarkerAlt className="mr-1 text-red-500" />
                      <span>{destination.location}</span>
                    </div>
                    <div className="mt-auto pt-4 flex justify-between items-center border-t border-white/20">
                      <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600">{destination.price}</span>
                      <Link href="/booknow">
                        <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm hover:scale-105 shadow-md hover:shadow-orange-500/20">
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Tripway Holidays – Responsive Services Row (Single-Width with Hover Animation) */}

        <section className="py-12 bg-white w-full mb-12">
          {/* Section Heading */}
          <h2 className="text-4xl md:text-4xl font-bold text-center mb-8 text-black ">
            Our Services & Features
          </h2>

          {/* Services Row, All in One Width */}
          <div className="flex flex-wrap justify-center items-center gap-6 w-full]] max-w-5xl mx-auto px-4">
            {[
              { src: "/car-wash.png", alt: "Hotel Booking", label: "Hotel Booking" },
              { src: "/driver.png", alt: "driver", label: "Experience Driver" },
              { src: "/emergency-call.png", alt: "Cab Services", label: "Cab Services" },
              { src: "/ambulance.png", alt: "Ambulence", label: "Ambulence" },
              { src: "/mobile-app.png", alt: "Guided Tours", label: "Guided Tours" },
              { src: "/24hours.png", alt: "24/7 Support", label: "24/7 Support" },

            ].map((service) => (
              <motion.div
                key={service.label}
                // ref={FirstRef}
                // initial={{ opacity: 0, x: -1000 }}
                // animate={isFirstInView ? { opacity: 1, x: 0 } : {}}
                // transition={{ duration: 1 ,}}
                className=" group transition-transform duration-200 w-[110px] sm:w-[120px] md:w-[140px]">
                <motion.div
                  ref={FirstRef}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isFirstInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.90, delay: service.label * 0.5 }}
                  className='flex flex-col items-center'
                >
                <img
                  src={service.src}
                  alt={service.alt}
                  className="w-10 h-10 object-contain mb-2 transition duration-200 group-hover:scale-110 group-hover:drop-shadow-lg hover:scale-110 hover:drop-shadow-lg" />
                <span className="text-base sm:text-lg md:text-sm font-semibold text-gray-800 text-center transition-colors duration-200 group-hover:text-red-700 hover:text-red-700">
                  {service.label}
                </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>



        <section>
          <div className="p-5">
            {ThardSections.map((section, index) => (
              <div
                key={index}

                className="text-black"
              >
                <h2 className="md:text-4xl text-xl font-semibold mb-8">{section.heading}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-30 lg:gap-x-50 gap-y-5">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} >
                      <div className="border-t-2 pt-4">
                        <h3 className="text-lg md:text-2xl font-semibold mb-2">{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="p-5">
            <div className="relative h-[300px] rounded-2xl overflow-hidden">
              <Image
                className="object-cover"
                src="/hotel2.jpg"
                alt=""
                fill
              />
              <div className="absolute top-5 w-full text-center text-white">
                <span className="md:text-4xl text-2xl font-black">Ready to Start Your Adventure?</span>
              </div>

              <Link href="/cabs">
                <div className="absolute bottom-5 w-full text-center">
                  <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold transition duration-300">
                    Plan Your Trip
                  </button>
                </div>
              </Link>
            </div>
          </div>




          <section className="px-4 py-14 bg-white">
            <div className='md:text-4xl text-xl font-semibold mb-8 text-black'>Testomonial</div>

            <div className=" mx-auto grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center bg-blue-50  shadow p-7"
                >
                  {/* Stars */}
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-5 h-5 mr-1 ${i < testimonial.review ? "text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  {/* Description */}
                  <p className="italic text-gray-700 text-center mb-4">
                    &ldquo;{testimonial.description}&rdquo;
                  </p>
                  {/* Name */}
                  <span className="font-semibold text-blue-950">{testimonial.name}</span>
                </div>
              ))}
            </div>
          </section>
        </section>


        

        <section className="max-w-3xl mx-auto px-4 py-10 text-black">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group bg-black/5 backdrop-blur-md p-4 rounded-lg border border-black/10">
              <summary className="flex items-center justify-between cursor-pointer font-medium text-black">
                <span>What destinations do you offer?</span>
                <span className="text-xl font-bold transition-transform group-open:rotate-180">
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">−</span>
                </span>
              </summary>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                We offer a wide range of destinations across the globe, including popular cities, exotic locations, and adventure travel options. Please visit our Destinations page for a complete list
              </p>
            </details>
            <details className="group bg-black/5 backdrop-blur-md p-4 rounded-lg border border-black/10">
              <summary className="flex items-center justify-between cursor-pointer font-medium text-black">
                <span>How do I book a tour?</span>
                <span className="text-xl font-bold transition-transform group-open:rotate-180">
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">−</span>
                </span>
              </summary>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                Choose your tour, click “Book Now”, and complete the secure checkout. You'll get instant email confirmation.
              </p>
            </details>
            <details className="group bg-black/5 backdrop-blur-md p-4 rounded-lg border border-black/10">
              <summary className="flex items-center justify-between cursor-pointer font-medium text-black">
                <span>What is your cancellation policy?</span>
                <span className="text-xl font-bold transition-transform group-open:rotate-180">
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">−</span>
                </span>
              </summary>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Full refund if cancelled 7 days before. 50% refund 3–7 days. No refund within 72 hours of departure.
              </p>
            </details>
            <details className="group bg-black/5 backdrop-blur-md p-4 rounded-lg border border-black/10">
              <summary className="flex items-center justify-between cursor-pointer font-medium text-black">
                <span>What is your cancellation policy?</span>
                <span className="text-xl font-bold transition-transform group-open:rotate-180">
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">−</span>
                </span>
              </summary>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Full refund if cancelled 7 days before. 50% refund 3–7 days. No refund within 72 hours of departure.</p>
            </details>
          </div>
        </section>
      </div>
    </div>
  )
}