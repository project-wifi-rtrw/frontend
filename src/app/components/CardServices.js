import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function CardServices(props) {
  return (
    <>
      <div className="w-full h-28 shadow-2xl bg-white rounded-xl flex gap-2 p-2">
        <div className="h-full flex justify-center items-center w-[30%] ">
          <FontAwesomeIcon icon={props.icon} className="h-[80%]"/>
        </div>
        <div className="w-[70%]">
          <h1 className="font-bold ">{props.title}</h1>
          <p className="text-sm">{props.description}</p>
        </div>
      </div>
    </>
  );
}

export default CardServices;
