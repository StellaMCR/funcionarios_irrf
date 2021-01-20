import { createMuiTheme } from "@material-ui/core"

export const theme = createMuiTheme({
    palette:{  
        primary: {
            light: '#8373a5',
            main: '#3c3350',
            dark: '#17141f',
            contrastText: '#fff'
        },
        secondary: {
            light: '#ffffff',
            main: '#f5f0ff',
            dark: '#ccb3ff',
            contrastText: '#000'
        }
     }
  });