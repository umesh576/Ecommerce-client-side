import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-5">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <span>
              {/* <img src="../../app/public/image.png" alt="Logo" /> */}
              <Image
                className="h-15 w-25"
                height={500}
                width={500}
                src="/logo1.png"
                alt="Logo"
              />
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/aboutus">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/signup">Signup</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
