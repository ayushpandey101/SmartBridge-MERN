import React, { useState } from "react";

function TextUpdater() {
  const [text, setText] = useState("");
  const [showText, setShowText] = useState(false);

  return (
    <div className="h-screen flex flex-col items-center p-4">
      {!showText ? (
        <div className="flex flex-col items-center">
          <input
            type="text"
            className="border p-2 rounded bg-yellow-500 text-white"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type here"
          />
          <button
            className="mt-4 bg-blue-500 text-white p-2 rounded"
            onClick={() => setShowText(true)}
          >
            Next
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <p className="text-black text-lg font-bold">You typed: {text}</p>
          <button
            className="mt-4 bg-red-500 text-white p-2 rounded"
            onClick={() => setShowText(false)}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
}

export default TextUpdater;
