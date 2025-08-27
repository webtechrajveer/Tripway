
'use client';

import { useState } from 'react';

export default function BookNow() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    date: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    // You can integrate backend or email API here
    alert("Your booking has been submitted!");
    setForm({
      name: '',
      email: '',
      phone: '',
      destination: '',
      date: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-white text-white flex items-center justify-center px-4 py-10 mt-20">
      <div className="w-full max-w-2xl glass-3d p-8 rounded-xl shadow-sm">
        <h2 className="text-3xl font-bold mb-6 text-center text-black">Book Your Trip</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-3 bg-gray-300 rounded-lg focus:outline-none text-gray-700"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="p-3 bg-gray-300 text-gray-700 rounded-lg focus:outline-none"
              required
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="p-3 bg-gray-300 rounded-lg focus:outline-none text-gray-700"
              required
            />
            <input
              type="text"
              name="destination"
              value={form.destination}
              onChange={handleChange}
              placeholder="Destination"
              className="p-3 bg-gray-300 rounded-lg focus:outline-none text-gray-700"
              required
            />
          </div>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full p-3 bg-gray-300 rounded-lg focus:outline-none text-gray-700"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Additional Message"
            className="w-full p-3 bg-gray-300 rounded-lg focus:outline-none text-gray-700"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 transition duration-300 py-3 rounded-lg font-semibold"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
}
