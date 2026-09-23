'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import Paragraph from '../ui/Paragraph';

interface KirantProps {
    imageSrc?: string;
    topText?: string;
    bottomText?: string;
}

const Kirant = ({
    imageSrc = '/images/about/intro.jpg',
    topText = 'We Build More',
    bottomText = 'Than Structure',
}: KirantProps) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const stickyRef = useRef<HTMLDivElement>(null);
    const topTextRef = useRef<HTMLDivElement>(null);
    const bottomTextRef = useRef<HTMLDivElement>(null);
    const imageWrapRef = useRef<HTMLDivElement>(null);
    const imageInnerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduce || !sectionRef.current || !imageWrapRef.current) return;

        let ctxGsap: gsap.Context | undefined;
        import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
            gsap.registerPlugin(ScrollTrigger);

            ctxGsap = gsap.context(() => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 1,
                        invalidateOnRefresh: true,
                    },
                });

                // 1. Top text moves upwards and fades out
                tl.to(
                    topTextRef.current,
                    {
                        yPercent: -140,
                        opacity: 0,
                        ease: 'power1.inOut',
                    },
                    0
                );

                // 2. Bottom text moves downwards and fades out
                tl.to(
                    bottomTextRef.current,
                    {
                        yPercent: 140,
                        opacity: 0,
                        ease: 'power1.inOut',
                    },
                    0
                );

                // 3. Center image expands to cover the entire screen (100vw x 100vh)
                tl.fromTo(
                    imageWrapRef.current,
                    {
                        xPercent: -50,
                        yPercent: -50,
                        width: '0px',
                        height: '0px',
                        // opacity: 0,
                        scale: 0.2,
                        transformOrigin: '50% 50%',
                    },
                    {
                        xPercent: -50,
                        yPercent: -50,
                        width: '100vw',
                        height: '100vh',
                        // opacity: 1,
                        scale: 1,
                        transformOrigin: '50% 50%',
                        ease: 'power2.inOut',
                    },
                    0
                );

                // 4. Parallax zoom out on the inner image
                if (imageInnerRef.current) {
                    tl.fromTo(
                        imageInnerRef.current,
                        { scale: 1.3 },
                        { scale: 1.0, ease: 'none' },
                        0
                    );
                }
            }, sectionRef);
        });

        return () => ctxGsap?.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="exquisite-dining"
            aria-label="Exquisite Dining Showcase"
            className="relative w-full"
            style={{ height: '240vh' }}
        >
            <div
                ref={stickyRef}
                className="sticky top-0 h-screen w-full flex flex-col 
                items-center justify-center overflow-hidden bg-primary select-none"
            >
                {/* Top Text */}
                <div
                    ref={topTextRef}
                    className="relative z-10 text-center pointer-events-none will-change-transform mb-2 sm:mb-3 px-4"
                >
                    <h2 className="text-[11vw] sm:text-[8vw] md:text-[6.5vw] xl:text-[5vw]
                     font-normal text-[#dca734]
                    font-display uppercase tracking-[0.13em] leading-none">
                        {topText}
                    </h2>
                </div>

                {/* Center Expanding Image Frame - Expands to 100vw x 100vh full-screen above the text */}
                <div
                    ref={imageWrapRef}
                    className="absolute left-1/2 top-1/2 z-30 overflow-hidden shadow-2xl will-change-transform w-0 h-0"
                    style={{
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    <div ref={imageInnerRef} className="relative w-full h-full will-change-transform">
                        <Image
                            src="/images/kirant.jpeg"
                            alt={`${topText} ${bottomText}`}
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover object-center"
                        />
                        {/* Subtle overlay gradient */}
                        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                    </div>
                </div>

                {/* Bottom Text */}
                <div
                    ref={bottomTextRef}
                    className="relative z-10 text-center font-display pointer-events-none
                     will-change-transform mt-2 sm:mt-3 px-4"
                >
                    <h2 className="text-[11vw] sm:text-[8vw] text-[#dca734] md:text-[6.5vw] xl:text-[5vw] \
                    font-normal font-display uppercase tracking-[0.13em] leading-none">
                        {bottomText}
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default Kirant;