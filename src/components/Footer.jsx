import React from 'react'
import BlurCircle from './BlurCircle'

const Footer = () => {
  return (
    <footer className="px-6  md:px-16 lg:px-36 mt-40 w-full text-gray-300">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
                <div className="md:max-w-96">
                    <img className="w-36 h-auto" src="/Mlogo.png" alt="logo"/>
                    <h1>MovieGo</h1>
                    <p className="mt-6 text-sm">
                        This is the best online film ticket booking platform you can find.
                    </p>
                    
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
                    
                    <div>
                        <h2 className="font-semibold mb-5">Company</h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">Theaters</a></li>
                            <li><a href="#">Favorites</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <p>+1-234-567-890</p>
                            <p>moviego@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-sm pb-5">
                Copyright {new Date().getFullYear()} © moviego. All Right Reserved.
            </p>
        </footer>
  )
}

export default Footer