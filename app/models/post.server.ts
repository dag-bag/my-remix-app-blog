/** @format */

import { prisma } from "~/db/db.server";
import type { Post } from "@prisma/client";

export async function getPosts(): Promise<Array<Post>> {
  const posts = await prisma.post.findMany();
  return posts;
}
export const getPostBySlug = async (slug: string) => {
  const post = await prisma.post.findUnique({
    where: {
      slug: slug,
    },
  });
  return post;
};

// ...

export async function createPost(
  post: Pick<Post, "slug" | "title" | "markdown">
) {
  return prisma.post.create({ data: post });
}
