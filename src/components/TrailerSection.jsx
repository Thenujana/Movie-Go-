// import React, { useState } from 'react';
// import { dummyTrailers } from '../assets/assets';
// import ReactPlayer from 'react-player';
// import BlurCircle from './BlurCircle';

// const TrailerSection = () => {
//   const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);
//   const [isReady, setIsReady] = useState(false);

//   return (
//     <div className='px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden'>
//       <p className="text-2xl font-bold mb-6">Trailers</p>

//       <div className='relative mt-6'>
//         <BlurCircle top='-100px' left='-100px' />
        
//         {!isReady && (
//           <div 
//             className="mx-auto bg-gray-800 flex items-center justify-center cursor-pointer"
//             style={{ width: '960px', height: '540px', maxWidth: '100%' }}
//           >
//             <img 
//               src={currentTrailer.image} 
//               alt="Video thumbnail"
//               className="w-full h-full object-cover"
//               onError={(e) => {
//                 e.target.style.display = 'none';
//                 e.target.nextSibling.style.display = 'flex';
//               }}
//             />
//             <div className="hidden w-full h-full bg-gray-700 items-center justify-center">
//               <p className="text-white">Video Loading...</p>
//             </div>
//           </div>
//         )}

//         <ReactPlayer
//           url={currentTrailer.videoUrl}
//           controls={true} 
//           light={currentTrailer.image} 
//           playing={false} 
//           className='mx-auto max-w-full'
//           width='960px'
//           height='540px'
//           onReady={() => setIsReady(true)}
//           onError={(error) => {
//             console.error('ReactPlayer error:', error);
//           }}
//           config={{
//             youtube: {
//               playerVars: {
//                 showinfo: 1,
//                 controls: 1,
//               }
//             }
//           }}
//           style={{
//             display: isReady ? 'block' : 'none'
//           }}
//         />
//       </div>

//       <div className="flex flex-wrap gap-4 mt-8 justify-center">
//         {dummyTrailers.map((trailer, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentTrailer(trailer)}
//             className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
//               currentTrailer.videoUrl === trailer.videoUrl 
//                 ? 'ring-2 ring-blue-500 scale-105' 
//                 : 'hover:scale-105'
//             }`}
//           >
//             <img 
//               src={trailer.image} 
//               alt={`Trailer ${index + 1}`}
//               className="w-32 h-18 object-cover"
//               onError={(e) => {
//                 e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjcyIiB2aWV3Qm94PSIwIDAgMTI4IDcyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjcyIiBmaWxsPSIjMzc0MTUxIi8+Cjx0ZXh0IHg9IjY0IiB5PSIzNiIgZmlsbD0iI0Y5RkFGQiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZm9udC1zaXplPSIxMiI+VmlkZW88L3RleHQ+Cjwvc3ZnPgo=';
//               }}
//             />
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TrailerSection;




import React, { useState } from 'react';
import { cinemas } from '../lib/cinemas';

const CinemasNearYou = () => {
  const [district, setDistrict] = useState('');
  const [filteredCinemas, setFilteredCinemas] = useState([]);

  const handleSearch = () => {
    const results = cinemas.filter(cinema =>
      cinema.district.toLowerCase().includes(district.toLowerCase())
    );
    setFilteredCinemas(results);
  };

  return (
    <div className="mt-16 px-6 py-20 max-w-4xl mx-auto relative">
      {/* Blurred background circle */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-emerald-400/30 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-emerald-300/20 rounded-full blur-2xl z-0" />

      <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-emerald-100/30 rounded-xl shadow-xl p-8">
        <h2 className="text-4xl font-bold mb-6 text-white text-center drop-shadow">
          MovieGo in Your Area
        </h2>

        <div className="flex flex-col sm:flex-row gap-3 mb-10 justify-center">
          <input
            type="text"
            placeholder="Enter your district "
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="flex-grow bg-white/30 backdrop-blur-md border border-emerald-200 placeholder:text-emerald-100 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
          />
          <button
            onClick={handleSearch}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-md transition duration-300 shadow-md hover:shadow-emerald-500/40"
          >
            Search
          </button>
        </div>

        {filteredCinemas.length > 0 ? (
          <ul className="grid grid-cols-1 gap-5">
            {filteredCinemas.map(cinema => (
              <li
                key={cinema.id}
                className="bg-white/20 backdrop-blur-md border border-emerald-100 text-white rounded-lg p-5 shadow hover:shadow-lg hover:scale-[1.02] transition duration-300"
              >
                <p className="text-xl font-semibold mb-1">{cinema.name}</p>
                <p className="text-sm text-emerald-100">
                  {cinema.location}, {cinema.district} District
                </p>
              </li>
            ))}
          </ul>
        ) : (
          district && (
            <p className="text-emerald-100 text-center text-sm mt-6">
              No cinemas found in "<span className="font-semibold text-white">{district}</span>"
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default CinemasNearYou;
