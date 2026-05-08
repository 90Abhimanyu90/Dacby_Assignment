import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import API from "../api/axios";
import StoryCard from "../components/StoryCard";

import { AuthContext } from "../context/AuthContext";

function Bookmarks() {

  const { user } = useContext(AuthContext);

  const [stories, setStories] = useState([]);

  useEffect(() => {

    if (user) {
      fetchBookmarks();
    }

  }, [user]);

  const fetchBookmarks = async () => {

    try {

      const res = await API.get(
        "/stories/bookmarks/all",
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      setStories(res.data);

    } catch (error) {

      console.log(error);
    }
  };

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="max-w-5xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        Your Bookmarks
      </h1>

      {stories.length === 0 ? (

  <p className="text-gray-600 text-xl">
    No bookmarks yet.
  </p>

) : (

  <div className="space-y-6">

    {stories.map((story) => (

      <StoryCard
        key={story._id}
        story={story}
        refreshBookmarks={fetchBookmarks}
      />

    ))}

  </div>

)}

    </div>
  );
}

export default Bookmarks;