export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#5C0E0F] to-[#5C2E1D] text-white py-10 mt-12">
      <div className="container mx-auto max-w-screen-lg px-6">
        {/* Grid Layout for Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-semibold tracking-wide text-[#F8B400]">
              NovaMart
            </h2>
            <p className="mt-2 text-sm text-gray-300">
              Your one-stop destination for everything trendy and futuristic.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-medium text-gray-200">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-[#F8B400] transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-300 hover:text-[#F8B400] transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-[#F8B400] transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div>
            <h3 className="text-lg font-medium text-gray-200">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-4 mt-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ayush-pandey-06436a247/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-md transition-transform transform hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 72 72"
                  fill="#0077B5"
                >
                  <path d="M16.758 23.025H7.366v32.343h9.392V23.025zm-4.698-2.688c3.134 0 5.099-2.064 5.099-4.625C17.159 13.025 15.194 11 12.06 11c-3.135 0-5.1 2.025-5.1 4.587 0 2.56 1.965 4.75 5.1 4.75zm10.238 34.355h9.393v-15.76c0-.87.062-1.74.317-2.362.62-1.533 2.032-3.118 4.41-3.118 3.108 0 4.354 2.35 4.354 5.8v15.44h9.391V39.167c0-8.36-4.47-12.25-10.427-12.25-4.86 0-7.003 2.68-8.184 4.527v-3.92h-9.354c.124 2.55 0 32.343 0 32.343z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/ayushpandey_101/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-md transition-transform transform hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 72 72"
                  fill="#E4405F"
                >
                  <path d="M27.4456 35.7808C27.4456 31.1786 31.1776 27.4468 35.7826 27.4468C40.3875 27.4468 44.1216 31.1786 44.1216 35.7808C44.1216 40.383 40.3875 44.1148 35.7826 44.1148C31.1776 44.1148 27.4456 40.383 27.4456 35.7808ZM22.9377 35.7808C22.9377 42.8708 28.6883 48.618 35.7826 48.618C42.8768 48.618 48.6275 42.8708 48.6275 35.7808C48.6275 28.6908 42.8768 22.9436 35.7826 22.9436C28.6883 22.9436 22.9377 28.6908 22.9377 35.7808Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 mt-6 pt-4 text-center text-sm text-gray-300">
          &copy; 2025 NovaMart. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
