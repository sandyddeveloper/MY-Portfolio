import SeactionHeading from "@/components/ui/SeactionHeading";
import { blogs } from "@/lib/data";
import React from "react";
import BlogCart from "./BlogCart";

const Blog = () => {
  return (
    <div data-aos="fade-up" className="pt-16 pb-16 bg-[#0f0715]">
      <SeactionHeading data-aos="flip-right">Our Blog</SeactionHeading>
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 items-center">
        {blogs.map((blog) => {
          return (
            <div key={blog.id}>
              <BlogCart blog={blog} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
