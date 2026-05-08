function StoryCard({ story }) {

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">

      <h2 className="text-2xl font-bold mb-4">
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
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Visit
        </a>

        <button
          className="bg-gray-200 px-4 py-2 rounded"
        >
          Bookmark
        </button>

      </div>

    </div>
  );
}

export default StoryCard;