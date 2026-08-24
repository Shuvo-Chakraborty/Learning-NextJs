import Link from "next/link";

const BlogsPage = () => {
    return (
        <div className="p-24">
            {blogs.map((blog) => (
                <div key={blog.slug} className="mb-6 p-4 border rounded-md shadow-md">
                    <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
                    <h3 className="text-gray-700">{blog.description}</h3>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        <Link href={`/blogs/${blog.slug}`}>
                            View Details
                        </Link>
                    </button>
                </div>
            ))}
        </div>
    );
}
const blogs = [
  {
    slug: "introduction-to-artificial-intelligence",
    title: "Introduction to Artificial Intelligence",
    description: "Learn the basics of artificial intelligence, how it works, and how AI is transforming different industries."
  },
  {
    slug: "machine-learning-for-beginners",
    title: "Machine Learning for Beginners",
    description: "A beginner-friendly guide to machine learning concepts, algorithms, training data, and real-world applications."
  },
  {
    slug: "web-development-with-javascript",
    title: "Web Development with JavaScript",
    description: "Explore how JavaScript makes websites interactive and learn about its role in modern web development."
  },
  {
    slug: "understanding-deep-learning",
    title: "Understanding Deep Learning",
    description: "Discover how neural networks and deep learning models learn from data to solve complex problems."
  },
  {
    slug: "future-of-technology",
    title: "The Future of Technology",
    description: "Explore emerging technologies and how innovations in AI, robotics, cloud computing, and automation may shape the future."
  }
];
export default BlogsPage;
