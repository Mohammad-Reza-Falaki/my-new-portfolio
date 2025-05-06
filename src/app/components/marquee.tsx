export default function Marquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-black py-2">
      <div className="inline-block animate-marquee text-white text-lg font-semibold">
        {" "}
        | Python | MATLAB | Next.js | Tailwind | MD Simulation | AI in Materials
        | | Python | MATLAB | Next.js | Tailwind | MD Simulation | AI in
        Materials |
      </div>
    </div>
  );
}
