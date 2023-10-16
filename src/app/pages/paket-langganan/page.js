"use client"

import Link from "next/link";
import React from "react";
import { useState } from "react";

function Page() {
  const [isPopup, setIsPopup] = useState(false);


    const defaultLangganan = () => {  
          return (
            <div className=" bg-transparent w-full h-screen absolute z-50">
              <div className="absolute top-1/2 left-1/2 transform flex items-center flex-col -translate-x-1/2 -translate-y-3/4 bg-[#000000da] p-5 rounded-lg">
                <p className="text-white font-semibold">Behasil disalin</p>
                {/* Tambahkan tombol tutup jika diperlukan */}
                <button className="btn" onClick={closeNotification}>Oke</button>
              </div>
            </div>
          );
    }

  return (
    <>
      <div className="flex flex-col p-4 h-screen bg-white">
        {isPopup ? null : <defaultLangganan/>}
        <div>
          <h1 className="font-bold text-2xl text-center mb-5 text-black">Paket Langganan</h1>
          <div className="flex flex-wrap gap-5 justify-center">
            <div className="h-24 w-[80%] flex justify-center items-center rounded-xl bg-[#A8CE75]">
              <h1>PAKET 1</h1>
            </div>
            <div className="h-24 w-[80%] flex justify-center items-center rounded-xl bg-[#A8CE75]">
              <h1>PAKET 2</h1>
            </div>
            <div className="h-24 w-[80%] flex justify-center items-center rounded-xl bg-[#A8CE75]">
              <h1>PAKET 3</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-[5em]">
          <h1 className="font-bold text-center mb-5 text-black">Apabila kamu tidak ingin melanjutkan berlangganan</h1>
          <Link className="btn border-none shadow-2xl bg-red-500 text-black" href="../pages/dashboard"><button className="">Berhenti Berlangganan</button></Link>
        </div>
      </div>
    </>
  );
}

export default Page;
