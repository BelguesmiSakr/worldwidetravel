import React, { ReactNode } from "react";
import Navbar from "../components/navbar";

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default DefaultLayout;
