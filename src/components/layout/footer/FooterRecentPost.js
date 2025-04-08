import Link from "next/link";
import React from "react";

const FooterRecentPost = ({ post }) => {
  const { title, date, title2, title3 } = post;

  return (
    <li>
      <Link
        href={`/contactus`}
        className="flex flex-col group cursor-pointer transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-3 rounded-lg"
      >
        <p className="text-sm text-[#fdbb2d] mb-2">{date}</p>
        {title && (
          <h6 className="text-base text-white group-hover:text-[#fdbb2d] transition-all duration-300">
            {title}
          </h6>
        )}
        {title2 && (
          <h6 className="text-base text-white group-hover:text-[#fdbb2d] transition-all duration-300">
            {title2}
          </h6>
        )}
        {title3 && (
          <h6 className="text-base text-white group-hover:text-[#fdbb2d] transition-all duration-300">
            {title3}
          </h6>
        )}
      </Link>
    </li>
  );
};

export default FooterRecentPost;