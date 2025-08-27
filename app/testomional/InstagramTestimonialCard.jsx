"use client";
import { Days_One } from 'next/font/google';
import Image from 'next/image';
import { useState } from 'react';

export default function InstagramTestimonialCard({
  profileImage = '/profile.jpg',
  username = 'alex.morgan',
  location = 'Nainital Lake',
  cardImage = '/testimonial-cover.jpg',
  testimonialText = "The view here is breathtaking—one of my best memories!",
}) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="flex w-full items-center justify-center my-20">
      <div className="rounded-2xl bg-white shadow-2xl flex flex-col w-[95vw] max-w-[400px] overflow-hidden md:w-[380px]">
        {/* Profile */}
        <div className="flex items-center px-4 py-3 gap-3">
          <Image src={profileImage} alt={username} width={40} height={40} className="rounded-full border border-gray-200 object-cover" />
          <div className="flex flex-col flex-1">
            <span className="text-sm font-semibold text-neutral-900">{username}</span>
            <span className="text-xs text-gray-500">{location}</span>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full aspect-square">
          <Image src={cardImage} alt="testimonial" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute bottom-0 p-5 w-full">
            <span className="text-white text-base md:text-lg font-medium drop-shadow-lg">{testimonialText}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-around px-6 py-3 border-t border-gray-100">
          <button onClick={() => setLiked(!liked)} className={`transition-transform text-2xl hover:scale-110 ${liked ? 'text-pink-500' : 'text-gray-400'}`}>
            {liked ? '❤️' : '🤍'}
          </button>
          <button className="text-blue-500 hover:scale-110 transition-transform text-2xl">💬</button>
          <button className="text-green-500 hover:scale-110 transition-transform text-2xl">📤</button>
        </div>
      </div>
    </div>
  );
}