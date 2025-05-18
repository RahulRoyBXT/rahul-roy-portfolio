import { createContext, useState, useEffect, ReactNode } from 'react';

type ThemeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  setThemePreference: (preference: 'light' | 'dark' | 'system') => void;
  themePreference: 'light' | 'dark' | 'system';
};

// Theme Context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Store the user's theme preference
  const [themePreference, setThemePreferenceState] = useState<'light' | 'dark' | 'system'>(() => {
    if (typeof window !== 'undefined') {
      // Check if theme is stored in localStorage
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme;
      }
      // If no preference is stored, it means 'system'
      return 'system';
    }
    return 'light';
  });
  
  // Determine if dark mode should be active based on preference
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme === 'dark' || 
        (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  // Function to handle theme preference changes
  const setThemePreference = (preference: 'light' | 'dark' | 'system') => {
    setThemePreferenceState(preference);
    
    if (preference === 'system') {
      // For system preference, we remove the theme from localStorage
      localStorage.removeItem('theme');
      // And set dark mode based on system preference
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    } else {
      // For explicit preferences, Saving to localStorage
      localStorage.setItem('theme', preference);
      setIsDarkMode(preference === 'dark');
    }
  };

  // Toggle between light and dark mode
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    setThemePreferenceState(newMode ? 'dark' : 'light');
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  // Apply the dark class to the HTML element when theme changes
  useEffect(() => {

    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }, [isDarkMode]);

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      // Only update if the user prefers system setting
      if (themePreference === 'system') {
        setIsDarkMode(mediaQuery.matches);
        
        // Update the dark class as shown in the documentation
        document.documentElement.classList.toggle(
          "dark",
          mediaQuery.matches
        );
      }
    };
    
    // Listen for changes in system preference
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [themePreference]);

  return (
    <ThemeContext.Provider value={{ 
      isDarkMode, 
      toggleDarkMode, 
      setThemePreference,
      themePreference
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext };