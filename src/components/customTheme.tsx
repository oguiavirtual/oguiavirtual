import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
    interface Theme {
        status: {
        danger: string;
        };
    }
    interface ThemeOptions {
        status?: {
        danger?: string;
        };
    } 
}

const customTheme = createTheme({

    typography: {
        fontFamily: 'Plus Jakarta Sans, Verdana, Arial, sans-serif',
        fontWeightRegular: 700,
        fontSize: 26,
    },

    palette: {
        primary: {
            main: "",
        }
    }

})

export default customTheme