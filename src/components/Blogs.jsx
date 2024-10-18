"use client";
import Image from "next/image";
import Link from "next/link";

const Blogs = ({ blogs }) => {
  function formatDate(dateString) {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(
      new Date(dateString)
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Latest Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.slug}
            className="border rounded-lg shadow-md overflow-hidden"
          >
            {blog.featuredImage && (
              <Image
                src={blog.featuredImage.node.sourceUrl}
                alt={blog.title}
                layout="responsive"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="text-lg font-semibold">
                <Link href={`/blogs/${blog.slug}`}>
                  <span className="text-blue-600 hover:underline">
                    {blog.title}
                  </span>
                </Link>
              </h3>
              <p className="text-gray-500 text-sm">{formatDate(blog.date)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
