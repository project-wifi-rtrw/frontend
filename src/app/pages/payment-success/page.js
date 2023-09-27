"use client";

import React from "react";
import { useEffect } from "react";
import Lottie from "lottie-react";
import success from "/public/animation_success.json";

function page() {
  return (
    <>
      <div className="bg-white h-screen w-screen flex flex-col items-center">
        <Lottie animationData={success} className="h-36 mt-36 mb-10" />
        <h1 className="font-bold text-3xl text-black text-center">Pembayaran Berhasil!</h1>
        <h1 className="font-regular text-lg text-black text-center">Hore! Pembayaranmu telah selesai</h1>
        <h1 className="font-semibold text-lg text-black text-center mt-5">Jumlah Pembayaran</h1>
        <h1 className="font-bold text-3xl text-black text-center">Rp. 150.0000,00</h1>
        <div className="flex flex-col items-center mt-10 gap-4">
          <button className="btn text-xl bg-[#00C985] text-white font-bold border-none shadow-2xl ">Lanjut Berlangganan</button>
          <a href="./dashboard"><button className="btn text-xl bg-transparent border-4 border-[#00C985] text-[#00C985] font-bold shadow-2xl w-[30vw]">Kembali</button></a>
        </div>
      </div>
    </>
  );
}

export default page;
