"use client";

import { useState } from "react";
import React from "react";
import Image from "next/image";
import Home from "./pages/dashboard/page";
import Link from "next/link";
import axios from "axios";

function Page() {
  const [isHidden, setIshidden] = useState(true);
  const [wasLogin, setWasLogin] = useState("Login");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [phoneNumber,setPhoneNumber] = useState("");
  const [messageStatus,setMessageStatus] = useState("");
  const [message,setMessage] = useState("");

  const loginClicked = async () => {
    console.log('clicked')
    if(isDigit()){
      setIshidden(true);
      const response = await loginApiRequests();
      setMessageStatus(response.status);
      setMessage(response.message);
      if(response.status){
        setWasLogin("Kirim Ulang");
      }
      setIshidden(false);
    }
    // setWasLogin("Kirim Ulang");
    // setButtonClicked(true)
  };

  // for phone number validaton min 11 digit and starts with 08
  const isDigit = () =>{
    return phoneNumber.match(/^[0-9]+$/) != null && phoneNumber.length >= 11 && phoneNumber.startsWith("08");
  };
  // for api requests
  const loginApiRequests = async () =>{
    try{
      let response = await axios.post(`${process.env.BACKEND_URL}/login/`,{
        phoneNumber : phoneNumber
      })
      // example success response
      /*
      {
        'message':'token sent successfully!, 
        please check your whatsapp',
        'status':True
      }
      */
      return response.data
    }
    catch(e){
      // example error response
      /*
      {
        'message':'there was problem with whatsapp service!',
        'status':False
      }
      {
        'message':'user not found!',
        'status':False
      }
      */
      let response = e.response
      return response.data
    }
  };

  const dashboardPage = (e) => {
    if (buttonClicked) {
      // Jika tombol sudah diklik sebelumnya
      window.location.href = "./pages/dashboard"; // Redirect ke halaman selanjutnya
      console.log("button clicked")
    }
  };

  return (
    <>
      <div className="container h-screen flex flex-col">
        <div className="bg-[#0A1128] h-[50vh] w-screen">
          <h1 className="text-white font-bold text-center text-3xl mt-20">Login Page</h1>
        </div>
        <div className="bg-white h-[50vh] pt-32 px-10">
          <div className={`mt-10 ${isHidden ? "hidden" : ""} `}>
            <h1 className="font-bold text-lg text-black text-center">{messageStatus ? 'Silahkan Check Whatsapp Anda!' : 'Ada Error!'}</h1>
            <p className="text-center text-black text-xs">{message}</p>
          </div>
          <a href="/">
            <h1 className="text-black mt-10 font-bold text-center text-sm underline underline-offset-1">Butuh Bantuan?</h1>
          </a>
        </div>
        <div className="absolute z-20 h-[45vh] w-[80vw] right-9 top-36 shadow-2xl rounded-2xl bg-white flex flex-col pt-5 items-center">
          <img src="https://i.postimg.cc/3RXgjG2w/ICComp.png" alt="iccomp" className="h-24 w-24" />
          <h1 className=" font-extrabold mt-5 text-2xl text-black">ICComp</h1>
          <form className="flex justify-center h-32 flex-col mt-4 w-[80%]">
            <h1 className="text-gray-700 text-xs">Masukan Nomor Whatsapp Anda!</h1>
            <input type="text" placeholder="Contoh : 081 xxx xxx" className="input input-bordered text-black w-full max-w-xs mb-3 bg-[#EBE9E9] border-2 border-[#666262]" value={phoneNumber} onChange={(e) => {
              setPhoneNumber(e.target.value);
            }} /> 
            <button id="buttonLogin" onClick={loginClicked} type={'button'} className={`btn bg-yellow-400 border-none shadow-2xl mx-auto w-[40%] font-bold text-black`}>
              {wasLogin}
            </button>
            {/* <a href="/"  className="mx-auto btn bg-yellow-400 border-none shadow-2xl w-[40%]  hover:text-white font-bold text-black">
            </a> */}
          </form>
        </div>
      </div>
    </>
  );
}

export default Page;
