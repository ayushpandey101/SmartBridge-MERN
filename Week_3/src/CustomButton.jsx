import React from "react";

function CustomButton() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="flex justify-center h-screen/2">
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 m-4 text-center"
      >
        Click Me!
      </button>
    </div>
  );
}

export default CustomButton;
