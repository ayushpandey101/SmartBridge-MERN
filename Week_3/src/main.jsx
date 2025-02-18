import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TextUpdater from "./TextUpdater.jsx";
import SimpleForm from "./SimpleForm.jsx";
import UserCard from "./UserCard.jsx";
import CustomButton from "./CustomButton.jsx";
import LoginForm from "./LoginForm.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("textUpdater");

  const renderPage = () => {
    switch (currentPage) {
      case "textUpdater":
        return <TextUpdater />;
      case "simpleForm":
        return <SimpleForm />;
      case "userCard":
        return (
          <UserCard
            name="Ayush Pandey"
            email="ayushpandey2022@vitbhopal.ac.in"
          />
        );
      case "customButton":
        return <CustomButton />;
      case "loginForm":
        return <LoginForm />;
      default:
        return <TextUpdater />;
    }
  };

  return (
    <StrictMode>
      <div className="bg-red-200 w-full h-screen flex flex-col items-center pt-12">
        {/* Button container */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <button
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
            onClick={() => setCurrentPage("textUpdater")}
          >
            TextUpdater
          </button>
          <button
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
            onClick={() => setCurrentPage("simpleForm")}
          >
            SimpleForm
          </button>
          <button
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
            onClick={() => setCurrentPage("userCard")}
          >
            UserCard
          </button>
          <button
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
            onClick={() => setCurrentPage("customButton")}
          >
            CustomButton
          </button>
          <button
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
            onClick={() => setCurrentPage("loginForm")}
          >
            LoginForm
          </button>
        </div>

        {/* Rendered Component */}
        <div className="w-full mt-6">{renderPage()}</div>
      </div>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<App />);
