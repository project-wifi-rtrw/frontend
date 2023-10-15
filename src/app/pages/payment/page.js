"use client";

import React from "react";
import CardPayment from "@/app/components/CardPayment";
import { useState } from "react";
import MetodePembayaran from "@/app/components/MetodePembayaran";

function Payment() {
  const [metodePembayaran, setMetodePembayaran] = useState("");

  const handleRadioChange = (e) => {
    const value = e.target.value;
    setMetodePembayaran(value);
    console.log("Metode Pembayran : ", metodePembayaran);
  };

  return (
    <>
      <>
        <div className="h-screen w-screen flex flex-col relative">
          <div className="min-h-[20vh] w-screen bg-[#0A1128] p-5">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold">Pembayaran</h1>
            </div>
          </div>
          <CardPayment />
          <div className="w-screen h-full z-0 bg-white pt-28 px-5 pb-8">
            {/* METODE PEMBAYARAN */}

            <h1 className="font-bold text-xl text-black mb-3">Metode Pembayaran</h1>
            <MetodePembayaran />

            {/* END OF METHODE PAYMENT */}

            {/* END OF DROPDOWN */}

            {/* DETAIL PEMBAYARAN */}
            <div className="wrapper-detail-pembayaran mt-7 text-black flex flex-col">
              <h1 className="font-bold text-xl">Detail Pembayaran</h1>
              <div className="sub-total font-regular flex text-gray-600 justify-between">
                <p>Subtotal</p>
                <p>Rp.150.000</p>
              </div>
              <div className="sub-total flex font-regular text-gray-600 justify-between">
                <p>Biaya Admin</p>
                <p>Rp.1000</p>
              </div>
              <div className="sub-total flex font-regular text-gray-600 justify-between">
                <p>DIscount</p>
                <p>Rp.0</p>
              </div>
              <div className="sub-total flex font-bold justify-between">
                <p>Total</p>
                <p>Rp.151.000</p>
              </div>
            </div>

            {/* END OF PEMBAYARAN */}

            <div className="w-full flex justify-end mt-5">
              <a href="/pages/payment-va">
                <button className="btn bg-[#81FF7E] border-2 border-[#4CCE49] hover:bg-[#22bb1f] text-black px-7">Bayar</button>
              </a>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Payment;
