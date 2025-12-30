import React from "react";
import NavBar from "./components/NavBar";
import MainBody from "./components/MainBody";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="max-w-full max-h-full">
      <div className="w-full m-0 pt-0 pb-0 flex flex-row h-screen justify-center">
        <header className="flex justify-end w-auto">  
          <NavBar/>
        </header>
        <main className="flex flex-row">
          <MainBody className="mainBody overflow-y-auto no-scrollbar border-solid border-x-[1px] border-gray-300/40" />
          <Footer  className="mainFooter overflow-auto"/>
        </main>
      </div>
    </div>
  );
}

export default App;
