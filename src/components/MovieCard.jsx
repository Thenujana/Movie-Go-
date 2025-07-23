import { StarIcon } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import timeFormat from '../lib/timeFormat';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div className="group relative flex flex-col justify-between p-4 bg-gray-900 rounded-2xl border border-gray-700 shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 w-[260px] overflow-hidden">
      
      <div
        className="relative overflow-hidden rounded-xl cursor-pointer"
        onClick={() => {
          navigate(`/movies/${movie._id}`);
          scrollTo(0, 0);
        }}
      >
        <img
          src={movie.backdrop_path}
          alt={movie.title}
          className="h-52 w-full object-cover object-center transform transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
      </div>

      <p className="text-lg font-semibold mt-3 text-white truncate">
        {movie.title}
      </p>

    
      <p className="text-sm text-gray-400 mt-1">
        {new Date(movie.release_date).getFullYear()} · {movie.genres.slice(0, 2).map(g => g.name).join(" | ")} · {timeFormat(movie.runtime)} min
      </p>

     
      <div className="flex items-center justify-between mt-4">
       
        <button
          onClick={() => {
            navigate(`/movies/${movie.id}`);
            scrollTo(0, 0);
          }}
          className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300"
        >
          🎟 Buy Ticket
        </button>

       
        <div className="flex items-center gap-1 text-sm text-yellow-400 font-semibold">
          <StarIcon className="w-4 h-4 fill-yellow-400" />
          {movie.vote_average.toFixed(1)}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
