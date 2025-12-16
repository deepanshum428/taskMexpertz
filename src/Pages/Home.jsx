import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Home() {
  const [stories, setStories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://mxpertztestapi.onrender.com/api/sciencefiction")
      .then((res) => res.json())
      .then((res) => setStories(res));
  }, []);

  return (
    <>
      <>
        <div className="bg-[url('./assets/backGroundImage-1.jpg')] bg-no-repeat bg-center bg-cover  w-full text-white">
          <header className="flex items-center justify-between px-8 py-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center font-bold">
                B
              </div>
              <span className="text-xl font-semibold">BrainyLingo</span>
            </div>

            <nav className="hidden font-bold md:flex gap-6 text-sm text-gray-300">
              <span className="cursor-pointer hover:text-white">Home</span>
              <span className="cursor-pointer hover:text-white">
                Leaderboard
              </span>
              <span className="cursor-pointer hover:text-white">
                Daily Quiz
              </span>
              <span className="cursor-pointer hover:text-white">Genre</span>
            </nav>

            <button className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 text-sm font-medium">
              Sign Out
            </button>
          </header>

          <section className="flex flex-col items-center justify-center py-24 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Science Fiction Stories
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="flex items-center gap-2 rounded-full bg-blue-500 px-6 py-2 text-sm font-medium">
                <span className="h-6 w-6 rounded-full bg-white text-blue-500 flex items-center justify-center">
                  A
                </span>
                New
              </button>

              <button className="flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-2 text-sm font-medium text-black">
                <span className="h-6 w-6 rounded-full bg-white flex items-center justify-center">
                  ⏳
                </span>
                In Progress
              </button>

              <button className="flex items-center gap-2 rounded-full bg-green-500 px-6 py-2 text-sm font-medium">
                <span className="h-6 w-6 rounded-full bg-white text-green-500 flex items-center justify-center">
                  ✔
                </span>
                Completed
              </button>

              <button className="rounded-full bg-purple-500 px-6 py-2 text-sm font-medium">
                Clear All
              </button>
            </div>
          </section>
        </div>{" "}
        <div className="min-h-screen bg-gradient-to-br from-[#0b1026] via-[#1b2a4e] to-[#2a3f6f] p-6">
          <h1 className="text-center text-4xl font-bold text-white mb-10">
            Science Fiction Stories
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stories.map((item) => (
              <div
                key={item._id}
                onClick={() => navigate(`/story/${item._id}`)}
                className="cursor-pointer rounded-2xl bg-gradient-to-b from-purple-600 to-indigo-700 p-3 shadow-lg"
              >
                <div className="h-40 rounded-xl overflow-hidden mb-4">
                  <img
                    src={`https://ik.imagekit.io/dev24/${item.Image[0]}`}
                    alt={item.Title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <h3 className="text-white font-semibold mb-3">{item.Title}</h3>

                <button className="w-full rounded-full py-2 text-sm font-medium bg-white">
                  {item.Status}
                </button>
              </div>
            ))}
          </div>
        </div>
      </>
    </>
  );
}

export default Home;
