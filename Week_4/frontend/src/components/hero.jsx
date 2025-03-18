export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-[#7C0E0F] to-[#5C2E1D] text-white py-20">
      <div className="container mx-auto text-center px-6">
        {/* Title & Tagline */}
        <h1 className="text-5xl font-extrabold mt-4 tracking-wide">
          Welcome to <span className="text-yellow-300">TerraMart</span>
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          Discover exclusive products crafted with care at unbeatable prices.
        </p>
      </div>
    </div>
  );
}
