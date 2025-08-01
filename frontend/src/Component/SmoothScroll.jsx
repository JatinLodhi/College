import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const SmoothScrollComponent = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            touchMultiplier: 2,
            infinite: false,
        });

        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div>
            {/* Your scrollable content here */}
        </div>
    );
};

export default SmoothScrollComponent;
 