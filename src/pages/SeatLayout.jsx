import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { assets, dummyDateTimeData, dummyShowsData } from '../assets/assets'
import Loading from '../components/Loading'
import { ArrowRightIcon, ClockIcon } from 'lucide-react'
import isoTimeFormat from '../lib/isoTimeFormat'
import BlurCircle from '../components/BlurCircle'
import toast from 'react-hot-toast'

const SeatLayout = () => {
  const groupRows =[["A" ,"B"] ,["C","D"],["E","F"],["G","H"],["I","J"]]
  const{id ,date }=useParams()
  const [selectedSeats, setSelectedSeat]=useState([])
    const [selectedTime, setSelectedTime]=useState(null)
      const [show, setShow]=useState(null)
      const navigate =useNavigate(null)

      const getShow =async()=>{
        const show=dummyShowsData.find(show=> show._id===id)
        if(show){
          setShow({
            movie: show,
            dateTime: dummyDateTimeData
          });
        }
      };

      const handleSeatClick=(seatId)=>{
        if(!selectedTime){
          return toast("select a time")
        }
        // if(!selectedSeats.includes(seatId)&& selectedSeats.length>4){
        //   return toast(".")

        // }
        setSelectedSeat(prev =>
      prev.includes(seatId)
        ? prev.filter(seat => seat !== seatId)
        : [...prev, seatId]
    );
  };

  const renderSeats = (row, count = 9) => (
    <div key={row} className="flex gap-2 mt-2">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {Array.from({ length: count }, (_, i) => {
          const seatId = `${row}${i + 1}`;
          return (
            <button
              key={seatId}
              onClick={() => handleSeatClick(seatId)}
              className={`h-8 w-8 rounded border border-primary/60 cursor-pointer transition-all duration-200 ${
                selectedSeats.includes(seatId)
                  ? 'bg-emerald-500 text-white scale-105 shadow-md'
                  : 'bg-white/5 hover:bg-emerald-500/20 text-white'
              }`}
            >
              {seatId}
            </button>
          );
        })}
      </div>
    </div>
  );

  useEffect(() => {
    getShow();
  }, []);

  return show ? (
    <div className="flex flex-col md:flex-row px-6 md:px-16 lg:px-40 py-30 md:pt-50 text-white">
      {/* Left: Timings */}
      <div className="w-60 bg-green border border-primary/20 rounded-lg py-10 h-max md:sticky md:top-30">
        <p className="text-lg font-semibold px-6">Available Timings</p>
        <div className="mt-5 space-y-1">
          {show.dateTime[date].map((item) => (
            <div
              key={item.time}
              onClick={() => setSelectedTime(item)}
              className={`flex items-center gap-3 px-5 py-3 rounded-lg cursor-pointer backdrop-blur-md shadow-md transition-all duration-200 ${
                selectedTime?.time === item.time
                  ? 'bg-emerald-500 text-white scale-105'
                  : 'bg-white/5 text-gray-300 hover:bg-emerald-600/20 hover:text-white'
              }`}
            >
              <ClockIcon className="w-5 h-5" />
              <p className="text-sm font-medium">{isoTimeFormat(item.time)}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex flex-col items-center max-md:-16">
        <BlurCircle top="-100px" left="-100px" />
        <BlurCircle bottom="0" right="0" />

        <h1 className="text-2xl font-semibold mb-4 mt-6">Select the Seats</h1>
        <img src={assets.screenImage} alt="screen" className="mb-1" />
        <p className="text-gray-400 text-sm mb-6"> Front Screen</p>

        <div className="flex flex-col items-center mt-10 text-xs text-gray-300">
          <div className="grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-2 mb-6">
            {groupRows[0].map((row) => renderSeats(row))}
          </div>

          <div className="grid grid-cols-2 gap-11">
            {groupRows.slice(1).map((group, idx) => (
              <div key={idx}>
                {group.map((row) => renderSeats(row))}
              </div>
            ))}
          </div>
        </div>
        <button onClick={()=>navigate('/my-bookings')} className="flex items-center gap-2 px-6 py-3 mt-7 text-white bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 
  rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out group cursor-pointer">
  <span className="relative z-10 font-medium text-sm group-hover:tracking-wide transition-all duration-300">Book Now</span>
</button>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default SeatLayout;