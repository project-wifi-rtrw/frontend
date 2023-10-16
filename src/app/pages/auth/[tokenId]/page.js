"use client";
import React, { useState } from "react";
import { useCookies } from "react-cookie";

function Page({params}) {
  const {tokenId} = params;
  const [kukis, setKukisName] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(['name']);

  const setCookieHandler = () =>{
    console.log('workingg')
    setCookie('name',kukis,{path:'/'})
    console.log(cookies.name)
  }

  return (
    <>
    <p>Your Token : {tokenId}</p>
    <input type="text" value={kukis} onChange={(e)=>setKukisName(e.target.value)}/>
    <p className={'text-white'}>kukis value : {kukis}</p>
    <br></br><br></br><br></br>
    <button id="buttonLogin" onClick={setCookieHandler}>
      Set Cookie
    </button>
    </>
  )
};

export default Page;