"use client";

import Footer from "@/app/components/Footer";
import React from "react";

function page() {
  const data = [
    { bulan: "Januari", paket: 5, amount: 150000, tgl: "23/01/2022" },
    { bulan: "Februari", paket: 5, amount: 150000, tgl: "28/02/2022" },
    { bulan: "Maret", paket: 5, amount: 150000, tgl: "27/03/2022" },
    { bulan: "April", paket: 5, amount: 150000, tgl: "27/04/2022" },
  ];

  return (
    <>
      <div className="h-screen w-screen flex flex-col text-black bg-white gap-2" data-theme="light">
        <h1 className="text-center font-bold text-2xl mt-4">History Pembayaran</h1>
        <div className="w-full flex justify-end px-3 mt-2">
          <details className="dropdown">
            <summary className="m-1 btn btn-sm">Tahun</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-white rounded-box w-52">
              <li>
                <a>2021</a>
              </li>
              <li>
                <a>2022</a>
              </li>
            </ul>
          </details>
        </div>
        <div className="flex flex-col w-full gap-3 -mt-6">
          <div className="divider -mb-[.5em]"></div>
          {/* Ensure unique keys for each item */}
          {data.map((item, index) => (
            <>
              <div key={index} className="flex justify-between mt-2 px-4">
                <div>
                  <h1 className="font-bold text-xl">{item.bulan}</h1>
                  <p>{item.paket}Mbps</p>
                </div>
                <div className="text-end">
                  <h1 className="font-bold text-lg text-green-500">Rp. {item.amount}</h1>
                  <p>{item.tgl}</p>
                </div>
              </div>
              <div className="divider -mb-[.5em]"></div>
            </>
          ))}
        </div>
        <Footer />
        {/* <div>
          <h1 className="font-extrabold text-5xl text-black">HAHAHHA</h1>
        </div> */}
      </div>
    </>
  );
}

export default page;
