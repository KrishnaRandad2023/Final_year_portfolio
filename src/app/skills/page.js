export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express",
        "Python",
        "Django",
        "PostgreSQL",
        "MongoDB",
      ],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Figma", "VS Code", "Webpack"],
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
          My Skills
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-lg shadow-lg border"
            >
              <h3 className="text-xl font-semibold mb-4 text-center text-card-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
