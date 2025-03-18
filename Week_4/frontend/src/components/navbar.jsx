import logo from "../assets/image/logo.png";

export default function Navbar({ setCurrentPage }) {
  return (
    <nav className="sticky top-0 z-50 bg-brown-500 shadow-md px-6 py-1">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-20 w-auto mr-4" />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li
            className="text-gray-800 font-semibold hover:text-blue-600 transition duration-300 cursor-pointer"
            onClick={() => setCurrentPage("home")}
          >
            Home
          </li>
          <li
            className="text-gray-800 font-semibold hover:text-blue-600 transition duration-300 cursor-pointer"
            onClick={() => setCurrentPage("about")}
          >
            About
          </li>
          <li
            className="text-gray-800 font-semibold hover:text-blue-600 transition duration-300 cursor-pointer"
            onClick={() => setCurrentPage("contact")}
          >
            Contact
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
