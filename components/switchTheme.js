import { useState, useEffect } from 'react';
import { Switch, FormControlLabel, createTheme, ThemeProvider } from '@mui/material';
import styles from '@/styles/theme.module.scss'

const SwitchTheme = ({children}) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const preferredTheme = localStorage.getItem('preferredTheme');
    setIsDarkTheme(preferredTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkTheme ? 'light' : 'dark';
    setIsDarkTheme(newTheme === 'dark');
    localStorage.setItem('preferredTheme', newTheme);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkTheme ? 'dark' : 'light',
    },
  });

  return (
    <div className={styles.switchContainer}>
    <ThemeProvider theme={theme}>
      <FormControlLabel
        control={<Switch checked={isDarkTheme} onChange={toggleTheme} />}
        label="Dark Mode"
      />
      {
        theme.palette.mode === "dark" ?
        <div 
        style={{ backgroundColor: theme.palette.background.default }}
        className={styles.darkMode}
        >
          {children}
        </div>
        :
        <div 
        // style={{ backgroundColor: theme.palette.background.default }}
        // className={styles.lightMode}
        >
          {children}
        </div>
      }
    </ThemeProvider>
    </div>
  );
};

export default SwitchTheme;