import React from "react";

function CardPayment() {
  return (
    <>
      <div className="bg-white shadow-2xl h-36 w-[90%] absolute z-10 top-20 left-5 rounded-2xl px-4 py-4 flex flex-col">
        <div className="flex gap-3 items-center">
          <div className="h-10 w-10 bg-black rounded-full">
     
          </div>
          <div className="text-black leading-3">
            <h1 className="font-bold text-xl">Pembayaran Internet</h1>
            <p className="text-gray-500">Bulan Juni</p>
          </div>
        </div>
        <div className="w-full h-full flex  pb-2 justify-center items-end">
          <h1 className="text-[#4CCE49] font-extrabold text-4xl">Rp. 151.000,00</h1>
        </div>
      </div>
    </>
  );
}

export default CardPayment;
