import React from 'react';
import { ChevronRight } from 'lucide-react';

const Scholarships = () => {
    const scholarships = [
        {
            title: "Study a Master's in Europe Scholarship 2026",
            amount: "EUR 5,000",
            deadline: "AUG-25",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
        },
        {
            title: "Study a Bachelor's in the USA Scholarship 2026",
            amount: "USD 5,000",
            deadline: "SEP-25",
            image: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&w=600&q=80",
        },
        {
            title: "Women's Scholarship for International Students 2026",
            amount: "USD 5,000",
            deadline: "SEP-25",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
        },
        {
            title: "Adult Learners Scholarship 2025",
            amount: "USD 4,000",
            deadline: "DEC-25",
            image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80",
        }
    ];

    return (
        <div className="py-16 bg-white font-sans border-b border-gray-100">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-10">
                    <h2 className="text-[28px] font-bold text-[#212121] mb-2">Scholarships for international students</h2>
                    <p className="text-gray-600 text-[16px]">Apply for one of 8 educations.com scholarships!</p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {scholarships.map((item, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-lg transition-all border border-gray-100 group cursor-pointer flex flex-col h-full">
                            {/* Image */}
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col flex-grow">
                                {/* Badges */}
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="bg-[#E8F5E9] text-[#2E7D32] text-[11px] font-bold px-2 py-1 rounded uppercase tracking-wide">
                                        {item.amount}
                                    </span>
                                    <span className="bg-gray-100 text-gray-600 text-[11px] font-bold px-2 py-1 rounded uppercase tracking-wide">
                                        {item.deadline}
                                    </span>
                                </div>

                                <h3 className="text-[16px] font-bold text-[#212121] mb-4 leading-snug group-hover:text-[#a4165e] transition-colors line-clamp-2">
                                    {item.title}
                                </h3>

                                <div className="mt-auto pt-2 flex items-center text-[#a4165e] text-[13px] font-semibold group/link">
                                    Read more
                                    <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Link */}
                <div className="mt-8">
                    <a href="#" className="inline-block text-[#333333] hover:text-[#a4165e] font-medium text-[15px] border-b border-[#333333] hover:border-[#a4165e] transition-colors pb-0.5">
                        View all scholarships
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Scholarships;
