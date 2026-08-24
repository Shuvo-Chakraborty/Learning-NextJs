const Page = async ({ params }) => {
  const { slug } = await params;
  const { title, description } = blogs.find(blog => blog.slug === slug);
  return (
    <div className="h-screen">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

export default Page;

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