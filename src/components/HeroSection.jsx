import { ArrowRight, CalendarIcon, ClockIcon } from 'lucide-react';
import React from 'react';
import { assets } from '../assets/assets'; 
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {

const navigate=useNavigate()

  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/spider-man.jpg")] bg-cover bg-center h-screen text-white'>
      
     
      <img
        src={assets.marvelLogo}
        alt="Marvel Logo"
        className='max-h-11 lg:h-11 mt-20'
      />

  
      <h1 className='text-5xl md:text-[70px] leading-tight font-semibold max-w-[700px]'>
        Spider-Man <br />No way Home
      </h1>

      <div className='flex flex-wrap items-center gap-4 text-gray-300'>
        <span>Action | Adventure | Drama</span>

        <div className='flex items-center gap-1'>
          <CalendarIcon className='w-5 h-5' />
          <span>2025</span>
        </div>

        <div className='flex items-center gap-1'>
          <ClockIcon className='w-5 h-5' />
          <span>2h 8m</span>
        </div>
      </div>
      <p>Lthrilling Marvel film that explores the consequences of Peter Parker's double life as both an ordinary teenager and a superhero. After his identity is exposed to the world, Peter seeks help from Doctor Strange to make everyone forget he's Spider-Man. But when the spell goes wrong, villains from alternate universes—who know Spider-Man's identity—are pulled into his world.</p>
<button  onClick={()=>navigate('/movies')} className='flex items-center gap-1 px-6 py-3 text-sm bg-green-500 hover:bg-green-600 transition rounded-full font-medium cursor-pointer'>
            Explore Movies
        <ArrowRight className='w-5 h-5'/>
      </button>
    </div>
  );
};

export default HeroSection;
