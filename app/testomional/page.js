"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import InstagramTestimonialCard from "./InstagramTestimonialCard";

export default function InstagramTestimonialSlider() {
  const testimonials = [
    { profileImage: "/profile1.jpg", username: "alex.morgan", location: "Nainital Lake", cardImage: "/testimonial1.jpg", testimonialText: "The view here is breathtaking—one of my best memories!" },
    { profileImage: "/profile2.jpg", username: "jordan.smith", location: "Goa Beach", cardImage: "/testimonial2.jpg", testimonialText: "Sunny days and ocean waves — paradise found." },
    { profileImage: "/profile3.jpg", username: "emma.watson", location: "Shimla Hills", cardImage: "/testimonial3.jpg", testimonialText: "A peaceful escape in the lap of nature." },
    { profileImage: "/profile1.jpg", username: "alex.morgan", location: "Nainital Lake", cardImage: "/testimonial1.jpg", testimonialText: "The view here is breathtaking—one of my best memories!" },
    { profileImage: "/profile2.jpg", username: "jordan.smith", location: "Goa Beach", cardImage: "/testimonial2.jpg", testimonialText: "Sunny days and ocean waves — paradise found." },
    { profileImage: "/profile3.jpg", username: "emma.watson", location: "Shimla Hills", cardImage: "/testimonial3.jpg", testimonialText: "A peaceful escape in the lap of nature." },  
];

  return (
    <div className="w-full px-4 py-10 bg-neutral-100">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.slice(0, 6).map((item, i) => (
          <SwiperSlide key={i}>
            <InstagramTestimonialCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
