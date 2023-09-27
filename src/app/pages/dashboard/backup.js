"use client"

import { useState } from "react";
import React from "react";
import Image from "next/image";

function Page() {
  const [isHidden, setIshidden] = useState(true)
  const [wasLogin, setWasLogin] = useState('Login')

  const loginClicked = () => {
    setIshidden(false);
    setWasLogin('Kirim Ulang')

  }

  return (
    <>
      <div className="container h-screen flex flex-col">
        <div className="bg-[#0A1128] h-[50vh] w-screen">
          <h1 className="text-white font-bold text-center text-3xl mt-20">Login Page</h1>
        </div>
        <div className="bg-white h-[50vh] pt-32 px-10">
          <div className={`mt-10 ${isHidden ? 'hidden' : ''} `}>
            <h1 className="font-bold text-lg text-black text-center">Silahkan cek Whatsapp Anda !</h1>
            <p className="text-center text-black text-xs">Kami telah mengirim link ke nomor whatsapp anda untuk bisa login kedalam aplikasi</p>
          </div>
          <a href="/"><h1 className="text-black mt-10 font-bold text-center text-sm underline underline-offset-1">Butuh Bantuan?</h1></a>
        </div>
        <div className="absolute z-20 h-[45vh] w-[80vw] right-9 top-36 shadow-2xl rounded-2xl bg-white flex flex-col pt-5 items-center">
          <img src="https://i.postimg.cc/3RXgjG2w/ICComp.png" alt="iccomp" className="h-24 w-24" />
          <h1 className=" font-extrabold mt-5 text-2xl text-black">ICComp</h1>
          <form className="flex justify-center h-32 flex-col mt-4 w-[80%]">
            <h1 className="text-gray-700 text-xs">Masukan Nomor Whatsapp Anda!</h1>
            <input type="text" placeholder="Contoh : 081 xxx xxx" className="input input-bordered w-full max-w-xs mb-3 bg-[#EBE9E9] border-2 border-[#666262]" />
              <div onClick={loginClicked} className="btn bg-yellow-400 border-none shadow-2xl mx-auto w-[40%] font-bold text-black">{wasLogin}</div>
            {/* <a href="/"  className="mx-auto btn bg-yellow-400 border-none shadow-2xl w-[40%]  hover:text-white font-bold text-black">
            </a> */}
          </form>
        </div>
      </div>
    </>
  );
}

export default Page;
