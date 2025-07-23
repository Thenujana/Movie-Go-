import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black/80 text-white">
      <div className="flex flex-col items-center gap-4">
        <svg
          className="animate-spin h-10 w-10 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 000 16v-4l-3.5 3.5L12 24v-4a8 8 0 01-8-8z"
          ></path>
        </svg>
        <p className="text-lg font-semibold animate-pulse">Loading, please wait...</p>
      </div>
    </div>
  );
};

export default Loading;
