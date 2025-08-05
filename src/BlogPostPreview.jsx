import React from "react";

const BlogPostPreview = ({ title, author, excerpt }) => (
  <div className="bg-white shadow p-4 rounded-2xl mb-4">
    <h3 className="text-xl font-semibold mb-1">{title}</h3>
    <p className="text-sm text-gray-600 mb-2">By {author}</p>
    <p>{excerpt}</p>
  </div>
);

export default BlogPostPreview;
