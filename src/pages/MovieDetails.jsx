import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dummyDateTimeData, dummyShowsData } from '../assets/assets';
import BlurCircle from '../components/BlurCircle';
import { Heart, PlayCircleIcon, StarIcon } from 'lucide-react';
import timeFormat from '../lib/timeFormat';
import DateSelect from '../components/DateSelect';
import Swal from 'sweetalert2';

const MovieDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  const getShow = async () => {
    const show = dummyShowsData.find((show) => show._id === id);
    if (show) {
      setShow({
        movie: show,
        dateTime: dummyDateTimeData,
      });
    }
  };

  useEffect(() => {
    Swal.fire({
      title: 'Loading Movie Details...',
      text: 'Please wait while we fetch your movie data.',
      background: '#1f2937',
      color: '#fff',
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    // Simulated delay to allow SweetAlert2 loader to show
    setTimeout(() => {
      getShow();
      Swal.close();
    }, 800);
  }, [id]);

  return show ? (
    <div className="relative px-6 md:px-16 lg:px-40 pt-24 pb-20 text-white bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen">
      <BlurCircle top="150px" left="50px" />
      <BlurCircle bottom="80px" right="150px" />

      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto bg-gray-900/50 rounded-3xl p-6 shadow-2xl">
        <img
          src={show.movie.poster_path}
          alt={show.movie.title}
          className="w-[260px] h-[400px] rounded-xl object-cover shadow-lg transition duration-300 hover:scale-105"
        />

        <div className="flex flex-col gap-4">
          <p className="text-sm uppercase text-primary tracking-wide">English</p>

          <h1 className="text-4xl font-bold leading-snug">{show.movie.title}</h1>

          <div className="flex items-center gap-2 text-yellow-400 font-semibold">
            <StarIcon className="w-5 h-5 fill-yellow-400" />
            {show.movie.vote_average.toFixed(1)}
            <span className="text-gray-400 font-normal ml-2">· Film Rating</span>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
            {show.movie.overview}
          </p>

          <p className="text-gray-400 text-sm">
            <span className="font-medium text-white">
              {timeFormat(show.movie.runtime)}
            </span>{' '}
            · {show.movie.genres.map((genre) => genre.name).join(', ')} ·{' '}
            {show.movie.release_date.split('-')[0]}
          </p>

          <div className="flex items-center flex-wrap gap-4 mt-4">
            <button className="flex align-items-center gap-2 px-7 py-3 text-sm bg-gray-800 hover:bg-gray-900 transition rounded-md font-medium cursor-pointer active:scale-95">
              <PlayCircleIcon className="w-5 h-5" />
              Watch Trailer
            </button>
            <a
              href="#dateSelect"
              className="px-10 py-3 text-sm rounded-md font-medium cursor-pointer active:scale-95"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: 'white',
              }}
            >
              Buy Tickets
            </a>
            <button className="bg-gray-700 p-2.5 rounded-full transition cursor-pointer active:scale-95">
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <DateSelect dateTime={show.dateTime} id={id} />
    </div>
  ) : (
    <div className="flex justify-center items-center h-screen text-white text-lg">
    </div>
  );
};

export default MovieDetails;
