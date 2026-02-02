import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

// Animated Counter Hook
function useCounter(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation (easeOutExpo)
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeOutExpo * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
}

// Intersection Observer Hook to trigger animation when in view
function useInView(options = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isInView) {
        setIsInView(true);
      }
    }, {
      threshold: 0.3,
      ...options,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isInView, options]);

  return { ref, isInView };
}

// Single Counter Card Component
function CounterCard({ 
  value, 
  label, 
  icon, 
  delay = 0 
}: { 
  value: number; 
  label: string; 
  icon: { src: string; alt: string; height: number; width: number };
  delay?: number;
}) {
  const { ref, isInView } = useInView();
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setStartCounting(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  const count = useCounter(value, 2000, startCounting);

  // Format number with K+ suffix
  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(num % 1000 === 0 ? 0 : 1)}K+`;
    }
    return `${num}+`;
  };

  return (
    <div ref={ref} className="counter-card">
      <div className="icon-wrapper">
        <Image
          src={icon.src}
          alt={icon.alt}
          width={icon.width}
          height={icon.height}
          className="icon"
        />
      </div>
      
      <h3 className="counter-number">
        {formatNumber(count)}
      </h3>
      
      <p 
        className="counter-label"
        dangerouslySetInnerHTML={{ __html: label }}
      />

      <style jsx>{`
        .counter-card {
          background: #FFFFFF;
          border-radius: 24px;
          padding: 48px 32px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          opacity: ${isInView ? 1 : 0};
          transform: translateY(${isInView ? 0 : 30}px);
          transition: opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms;
        }

        .counter-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }

        .icon-wrapper {
          width: 116px;
          height: 116px;
          margin: 0 auto 24px;
          background: #F5A623;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(245, 166, 35, 0.25);
        }

        .icon {
          filter: brightness(0) invert(1);
        }

        .counter-number {
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 56px;
          font-weight: 800;
          color: #1A1A1A;
          margin: 0 0 16px 0;
          line-height: 1;
          letter-spacing: -0.02em;
        }

        .counter-label {
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: #2C3E50;
          margin: 0;
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .counter-card {
            padding: 40px 24px;
          }

          .icon-wrapper {
            width: 96px;
            height: 96px;
            margin-bottom: 20px;
          }

          .counter-number {
            font-size: 48px;
          }

          .counter-label {
            font-size: 18px;
          }
        }

        @media (max-width: 480px) {
          .counter-card {
            padding: 32px 20px;
          }

          .counter-number {
            font-size: 40px;
          }

          .counter-label {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}

// Main Section Component
interface OurNumbersProps {
  content: {
    three: {
      h2: string;
      cards: Array<{
        h1: number;
        p: {
          dangerouslySetInnerHTML: string;
        };
        icon: {
          src: string;
          alt: string;
          height: number;
          width: number;
        };
      }>;
    };
  };
}

export default function OurNumbers({ content }: OurNumbersProps) {
  return (
    <section className="our-numbers-section">
      <div className="container">
        <h2 className="section-title">
          {content.three.h2}
          <span className="title-underline"></span>
        </h2>

        <div className="cards-grid">
          {content.three.cards.map((card, index) => (
            <CounterCard
              key={index}
              value={card.h1}
              label={card.p.dangerouslySetInnerHTML}
              icon={card.icon}
              delay={index * 150}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .our-numbers-section {
          padding: 100px 20px;
          background: #F9F9F9;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-title {
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 56px;
          font-weight: 700;
          color: #1A1A1A;
          text-align: center;
          margin: 0 0 80px 0;
          position: relative;
          display: inline-block;
          width: 100%;
        }

        .title-underline {
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 200px;
          height: 4px;
          background: #F5A623;
          border-radius: 2px;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (max-width: 968px) {
          .our-numbers-section {
            padding: 80px 20px;
          }

          .section-title {
            font-size: 48px;
            margin-bottom: 60px;
          }

          .cards-grid {
            gap: 32px;
          }
        }

        @media (max-width: 640px) {
          .our-numbers-section {
            padding: 60px 20px;
          }

          .section-title {
            font-size: 36px;
            margin-bottom: 40px;
          }

          .title-underline {
            width: 150px;
          }

          .cards-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      `}</style>
    </section>
  );
}