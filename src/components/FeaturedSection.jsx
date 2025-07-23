import { ArrowRight } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlurCircle from './BlurCircle';
import { dummyShowsData } from '../assets/assets';
import MovieCard from './MovieCard';

const FeaturedSection = () => {
  const navigate = useNavigate();

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden'>
      
      <div className='relative flex items-center justify-between pt-20 pb-10'>
        <BlurCircle top='0' right='-80px' />
        <p className="text-2xl font-bold mb-6">Now showing</p>
        <button
          onClick={() => {
            navigate('/movies');
          }}
          className='group flex items-center gap-2 text-sm text-gray-300 cursor-pointer'
        >
          View All
          <ArrowRight className='group-hover:translate-x-0.5 transition w-4 h-4' />
        </button>
      </div>

      
      <div className='flex flex-wrap justify-center gap-8 mt-8'>
        {dummyShowsData.slice(0, 3).map((show) => (
          <MovieCard key={show._id} movie={show} />
        ))}
      </div>

     
      <div className='flex justify-center mt-20'>
        <button
          onClick={() => {
            navigate('/movies');
            scrollTo(0, 0);
          }}
          className='px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold transition duration-300 cursor-pointer'
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default FeaturedSection;
