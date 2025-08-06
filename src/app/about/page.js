export default function About() {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">
          About Me
        </h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            Welcome to my about page. Here you can learn more about my
            background, experience, and what drives me as a developer.
          </p>
          <p>
            This page is currently a placeholder - you can customize it with
            your actual content, images, and personal story.
          </p>
        </div>
      </div>
    </div>
  );
}
