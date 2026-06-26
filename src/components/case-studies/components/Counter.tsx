"use client";

import { useEffect, useState, useRef } from 'react';

interface CounterProps {
  value: string;
  duration?: number;
}

export default function Counter({ value, duration = 1200 }: CounterProps) {
  const [displayValue, setDisplayValue] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    // Find any digits in the string
    const match = value.match(/\d+/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const targetNumber = parseInt(match[0], 10);
    const prefix = value.substring(0, value.indexOf(match[0]));
    const suffix = value.substring(value.indexOf(match[0]) + match[0].length);

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (easeOutQuad)
      const easeProgress = progress * (2 - progress);
      const currentVal = Math.floor(easeProgress * targetNumber);

      setDisplayValue(`${prefix}${currentVal}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration, hasAnimated]);

  return (
    <span ref={elementRef} id={`counter-${value.replace(/[^a-zA-Z0-9]/g, '')}`} className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">
      {hasAnimated ? displayValue : value}
    </span>
  );
}
