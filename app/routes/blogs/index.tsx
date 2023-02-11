/** @format */

import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import React from "react";
import { getPosts } from "~/models/post.server";
export const loader = async () => {
  return json({
    posts: await getPosts(),
  });
};
function Index() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <main className="max-w-7xl m-auto">
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              to={`/blogs/${post.slug}`}
              className="text-blue-600 underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Index;
