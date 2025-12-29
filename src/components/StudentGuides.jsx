import React from 'react';

const StudentGuides = () => {
    const guides = [
        {
            date: "Nov, 2025",
            title: "How to Study Abroad for Free",
            description: "The cost of studying abroad can be pretty intimidating once you add everything up. But is there a way to study abroad for free?",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=300&q=80"
        },
        {
            date: "Dec, 2025",
            title: "Study Abroad Scholarship Directory 2026",
            description: "Scholarships for international students are everywhere, and we've already found them for you.",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=300&q=80"
        },
        {
            date: "Dec, 2025",
            title: "RESEARCH: Student Demand and Career Outlook: The Top Fields in 2026",
            description: "What major leads to a career? Here's how student interest compares to the job market.",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=300&q=80"
        },
        {
            date: "Dec, 2025",
            title: "The Cheapest Countries to Study in Europe",
            description: "Here are some of the cheapest countries to study in Europe. Get a high-quality education at a lower price tag!",
            image: "https://images.unsplash.com/photo-1467269204594-9661b133dd2b?auto=format&fit=crop&w=300&q=80"
        },
        {
            date: "Dec, 2025",
            title: "Top 10 Places in the World to Study Abroad – 2026",
            description: "Here's the educations.com ranking of the best countries to study abroad in the world in 2026!",
            image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=300&q=80"
        },
        {
            date: "Jul, 2025",
            title: "Which Countries Are Best to Work and Settle in After Finishing Your Studies?",
            description: "Here's our 2025 evaluation of study destinations with the friendliest post-study visas and PR paths.",
            image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=300&q=80"
        }
    ];

    return (
        <div className="py-16 bg-[#F5F7F8] font-sans">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-[28px] font-bold text-[#212121] mb-2">Guides for international students</h2>
                    <p className="text-gray-600 text-[16px]">Learn how to pick the right degree, get scholarships, and move abroad!</p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {guides.map((guide, index) => (
                        <div key={index} className="flex gap-4 group cursor-pointer">
                            {/* Image */}
                            <div className="w-[120px] h-[80px] flex-shrink-0 overflow-hidden rounded-lg">
                                <img
                                    src={guide.image}
                                    alt={guide.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col">
                                <span className="text-[11px] font-medium text-gray-500 mb-1">
                                    {guide.date}
                                </span>
                                <h3 className="text-[15px] font-bold text-[#212121] leading-snug mb-1 group-hover:text-[#a4165e] transition-colors">
                                    {guide.title}
                                </h3>
                                <p className="text-[13px] text-gray-600 leading-relaxed line-clamp-2">
                                    {guide.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default StudentGuides;
