"use client";
import Link from "next/link";
import React from "react";

const ButtonPrimary2 = ({
  children,
  color,
  type,
  path,
  arrow,
  width,
  onClick,
}) => {
  return type === "button" || type === "submit" ? (
    <button
      {...{ type: type === "submit" ? "submit" : "" }}
      onClick={onClick ? onClick : () => {}}
      className={`text-size-15 text-whiteColor bg-avorange px-25px py-10px border  hover:bg-whiteColor inline-block rounded dark:hover:bg-whiteColor-dark dark:hover:text-whiteColor ${
        width === "full" ? "w-full" : ""
      } ${
        color === "secondary"
          ? "bg-avorange border-secondaryColor hover:text-secondaryColor"
          : "bg-avorange border-primaryColor hover:text-primaryColor"
      }`}
    >
      {children} {arrow && <i className="icofont-long-arrow-right"></i>}
    </button>
  ) : (
    <Link
      className={`text-size-15 text-whiteColor bg-avorange  px-25px py-10px border  hover:bg-whiteColor inline-block rounded dark:hover:bg-whiteColor-dark dark:hover:text-whiteColor ${
        color === "secondary"
          ? "bg-bg-avorange border-secondaryColor hover:text-secondaryColor"
          : "bg-bg-avorange border-primaryColor hover:text-primaryColor"
      }`}
      href={path}
    >
      {children} {arrow && <i className="icofont-long-arrow-right"></i>}
    </Link>
  );
};

export default ButtonPrimary2;

