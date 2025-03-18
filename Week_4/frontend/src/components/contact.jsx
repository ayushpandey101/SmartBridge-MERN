// Contact Us Page
export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 py-12 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-red-700 mb-6">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-4">
          Have any questions? Reach out to us and we’ll be happy to assist you!
        </p>
        <form className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-gray-800 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 font-semibold mb-2">
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button className="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
