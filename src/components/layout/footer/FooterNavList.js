import React from "react";
import FooterNavItems from "./FooterNavItems";
import FooterTopLeft from "./FooterTopLeft";
import FooterRecentPosts from "./FooterRecentPosts";

const FooterNavList = () => {
  const lists = [
    {
      heading: "Links",
      items: [
        { name: "Admission", path: "/schedule" },
        { name: "About Us", path: "/aboutus" },
        { name: "Help (FAQ)", path: "#" },
        { name: "Contact Us", path: "/contactus" },
        { name: "Our Locations", path: "/contactus" },
        { name: "Privacy Policy", path: "#" },
        { name: "Terms & Conditions", path: "#" },
      ],
    },
    {
      heading: "Locate Us",
      items: [
        {
          name: "Unit-1, Srigandhakaval Branch, #1566, ‘D’ Group Layout, 60 ft. Road, Bengaluru - 560091",
          path: "https://maps.app.goo.gl/h7nNTso9x3Eag8oW8",
        },
        {
          name: "Unit-2, Ullal Branch, #170/3, 6th Block, Ullal Ring Road, Bengaluru – 560110",
          path: "https://maps.app.goo.gl/Xe6HM1q4uXFXi59J6",
        },
      ],
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-12 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 py-10">
      <FooterTopLeft />
      {lists.map((list, idx) => (
        <FooterNavItems key={idx} list={list} idx={idx} />
      ))}
      <FooterRecentPosts />
    </section>
  );
};

export default FooterNavList;