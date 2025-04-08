import React from "react";
import FooterHeading from "@/components/shared/headings/FooterHeading";
import FooterRecentPost from "./FooterRecentPost";

const FooterRecentPosts = () => {
  const posts = [
    {
      title: "Phone: 9880906633 | 9972342144",
      title2: "e-mail: info@av.school",
      title3: "",
      date: "Unit-1",
      id: 1,
    },
    {
      date: "Unit-2",
      title: "Phone: 7760776098 | 7760776046",
      title2: "e-mail: info@av.school",
      title3: "",
      id: 2,
    },
    {
      title: "",
      title2: "admissions@av.school",
      title3: "career@av.school",
      date: "More Info",
      id: 3,
    },
  ];

  return (
    <div
      className="sm:col-start-1 sm:col-span-12 md:col-start-7 md:col-span-6 lg:col-start-10 lg:col-span-3 pl-0 2xl:pl-50px"
      data-aos="fade-up"
    >
      <FooterHeading>Reach Us</FooterHeading>
      <ul className="flex flex-col gap-y-6">
        {posts.map((post, idx) => (
          <FooterRecentPost key={idx} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default FooterRecentPosts;