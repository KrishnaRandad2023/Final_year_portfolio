import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <section className="text-center py-20">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm Krishna, a passionate developer creating amazing digital
            experiences. Explore my work and let's build something great
            together.
          </p>
          <div className="flex gap-4 justify-center">
            <Button>View My Work</Button>
            <Button variant="outline">Download Resume</Button>
          </div>
        </section>

        {/* Add some content to test scrolling behavior */}
        <section className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4">Project {i}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Description of an amazing project that showcases my skills and
                  creativity.
                </p>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* More content to test navbar behavior */}
        <section className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
