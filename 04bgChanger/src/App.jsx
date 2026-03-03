import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      {/* Background */}
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      ></div>

      {/* Buttons */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-2xl p-3">

          <button onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded text-white"
            style={{ backgroundColor: "red" }}>
            Red
          </button>

          <button onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded text-white"
            style={{ backgroundColor: "blue" }}>
            Blue
          </button>

          <button onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded text-white"
            style={{ backgroundColor: "green" }}>
            Green
          </button>

          <button onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded"
            style={{ backgroundColor: "yellow" }}>
            Yellow
          </button>

          <button onClick={() => setColor("grey")}
            className="outline-none px-4 py-1 rounded text-white"
            style={{ backgroundColor: "grey" }}>
            Grey
          </button>

          {/* New colors */}

          <button onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded text-white"
            style={{ backgroundColor: "purple" }}>
            Purple
          </button>

          <button onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded text-white"
            style={{ backgroundColor: "pink" }}>
            Pink
          </button>

          <button onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 rounded text-white"
            style={{ backgroundColor: "orange" }}>
            Orange
          </button>

          <button onClick={() => setColor("teal")}
            className="outline-none px-4 py-1 rounded text-white"
            style={{ backgroundColor: "teal" }}>
            Teal
          </button>

          <button onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded text-white"
            style={{ backgroundColor: "black" }}>
            Black
          </button>

          <button onClick={() => setColor("cyan")}
            className="outline-none px-4 py-1 rounded text-black"
            style={{ backgroundColor: "cyan" }}>
            Cyan
          </button>

        </div>
      </div>
    </>
  );
}

export default App;