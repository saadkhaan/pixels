import React from "react";

export default function Testimonial(props) {
  return (
    <div className="flex flex-col testimonial-component">
      <svg
        width="140"
        height="20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.927.666l-2.441 4.95-5.462.796c-.98.142-1.372 1.35-.661 2.04l3.951 3.851-.935 5.44c-.168.983.868 1.72 1.735 1.26L10 16.433l4.886 2.568c.867.456 1.903-.276 1.735-1.26l-.935-5.439 3.951-3.85c.71-.692.318-1.9-.661-2.041l-5.462-.797-2.441-4.95c-.438-.881-1.705-.893-2.146 0zM38.927.666l-2.441 4.95-5.462.796c-.98.142-1.372 1.35-.661 2.04l3.951 3.851-.934 5.44c-.169.983.867 1.72 1.734 1.26L40 16.433l4.886 2.568c.867.456 1.903-.276 1.735-1.26l-.935-5.439 3.951-3.85c.71-.692.318-1.9-.661-2.041l-5.462-.797-2.441-4.95c-.438-.881-1.705-.893-2.146 0zM68.927.666l-2.441 4.95-5.462.796c-.98.142-1.372 1.35-.661 2.04l3.951 3.851-.934 5.44c-.169.983.867 1.72 1.734 1.26L70 16.433l4.886 2.568c.867.456 1.903-.276 1.735-1.26l-.935-5.439 3.951-3.85c.71-.692.318-1.9-.661-2.041l-5.462-.797-2.441-4.95c-.438-.881-1.705-.893-2.146 0zM98.927.666l-2.441 4.95-5.462.796c-.98.142-1.372 1.35-.661 2.04l3.951 3.851-.934 5.44c-.169.983.867 1.72 1.734 1.26L100 16.433l4.886 2.568c.867.456 1.903-.276 1.735-1.26l-.935-5.439 3.951-3.85c.711-.692.318-1.9-.661-2.041l-5.462-.797-2.441-4.95c-.437-.881-1.705-.893-2.146 0zM128.927.666l-2.441 4.95-5.462.796c-.979.142-1.372 1.35-.661 2.04l3.951 3.851-.935 5.44c-.168.983.868 1.72 1.735 1.26L130 16.433l4.886 2.568c.867.456 1.903-.276 1.735-1.26l-.935-5.439 3.951-3.85c.711-.692.318-1.9-.661-2.041l-5.462-.797-2.441-4.95c-.437-.881-1.705-.893-2.146 0z"
          fill="#FFD600"
        />
      </svg>
      <blockquote className="relative text-xl mt-4">
        {props.testimonial}
      </blockquote>
      <p className="text-gray-700 font-bold mt-6">{props.clientName}</p>
    </div>
  );
}
