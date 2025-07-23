import React, { useState } from 'react';
import BlurCircle from './BlurCircle';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const DateSelect = ({ dateTime, id }) => {
    const navigate = useNavigate();


    const [selected, setSelected] = useState(null)
    const onBookHandler = () => {
        if (!selected) {
            return Swal.fire({
                icon: 'warning',
                title: 'Choose a Date!',
                text: 'Please select a date before Book.',
                confirmButtonColor: '#10B981',
                background: '#1f2937',
                color: '#fff',
            });

        }
        navigate(`/movies/${id}/${selected}`)
        scrollTo(0, 0)
    }
    return (
        <div id='dateSelect' className='pt-20'>
            <div className='relative p-8 bg-emerald-600/10 border border-emerald-400/40 rounded-2xl backdrop-blur-md shadow-md'>

                <BlurCircle top="-100px" left="-100px" />
                <BlurCircle top="100px" right="0px" />

                <div className='flex flex-col md:flex-row items-center justify-between gap-10'>

                    <div>
                        <p className='text-xl font-semibold text-white mb-4'> Choose a Date</p>

                        <div className='flex items-center gap-6 text-sm text-white'>
                            <button className='hover:scale-110 transition-transform'>
                                <ChevronLeftIcon width={28} />
                            </button>

                            <div className='grid grid-cols-3 md:flex flex-wrap gap-4'>
                                {Object.keys(dateTime).map((date) => (
                                    <button
                                        onClick={() => setSelected(date)}
                                        key={date}
                                        className={`flex flex-col items-center justify-center h-16 w-16 rounded-lg transition-all duration-200 
    ${selected === date
                                                ? 'bg-emerald-500 text-white scale-105 shadow-md'
                                                : 'border border-emerald-500/60 hover:bg-emerald-500/20 text-white hover:text-white'
                                            }`}
                                    >
                                        <span className='text-lg font-bold'>{new Date(date).getDate()}</span>
                                        <span className='text-sm uppercase'>
                                            {new Date(date).toLocaleDateString('en-US', { month: 'short' })}
                                        </span>
                                    </button>

                                ))}
                            </div>

                            <button className='hover:scale-110 transition-transform'>
                                <ChevronRightIcon width={28} />
                            </button>
                        </div>
                    </div>

                    <button onClick={onBookHandler}
                        className='bg-emerald-500 text-white px-8 py-3 mt-6 rounded-lg font-semibold hover:bg-emerald-600 transition-all shadow-md active:scale-95'
                    >
                        🎟 Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DateSelect;
