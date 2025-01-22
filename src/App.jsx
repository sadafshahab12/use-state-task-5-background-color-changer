import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("#334155");
  const handleChangeColor = (evt) => {
    setBgColor(evt.target.value);
  };
  return (
    <>
      <div style={{ backgroundColor: bgColor, height: "100vh" }} className="flex flex-col justify-center items-center gap-4">
        <h1 className={`text-2xl font-bold ${bgColor === "black" || bgColor === "#334155" || bgColor === "#1e3a8a" ? "text-white"  :"text-black"}`}>Background Color Changer</h1>
        <div>
          <select className="outline-none py-2 px-8 border-2 border-slate-700" id="dropdown" onChange={handleChangeColor}>
            <option value="#334155">Slate</option>
            <option value="white">White</option>
            <option value="#f472b6">Pink</option>
            <option value="black">Black</option>
            <option value="#2dd4bf">Teal</option>
            <option value="#1e3a8a">Blue</option>
            <option value="#fb7185">Rose</option>
            <option value="orange">Orange</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default App;
