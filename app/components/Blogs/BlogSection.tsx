/** @format */

import React from "react";
import BlogCard from "./BlogCard";
import Layout from "./Layout";

type Props = {};

function BlogSection({}: Props) {
  return (
    <div className="py-12 ">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="mb-12 space-y-2 text-center">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl ">
            Create & Read Out Latest Posts.
          </h2>
          <p className="text-gray-600  lg:mx-auto lg:w-6/12">
            Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt,
            debitis dolorum officia aliquid explicabo? Excepturi, voluptate?
          </p>
        </div>
        <Layout>
          <BlogCard />
        </Layout>
      </div>
    </div>
  );
}

export default BlogSection;
