/** @format */

import React from "react";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return <div className="lg:w-3/4 xl:w-2/4 lg:mx-auto">{children}</div>;
}

export default Layout;
