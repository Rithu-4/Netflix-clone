import Movie from "./Movie";

function Dashboard() {
  const featured = Movie[0];

  return (
    <div className="bg-black text-white min-h-screen">
      
      {/* Navbar */}
      <div className="flex justify-between items-center p-4 fixed w-full bg-black z-10">
        <h1 className="text-red-600 text-2xl font-bold">NETFLIX</h1>
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="rounded"
        />
      </div>

      {/* Hero Banner */}
      <div
        className="h-[60vh] bg-cover bg-center flex items-end p-10"
        style={{
          backgroundImage: `url(${featured.banner})`,
        }}
      >
        <div>
          <h1 className="text-4xl font-bold mb-4">
            {featured.title}
          </h1>
          <p className="max-w-lg text-sm">
            {featured.description}
          </p>
        </div>
      </div>

      {/* Movie Row */}
      <div className="p-5">
        <h2 className="text-xl mb-4">Trending Now</h2>

        <div className="flex gap-4 overflow-x-scroll">
          {Movie.map((movie) => (
            <img
              key={movie.id}
              src={movie.poster}
              alt={movie.title}
              className="w-40 rounded hover:scale-110 transition duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;