import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppNavBar from './components/appNavbar';
import { ThemeProvider } from '@emotion/react';
import customTheme from './components/customTheme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={customTheme}>
        <AppNavBar />
      </ThemeProvider>
    </div>
  );
}

export default App;
