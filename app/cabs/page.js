"use client";
import { useState, useEffect } from "react";

const headings = [
    "Your Journey, Our Responsibility",
    "Smooth Rides, Happy Clients",
    "Travel Safe, Travel Smart",
    "Book Your Ride Now",
    "Reliable and Affordable Cabs",
    "Your Destination Our Passion"
];
export default function Cabs() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % headings.length);
        }, 3500); // Changes every 2.5 seconds

        return () => clearInterval(timer); // Clean up on unmount
    }, []);


    return (




        <div className="min-h-screen bg-white py-8 ">
            <div className="relative w-full  mx-auto  px-0 ">
                {/* Video */}
                <video
                    className="w-full object-cover h-screen shadow-lg"
                    autoPlay
                    muted
                    loop
                >
                    <source src="roadtrip.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Blur Overlay */}
                <div className="absolute inset-0 bg-black/20 backdrop-blur-none rounded-lg"></div>

                {/* Centered Text */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                    <div className=" flex flex-col items-center justify-center px-4">
                        <h1
                            className="text-3xl md:text-5xl font-bold mb-3
                   bg-gradient-to-r from-orange-600  to-blue-800
                   text-transparent bg-clip-text transition-all duration-700"
                        >
                            {headings[index]}
                        </h1>
                        {/* Rest of your content here */}
                    </div>

                    <p className="text-sm md:text-lg max-w-xl">
                        Experience seamless and reliable cab bookings with TripWay Holidays.
                        From airport pickups to outstation travel, our fleet is ready 24/7 to serve you with comfort, safety, and transparent pricing..
                    </p>

                </div>




            </div>

            <div className="mx-auto max-w-[1100px]  px-4 space-y-10">





                {/* Header */}


                {/* Step-by-Step Booking Form */}
                <form className="bg-gray-200 shadow-lg rounded-xl p-6 space-y-5 mt-20">
                    <header className="flex flex-col items-center">
                        <h1 className="text-4xl font-bold text-red-700 mb-2 ">Book Your Cab</h1>
                        <p className="text-black text-center text-lg">Seamless, reliable rides with transparent pricing.</p>
                    </header>
                    <div className="grid md:grid-cols-2 gap-4 space-y-5">
                        <div>
                            <label className="block text-black font-medium mb-1">Pickup Location</label>
                            <input
                                type="text"
                                placeholder="Enter pickup location"
                                className="w-full border border-gray-500 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none text-black"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-black font-medium mb-1">Dropoff Location</label>
                            <input
                                type="text"
                                placeholder="Enter dropoff location"
                                className="w-full border border-gray-500 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none text-black"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-black font-medium mb-1">Date</label>
                            <input
                                type="date"
                                className="w-full border border-gray-500 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none text-black"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-black font-medium mb-1">Time</label>
                            <input
                                type="time"
                                className="w-full border border-gray-500 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none text-black"
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg py-3 transition-colors"
                    >
                        Check Availability
                    </button>
                </form>

                {/* Our Fleet Section */}
                <section>
                    <h2 className="text-2xl font-semibold mb-5 mt-12 text-black">Our Fleet</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Compact Car */}
                        <div className="glass-3d rounded-xl shadow-md p-5 flex flex-col items-center hover:shadow-xl transition-shadow">
                            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                                {/* Place your icon or image here */}
                                <span className="text-2xl text-blue-600">🚗</span>
                            </div>
                            <div className="text-xl font-bold mb-1 text-black">Compact</div>
                            <div className="text-base text-gray-900 mb-2">Up to 4 passengers</div>
                            <div className="text-sm text-gray-900 mb-1">Fuel-efficient, ideal for city travel</div>
                            <div className="font-medium text-blue-700">₹10/km</div>
                        </div>
                        {/* Sedan */}
                        <div className="glass-3d rounded-xl shadow-md p-5 flex flex-col items-center hover:shadow-xl transition-shadow">
                            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                                <span className="text-2xl text-blue-600">🚙</span>
                            </div>
                            <div className="text-xl font-bold mb-1 text-black">Sedan</div>
                            <div className="text-base text-gray-900 mb-2">Up to 4 passengers</div>
                            <div className="text-sm text-gray-900 mb-1">Comfortable, suitable for longer trips</div>
                            <div className="font-medium text-blue-700">₹15/km</div>
                        </div>
                        {/* SUV */}
                        <div className="glass-3d rounded-xl shadow-md p-5 flex flex-col items-center hover:shadow-xl transition-shadow">
                            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                                <span className="text-2xl text-blue-600">🚐</span>
                            </div>
                            <div className="text-xl font-bold mb-1 text-black">SUV</div>
                            <div className="text-base text-gray-900 mb-2">Up to 6 passengers</div>
                            <div className="text-sm text-gray-900 mb-1">Spacious, perfect for families</div>
                            <div className="font-medium text-blue-700">₹20/km</div>
                        </div>
                    </div>
                </section>

                {/* Pricing Table */}
                <section>
                    <h2 className="text-xl font-semibold my-4 text-black">Pricing Matrix</h2>
                    <div className="overflow-x-hidden">
                        <table className="min-w-full glass-3d shadow text-center text-black">
                            <thead className="bg-blue-500">
                                <tr>
                                    <th className="p-3 font-bold">Distance (km)</th>
                                    <th className="p-3 font-bold">Compact</th>
                                    <th className="p-3 font-bold">Sedan</th>
                                    <th className="p-3 font-bold">SUV</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="p-3">0-10</td>
                                    <td className="p-3">$100</td>
                                    <td className="p-3">$200</td>
                                    <td className="p-3">$150</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-3">11-20</td>
                                    <td className="p-3">$150</td>
                                    <td className="p-3">$200</td>
                                    <td className="p-3">$250</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-3">21-30</td>
                                    <td className="p-3">$200</td>
                                    <td className="p-3">$250</td>
                                    <td className="p-3">$300</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-3">31-40</td>
                                    <td className="p-3">$250</td>
                                    <td className="p-3">$300</td>
                                    <td className="p-3">$350</td>
                                </tr>
                                <tr>
                                    <td className="p-3">41-50</td>
                                    <td className="p-3">$300</td>
                                    <td className="p-3">$350</td>
                                    <td className="p-3">$400</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>


            </div>
        </div>


    );
}