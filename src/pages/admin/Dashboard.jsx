import {
  ChartLineIcon,
  CircleDollarSignIcon,
  PlayCircleIcon,
  UsersIcon,
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { dummyDashboardData } from '../../assets/assets';
import Loading from '../../components/Loading';
import Title from '../../components/admin/Title';
import BlurCircle from '../../components/BlurCircle';
import timeFormat from '../../lib/timeFormat';
import { dateFormat } from '../../lib/dateFormat';

const Dashboard = () => {
  const currency = import.meta.env.VITE_CURRENCY;

  const [dashboardData, setDashboardData] = useState({
    totalBookings: 0,
    totalRevenue: 0,
    activeShows: [],
    totalUser: 0,
  });

  const [loading, setLoading] = useState(true);

  const dashboardCards = [
    {
      title: 'Total Bookings',
      value: dashboardData.totalBookings || '0',
      icon: ChartLineIcon,
    },
    {
      title: 'Total Revenue',
      value: dashboardData.totalRevenue || '0',
      icon: CircleDollarSignIcon,
    },
    {
      title: 'Active Shows',
      value: dashboardData.activeShows.length || '0',
      icon: PlayCircleIcon,
    },
    {
      title: 'Total Users',
      value: dashboardData.totalUser || '0',
      icon: UsersIcon,
    },
  ];

  const fetchDashboardData = async () => {
    setDashboardData(dummyDashboardData);
    setLoading(false);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return !loading ? (
    <div className="relative min-h-screen px-4 md:px-10 lg:px-20 pt-20 bg-[#0e0e0e] text-white">
      {/* Background Effects */}
      <BlurCircle top="-100px" left="0" />
      <BlurCircle bottom="100px" right="100px" />
      <BlurCircle top="50%" left="50%" />

      {/* Dashboard Title */}
      <Title text1="Admin" text2="Dashboard" />

      {/* Stat Cards */}
      <div className="relative flex flex-wrap gap-6 mt-6 z-10">
        {dashboardCards.map((card, index) => (
          <div
            key={index}
            className="flex items-center justify-between w-64 p-6 bg-[#1c1c1c]/80 backdrop-blur rounded-2xl border border-white/10 text-white shadow-md hover:scale-105 transition-transform duration-200"
          >
            <div>
              <h2 className="text-sm text-gray-400">{card.title}</h2>
              <p className="text-2xl font-semibold mt-1">
                {card.title === 'Total Revenue'
                  ? `${currency}${card.value}`
                  : card.value}
              </p>
            </div>
            {card.icon &&
              React.createElement(card.icon, {
                className: 'w-6 h-6 text-pink-500',
              })}
          </div>
        ))}
      </div>

      {/* Active Shows Table */}
      <h2 className="mt-12 mb-4 text-lg font-semibold">🎬 Active Shows</h2>
      <div className="overflow-x-auto rounded-lg border border-white/10">
        <table className="min-w-full text-sm bg-[#1c1c1c]/70 backdrop-blur rounded-lg overflow-hidden">
          <thead className="bg-white/5 border-b border-white/10 text-gray-300 text-left">
            <tr>
              <th className="py-3 px-4">Movie</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Time</th>
              <th className="py-3 px-4">Duration</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Occupied Seats</th>
            </tr>
          </thead>
          <tbody className="text-white divide-y divide-white/10">
            {dashboardData.activeShows.map((show, index) => {
              const { movie, showDateTime, showPrice, occupiedSeats } = show;
              return (
                <tr key={index} className="hover:bg-white/5 transition-colors">
                  <td className="py-3 px-4 whitespace-nowrap">{movie.title}</td>
                  <td className="py-3 px-4">{dateFormat(showDateTime)}</td>
                  <td className="py-3 px-4">
                    {new Date(showDateTime).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </td>
                  <td className="py-3 px-4">{timeFormat(movie.runtime)}</td>
                  <td className="py-3 px-4">{currency}{showPrice}</td>
                  <td className="py-3 px-4">{Object.keys(occupiedSeats).length}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Dashboard;
