import React from "react";
import Image from "next/image";
import cewek from '/public/cewek.png'

function CardIklan() {
  return (
    <>
      <div className="h-32 w-full rounded-2xl mx-3 flex gap-2 text-xs p-2 bg-[#A8CE75]">
        <div className="h-full w-[30%]  overflow-hidden">
          <Image src={cewek} />
        </div>
        <div className="w-[70%]">
          <h1 className="text-black font-bold mb-2">Bayar Tepat Waktu, Dapatkan Bonus Spesial dari ICComp !</h1>
          <p className="font-regular text-black">Bayar tagihan internet tepat waktu dan nikmati manfaat eksklusif dari ICComp! Kami menghargai pelanggan setia kami dengan memberikan bonus spesial</p>
        </div>
      </div>
    </>
  );
}

export default CardIklan;
