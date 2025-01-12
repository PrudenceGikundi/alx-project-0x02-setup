import React, { useState } from 'react';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import Header from '@/components/layout/Header';

const Home: React.FC = () => {
  // State to hold the list of posts
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);

  // State to control the visibility of the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handler for adding a post
  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <div className="p-6">
       <Header />  {/* Reusable Header */}
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <p className="mb-6">Welcome to the Home Page! Below are the posts added dynamically.</p>

      {/* Button to open the modal */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-4"
      >
        Add New Post
      </button>

      {/* Grid layout for displaying posts and initial static cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Static cards */}
        <Card title="Card 1" content="This is the content of Card 1. Learn more about our features." />
        <Card title="Card 2" content="This is the content of Card 2. Stay updated with the latest news." />
        <Card title="Card 3" content="This is the content of Card 3. Connect with our team anytime." />

        {/* Dynamically added posts */}
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>

      {/* PostModal component */}
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </div>
  );
};

export default Home;
