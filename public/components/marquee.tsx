const marqueeData = [
  "Microstructure",
  "Mechanical Properties",
  "Machine Learning",
  "Python",
  "MATLAB",
  "Next.js",
  "Tailwind",
  "MD Simulation",
  "AI in Materials Science",
];

export default function Marquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-[#16173b] py-3">
      <div className="inline-flex animate-marquee space-x-4">
        {[...marqueeData, ...marqueeData].map((item, index) => (
          <div
            key={index}
            className="bg-sky-700 text-white text-xl font-semibold px-6 py-3 rounded-xl shadow-md bg-gradient-to-r from-[#1e2e52] via-[#3b82f6] to-[#1e2e52]
            hover:from-purple-500 hover:via-pink-600 hover:to-red-500 transition-all duration-500 ease-in-out"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
