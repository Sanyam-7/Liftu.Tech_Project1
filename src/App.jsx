import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/Nav";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import FourthPage from "./components/FourthPage";
import FifthPage from "./components/FifthPage";
import SixthPage from "./components/SixthPage";
import SeventhPage from "./components/SeventhPage";
import EightPage from "./components/EightPage";

function App() {
  return (
    <>
      <Nav></Nav>
      <FirstPage></FirstPage>
      <SecondPage></SecondPage>
      <ThirdPage></ThirdPage>
      <FourthPage></FourthPage>
      <FifthPage></FifthPage>
      <SixthPage></SixthPage>
      <SeventhPage></SeventhPage>
      <EightPage></EightPage>
    </>
  );
}

export default App;
