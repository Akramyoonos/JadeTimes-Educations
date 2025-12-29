
import React from 'react';
import { Instagram, Linkedin, Youtube, Podcast } from 'lucide-react';
import educationsLogo from '../assets/Images/Educations-40_cvcack.png';

const Footer = () => {
    return (
        <footer className="bg-[#2a2a2a] text-white py-14 font-sans">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Logo Section */}
                <div className="mb-8">
                    <img src={educationsLogo} alt="educations.com" className="h-10 mb-2" />
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start gap-12">

                    {/* Main Text Content */}
                    <div className="max-w-3xl">
                        <h4 className="text-[18px] font-bold mb-4 text-white">
                            Where will your studies take you?
                        </h4>
                        <p className="text-[14px] leading-relaxed text-gray-300">
                            At educations.com, we believe that students who study abroad become the next generation of globally-minded adventurers and leaders, and we want more of you to do it! Every year, our search engine helps over 40 million students connect with some of the best universities and schools around the world.
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-5 md:mt-10">
                        <a href="#" className="text-white hover:text-gray-300 transition-colors">
                            <Instagram className="w-6 h-6" />
                        </a>

                        {/* TikTok Icon (SVG) */}
                        <a href="#" className="text-white hover:text-gray-300 transition-colors">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                            </svg>
                        </a>

                        <a href="#" className="text-white hover:text-gray-300 transition-colors">
                            <Youtube className="w-6 h-6" />
                        </a>

                        <a href="#" className="text-white hover:text-gray-300 transition-colors">
                            <Linkedin className="w-6 h-6" />
                        </a>

                        {/* Discord Icon (SVG) */}
                        <a href="#" className="text-white hover:text-gray-300 transition-colors">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.772-.6083 1.1588a18.3553 18.3553 0 00-5.4922 0 19.6685 19.6685 0 00-.6178-1.1588.0772.0772 0 00-.0705-.0371 19.782 19.782 0 00-4.8916 1.5152.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561 19.968 19.968 0 005.9937 3.0374.0778.0778 0 00.0842-.0276c.4615-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057 13.2435 13.2435 0 01-1.8717-.8931.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286 20.0011 20.0011 0 006.0028-3.0384.077.077 0 00.0322-.054c.5-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1569 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z" />
                            </svg>
                        </a>

                        <a href="#" className="text-white hover:text-gray-300 transition-colors">
                            <Podcast className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                {/* Bottom Links */}
                <div className="mt-16 md:mt-20 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-white underline underline-offset-2 font-medium">
                    <a href="#" className="hover:text-gray-300 transition-colors">About us</a>
                    <a href="#" className="hover:text-gray-300 transition-colors">Promote your program</a>
                    <a href="#" className="hover:text-gray-300 transition-colors">Student network partnerships</a>
                    <a href="#" className="hover:text-gray-300 transition-colors">Accessibility</a>
                    <a href="#" className="hover:text-gray-300 transition-colors">Privacy policy</a>
                    <a href="#" className="hover:text-gray-300 transition-colors">Terms and conditions</a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
