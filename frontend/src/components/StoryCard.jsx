import { useContext } from "react";

import API from "../api/axios";
import { AuthContext } from "../context/AuthContext";

function StoryCard({ story, refreshBookmarks }) {

  const { user } = useContext(AuthContext);

  const handleBookmark = async () => {

    if (!user) {
      alert("Please login first");
      return;
    }

    try {

      await API.post(
        `/stories/${story._id}/bookmark`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      alert("Bookmark updated");

      if (refreshBookmarks) {
        refreshBookmarks();
      }

    } catch (error) {

      console.log(error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">

      <h2 className="text-2xl font-bold mb-3 leading-snug">
        {story.title}
      </h2>

      <div className="flex gap-4 text-gray-600 mb-4">

        <p>
          {story.points} points
        </p>

        <p>
          by {story.author}
        </p>

        <p>
          {story.postedAt}
        </p>

      </div>

      <div className="flex gap-4">

        <a
          href={story.url}
          target="_blank"
          className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 rounded"
        >
          Visit
        </a>

        <button
          onClick={handleBookmark}
          className="bg-gray-200 hover:bg-gray-300 transition px-4 py-2 rounded"
        >
          Bookmark
        </button>

      </div>

    </div>
  );
}

export default StoryCard;