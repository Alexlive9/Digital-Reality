"use client";

import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { NavLinks } from "./constants";
import Transition from "./Transition";

const Sidebar = () => {
  const [isRouting, setIsRouting] = useState(false);
  const [isActive, setIsActive] = useState('Home');
  const [prevPath, setPrevPath] = useState<string | null>(null);
  const path = usePathname();

  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
      setPrevPath(path); 
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isRouting]);

  return (
    <div className="fixed right-8 top-[40%] z-[20] h-[200px] w-[48px] rounded-full bg-gray-500 bg-opacity-50">
      {isRouting && <Transition />}

      <AnimatePresence mode="wait">
        <div className="flex flex-col gap-5 p-3 justify-center items-center h-full">
          {NavLinks.map((navLink) => (
            <a
              key={navLink.name}
              href={navLink.link}
              onClick={() => setIsActive(navLink.name)}
            >
              <navLink.icon
                className={`w-[28px] h-[28px] ${isActive === navLink.name ? 'text-blue-500' : 'text-white'}`}
              />
            </a>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
