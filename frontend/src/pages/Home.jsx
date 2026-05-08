import { useEffect, useState } from "react";

import API from "../api/axios";

import StoryCard from "../components/StoryCard";

function Home() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const res = await API.get("/stories");

      console.log(res.data);

      setStories(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Top Hacker News Stories</h1>

      <div className="space-y-6">
        {stories.map((story) => (
          <StoryCard key={story._id} story={story} />
        ))}
      </div>
    </div>
  );
}

export default Home;
