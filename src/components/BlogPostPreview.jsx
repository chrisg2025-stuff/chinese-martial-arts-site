import React from "react";
import { Link } from "react-router-dom";

const BlogPostPreview = ({ id, title, author, excerpt }) => (
  <div className="bg-white shadow p-4 rounded-2xl mb-4 hover:shadow-md transition">
    <Link to={`/blog/${id}`}>
      <h3 className="text-xl font-semibold text-blue-600 hover:underline">{title}</h3>
    </Link>
    <p className="text-sm text-gray-600 mb-2">By {author}</p>
    <p>{excerpt}</p>
  </div>
);

export default BlogPostPreview;
