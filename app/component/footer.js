import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="backdrop-blur-md bg-black/70 text-white border-t border-gray-700">
      {/* Main Grid */}
      <div className="mx-auto max-w-[1100px] px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 w-full ">
        
        <div>
          <Link href="/" className="text-black text-2xl font-bold tracking-wide hover:text-red-500 transition duration-200">
          Tripway<span className="text-red-600">Holidays</span>
        </Link>
          
          <p className="text-sm text-white leading-relaxed mt-3">
            Your trusted companion for unforgettable travel experiences.
            Explore destinations, book tours, and create memories with ease.
          </p>
        </div>
           
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-red-400 transition">Home</a></li>
            <li><a href="/destinations" className="hover:text-red-400 transition">Destinations</a></li>
            <li><a href="/tours" className="hover:text-red-400 transition">Tours</a></li>
            <li><a href="/contact" className="hover:text-red-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Contact</h3>
          <p className="text-sm">Email: support@tripway.com</p>
          <p className="text-sm">Phone: +91 8058885858</p>
          <p className="text-sm">Address: Opp. Magal Trasport Lines, Near Chandpool gate, Sikar, Rajsthan</p>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bottom */}
      <div className="border-t border-white/10 text-center text-xs text-gray-200 py-4">
        &copy; {new Date().getFullYear()} TripWay Holidays. Developed and Managed by Eduengine Technologies Pvt. Ltd.
      </div>
    </footer>
  );
}
