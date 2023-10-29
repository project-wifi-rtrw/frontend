"use client"
import React from "react";

const ID = ({params}) => {
  const {tokenId} = params;
  return (
    <>
    <p>Your Token : {tokenId}</p>
    </>
  )
};

export default ID;