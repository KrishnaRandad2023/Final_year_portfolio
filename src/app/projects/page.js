export default function Projects() {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="p-6 bg-card rounded-lg shadow-lg border">
              <div className="w-full h-48 bg-muted rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                Project {i}
              </h3>
              <p className="text-muted-foreground mb-4">
                A brief description of this amazing project and the technologies
                used.
              </p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm">
                  React
                </span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-sm">
                  Node.js
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
