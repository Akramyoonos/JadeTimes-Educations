import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Toggle visibility based on scroll position
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Scroll to top smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-[#d81b60] text-white shadow-lg hover:bg-[#ad144d] transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#d81b60] focus:ring-offset-2 animate-in fade-in slide-in-from-bottom-4"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-6 h-6" strokeWidth={2.5} />
                </button>
            )}
        </>
    );
};

export default ScrollToTop;
