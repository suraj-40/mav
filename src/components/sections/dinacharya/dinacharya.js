import Image from "next/image"
import Link from "next/link"
import blogimg from "@/assets/images/blog/blog_27.jpg"
import blogimg2 from "@/assets/images/blog/blog_9.png"
import blogimg3 from "@/assets/images/blog/blog_35.jpg"
//import Dinacharya from "@/app/NEP/dinacharya/page"

const dinacharya = () => {
  // Placeholder data for blog posts
  const blogPosts = [
    {
      src: blogimg,
      alt: "Blog post image 1",
      title: "Empowering Minds, Transforming Futures",
      desc: "We believe in nurturing the potential within each student, fostering their growth, and preparing them for a future full of endless possibilities. Our dedicated educators and innovative programs inspire students to excel academically, socially, and personally, ensuring they graduate as confident, empowered individuals ready to shape their own bright futures.",
    },
    {
      src: blogimg2,
      alt: "Blog post image 2",
      title: "Empower Your Potential at Agasthya Vidyanikethan",
      desc: "We at Agasthya Vidyanikethan are your gateway to an infinitely exciting universe. We are your partners in achievement and personal development—we are more than just a school. Whether you are a future leader, scientist, artist, or athlete, our committed teachers and cutting-edge tools are here to enhance your abilities.",
    },
    {
      src: blogimg3,
      alt: "Blog post image 3",
      title: "Third Blog Post Title",
      desc: "Short description of the third blog post goes here.",
    },
  ]

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-10 text-center" data-aos="fade-up">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            News & Blogs
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Our Latest{" "}
            <span className="relative after:w-full after:h-[7px] z-0 after:bg-secondaryColor after:absolute after:left-0 after:bottom-3 md:after:bottom-5 after:z-[-1]">
              Research
            </span>
          </h2>
        </div>

        <div className="space-y-12" data-aos="fade-up">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={post.src || "/placeholder.svg"}
                    alt={post.alt}
                    width={600}
                    height={400}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2">
                <div className="p-6">
                  <h3 className="mb-4 text-2xl font-bold text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
                    <Link href="#">{post.title}</Link>
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">{post.desc}</p>
                  <div className="mt-6">
                    <Link
                      href="#"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Read More
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default dinacharya