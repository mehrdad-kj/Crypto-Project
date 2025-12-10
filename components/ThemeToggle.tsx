'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import { HiSun, HiMoon } from 'react-icons/hi';

export default function ThemeToggle() {
  const context = useContext(ThemeContext);
  
  if (!context) {
    return null;
  }

  const { theme, setTheme } = context;

  return (
    <div className="p-2">
      {theme === 'dark' ? (
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <HiMoon className="text-primary text-2xl mr-2" /> Light Mood
        </div>
      ) : (
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <HiSun className="text-primary text-2xl mr-2" /> Dark Mood
        </div>
      )}
    </div>
  );
}
