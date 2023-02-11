/** @format */

import React from "react";

type Props = {};

function BlogCard({}: Props) {
  return (
    <div className="group relative -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-3xl bg-white  border border-transparent hover:border-gray-100  shadow-2xl shadow-transparent hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300 hover:z-10">
      <div className="sm:w-2/6 rounded-3xl overflow-hidden transition-all duration-500 group-hover:rounded-xl">
        <img
          src="https://images.unsplash.com/photo-1661749711934-492cd19a25c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
          alt="art cover"
          loading="lazy"
          width={1000}
          height={667}
          className="h-56 sm:h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="sm:p-2 sm:pl-0 sm:w-4/6">
        <span className="mt-4 mb-2 inline-block font-medium text-gray-400 sm:mt-0">
          Jul 27 2022
        </span>
        <h3 className="text-2xl font-semibold text-gray-800 ">
          Provident de illo eveniet commodi fuga fugiat laboriosam expedita.
        </h3>
        <p className="my-6 text-gray-600 ">
          Laudantium in, voluptates ex placeat quo harum aliquam totam,
          doloribus eum impedit atque...
        </p>
        <div className="flex gap-4">
          <a
            href="#"
            className="px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-blue-500  "
          >
            Tailwindcss
          </a>
          <a
            href="#"
            className="px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white  "
          >
            VueJS
          </a>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
