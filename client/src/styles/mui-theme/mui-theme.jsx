// react hook
import { useState, useEffect, createContext } from 'react';

// material UI (MUI)
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


// importing all the customized theme properties*
import { theme_typography } from './customized-theme-properties/typography/typography';
import { theme_breakpoints } from './customized-theme-properties/breakpoints/breakpoints';

import {
    theme_palette_background,
    theme_palette_text,
    theme_palette_primary,
    theme_palette_secondary,
    theme_palette_error,
    theme_palette_warning,
    theme_palette_info,
    theme_palette_success,
    theme_palette_grey,
} from './customized-theme-properties/palette/_palette'



// creating context for passing state and function which switches the theme mode
export const themeSwitchContext = createContext('')


/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function MuiTheme({ children }) {


    // dark mode state 
    const [darkMode, setDarkMode] = useState('')




    useEffect(() => {

        const existingPreference = localStorage.getItem("themeState");

        if (existingPreference) {
            existingPreference === 'dark'
                ? setDarkMode(true)
                : setDarkMode(false);
        }

        else {
            //initially, setting dark mode for the user
            setDarkMode(true);
            localStorage.setItem("themeState", 'dark');
        }

    }, []);




    // Anyone can manually switch the theme
    function switchTheme() {

        let themeState = localStorage.getItem('themeState');


        if (themeState === 'dark') {

            localStorage.setItem('themeState', 'light')

            setDarkMode(false)

        }



        else {
            localStorage.setItem('themeState', 'dark')

            setDarkMode(true)
        }

    }



    //colors
    const theme_palette_primary_obj = theme_palette_primary(darkMode)

    const theme_palette_secondary_obj = theme_palette_secondary(darkMode)

    const theme_palette_error_obj = theme_palette_error(darkMode)

    const theme_palette_warning_obj = theme_palette_warning(darkMode)

    const theme_palette_success_obj = theme_palette_success(darkMode)

    const theme_palette_info_obj = theme_palette_info(darkMode)

    const theme_palette_grey_obj = theme_palette_grey(darkMode)

    // text
    const theme_palette_text_obj = theme_palette_text(darkMode)

    //background
    const theme_palette_background_obj = theme_palette_background(darkMode)




    const theme_breakpoints_obj = theme_breakpoints()



    const theme_typography_obj = theme_typography()





    const muiUpdatedStyle = createTheme({


        //spacing, here factor = 1 = 0.5rem = 8px
        spacing: factor => `${0.5 * factor}rem`,

        /*🍪 Breakpoints 🍪 */
        breakpoints: {

            ...theme_breakpoints_obj
        },


        /*🍪 Palette 🍪 */

        palette: {

            mode: darkMode ? 'dark' : 'light',


            // this background object controls the background color of our application
            ...theme_palette_background_obj,


            // primary, secondary, error, warning, success, info
            ...theme_palette_primary_obj,

            ...theme_palette_secondary_obj,

            ...theme_palette_error_obj,

            ...theme_palette_warning_obj,

            ...theme_palette_success_obj,

            ...theme_palette_info_obj,

            // grey
            ...theme_palette_grey_obj,


            // text
            ...theme_palette_text_obj,

        },


        /*🍪 Typography 🍪 */
        typography: {

            ...theme_typography_obj
        }


    })






    /*-------------------------------------------------------------------
     ✅ JSX
    ----------------------------------------------------------------------*/
    return (

        <>



            <ThemeProvider theme={muiUpdatedStyle}>


                <CssBaseline>


                    <themeSwitchContext.Provider value={{ switchTheme }}>

                        {children}

                    </themeSwitchContext.Provider>


                </CssBaseline>

            </ThemeProvider>

        </>

    )

}



