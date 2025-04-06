"use client"; // If you're using App Router
import Image from "next/image";
import Head from "next/head";

export default function CartPage() {
  return (
    <>
      <Head>
        <title>Shopping Cart | Your Store</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-gray-50 font-[Inter]">
        {/* Navbar */}
        <nav className="bg-white border-b">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Image
                    src="/logo_placeholder.png"
                    alt="Logo"
                    width={32}
                    height={32}
                  />
                </div>
              </div>
              <div className="flex items-center">
                <a href="#" className="text-gray-500 hover:text-black">
                  <i className="far fa-user text-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
            {/* Cart Items */}
            <div className="lg:col-span-8">
              <div className="space-y-8">
                <h1 className="text-2xl font-semibold text-gray-900">
                  Shopping Cart (3)
                </h1>

                <div className="space-y-6">
                  {[
                    {
                      name: "Premium Wireless Headphones",
                      desc: "White | Bluetooth 5.0",
                      qty: 1,
                      price: 299.99,
                      image:
                        "https://creatie.ai/ai/api/search-image?query=A%20premium%20wireless%20headphone...&width=200&height=200",
                    },
                    {
                      name: "Smart Watch Pro",
                      desc: "Black | 44mm",
                      qty: 2,
                      price: 399.99,
                      image:
                        "https://creatie.ai/ai/api/search-image?query=A%20sleek%20smartwatch...&width=200&height=200",
                    },
                    {
                      name: "Leather Wallet",
                      desc: "Brown | Genuine Leather",
                      qty: 1,
                      price: 79.99,
                      image:
                        "https://creatie.ai/ai/api/search-image?query=A%20premium%20leather%20wallet...&width=200&height=200",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white shadow-sm rounded-lg p-6 flex items-start space-x-6"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-md"
                      />
                      <div className="flex-1 space-y-4">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">
                              {item.name}
                            </h3>
                            <p className="text-sm text-gray-500">{item.desc}</p>
                          </div>
                          <button className="text-gray-400 hover:text-red-500">
                            <i className="far fa-trash-alt"></i>
                          </button>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-3">
                            <button className="w-8 h-8 border border-gray-300 text-gray-600 hover:border-black rounded">
                              -
                            </button>
                            <span className="text-gray-900">{item.qty}</span>
                            <button className="w-8 h-8 border border-gray-300 text-gray-600 hover:border-black rounded">
                              +
                            </button>
                          </div>
                          <span className="text-lg font-medium text-gray-900">
                            ${item.price.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-4 mt-12 lg:mt-0">
              <div className="bg-white shadow-sm rounded-lg p-6 space-y-6 sticky top-6">
                <h2 className="text-lg font-medium text-gray-900">
                  Order Summary
                </h2>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900">$779.97</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-gray-900">$9.99</span>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <span>Total</span>
                      <span>$789.96</span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="Discount code"
                    className="flex-1 rounded border-gray-300 focus:border-black focus:ring-black"
                  />
                  <button className="bg-black px-4 py-2 text-white rounded hover:bg-opacity-90">
                    Apply
                  </button>
                </div>

                <div className="space-y-4">
                  <button className="w-full bg-black py-3 text-white rounded hover:bg-opacity-90">
                    Proceed to Checkout
                  </button>
                  <button className="w-full bg-white py-3 text-black border border-black rounded hover:bg-gray-50">
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t mt-24">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <Image
                  src="/logo_placeholder.png"
                  alt="Logo"
                  width={32}
                  height={32}
                />
                <p className="mt-4 text-sm text-gray-500">
                  Making commerce better for everyone.
                </p>
              </div>
              {[
                {
                  title: "Shop",
                  links: ["New Arrivals", "Best Sellers", "Sale"],
                },
                {
                  title: "Support",
                  links: ["Contact Us", "Shipping", "Returns"],
                },
                {
                  title: "Company",
                  links: ["About Us", "Privacy Policy", "Terms of Service"],
                },
              ].map((section, i) => (
                <div key={i}>
                  <h3 className="text-sm font-medium text-gray-900">
                    {section.title}
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {section.links.map((link, j) => (
                      <li key={j}>
                        <a
                          href="#"
                          className="text-sm text-gray-500 hover:text-black"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-12 border-t pt-8 text-center">
              <p className="text-sm text-gray-500">
                &copy; 2024 Your Store. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
