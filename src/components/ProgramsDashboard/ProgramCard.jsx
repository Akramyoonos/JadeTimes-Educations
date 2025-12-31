import React from 'react';
import { MapPin, Clock, Monitor, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProgramCard = ({ program }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow relative">
            {/* Image Section */}
            <div className="w-full md:w-48 lg:w-56 flex-shrink-0">
                <div className="relative h-48 md:h-full rounded-lg overflow-hidden">
                    <img
                        src={program.image}
                        alt={program.program}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-white p-1 rounded shadow-sm">
                        <img src={program.logo} alt="Logo" className="w-8 h-8 object-contain" />
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 flex flex-col">
                <div className="mb-1">
                    <h3 className="text-sm font-semibold text-gray-600">{program.university}</h3>
                    <h2 className="text-xl font-bold text-[#D60057] mt-1 mb-2 hover:underline cursor-pointer">{program.program}</h2>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap text-sm text-gray-500 gap-x-6 gap-y-2 mb-4">
                    <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span>{program.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Monitor className="w-4 h-4 text-gray-400" />
                        <span>{program.format}</span>
                    </div>
                </div>

                <p className="text-gray-600 text-sm line-clamp-2 md:line-clamp-3 mb-4 flex-grow">
                    {program.description}
                </p>

                <div className="flex items-center justify-end mt-auto">
                    <Link
                        to={`/programs/${program.id}`}
                        className="text-[#D60057] font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                    >
                        Read more <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProgramCard;
