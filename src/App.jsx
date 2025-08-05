import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPostPreview from "./components/BlogPostPreview";
import BlogPostPage from "./pages/BlogPostPage";
import blogPosts from "./data/posts";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <main className="max-w-3xl mx-auto px-4 py-8">
              <h1 className="text-3xl font-bold mb-6">Martial Arts Blog</h1>
              {blogPosts.map((post) => (
                <BlogPostPreview
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  author={post.author}
                  excerpt={post.excerpt}
                />
              ))}
            </main>
          }
        />
        <Route path="/blog/:id" element={<BlogPostPage />} />
      </Routes>
    </Router>
  );
}
