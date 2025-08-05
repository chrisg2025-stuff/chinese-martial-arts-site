import React from "react";
import { useParams } from "react-router-dom";
import blogPosts from "../data/posts";

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) return <p>Post not found.</p>;

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-600 mb-4">By {post.author}</p>
      <p className="whitespace-pre-line">{post.content}</p>
    </main>
  );
};

export default BlogPostPage;
