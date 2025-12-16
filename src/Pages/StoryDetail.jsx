import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function StoryDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [tab, setTab] = useState("story");

  useEffect(() => {
    fetch(`https://mxpertztestapi.onrender.com/api/sciencefiction/${id}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [id]);

  if (!data) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b1026] via-[#1b2a4e] to-[#2a3f6f] p-6 text-white">
      <div className="max-w-4xl mx-auto">
        <img
          src={`https://ik.imagekit.io/dev24/${data.Image[0]}`}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />

        <h1 className="text-3xl font-bold mb-6">{data.Title}</h1>

        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setTab("story")}
            className={`px-4 py-2 rounded-full ${
              tab === "story" ? "bg-purple-500" : "bg-gray-600"
            }`}
          >
            Story
          </button>
          <button
            onClick={() => setTab("quiz")}
            className={`px-4 py-2 rounded-full ${
              tab === "quiz" ? "bg-purple-500" : "bg-gray-600"
            }`}
          >
            Brain Quest
          </button>
          <button
            onClick={() => setTab("adventure")}
            className={`px-4 py-2 rounded-full ${
              tab === "adventure" ? "bg-purple-500" : "bg-gray-600"
            }`}
          >
            Adventure
          </button>
        </div>

        {tab === "story" && (
          <div>
            <h2 className="text-xl font-semibold mb-2">
              {data.Storyadventure?.Storytitle}
            </h2>
            {data.Storyadventure?.content.map((c, i) => (
              <p key={i} className="mb-3">
                {c}
              </p>
            ))}
          </div>
        )}

        {tab === "quiz" && (
          <div>
            {data.Brainquest.map((q, i) => (
              <div key={i} className="mb-4">
                <p className="font-semibold">{q.Question}</p>
                {q.Option.map((op, idx) => (
                  <p key={idx} className="ml-4">
                    • {op}
                  </p>
                ))}
              </div>
            ))}
          </div>
        )}

        {tab === "adventure" && (
          <div>
            <p className="text-lg">Status: {data.Status}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default StoryDetails;
