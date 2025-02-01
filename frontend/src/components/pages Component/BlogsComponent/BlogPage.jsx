import React from 'react';
import Navigation from '../../generallComponent/Navigation';
import Footer from '../../generallComponent/Footer';

const blogPost = {
  title: "The Future of Cricket",
  subtitle: "How technology is shaping the game",
  image: "https://picsum.photos/800/400?random=1",
  description: "Cricket is evolving with the introduction of technology such as AI-driven analytics, smart wearables, and enhanced broadcasting. This article explores how these advancements are transforming the game. smart wearables, and enhanced broadcasting. This article explores how these advancements are transforming the game.smart wearables, and enhanced broadcasting. This article explores how these advancements are transforming the game.smart wearables, and enhanced broadcasting. This article explores how these advancements are transforming the game.smart wearables, and enhanced broadcasting. This article explores how these advancements are transforming the game.smart wearables, and enhanced broadcasting. This article explores how these advancements are transforming the game.",
  creator: {
    name: "John Doe",
    image: "https://picsum.photos/100?random=2",
    department: "Sports Journalism",
  },
  publishedDate: "2025-02-01",
  category: "Cricket & Technology",
};

export default function BlogPage() {
  return (
    <div>
        <Navigation/>
            <div className="max-w-3xl mt-16 md:mt-20 mx-auto p-6 bg-white rounded-lg shadow-lg">
            <img src={blogPost.image} alt={blogPost.title} className="w-full h-64 object-cover rounded-lg mb-4" />
            
            <h1 className="text-2xl font-bold">{blogPost.title}</h1>
            <h2 className="text-lg text-gray-600 mb-4">{blogPost.subtitle}</h2>
            
            <p className="text-gray-700 mb-4">{blogPost.description}</p>

            <div className="flex items-center gap-4 mt-6 border-t pt-4">
                <img src={blogPost.creator.image} alt={blogPost.creator.name} className="w-14 h-14 object-cover rounded-full border-2 border-gray-200" />
                <div>
                <h3 className="text-lg font-semibold">{blogPost.creator.name}</h3>
                <p className="text-sm text-gray-500">{blogPost.creator.department}</p>
                </div>
            </div>

            <div className="mt-4 text-sm text-gray-500 flex justify-between">
                <span>📅 Published on: {new Date(blogPost.publishedDate).toLocaleDateString()}</span>
                <span>🏷 Category: {blogPost.category}</span>
            </div>
            </div>
        <Footer/>
    </div>
  );
}
