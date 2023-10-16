import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function Cards() {
  return (
    <>
      <div className="bg-white shadow-2xl h-48 w-[90%] absolute z-10 top-20 left-5 rounded-2xl px-4 py-6 flex flex-col justify-between">
        {/* informasi */}
        <div>
          <div className="flex gap-1 items-center">
            <FontAwesomeIcon icon={faGlobe} className="h-7  text-black" />
            <h1 className="text-black font-extrabold text-4xl">
              5<span className="text-2xl font-bolc">Mbps</span>
            </h1>
          </div>
          <p className="text-[#666262]">Aktif sampai dengan 12-03-2023</p>
        </div>

        {/* status & button */}
        <div className="flex justify-between items-end">
          <div className="status flex flex-col text-black">
            <h1 className="font-bold">Status</h1>
            <div className="flex py-1 px-3 border-2 border-[#4CCE49] bg-[#81FF7E] text-sm font-semibold items-center gap-1 rounded-xl w">
              <div className="rounded-full h-4 w-4 bg-[#17B514]"></div>
              <h3>ACTIVE</h3>
            </div>
          </div>

          <button className="btn bg-yellow-400 px-6 h-10 flex items-center border-none shadow-xl rounded-lg">
            <Link href="/pages/payment">
              <h1 className="font-bold text-2xl text-[#725126]">BAYAR</h1>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Cards;
