import React, { useState, useEffect } from 'react'
import { dummyBookingData } from '../assets/assets'
import Loading from '../components/Loading'
import BlurCircle from '../components/BlurCircle'
import timeFormat from '../lib/timeFormat'
import { dateFormat } from '../lib/dateFormat'

const MyBooking = () => {
  const currency = import.meta.env.VITE_CURRENCY
  const [bookings, setBookings] = useState([])
  const [isLoading, setLoading] = useState(true)

  const getMyBookings = async () => {
    setBookings(dummyBookingData)
    setLoading(false)
  }

  useEffect(() => {
    getMyBookings()
  }, [])

  return !isLoading ? (
    <div className="relative px-6 md:px-16 lg:px-40 pt-28 md:pt-40 min-h-[80vh] text-white">
      {/* Blurred Circles */}
      <BlurCircle top="-100px" left="100px" />
      <div>
        <BlurCircle top="0px" left="600px" />
      </div>

      <h1 className="text-3xl font-bold mb-10">🎟 My Bookings</h1>

      {bookings.map((item, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row justify-between bg-white/5 border border-white/10 rounded-2xl p-4 mb-6 shadow-lg backdrop-blur-md transition-all hover:scale-[1.01]"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <img
              src={item.show.movie.poster_path}
              alt=""
              className="w-full md:w-40 h-auto aspect-video object-cover object-center rounded-lg shadow"
            />
            <div className="flex flex-col p-2">
              <p className="text-xl font-semibold mb-1">
                {item.show.movie.titlle}
              </p>
              <p className="text-sm text-gray-400 mb-1">
                Duration: {timeFormat(item.show.movie.runtime)}
              </p>
              <p className="text-sm text-gray-400 mt-auto">
                📅 {dateFormat(item.show.showDateTime)}
              </p>
            </div>
          </div>

<div className='flex flex-col md:items-end md:text-right justify-between p-4'>
<div >
  <p className='text-2xl font-semibold mb-3'>{currency}{item.amount}</p>
  {!item.isPaid && <button className='bg-yellow-500 hover:bg-yellow-700 px-4 py-1.5 mb-3 text-sm rounded-full font-medium cursor-pointer'>Pay Now</button>}
</div>
<div className='text-sm'>
<p><span>Total Tickets:</span>{item.bookedSeats.length}</p>
<p><span>Seat Number:</span>{item.bookedSeats.join(",")}</p>

</div>
</div>

        </div>
      ))}
    </div>
  ) : (
    <Loading />
  )
}

export default MyBooking
