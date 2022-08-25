import { useState, useEffect, createContext } from 'react';


import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


/* Commenting all the colors name */
// import { grey, blueGrey, red, pink, orange, deepOrange, brown, blue, lightBlue, purple, indigo, cyan,  green, lightGreen, teal, yellow, amber, lime } from '@mui/material/colors';


/* Importing only the color that I need */
import { blueGrey, cyan, teal } from '@mui/material/colors';


/* mui's default theme is an object. I am customizing that default theme object here in this file. I have modified some properties of the default theme object and added a lot of new properties too. Almost all the new property's value is an object too. Storing all these new properties in this file was making this file messy and huge. So, I have created the 'mui-theme/part' folder. In that folder, I have some files, each file is created based on a topic and each file is containing some part of the new customized theme object that I am creating here in this file. Now, let's talk about the process of this file's theme object's connection making with 'mui-theme/part' folder's files. In 'mui-theme/part' folder, each file is exporting a function and the function returns an object. We are importing those functions here and and invoking them and storing the returned object in a variable. Then we are merging the object with the theme object with the help of spread operator. */

/* Importing parts of the theme object*/
import { brandColor } from './parts/brand-color';
import { textColor } from './parts/text-color'
import { specificColor } from './parts/specific-color';

import { responsiveTypography } from './parts/responsive-typography';




// creating context for passing state and function which switches theme 
export const themeSwitchContext = createContext('')


function MuiTheme({ children }) {

  const [darkMode, setDarkMode] = useState('')


  // On first load, we will check the localstorage. If the user visited the website previously, theme will be set based on the previous preference. Otherwise (if it's the first visit of the user) theme will be set to light mode. */

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


    // When the localstorage's 'themeState' is 'dark', onClick we will  change the 'themeState' to 'light', also we will to change the 'darkMode' state as setDarkMode(false) so that the theme of the website becomes light as well.

    if (themeState === 'dark') {

      localStorage.setItem('themeState', 'light')

      setDarkMode(false)

    }

    // Otherwise (When the localstorage's 'themeState' is  'light') ,onClick we will  change the 'themeState' to 'dark', also we will to change the 'darkMode' state as setDarkMode(true) so that the theme of the website becomes dark as well.

    else {
      localStorage.setItem('themeState', 'dark')

      setDarkMode(true)
    }

  }



  // imported brandColor function accepts an argument and returns the 'brand' object, we are passing the 'darkMode' as the argument and storing the returned object on the 'brand_obj' variable 

  const brand_obj = brandColor(darkMode)



  // imported textColor function accepts an argument and returns 3 objects (text, text_light, text_dark), we are passing the 'darkMode' as the argument and storing the returned objects on the 'text_obj' variable 
  const text_obj = textColor(darkMode)


  // specific color
  const specificColor_obj = specificColor(darkMode)


  //  responsiveTypography

  const responsiveTypography_obj = responsiveTypography()



  //  In the following section, we are changing the default styles of MUI theme. https://mui.com/material-ui/customization/default-theme/ 

  const muiUpdatedStyle = createTheme({


    /* The default theme has some  properties. We are changing some of those default theme properties' value in this file */

    //spacing, here factor = 1 = 0.5rem = 8px
    spacing: factor => `${0.5 * factor}rem`,

    palette: {
      mode: darkMode ? 'dark' : 'light',



      // this background object defines the background color of our application
      background: {
        default: darkMode ? blueGrey[900] : blueGrey[50],

        // when the paper's elevation is 0
        paper: darkMode ? blueGrey[900] : blueGrey[50],
      },


      typography: {

        fontFamily: 'Source Sans Pro, sans-serif',

      },


      primary: {
        main: darkMode ? cyan[300] : cyan[800],
        light: darkMode ? cyan[100] : cyan[500],
        dark: darkMode ? cyan[500] : cyan[900],
        contrastText: darkMode ? 'rgba(0, 0, 0, 0.87)' : '#fff'
      },


      secondary: {
        main: darkMode ? teal[300] : teal[800],
        light: darkMode ? teal[100] : teal[500],
        dark: darkMode ? teal[500] : teal[900],
        contrastText: darkMode ? 'rgba(0, 0, 0, 0.87)' : '#fff'
      },



      /* Other than modifying existing properties' of default theme, we are also adding some new properties. But we are not defining the new properties in this file, we are doing that to some siblings file of this file and then exporting them from those file and importing here. */

      /* All the new properties that is being added here are objects too. And those objects have properties. In those properties, you will see t1, t2, v1, v2, etc. t1 means type 1, v1 means variant 1, opp means opposite  */




      ...brand_obj,

      ...text_obj,

      ...specificColor_obj



    },


    typography: {

      ...responsiveTypography_obj

    }


  })






  return (

    <>

      {/* We have made a variable (muiUpdatedStyle) where we have changed MUI defalut styles and added new styles. ThemeProvider is a MUI component which helps to change the default style of MUI.  */}


      <ThemeProvider theme={muiUpdatedStyle}>

        {/* CssBaseline is needed for dark and light theme to work perfectly*/}
        <CssBaseline>

          {/* We have created 'themeSwitchContext' context. The values are 'switchTheme' & 'darkMode' which will help to switch theme from light to dark and opposite. */}

          <themeSwitchContext.Provider value={{ switchTheme, darkMode }}>

            {children}

          </themeSwitchContext.Provider>


        </CssBaseline>
      </ThemeProvider>



    </>

  )

}

export default MuiTheme

