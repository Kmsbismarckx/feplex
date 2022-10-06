import React, { useContext, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { globalContext } from "../context";
import Main from "../components/Main/Main";

const General = () => {
  const { isVisible } = useContext(globalContext);
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default General;
