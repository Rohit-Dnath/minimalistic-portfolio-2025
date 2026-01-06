"use client";

import { useState, ReactNode, useRef } from "react";

interface TooltipProps {
  children: ReactNode;
  content: React.ReactNode;
  delay?: number;
}

export function Tooltip({ children, content, delay = 300 }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const showTooltip = () => {
    const id = setTimeout(() => setIsVisible(true), delay);
    setTimeoutId(id);
  };

  const hideTooltip = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsVisible(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate relative position from center (normalized to -1 to 1 range)
      const relativeX = (e.clientX - centerX) / (rect.width / 2);
      const relativeY = (e.clientY - centerY) / (rect.height / 2);
      
      // Apply subtle jiggle effect (max 5px movement)
      setMousePosition({
        x: relativeX * 5,
        y: relativeY * 5,
      });
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onMouseMove={handleMouseMove}
    >
      {children}
      {isVisible && (
        <div 
          className="absolute bottom-full left-1/2 mb-2 z-50 transition-transform duration-75 ease-out pointer-events-none"
          style={{
            transform: `translate(calc(-50% + ${mousePosition.x}px), ${mousePosition.y}px)`
          }}
        >
          <div className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-medium px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
            {content}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-zinc-900 dark:border-t-zinc-100"></div>
          </div>
        </div>
      )}
    </div>
  );
}
