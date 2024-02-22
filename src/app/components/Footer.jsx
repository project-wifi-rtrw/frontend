import React from "react";
import { FaBell, FaHome } from "react-icons/fa";
import { HiCurrencyDollar } from "react-icons/hi";

function Footer() {
  return (
    <>
      <div
        className="fixed bg-white py-2 w-full justify-between flex h-[7vh] bottom-0 right-0 px-6"
        style={{
          "box-shadow": "2px -7px 20px -12px rgba(0,0,0,0.83)",
          "-webkit-box-shadow": "2px -7px 20px -12px rgba(0,0,0,0.83)",
          "-moz-box-shadow": "2px -7px 20px -12px rgba(0,0,0,0.83)",
        }}
      >
        <a href="/pages/dashboard">
          <FaHome className="text-black h-[2em] w-[2em]" />
        </a>
        <a href="/pages/payment-history">
          <HiCurrencyDollar className="text-black h-[2em] w-[2em]" />
        </a>
        <a href="/pages/notification">
          <FaBell className="text-black h-[2em] w-[2em]" />
        </a>
      </div>
    </>
  );
}

export default Footer;
