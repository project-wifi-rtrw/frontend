"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";

function Page() {
  const [isPopup, setIsPopup] = useState(true);
  const [paket, setPaket] = useState(5)

  const pilihPaket = (e) => {
    setPaket(e.target.id)
    console.log(e.target.id)
    console.log('ter klik')
  }

  const DefaultLangganan = () => {
    const lanjutBerlangganan = () => {
      setIsPopup(false);
      console.log("clicked");
    };

    

    return (
      <div className=" bg-transparent w-[95vw] bg-red-400 h-[75vh] py-[30vh] absolute z-50">
        <div className="absolute top-1/2 left-1/2 transform  flex flex-col -translate-x-1/2 -translate-y-3/4 bg-white w-[60%] p-4 rounded-lg">
          <p className="text-center text-black font-semibold mb-3">
            Apakah kamu ingin menggunakan kembali paket <span className="font-extrabold">5Mbps</span> di bulan berikutnya?
          </p>
          <div className="px-5 w-full flex justify-center gap-3">
            <button className="btn  bg-green-500 text-black border-none shadow-2xl w-[60%]" onClick={lanjutBerlangganan}>
              Lanjut
            </button>
            <Link className="btn bg-red-600 text-black border-none shadow-2xl w-[60%]" href={"../pages/dashboard"}>
              Enggak
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="bg-[#0A1128] py-4">
        <h1 className="font-semibold text-xl text-center">Paket Langganan</h1>
      </div>
      <div className="flex flex-col p-4 h-[80vh] bg-white">
        {isPopup ? <DefaultLangganan /> : null}
        <div>
          <p className="text-black text-center text-semibold mb-5 text-sm">Pilih paket langganan yang kamu inginkan untuk bulan berikutnya</p>
          <div className="flex flex-wrap gap-5 justify-center">
            <Link href={"../pages/paket-langganan"} onClick={pilihPaket} id="3" className="btn h-24 w-[80%] flex flex-col border-none shadow-2xl justify-center items-center rounded-xl bg-[#A8CE75] hover:bg-[#52d858] hover:shadow-lg">
              <h1 className="text-black font-bold">PAKET 1</h1>
              <h1 className="text-black">3 Mbps</h1>
            </Link>
            <Link href={"../pages/dashboard"} onClick={pilihPaket} id="5" className="btn h-24 w-[80%] flex flex-col border-none shadow-2xl justify-center items-center rounded-xl bg-[#A8CE75] hover:bg-[#52d858] hover:shadow-lg">
              <h1 className="text-black font-bold">PAKET 2</h1>
              <h1 className="text-black">5 Mbps</h1>
            </Link>
            <Link href={"../pages/dashboard"} onClick={pilihPaket} id="7" className="btn h-24 w-[80%] flex flex-col border-none shadow-2xl justify-center items-center rounded-xl bg-[#A8CE75] hover:bg-[#52d858] hover:shadow-lg">
              <h1 className="text-black font-bold">PAKET 3</h1>
              <h1 className="text-black">7 Mbps</h1>
            </Link>
          </div>
        </div>

        <div className="flex flex-col mt-[3em]">
          <h1 className="font-bold text-center mb-5 text-black">Apabila kamu tidak ingin melanjutkan berlangganan</h1>
          <Link className="btn border-none shadow-2xl bg-red-500 text-black" href="../pages/dashboard">
            <button className="">Berhenti Berlangganan</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Page;
