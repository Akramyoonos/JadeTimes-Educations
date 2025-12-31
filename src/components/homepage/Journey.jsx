import React from 'react';
import ScrollReveal from '../ScrollReveal';
import finderIcon from '../../assets/Images/finderIcon_ovbve3.svg.png';
import booksIcon from '../../assets/Images/booksIcon_gxakux.svg.png';
import callOutIcon from '../../assets/Images/callOut_v0nn6d.svg.png';
import giftIcon from '../../assets/Images/giftIcon_zinbkx.svg.png';

const Journey = () => {
    const steps = [
        {
            title: 'Find a program',
            description: 'Use our search to browse 120,000+ degrees worldwide',
            linkText: 'Browse all programs',
            image: finderIcon,
            iconBg: 'bg-[#e0f2f1]',
        },
        {
            title: 'Get a scholarship',
            description: 'We give out $50,000 in scholarships every year - apply for one today!',
            linkText: 'View scholarships',
            image: booksIcon,
            iconBg: 'bg-[#e0f2f1]',
        },
        {
            title: 'Get advice from students',
            description: 'Sign up for our FREE webinars to hear advice from students and study abroad experts.',
            linkText: 'Go to webinars',
            image: callOutIcon,
            iconBg: 'bg-[#e0f2f1]',
        },
        {
            title: 'Stay up to date',
            description: 'Access top study abroad guides and scholarship tips - free of charge',
            linkText: 'Get started',
            image: giftIcon,
            iconBg: 'bg-[#e0f2f1]',
        }
    ];

    return (
        <div className="py-16 bg-white font-sans border-b border-gray-100">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <h2 className="text-[28px] font-bold text-[#333333] mb-12 text-left">Begin your study abroad journey</h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {steps.map((step, index) => (
                        <ScrollReveal key={index} delay={`delay-${index * 150}`} className="flex flex-col items-center text-center group h-full">
                            {/* Icon Container with Circle */}
                            <div className={`mb-6 rounded-full ${step.iconBg} transition-transform transform duration-300 flex items-center justify-center w-[110px] h-[110px] animate-in zoom-in-50 duration-500 delay-300`}>
                                <img src={step.image} alt={step.title} className="w-[50%] h-[50%] object-contain" />
                            </div>

                            <h3 className="text-[18px] font-bold text-[#212121] mb-3">
                                {step.title}
                            </h3>

                            <p className="text-[14px] text-gray-600 leading-relaxed mb-4 max-w-[240px]">
                                {step.description}
                            </p>

                            <a href="#" className="text-[#d81b60] text-[14px] font-semibold hover:underline inline-flex items-center mt-auto border-b border-[#d81b60] pb-0.5">
                                {step.linkText}
                            </a>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Journey;
