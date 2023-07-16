import React,{Component, useState } from "react";
import '../styles/App.css';
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import InputQuery from "./InputQuery";
import Submitbutton from "./SubmitButton";

const App = () => {
  return (
    <div id="main">
      <Heading/>
      <SubHeading/>
      <InputQuery/>
      <Submitbutton/>
    </div>
  )
}
export default App;


