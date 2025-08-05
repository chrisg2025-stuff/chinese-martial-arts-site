import React from "react";

const martialArts = [
  {
    name: "Kung Fu",
    description: "An umbrella term for Chinese martial arts, often focused on striking and forms (taolu)."
  },
  {
    name: "Tai Chi",
    description: "A gentle internal martial art emphasizing balance, breathing, and slow movements."
  },
  {
    name: "Wing Chun",
    description: "A close-combat martial art known for fast punches and tight defense."
  },
  {
    name: "Shaolin",
    description: "Rooted in Chan Buddhism, known for acrobatic and powerful techniques."
  },
  {
    name: "Baguazhang",
    description: "An internal martial art that uses circular movements and evasive footwork."
  },
];

const BlogPostPreview = ({ title, author, excerpt }) => (
  <div className="bg-white rounded-xl shadow p-4 mb-4">
    <h3 className="text-xl font-semibold mb-1">{title}</h3>
    <p className="text-sm text-gray-500 mb-1">By {author}</p>
    <p>{excerpt}</p>
    <button className="mt-2 text-blue-600 underline">Read more</button>
  </div>
);

export default function App() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <section className="mb-10">
        <h1 className="text-4xl font-bold mb-4">Chinese Martial Arts</h1>
        <p className="mb-6">Explore the history, philosophy, and styles of traditional Chinese martial arts.</p>
        <div className="grid md:grid-cols-2 gap-4">
          {martialArts.map((style, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-4">
              <h2 className="text-2xl font-semibold mb-2">{style.name}</h2>
              <p>{style.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-bold mb-4">Practitioner Blog</h2>
        <BlogPostPreview
          title="Why I Chose Tai Chi as My Path"
          author="Li Wei"
          excerpt="Discover how the slow, meditative movements of Tai Chi transformed my daily life and helped me find balance."
        />
        <BlogPostPreview
          title="Training in the Mountains: A Shaolin Journey"
          author="Chen Ming"
          excerpt="My intense six-month stay at a Shaolin Temple changed everything I thought I knew about martial discipline."
        />
      </section>
    </main>
  );
}
