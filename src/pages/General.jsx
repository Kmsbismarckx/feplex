import React, { useContext, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";

const General = () => {
  return (
    <div className="general">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default General;
