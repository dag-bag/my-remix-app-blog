/** @format */

import { Form } from "@remix-run/react";
import React from "react";

type Props = {};

function MainForm({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen text-gray-700">
      {/* Component Start */}
      <h1 className="font-bold text-2xl">Welcome Back :)</h1>
      <Form
        action="/blogs/create"
        className="flex flex-col bg-white rounded shadow-lg p-12 mt-12"
        method="post"
      >
        <label className="font-semibold text-xs" htmlFor="title">
          Title
        </label>
        <input
          name="title"
          className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
          type="text"
        />
        <label className="font-semibold text-xs mt-3" htmlFor="slug">
          Note
        </label>
        <input
          className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
          type="text"
          name="slug"
          id="slug"
        />
        <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">
          Add Note
        </button>
        <div className="flex mt-6 justify-center text-xs">
          <span className="mx-2 text-gray-300">/</span>
        </div>
      </Form>
      {/* Component End  */}
    </div>
  );
}

export default MainForm;
