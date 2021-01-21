import { ThemeProvider } from '@material-ui/core';
import React from 'react'
import { theme } from '../config/Theme';
import { TopMenu } from './TopMenu';
import { Routes } from '../config/Routes';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <TopMenu/>
        <Routes/>
      </BrowserRouter>
    </ThemeProvider>
  );
}
