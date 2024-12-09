import React from "react";

export default function Button(className = "", value, ...props) {
  return (
    <button className={className} {...props}>
      {value}
    </button>
  );
}
