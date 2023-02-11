/** @format */

import React from "react";

type Props = {
  error?: string | null;
};

function Error({ error }: Props) {
  return <em className="text-red-600">{error}</em>;
}

export default Error;
