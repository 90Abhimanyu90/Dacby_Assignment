import { useEffect, useState } from "react";

import API from "../api/axios";

import StoryCard from "../components/StoryCard";

function Home() {

  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {

    try {

      const res = await API.get("/stories");

      setStories(res.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-20 text-2xl">
        Loading stories...
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold mb-8">
        Top Hacker News Stories
      </h1>

      <div className="space-y-6">

        {stories.map((story) => (

          <StoryCard
            key={story._id}
            story={story}
          />

        ))}

      </div>

    </div>
  );
}

export default Home;