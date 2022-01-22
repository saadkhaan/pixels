import React from "react";
import Link from "next/link";

export default function Button(props) {
  return (
    <>
      <Link href={props.btnLink}>
        <a
          className="bg-blue-600 hover:bg-purple-600 transform hover:scale-105 transition-all duration-300 text-xl sm:text-base px-8 py-3 mt-10 inline-block text-white rounded-md"
          style={{
            background: props.bg,
            color: props.color,
            fontWeight: props.fontWeight,
          }}
        >
          {props.btnTitle}
        </a>
      </Link>
    </>
  );
}
