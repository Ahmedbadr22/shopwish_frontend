import {createContext} from "react";
import {createTheme, ThemeProvider} from '@mui/material/styles';

export const mainThemeContext = createContext();

const primaryMain = '#FF324D';
const secondaryMain = '#FFFFFF';


const theme = createTheme({
    palette: {
        primary: {
            main: primaryMain,
        },
        secondary: {
            main: secondaryMain,
        },
    },
});

const MainThemeProvider = ({children}) => {
    const context = {
        primaryMain: primaryMain,
    };

    return (
        <mainThemeContext.Provider value={context}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </mainThemeContext.Provider>
    );
};

export default MainThemeProvider;