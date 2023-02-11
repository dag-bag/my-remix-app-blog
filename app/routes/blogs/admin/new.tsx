/** @format */

import { ActionArgs, json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { useState, useTransition } from "react";
import invariant from "tiny-invariant";
import Error from "~/components/Error";
import { createPost } from "~/models/post.server";

const inputClassName = `w-full rounded border border-gray-500 px-2 py-1 text-lg`;
export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();

  const title = formData.get("title");
  const slug = formData.get("slug");
  const markdown = formData.get("markdown");
  const errors = {
    title: title ? null : "Title is required",
    slug: slug ? null : "Slug is required",
    markdown: markdown ? null : "Markdown is required",
  };
  const hasErrors = Object.values(errors).some((error) => error);
  if (hasErrors) {
    return json(errors);
  }
  invariant(typeof title === "string", "title must be a string");
  invariant(typeof slug === "string", "slug must be a string");
  invariant(typeof markdown === "string", "markdown must be a string");
  // await new Promise((res) => setTimeout(res, 1000));
  await createPost({ title, slug, markdown });

  return redirect("/blogs/admin");
};
export default function NewPost() {
  const [slugValue, setSlugValue] = useState("");
  const errors = useActionData<typeof action>();
  const transition = useTransition();
  const createSlug = (value: string) => {
    const slug = value.split(" ").join("-");
    setSlugValue(slug);
  };
  // const isCreating = Boolean(transition.submission);
  return (
    <Form method="post">
      <p>
        <label>
          Post Title: <Error error={errors?.title} />
          <input
            type="text"
            name="title"
            className={inputClassName}
            onChange={(e) => {
              createSlug(e.target.value);
            }}
          />
        </label>
      </p>
      <p>
        <label>
          Post Slug: <Error error={errors?.slug} />
          <input
            type="text"
            name="slug"
            className={inputClassName}
            value={slugValue}
          />
        </label>
      </p>

      <p className="text-right mt-4"></p>
      <p>
        <label htmlFor="markdown">
          Markdown:{" "}
          {errors?.markdown ? (
            <em className="text-red-600">{errors.markdown}</em>
          ) : null}
        </label>
        <br />
        <textarea
          id="markdown"
          rows={20}
          name="markdown"
          className={`${inputClassName} font-mono`}
        />
      </p>
      <button
        type="submit"
        className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
        //   disabled={isCreating}
      >
        Create Post
        {/* {isCreating ? "Creating..." : "Create Post"} */}
      </button>
    </Form>
  );
}
