

import { useState, useEffect, createContext } from 'react';


import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


/* Commenting all the colors name */
// import { grey, blueGrey, red, pink, orange, deepOrange, brown, blue, lightBlue, purple, indigo, cyan,  green, lightGreen, teal, yellow, amber, lime } from '@mui/material/colors';


/* Importing only the color that I need in this file */
import { blueGrey, deepOrange, teal } from '@mui/material/colors';



/* Importing all the children of the theme object*/
import { brandColor } from './children/color/brand-color';
import { backgroundVariationColor } from './children/color/background-variation-color';
import { textColor } from './children/color/text-color'
import { specificColor } from './children/color/specific-color';
import { responsiveTypography } from './children/responsive-typography';
import { breakpointsValues } from './children/breakpoints';



// creating context for passing state and function which switches the theme mode
export const themeSwitchContext = createContext('')


// functional component
export default function MuiTheme({ children }) {


  // dark mode state 
  const [darkMode, setDarkMode] = useState('')


  // On first load, we will check the localStorage. If the user visited the website previously, theme will be set based on the previous preference. Otherwise, (if it's the first visit of the user)the  theme will be set to the light mode. */


  useEffect(() => {

    const existingPreference = localStorage.getItem("themeState");

    if (existingPreference) {
      existingPreference === 'dark'
        ? setDarkMode(true)
        : setDarkMode(false);
    }

    else {
      setDarkMode(false);
      localStorage.setItem("themeState", 'light');
    }

  }, []);




  // Anyone can manually switch the theme

  function switchTheme() {

    let themeState = localStorage.getItem('themeState');


    // When the localStorage's 'themeState' is 'dark', onClick we will  change the 'themeState' to 'light', also we will  change the 'darkMode' state, we will make it false, setDarkMode(false),  so that the theme of the website becomes light as well.

    if (themeState === 'dark') {

      localStorage.setItem('themeState', 'light')

      setDarkMode(false)

    }

    // Otherwise (When the localStorage's 'themeState' is  'light') ,onClick we will  change the 'themeState' to 'dark', also we will to change the 'darkMode' state, we will make it true, setDarkMode(true), so  that the theme of the website becomes dark as well.

    else {
      localStorage.setItem('themeState', 'dark')

      setDarkMode(true)
    }

  }



  // imported brandColor function accepts an argument and returns the 'brand' object, we are passing the 'darkMode' as the argument and storing the returned object on the 'brand_obj' variable 

  const brand_obj = brandColor(darkMode)



  // imported backgroundColor function accepts an argument and returns the 'background' object, we are passing the 'darkMode' as the argument and storing the returned object on the 'background_obj' variable 

  const background_variation_obj = backgroundVariationColor(darkMode)


  // imported textColor function accepts an argument and returns 3 objects (text, text_light, text_dark), we are passing the 'darkMode' as the argument and storing the returned objects on the 'text_obj' variable 
  const text_obj = textColor(darkMode)


  // imported specificColor function accepts an argument and returns many objects, we are passing the 'darkMode' as the argument and storing the returned objects on the 'specificColor_obj' variable 
  const specificColor_obj = specificColor(darkMode)


    // imported breakpointsValues returns a object, we are storing the returned object on the 'breakpointsValues_obj' variable 
    const breakpointsValues_obj = breakpointsValues()


  // imported responsiveTypography returns many objects, we are storing the returned objects on the 'responsiveTypography_obj' variable 
  const responsiveTypography_obj = responsiveTypography()



  //  In the following section, we are changing some default styles of MUI theme. https://mui.com/material-ui/customization/default-theme/ 

  const muiUpdatedStyle = createTheme({


    //spacing, here factor = 1 = 0.5rem = 8px
    spacing: factor => `${0.5 * factor}rem`,

    breakpoints: {

      ...breakpointsValues_obj
    
    },
    

    palette: {


      
      mode: darkMode ? 'dark' : 'light',




      // this background object controls the background color of our application
      background: {

        /* There is a related file in the 'mui-theme/children' folder to this 'palette.background.default'. The file name is 'background-color.js' and how is that file related to this 'palette.background.default'  is described in detail in that file. */

        default: darkMode ? 'hsl(200, 20%, 18%)' : 'hsl(200, 20%, 85%)',


        // when the paper's elevation is 0
        paper: darkMode ? blueGrey[900] : blueGrey[50],
      },





      // in the typography object, I am changing the fontFamily. But I had to make sure that I import the fontFamily that I use here. I have imported fontFamily in the 'styles/index.css' file.
      typography: {
        fontFamily: 'Source Sans Pro, sans-serif',
      },


      /* There is a related file in the 'mui-theme/children' folder to these primary and secondary objects. The file name is 'brand-color.js' and how is that file related to these primary and secondary objects is described in detail in that file. */
      primary: {
        main: darkMode ? teal[300] : teal[800],
        light: darkMode ? teal[100] : teal[500],
        dark: darkMode ? teal[500] : teal[900],
        contrastText: darkMode ? 'rgba(0, 0, 0, 0.87)' : '#fff'
      },

      secondary: {
        main: darkMode ? deepOrange[300] : deepOrange[800],
        light: darkMode ? deepOrange[100] : deepOrange[500],
        dark: darkMode ? deepOrange[500] : deepOrange[900],
        contrastText: darkMode ? 'rgba(0, 0, 0, 0.87)' : '#fff'
      },



      /* Other than modifying existing properties' of default theme, we are also adding some new properties. But we are not defining the new properties in this file, we have defined them in some files inside the 'mui-theme/children' folder. */

      /* All the new properties that is being added here are objects too. And those objects have properties. In those properties, you will see t1, t2, v1, v2, etc. t1 means type 1, v1 means variant 1, opp means opposite  */



      /* Files inside the 'mui-theme/children' folder export function. We have imported those function in this file. We have invoked the functions in the above. All those function returns object. We have stored those object in the above in variables. Now in the below, we are destructuring those object. */

      ...brand_obj,

      ...background_variation_obj,

      ...text_obj,

      ...specificColor_obj,

    },


    typography: {

      //  destructuring
      ...responsiveTypography_obj

    }


  

  })






  return (

    <>

      {/* ThemeProvider is a MUI component which helps to change the default style of MUI. We made a variable (muiUpdatedStyle) where we have changed MUI default styles and added new styles. Now, we will pass the variable (muiUpdatedStyle) in the ThemeProvider component as prop.     */}


      <ThemeProvider theme={muiUpdatedStyle}>

        {/* CssBaseline is needed for dark and light theme to work perfectly*/}
        <CssBaseline>

          {/* We have created a context('themeSwitchContext') to switch the theme. The values are 'switchTheme' & 'darkMode' which will help to switch theme from light to dark and opposite. */}

          <themeSwitchContext.Provider value={{ switchTheme, darkMode }}>

            {children}

          </themeSwitchContext.Provider>


        </CssBaseline>

      </ThemeProvider>



    </>

  )

}



