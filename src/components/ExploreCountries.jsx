import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const ExploreCountries = () => {
    const [activeTab, setActiveTab] = useState('Europe');

    const tabs = ['Europe', 'North America', 'Oceania', 'Asia', 'Africa', 'South America'];

    const countryData = {
        'Europe': [
            {
                name: 'United Kingdom',
                programs: '21900 programs',
                description: 'Want to get the most out of your study abroad experience? Choose the UK, where you get four countries for the pri...',
                image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80',
            },
            {
                name: 'Spain',
                programs: '3081 programs',
                description: 'Spain combines an unforgettable cultural experience with high-quality education, which makes for a fantastic study abroa...',
                image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80',
            },
            {
                name: 'Italy',
                programs: '2210 programs',
                description: 'Students studying in Italy will gain valuable knowledge in the classroom, and important cultural competency in one of...',
                image: 'https://images.unsplash.com/photo-1529260830199-42c42dda5f30?auto=format&fit=crop&w=600&q=80',
            },
            {
                name: 'France',
                programs: '1396 programs',
                description: 'France offers a unique academic experience to any student seeking a sophisticated and dynamic environment...',
                image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80',
            }
        ],
        'North America': [
            {
                name: 'United States',
                programs: '45000+ programs',
                description: 'The US offers a huge range of study options and locations, from the Ivy League in the Northeast to major hubs like California...',
                image: 'https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?auto=format&fit=crop&w=600&q=80',
            },
            {
                name: 'Canada',
                programs: '12000+ programs',
                description: 'Known for its high-quality education and friendly locals, Canada is a top destination for students seeking a welcoming environment.',
                image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=600&q=80',
            }
        ],
        'Oceania': [
            {
                name: 'Australia',
                programs: '8500+ programs',
                description: 'With its world-class universities and laid-back lifestyle, Australia is a favorite for students looking for adventure and academic excellence.',
                image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=600&q=80',
            },
            {
                name: 'New Zealand',
                programs: '3000+ programs',
                description: 'Experience stunning landscapes and a unique educational approach in New Zealand, perfect for outdoor enthusiasts.',
                image: 'https://images.unsplash.com/photo-1579458925526-9d226a454d4f?auto=format&fit=crop&w=600&q=80',
            }
        ],
        'Asia': [
            {
                name: 'Japan',
                programs: '4000+ programs',
                description: 'Immerse yourself in a fascinating blend of tradition and modern innovation while studying in Japan.',
                image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=600&q=80',
            },
            {
                name: 'South Korea',
                programs: '3500+ programs',
                description: 'Discover a vibrant culture and leading technology hubs in South Korea, a rising star in international education.',
                image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=600&q=80',
            },
            {
                name: 'China',
                programs: '8000+ programs',
                description: 'Explore a rich history and a rapidly growing economy with diverse study opportunities across China.',
                image: 'https://images.unsplash.com/photo-1543097692-fa13c6cd8595?auto=format&fit=crop&w=600&q=80',
            },
            {
                name: 'Singapore',
                programs: '1500+ programs',
                description: 'A global business hub with top-tier universities, Singapore acts as a gateway to the rest of Asia.',
                image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=600&q=80',
            }
        ],
        'Africa': [
            {
                name: 'South Africa',
                programs: '2000+ programs',
                description: 'From vibrant cities to incredible wildlife, South Africa offers a dynamic and diverse study abroad experience.',
                image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=600&q=80',
            },
            {
                name: 'Egypt',
                programs: '1200+ programs',
                description: 'Study amidst ancient history and modern culture in Egypt, a unique destination for academic exploration.',
                image: 'https://images.unsplash.com/photo-1572252009289-9b5324392b26?auto=format&fit=crop&w=600&q=80',
            }
        ],
        'South America': [
            {
                name: 'Brazil',
                programs: '2500+ programs',
                description: 'Experience a vibrant culture and biodiversity while pursuing your studies in Brazil\'s top institutions.',
                image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=600&q=80',
            },
            {
                name: 'Argentina',
                programs: '1800+ programs',
                description: 'Known for its rich cultural heritage and affordable education, Argentina is a great choice for international students.',
                image: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=600&q=80',
            }
        ]
    };

    // Fallback to empty array if data doesn't exist for a tab
    const countries = countryData[activeTab] || [];

    return (
        <div className="py-16 bg-[#F5F7F8] font-sans">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <ScrollReveal className="mb-8">
                    <h2 className="text-[28px] font-bold text-[#212121] mb-2">Explore study abroad countries</h2>
                    <p className="text-gray-600 text-[16px]">Roam through our detailed breakdowns of the study destinations around the world!</p>
                </ScrollReveal>

                {/* Tabs */}
                <div className="flex border-b border-gray-200 mb-8 overflow-x-auto no-scrollbar">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-3 px-1 mr-8 text-[15px] font-medium transition-colors whitespace-nowrap border-b-2 ${activeTab === tab
                                ? 'border-[#a4165e] text-[#a4165e]'
                                : 'border-transparent text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {countries.map((country, index) => (
                        <ScrollReveal key={`${activeTab}-${index}`} delay={`delay-${index * 100}`} className="h-full">
                            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 group cursor-pointer h-full flex flex-col">
                                {/* Image */}
                                <div className="h-40 overflow-hidden relative flex-shrink-0">
                                    <img
                                        src={country.image}
                                        alt={country.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-5 flex flex-col flex-grow">
                                    {/* Badge */}
                                    <div className="inline-block bg-[#E8F5E9] text-[#2E7D32] text-[11px] font-bold px-2 py-1 rounded mb-3 self-start">
                                        {country.programs}
                                    </div>

                                    <h3 className="text-[18px] font-bold text-[#212121] mb-2 group-hover:text-[#a4165e] transition-colors">
                                        {country.name}
                                    </h3>

                                    <p className="text-[13px] text-gray-600 leading-relaxed mb-4 line-clamp-3">
                                        {country.description}
                                    </p>

                                    <div className="flex items-center text-[#a4165e] text-[13px] font-semibold group/link mt-auto">
                                        Read more
                                        <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Footer Link */}
                <ScrollReveal className="mt-8" delay="delay-300">
                    <a href="#" className="inline-block text-[#333333] hover:text-[#a4165e] font-medium text-[15px] border-b border-[#333333] hover:border-[#a4165e] transition-colors pb-0.5">
                        View all destination guides
                    </a>
                </ScrollReveal>

            </div>
        </div>
    );
};

export default ExploreCountries;
