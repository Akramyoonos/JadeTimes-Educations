import React, { useRef } from 'react';
import { Search, MapPin, ChevronRight, ChevronLeft } from 'lucide-react';
import studentImage from '../assets/Images/hi_res_image_girl_dejjjz.png';

const Hero = () => {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative bg-[#fdfaf3] overflow-hidden font-sans">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row items-center pt-12 lg:pt-20 px-4 sm:px-6 lg:px-8 relative z-10">

                    {/* Left Content */}
                    <div className="w-full lg:w-[600px] z-20 mb-12 lg:mb-20">
                        <h1 className="text-[25px] md:text-[38px] font-extrabold text-[#212121] leading-[1.15] mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
                            120,000+ study abroad degrees, <br className="hidden md:block" />
                            one perfect for you.
                        </h1>

                        <p className="text-[#424242] text-lg font-normal mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-both">Where will your studies take you?</p>

                        {/* Search Box Container */}
                        <div className="w-full max-w-lg space-y-3 mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-both">
                            {/* Field of Interest Input */}
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Search className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    className="block w-full pl-12 pr-4 py-3.5 text-base text-gray-900 bg-white rounded-lg border-0 shadow-[0_2px_8px_rgba(0,0,0,0.08)] focus:ring-2 focus:ring-teal-500 placeholder-gray-500 transition-shadow duration-200"
                                    placeholder="Choose field of interest"
                                />
                            </div>

                            {/* Country Input */}
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <MapPin className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    className="block w-full pl-12 pr-4 py-3.5 text-base text-gray-900 bg-white rounded-lg border-0 shadow-[0_2px_8px_rgba(0,0,0,0.08)] focus:ring-2 focus:ring-teal-500 placeholder-gray-500 transition-shadow duration-200"
                                    placeholder="Choose study destination"
                                />
                            </div>

                            {/* Search Button */}
                            <button className="w-full bg-[#ad1457] hover:bg-[#880e43] text-white font-bold py-3.5 rounded-lg shadow-md transition-all duration-200 text-lg hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
                                Search
                            </button>
                        </div>

                        {/* Explore Section */}
                        <div className="flex items-center gap-2 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
                            <span className="text-gray-700 font-medium mr-1 whitespace-nowrap">Explore</span>

                            <button
                                onClick={scrollLeft}
                                className="p-2 rounded-full bg-transparent hover:bg-gray-100 transition shrink-0"
                                aria-label="Scroll left"
                            >
                                <ChevronLeft className="w-4 h-4 text-gray-500" />
                            </button>

                            <div
                                ref={scrollRef}
                                className="flex items-center gap-3 overflow-x-auto scroll-smooth no-scrollbar flex-nowrap"
                                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                            >
                                {['Bachelor degrees', 'Masters degrees', 'Preparatory', 'Doctoral Degrees', 'Postgraduate', 'Post-Bachelors'].map((tag) => (
                                    <a key={tag} href="#" className="flex items-center px-2 py-1 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-medium hover:shadow-md transition shadow-sm whitespace-nowrap shrink-0 hover:text-[#ad1457] hover:border-[#ad1457]">
                                        {tag}
                                    </a>
                                ))}
                            </div>

                            <button
                                onClick={scrollRight}
                                className="p-2 rounded-full bg-transparent hover:bg-gray-100 transition shrink-0"
                                aria-label="Scroll right"
                            >
                                <ChevronRight className="w-4 h-4 text-gray-500" />
                            </button>
                        </div>

                    </div>

                    {/* Right Image Section */}
                    <div className="hidden lg:block absolute top-0 right-0 h-full w-[60%] overflow-visible pointer-events-none">

                        {/* Student Image */}
                        <div className="absolute bottom-0 right-[1%] h-[90%] w-auto z-10 flex items-end animate-in fade-in slide-in-from-right-16 duration-1000 ease-out">
                            <img
                                src={studentImage}
                                alt="Study Abroad Student"
                                className="h-full w-auto object-contain object-bottom"
                            />
                        </div>
                    </div>

                    {/* Mobile Image Fallback - simplified for small screens */}
                    <div className="lg:hidden w-full relative h-64 mt-8 overflow-hidden rounded-xl animate-in fade-in zoom-in-95 duration-700 delay-300">
                        <div className="absolute inset-0 bg-[#009688]"></div>
                        <img
                            src={studentImage}
                            className="absolute bottom-0 right-0 h-[110%] w-auto object-contain"
                            alt="Student"
                        />
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Hero;
