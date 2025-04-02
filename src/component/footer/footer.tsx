import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 w-full mt-50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-5">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-3">ShopEase</h2>
          <p className="text-gray-400">
            Your one-stop shop for all your needs. Quality products at the best
            prices.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Customer Service</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <Link href="/returns">Return Policy</Link>
            </li>
            <li>
              <Link href="/shipping">Shipping Info</Link>
            </li>
            <li>
              <Link href="/terms">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" aria-label="Facebook">
              <FaFacebook className="text-2xl hover:text-blue-500" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="text-2xl hover:text-pink-500" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="text-2xl hover:text-blue-400" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-6 text-sm">
        © {new Date().getFullYear()} ShopEase. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
