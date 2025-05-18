import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

// Theme context access hook
export function useThemeHook() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export const useTheme = useThemeHook;