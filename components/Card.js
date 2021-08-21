import React from "react";

export default function Card(props) {
  return (
    <div className="h-full sm:flex-1 bg-gray-200 px-4 py-5 rounded-[20px] space-y-2">
      <div className="flex items-center justify-center rounded-full bg-pb-green w-16 h-16">
        {/* <img src={props.icon} alt="icon" className="h-10" /> */}
        {props.children}
      </div>
      <h3 className="text-2xl font-bold">{props.cardTitle}</h3>
      <p className="tracking-tight text-gray-700 text-2xl sm:text-base">
        {props.cardDescription}
      </p>
    </div>
  );
}
