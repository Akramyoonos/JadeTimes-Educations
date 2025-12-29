import React from 'react';
import { Microscope, Code, LineChart, Stethoscope, Palette, Gavel } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Features = () => {
    const disciplines = [
        { name: 'Computer Science', icon: Code, color: 'bg-blue-100 text-blue-600' },
        { name: 'Business', icon: LineChart, color: 'bg-green-100 text-green-600' },
        { name: 'Healthcare', icon: Stethoscope, color: 'bg-red-100 text-red-600' },
        { name: 'Art & Design', icon: Palette, color: 'bg-purple-100 text-purple-600' },
        { name: 'Law', icon: Gavel, color: 'bg-yellow-100 text-yellow-600' },
        { name: 'Sciences', icon: Microscope, color: 'bg-indigo-100 text-indigo-600' },
    ];

    return (
        <div className="py-20 bg-gray-50">

            {/* Program Categories */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <h2 className="text-3xl font-bold text-center text-teal-900 mb-12">Popular Disciplines</h2>
                </ScrollReveal>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {disciplines.map((item, index) => (
                        <ScrollReveal key={item.name} delay={`delay-${index * 100}`}>
                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer flex flex-col items-center justify-center gap-4 group hover:-translate-y-1 h-full">
                                <div className={`p-4 rounded-full ${item.color} group-hover:scale-110 transition`}>
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <span className="font-semibold text-gray-700 text-center">{item.name}</span>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>

            {/* "Discover" Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
                <ScrollReveal>
                    <h2 className="text-3xl font-bold text-center text-teal-900 mb-12">Discover your future</h2>
                </ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <ScrollReveal delay="delay-100" className="h-full">
                        <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="absolute inset-0 w-full h-full object-cover transition transform group-hover:scale-105 duration-700" alt="Student" />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                <h3 className="text-white text-xl font-bold mb-2">Find your program</h3>
                                <p className="text-gray-200 text-sm">Browse thousands of degrees from around the world.</p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Card 2 */}
                    <ScrollReveal delay="delay-200" className="h-full">
                        <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="absolute inset-0 w-full h-full object-cover transition transform group-hover:scale-105 duration-700" alt="Books" />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                <h3 className="text-white text-xl font-bold mb-2">Student Reviews</h3>
                                <p className="text-gray-200 text-sm">See what other students have to say about their experience.</p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Card 3 */}
                    <ScrollReveal delay="delay-300" className="h-full">
                        <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="absolute inset-0 w-full h-full object-cover transition transform group-hover:scale-105 duration-700" alt="Travel" />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                <h3 className="text-white text-xl font-bold mb-2">Destination Guides</h3>
                                <p className="text-gray-200 text-sm">Explore popular study abroad countries and cities.</p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

        </div>
    );
};

export default Features;
