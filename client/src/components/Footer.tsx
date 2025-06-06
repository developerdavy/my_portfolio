export default function Footer() {
  return (
    <footer className="bg-github-dark text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-300">
            © 2024 David Kamau. Built with modern web technologies.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <span className="text-sm text-gray-400">Software Developer</span>
            <span className="text-gray-600">•</span>
            <span className="text-sm text-gray-400">Web Developer</span>
            <span className="text-gray-600">•</span>
            <span className="text-sm text-gray-400">AI Agent Developer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
