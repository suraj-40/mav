import Image from "next/image"
import Link from "next/link"
import blogimg from "@/assets/images/blog/blog_27.jpg"
import blogimg2 from "@/assets/images/blog/blog_9.png"
import blogimg3 from "@/assets/images/blog/blog_35.jpg"

const HomeBlog = () => {
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

        <div className="flex flex-nowrap overflow-x-auto gap-6 pb-4" data-aos="fade-up">
          {blogPosts.map((post, index) => (
            <div key={index} className="flex-none w-full sm:w-1/2 lg:w-1/3 max-w-sm">
              <div className="overflow-hidden rounded-lg shadow-lg h-full">
                <Image
                  src={post.src || "/placeholder.svg"}
                  alt={post.alt}
                  width={400}
                  height={225}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
                    <Link href="#">{post.title}</Link>
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{post.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeBlog