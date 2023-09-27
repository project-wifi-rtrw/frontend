"use client";

import React from "react";
import { useState, useEffect } from "react";

function Page() {
  const [isNotif, setIsNotif] = useState(false);

  function Notification({ closeNotification }) {
    // Menggunakan useEffect untuk menutup notifikasi setelah 3 detik
    useEffect(() => {
      const timer = setTimeout(() => {
        closeNotification();
      }, 3000); // Ubah angka ini sesuai dengan jumlah detik yang Anda inginkan
      return () => clearTimeout(timer);
    }, []);

    return (
      <div className=" bg-transparent w-full h-screen absolute z-50">
        <div className="absolute top-1/2 left-1/2 transform flex items-center flex-col -translate-x-1/2 -translate-y-3/4 bg-[#000000da] p-5 rounded-lg">
          <p className="text-white font-semibold">Behasil disalin</p>
          {/* Tambahkan tombol tutup jika diperlukan */}
          {/* <button  onClick={closeNotification}>Oke</button> */}
        </div>
      </div>
    );
  }

  const salinKode = () => {
    console.log("clicked");
    setIsNotif(true);
  };

  const closeNotification = () => {
    setIsNotif(false);
  };

  return (
    <>
      <div className="container flex flex-col h-screen">
        {isNotif && <Notification closeNotification={closeNotification} />}
        <div className="h-full">
          <div className="bg-[#0A1128] h-[8vh] px-4 items-center flex">
            <h1 className="text-xl font-bold">Pembayaran</h1>
          </div>
          <div className="bg-white text-black w-full h-full p-4">
            <div className="waktu-pembayaran flex justify-between">
              <h1 className="font-bold ">Bayar Dalam</h1>
              <div className="waktu flex gap-1">
                <div className="jam h-5 w-5 rounded-md bg-black text-white text-sm flex justify-center items-center">15</div>
                <div className="menit h-5 w-5 rounded-md bg-black text-white text-sm flex justify-center items-center">45</div>
                <div className="detik h-5 w-5 rounded-md bg-black text-white text-sm flex justify-center items-center">04</div>
              </div>
            </div>

            {/* waktu pembayaran end */}

            <div className="w-full h-24 text-[#4CCE49] flex justify-center items-center">
              <h1 className="font-bold text-4xl">Rp.151.000,00</h1>
            </div>

            {/* nominal harga end */}

            <div className="w-full flex flex-col">
              <h1 className="font-bold">Bank BRI</h1>
              <h1 className="text-[#666262]">Nomor Virtual Account</h1>
              <div className="flex justify-between items-center mb-10">
                <h1 className="font-extrabold text-3xl">128081359357517</h1>
                <h1 onClick={salinKode} className="text-[#4CCE49]">
                  SALIN
                </h1>
              </div>

              <div className="peraturan mb-10">
                <p>Pembayaran dengan kode diatas hanya dapat dilakukan menggunakan Bank BRI, berikut merupakan langkah-langkah :</p>
                <ul className="list-disc ml-7">
                  <li>
                    Mobile Banking : <span className="font-bold">{"Pembayaran > BRIVA"}</span>
                  </li>
                  <li>
                    ATM : <span className="font-bold">{"Transaksi Lain > Pembayaran > BRIVA"}</span>
                  </li>
                </ul>
              </div>

              {/* peraturan end */}

              <a href="./payment-success" className="btn bg-[#81FF7E] border-4 border-[#4CCE49] text-black">
                Refresh Pembayaran
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
