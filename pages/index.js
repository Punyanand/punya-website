import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <main className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">👋 Hi, I'm Punya</h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to my personal hub! I’m into Data, NLP, ML, and building cool projects.  
          Check out my blogs, services, and journey here.
        </p>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Stay Updated</h2>
          <Newsletter />
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">Links</h2>
          <ul className="list-disc ml-6 text-blue-600">
            <li><a href="/blog" className="hover:underline">My Blogs</a></li>
            <li><a href="https://github.com/Punyanand" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://leetcode.com/u/punya_ira/" target="_blank" rel="noopener noreferrer">LeetCode</a></li>
            <li><a href="https://punyanand.github.io" target="_blank" rel="noopener noreferrer">Portfolio</a></li>
          </ul>
        </div>
      </main>
    </div>
  );
}
