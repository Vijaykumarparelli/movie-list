'use client';
import { ThemeProvider } from 'next-themes';

const Providers = ({ children }) => {
  return (
    <div className="dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen select-none">
      <ThemeProvider enableSystem={true} attribute="class">
        {children}
      </ThemeProvider>
    </div>
  );
};
export default Providers;
