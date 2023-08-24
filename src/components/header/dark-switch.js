'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsFillMoonFill } from 'react-icons/bs';
import { MdLightMode } from 'react-icons/md';

const DarkSwitch = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const current = theme === 'system' ? systemTheme : theme;
  return (
    mounted && (
      <>
        {current === 'dark' ? (
          <MdLightMode className="text-xl cursor-pointer hover:text-amber-500" onClick={() => setTheme('light')} />
        ) : (
          <BsFillMoonFill className="text-xl cursor-pointer hover:text-amber-500" onClick={() => setTheme('dark')} />
        )}
      </>
    )
  );
};
export default DarkSwitch;
