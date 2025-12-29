import React from 'react';
import { GraduationCap, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const ProgramCategories = () => {
    const categories = [
        { name: 'Healthcare Programs', count: '20020 Programs' },
        { name: 'Technology Programs', count: '15239 Programs' },
        { name: 'Management Programs', count: '14495 Programs' },
        { name: 'Natural Sciences Programs', count: '14579 Programs' },
        { name: 'Business Programs', count: '13205 Programs' },
        { name: 'Humanities Programs', count: '11670 Programs' },
        { name: 'Social Science Programs', count: '11351 Programs' },
        { name: 'Engineering Programs', count: '11377 Programs' },
    ];

    return (
        <div className="py-16 bg-[#f9f9f9] font-sans">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <h2 className="text-[28px] font-bold text-[#212121] mb-8">What do you want to study?</h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {/* First 4 Categories */}
                    {categories.slice(0, 4).map((cat, index) => (
                        <ScrollReveal key={index} delay={`delay-${index * 100}`} className="h-full">
                            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden group border-b-[3px] border-transparent hover:border-[#d81b60] h-full">
                                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-pink-50 group-hover:bg-[#d81b60] transition-colors"></div>
                                <div className="flex flex-col h-full justify-between items-start">
                                    <div className="mb-4">
                                        <GraduationCap className="w-8 h-8 text-[#f48fb1]" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h3 className="text-[16px] font-bold text-gray-900 mb-1">{cat.name}</h3>
                                        <p className="text-[13px] text-gray-500">{cat.count}</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}

                    {/* Program Explorer Large Card - Spans 2 rows on lg screens */}
                    <ScrollReveal className="lg:col-start-5 lg:row-span-2 h-full" delay="delay-500" animation="fade-in slide-in-from-right-8">
                        <div className="bg-[#e0f2f1] rounded-lg p-8 flex flex-col justify-center h-full">
                            <h3 className="text-[20px] font-bold text-gray-900 mb-4">Program Explorer</h3>
                            <p className="text-gray-700 text-[15px] leading-relaxed mb-8">
                                Answer a few questions and we will match you with the programs that suit you
                            </p>
                            <a href="#" className="inline-flex items-center text-[#d81b60] font-semibold text-[15px] hover:underline">
                                Try our matchmaking <ArrowRight className="w-4 h-4 ml-2" />
                            </a>
                        </div>
                    </ScrollReveal>

                    {/* Remaining Categories */}
                    {categories.slice(4).map((cat, index) => (
                        <ScrollReveal key={index + 4} delay={`delay-${(index + 4) * 100}`} className="h-full">
                            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden group border-b-[3px] border-transparent hover:border-[#d81b60] h-full">
                                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-pink-50 group-hover:bg-[#d81b60] transition-colors"></div>
                                <div className="flex flex-col h-full justify-between items-start">
                                    <div className="mb-4">
                                        <GraduationCap className="w-8 h-8 text-[#f48fb1]" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h3 className="text-[16px] font-bold text-gray-900 mb-1">{cat.name}</h3>
                                        <p className="text-[13px] text-gray-500">{cat.count}</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <div className="mt-8">
                    <a href="#" className="inline-block text-gray-600 hover:text-[#d81b60] font-medium text-[15px] border-b border-gray-400 hover:border-[#d81b60] transition-colors pb-0.5">
                        Browse all programs
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProgramCategories;
