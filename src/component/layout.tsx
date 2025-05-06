"use client";

import React from "react";
import Footer from "./footer/footer";
import Header from "./header/header";
import { usePathname } from "next/navigation";
// import CartPage from "./cart/cart";

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  const pathname = usePathname();
  const hideNav =
    pathname === "/login" || pathname === "/cart" || pathname === "/signup";

  return (
    <div className="min-h-screen flex flex-col">
      {!hideNav && (
        <div>
          <Header />
        </div>
      )}

      <div className="flex-grow mb-10">{children}</div>
      {/* footer */}
      {!hideNav && <Footer />}
    </div>
  );
};

export default Layout;
