"use client";
import { Button } from "@material-tailwind/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export function FixedPlugin() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const scrollThreshold = 300;
    setIsVisible(scrollY > scrollThreshold);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
      <Button
        color="white"
        size="sm"
        // className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
        className={`fixed bottom-4 right-4 p-4 rounded-full transition-opacity ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={scrollToTop}>
        <ChevronUpIcon className="w-5 h-5" />
      </Button>
  );
}
