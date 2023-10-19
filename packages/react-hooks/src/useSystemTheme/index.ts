import { useLayoutEffect, useState } from 'react';

const useSystemTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );
  useLayoutEffect(() => {
    function handleThemeChange(event: MediaQueryListEvent) {
      if (event.matches) {
        // 用户切换到暗色主题
        console.log('用户切换到暗色主题');
        setTheme('dark');
      } else {
        // 用户切换到亮色主题
        console.log('用户切换到亮色主题');
        setTheme('light');
      }
    }
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeMediaQuery.addEventListener('change', handleThemeChange);
    return () => {
      darkModeMediaQuery.removeEventListener('change', handleThemeChange);
    };
  }, []);
  console.log(111, theme);
  return { systemTheme: theme };
};
export default useSystemTheme;
