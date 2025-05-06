import Link from "next/link";

const projects = [
  {
    name: "Python Project 1",
    description: "Description of Python project",
    link: "#",
  },
  {
    name: "Matlab Project",
    description: "Description of Matlab project",
    link: "#",
  },
  { name: "MD Script", description: "Description of MD script", link: "#" },
];

export default function Projects() {
  return (
    <div className="min-h-screen p-5">
      <h1 className="text-3xl mb-4">My Projects</h1>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded">
            <h2 className="text-xl">{project.name}</h2>
            <p>{project.description}</p>
            <Link href={project.link}>
              <button className="text-blue-500">View Project</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
