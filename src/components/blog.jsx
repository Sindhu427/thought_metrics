import React from "react";
import { ArrowRight } from "react-bootstrap-icons";
import Blog1 from "../assets/blogs/blog1.png";
import Blog2 from "../assets/blogs/blog2.png";
import Blog3 from "../assets/blogs/blog3.png";
import Blog4 from "../assets/blogs/blog4.png";

const blogsData = [
  {
    id: 1,
    image: Blog1,
    description:
      "Gain feedback at every phase of product and ad development, from concept to execution with agile testing.",
  },
  {
    id: 2,
    image: Blog2,
    description:
      "Gain feedback at every phase of product and ad development, from concept to execution with agile testing.",
  },
  {
    id: 3,
    image: Blog3,
    description:
      "Gain feedback at every phase of product and ad development, from concept to execution with agile testing.",
  },
  {
    id: 4,
    image: Blog4,
    description:
      "Gain feedback at every phase of product and ad development, from concept to execution with agile testing.",
  },
];

function Blog() {
  return (
    <div className="bg-[#EAFFD6] py-5">
      <section className="py-10 px-6 max-w-7xl mx-auto ">
        <h2 className="text-3xl font-medium mb-12">
          Fresh Ideas to Help You Reach New Heights.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {blogsData.map((blog) => (
            <div
              key={blog.id}
              className="border rounded-lg overflow-hidden flex flex-col"
            >
              <img
                src={blog.image}
                alt="Blog"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow relative">
                <span className="bg-[#BBFDF5] text-gray-900 text-sm px-5 py-2 rounded-lg inline-block mb-2 w-fit">
                  Blog
                </span>
                <p className="text-sm flex-grow">{blog.description}</p>
              </div>
              <div className="flex justify-end items-center">
                <button className="bg-red-400 p-1 px-5 rounded-tl-lg rounded-br-lg text-white hover:bg-red-500">
                  <ArrowRight className="w-8 h-8" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Blog;
