import { useState } from "react";
import "./App.css";

function App() {
  const [active, setActive] = useState("hidden");
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
      <button
        onClick={() => {
          setActive("block");
        }}
        className="bg-gray-900 text-white px-2 py-1 text-2xl"
      >
        Click Here Gandu
      </button>
      <h1 className={`${active} text-5xl`}>Bhag Bosdike</h1>
    </div>
  );
}

export default App;
