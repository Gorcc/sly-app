import React from "react";
import logo from "./logo.svg";
import "./Styles.css";
import Hero from "./Hero";
import Content from "./Content";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="App">
      <Hero />
      <Content />
      <Footer />
    </div>
  );
};

export default Home;
