import React from "react";

import { Outlet } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <>
      <p>HomePage</p>
      <Outlet></Outlet>
    </>
  );
};

export default HomePage;
