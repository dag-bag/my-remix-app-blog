/** @format */

import React from "react";
import MainForm from "~/components/MainForm";

function Notes() {
  return (
    <div>
      <MainForm />
    </div>
  );
}

export default Notes;

export async function action({ req }) {
  const formdata = await req.formData();
  // const data = {
  //   title: formdata.get("title"),
  //   note: formdata.get("note"),
  // };
  console.log(data);
}
