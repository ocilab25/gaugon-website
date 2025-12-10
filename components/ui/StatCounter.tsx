"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatCounterProps {
    end: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    label: string;
    subLabel?: string;
}

export default function StatCounter({
    end,
    duration = 2000,
    prefix = "",
    suffix = "",
    label,
    subLabel,
}: StatCounterProps) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number | null = null;
        let animationFrameId: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Easing function: easeOutExpo
            const easeOutExpo = (x: number): number => {
                return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
            };

            setCount(Math.floor(easeOutExpo(percentage) * end));

            if (progress < duration) {
                animationFrameId = requestAnimationFrame(animate);
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isInView, end, duration]);

    return (
        <div ref={ref} className="text-center sm:text-left">
            <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-1 tabular-nums">
                {prefix}
                {new Intl.NumberFormat('en-US').format(count)}
                {suffix}
            </p>
            <p className="text-sm font-semibold text-gray-700">{label}</p>
            {subLabel && <p className="text-xs text-gray-500 mt-1">{subLabel}</p>}
        </div>
    );
}
