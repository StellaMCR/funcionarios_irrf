import { ThemeProvider } from '@material-ui/core'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { Routes } from '../config/Routes'
import { theme } from '../config/Theme'
import store from '../redux/store'
import { TopMenu } from './TopMenu'


export default function App () {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <TopMenu/>
          <Routes/>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}
