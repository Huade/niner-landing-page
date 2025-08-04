import { useState, useEffect, useMemo } from 'react';

interface UseRotatingBadgesOptions {
  badges: string[];
  intervalMs?: number;
}

export const useRotatingBadges = ({ badges, intervalMs = 5000 }: UseRotatingBadgesOptions) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const memoizedBadges = useMemo(() => badges, [badges.join(',')]);
  
  useEffect(() => {
    if (memoizedBadges.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % memoizedBadges.length);
    }, intervalMs);
    
    return () => clearInterval(interval);
  }, [memoizedBadges.length, intervalMs]);
  
  return {
    currentBadge: memoizedBadges[currentIndex],
    currentIndex,
    badges: memoizedBadges
  };
};