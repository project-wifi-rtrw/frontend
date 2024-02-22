"use client";

import Footer from "@/app/components/Footer";
import { IoMdMailOpen } from "react-icons/io";
import React from "react";

function page() {
  const data = [
    { bulan: "Januari", paket: 5, amount: 150000, tgl: "23/01/2022" },
    { bulan: "Februari", paket: 5, amount: 150000, tgl: "28/02/2022" },
    { bulan: "Maret", paket: 5, amount: 150000, tgl: "27/03/2022" },
    { bulan: "April", paket: 5, amount: 150000, tgl: "27/04/2022" },
    { bulan: "April", paket: 5, amount: 150000, tgl: "27/04/2022" },
    { bulan: "April", paket: 5, amount: 150000, tgl: "27/04/2022" },
  ];

  return (
    <>
      <div className="pb-10 min-h-screen w-screen flex flex-col text-black bg-white gap-2" data-theme="light">
        <h1 className="text-center font-bold text-2xl mt-4">Notifikasi</h1>
        <div className="w-full flex justify-between px-3 mt-2 items-center">
          <button className="underline underline-offset-4 cursor-pointer">Tandai sudah dibaca</button>
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
          <div className="divider -mb-[1.5em]"></div>
          {/* Ensure unique keys for each item */}
          {data.map((item, index) => (
            <>
              <div key={index} className="flex gap-4 mt-2 px-4">
                <div className="w-[40%] flex items-center justify-center">
                  <IoMdMailOpen className="text-5xl text-[#318DCB]"/>
                </div>
                <div className="flex gap-2 flex-col">
                  <div className="flex justify-between w-full">
                    <h1 className="font-bold text-lg">Pembayaran</h1>
                    <p className="text-gray-300">1 minute ago</p>
                  </div>
                  <p className="line-clamp-3 text-gray-500 -mb-[1.5em]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ut voluptates optio minima provident debitis quos, distinctio dolores ratione at illo! Iure, error ea! Odio, necessitatibus reiciendis? Nesciunt nulla
                    numquam doloremque et explicabo aut voluptas, fugiat expedita recusandae eaque voluptatem quisquam non. Molestias facere, praesentium quis repellat aliquam unde quas.
                  </p>
                </div>
              </div>
              <div className="divider -mb-[1.5em]"></div>
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
