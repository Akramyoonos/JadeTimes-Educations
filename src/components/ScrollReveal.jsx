import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({
    children,
    className = '',
    animation = 'fade-in slide-in-from-bottom-8',
    duration = 'duration-700',
    delay = 'delay-0',
    threshold = 0.1
}) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold]);

    // When visible, apply the animation classes. Start with opacity-0 to hide before animation.
    // fill-mode-both ensures the end state persists.
    return (
        <div
            ref={ref}
            className={`${className} transition-opacity ${isVisible ? `opacity-100 animate-in ${animation} ${duration} ${delay} fill-mode-both` : 'opacity-0'}`}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
