import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MapComponent from "./components/MapComponent";
import MainBody from "./components/MainBody";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Highlights from "./components/Highlights";

function App() {
  return (
    <body className="">
      <Header />
      <MainBody />
      <Highlights/>
      <Footer />
      {/* <MapComponent/> */}
    </body>
  );
}

export default App;
