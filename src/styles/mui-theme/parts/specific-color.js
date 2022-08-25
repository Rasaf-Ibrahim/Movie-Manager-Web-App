//  https://mui.com/material-ui/customization/color/

// We are picking material color's hex code. All color has 10 variants. From 50 to 900. 


import { grey, blueGrey, red, pink, orange, deepOrange, brown, blue, lightBlue, purple, indigo, cyan,  green, lightGreen, teal, yellow, amber, lime } from '@mui/material/colors';



export function specificColor (darkModeVariable) {

    
    return {


        //  specific color - grey - dynamic
      grey: {
        v1: darkModeVariable?  grey[50] :  grey[900],
        v2: darkModeVariable?  grey[100] : grey[800],
        v3: darkModeVariable?  grey[200] : grey[700],
        v4: darkModeVariable?  grey[300] : grey[600],
        v5: darkModeVariable?  grey[400] : grey[500],
      },


      //  specific color - grey - static
      grey_light: { 
        v1: grey[50],
        v2: grey[100],
        v3: grey[200],
        v4: grey[300],
        v5: grey[400],
      },

      grey_dark: { 
        v1: grey[500],
        v2: grey[600],
        v3: grey[700],
        v4: grey[800],
        v5: grey[900],
      },



      //  specific color - blueGrey - dynamic
      blueGrey: {
        v1: darkModeVariable?  blueGrey[50] :  blueGrey[900],
        v2: darkModeVariable?  blueGrey[100] : blueGrey[800],
        v3: darkModeVariable?  blueGrey[200] : blueGrey[700],
        v4: darkModeVariable?  blueGrey[300] : blueGrey[600],
        v5: darkModeVariable?  blueGrey[400] : blueGrey[500],
      },


      //  specific color - blueGrey - static
      blueGrey_light: { 
        v1: blueGrey[50],
        v2: blueGrey[100],
        v3: blueGrey[200],
        v4: blueGrey[300],
        v5: blueGrey[400],
      },

      blueGrey_dark: { 
        v1: blueGrey[500],
        v2: blueGrey[600],
        v3: blueGrey[700],
        v4: blueGrey[800],
        v5: blueGrey[900],
      },


      //  specific color - red - dynamic
      red: {
        v1: darkModeVariable?  red[50] :  red[900],
        v2: darkModeVariable?  red[100] : red[800],
        v3: darkModeVariable?  red[200] : red[700],
        v4: darkModeVariable?  red[300] : red[600],
        v5: darkModeVariable?  red[400] : red[500],
      },


      //  specific color - red - static
      red_light: { 
        v1: red[50],
        v2: red[100],
        v3: red[200],
        v4: red[300],
        v5: red[400],
      },

      red_dark: { 
        v1: red[500],
        v2: red[600],
        v3: red[700],
        v4: red[800],
        v5: red[900],
      },


      //  specific color - pink - dynamic
      pink: {
        v1: darkModeVariable?  pink[50] :  pink[900],
        v2: darkModeVariable?  pink[100] : pink[800],
        v3: darkModeVariable?  pink[200] : pink[700],
        v4: darkModeVariable?  pink[300] : pink[600],
        v5: darkModeVariable?  pink[400] : pink[500],
      },


      //  specific color - pink - static
      pink_light: { 
        v1: pink[50],
        v2: pink[100],
        v3: pink[200],
        v4: pink[300],
        v5: pink[400],
      },

      pink_dark: { 
        v1: pink[500],
        v2: pink[600],
        v3: pink[700],
        v4: pink[800],
        v5: pink[900],
      },


      //  specific color - orange - dynamic
      orange: {
        v1: darkModeVariable?  orange[50] :  orange[900],
        v2: darkModeVariable?  orange[100] : orange[800],
        v3: darkModeVariable?  orange[200] : orange[700],
        v4: darkModeVariable?  orange[300] : orange[600],
        v5: darkModeVariable?  orange[400] : orange[500],
      },


      //  specific color - orange - static
      orange_light: { 
        v1: orange[50],
        v2: orange[100],
        v3: orange[200],
        v4: orange[300],
        v5: orange[400],
      },

      orange_dark: { 
        v1: orange[500],
        v2: orange[600],
        v3: orange[700],
        v4: orange[800],
        v5: orange[900],
      },


      //  specific color - deepOrange - dynamic
      deepOrange: {
        v1: darkModeVariable?  deepOrange[50] :  deepOrange[900],
        v2: darkModeVariable?  deepOrange[100] : deepOrange[800],
        v3: darkModeVariable?  deepOrange[200] : deepOrange[700],
        v4: darkModeVariable?  deepOrange[300] : deepOrange[600],
        v5: darkModeVariable?  deepOrange[400] : deepOrange[500],
      },


      //  specific color - deepOrange - static
      deepOrange_light: { 
        v1: deepOrange[50],
        v2: deepOrange[100],
        v3: deepOrange[200],
        v4: deepOrange[300],
        v5: deepOrange[400],
      },

      deepOrange_dark: { 
        v1: deepOrange[500],
        v2: deepOrange[600],
        v3: deepOrange[700],
        v4: deepOrange[800],
        v5: deepOrange[900],
      },


      
     //  specific color - brown - dynamic
      brown: {
        v1: darkModeVariable?  brown[50] :  brown[900],
        v2: darkModeVariable?  brown[100] : brown[800],
        v3: darkModeVariable?  brown[200] : brown[700],
        v4: darkModeVariable?  brown[300] : brown[600],
        v5: darkModeVariable?  brown[400] : brown[500],
      },


      //  specific color - brown - static
      brown_light: { 
        v1: brown[50],
        v2: brown[100],
        v3: brown[200],
        v4: brown[300],
        v5: brown[400],
      },

      brown_dark: { 
        v1: brown[500],
        v2: brown[600],
        v3: brown[700],
        v4: brown[800],
        v5: brown[900],
      },


      //  specific color - blue - dynamic
      blue: {
        v1: darkModeVariable?  blue[50] :  blue[900],
        v2: darkModeVariable?  blue[100] : blue[800],
        v3: darkModeVariable?  blue[200] : blue[700],
        v4: darkModeVariable?  blue[300] : blue[600],
        v5: darkModeVariable?  blue[400] : blue[500],
      },


      //  specific color - blue - static
      blue_light: { 
        v1: blue[50],
        v2: blue[100],
        v3: blue[200],
        v4: blue[300],
        v5: blue[400],
      },

      blue_dark: { 
        v1: blue[500],
        v2: blue[600],
        v3: blue[700],
        v4: blue[800],
        v5: blue[900],
      },


      //  specific color - lightBlue - dynamic
     lightBlue: {
      v1: darkModeVariable?  lightBlue[50] :  lightBlue[900],
      v2: darkModeVariable?  lightBlue[100] : lightBlue[800],
      v3: darkModeVariable?  lightBlue[200] : lightBlue[700],
      v4: darkModeVariable?  lightBlue[300] : lightBlue[600],
      v5: darkModeVariable?  lightBlue[400] : lightBlue[500],
    },


    //  specific color - lightBlue - static
    lightBlue_light: { 
      v1: lightBlue[50],
      v2: lightBlue[100],
      v3: lightBlue[200],
      v4: lightBlue[300],
      v5: lightBlue[400],
    },

    lightBlue_dark: { 
      v1: lightBlue[500],
      v2: lightBlue[600],
      v3: lightBlue[700],
      v4: lightBlue[800],
      v5: lightBlue[900],
    },


     
      //  specific color - purple - dynamic
      purple: {
        v1: darkModeVariable?  purple[50] :  purple[900],
        v2: darkModeVariable?  purple[100] : purple[800],
        v3: darkModeVariable?  purple[200] : purple[700],
        v4: darkModeVariable?  purple[300] : purple[600],
        v5: darkModeVariable?  purple[400] : purple[500],
      },


      //  specific color - purple - static
      purple_light: { 
        v1: purple[50],
        v2: purple[100],
        v3: purple[200],
        v4: purple[300],
        v5: purple[400],
      },

      purple_dark: { 
        v1: purple[500],
        v2: purple[600],
        v3: purple[700],
        v4: purple[800],
        v5: purple[900],
      },


      //  specific color - indigo - dynamic
      indigo: {
        v1: darkModeVariable?  indigo[50] :  indigo[900],
        v2: darkModeVariable?  indigo[100] : indigo[800],
        v3: darkModeVariable?  indigo[200] : indigo[700],
        v4: darkModeVariable?  indigo[300] : indigo[600],
        v5: darkModeVariable?  indigo[400] : indigo[500],
      },


      //  specific color - indigo - static
      indigo_light: { 
        v1: indigo[50],
        v2: indigo[100],
        v3: indigo[200],
        v4: indigo[300],
        v5: indigo[400],
      },

      indigo_dark: { 
        v1: indigo[500],
        v2: indigo[600],
        v3: indigo[700],
        v4: indigo[800],
        v5: indigo[900],
      },


    

    //  specific color - cyan - dynamic
    cyan: {
      v1: darkModeVariable?  cyan[50] :  cyan[900],
      v2: darkModeVariable?  cyan[100] : cyan[800],
      v3: darkModeVariable?  cyan[200] : cyan[700],
      v4: darkModeVariable?  cyan[300] : cyan[600],
      v5: darkModeVariable?  cyan[400] : cyan[500],
    },


    //  specific color - cyan - static
    cyan_light: { 
      v1: cyan[50],
      v2: cyan[100],
      v3: cyan[200],
      v4: cyan[300],
      v5: cyan[400],
    },

    cyan_dark: { 
      v1: cyan[500],
      v2: cyan[600],
      v3: cyan[700],
      v4: cyan[800],
      v5: cyan[900],
    },


    //  specific color - green - dynamic
    green: {
      v1: darkModeVariable?  green[50] :  green[900],
      v2: darkModeVariable?  green[100] : green[800],
      v3: darkModeVariable?  green[200] : green[700],
      v4: darkModeVariable?  green[300] : green[600],
      v5: darkModeVariable?  green[400] : green[500],
    },


    //  specific color - green - static
    green_light: { 
      v1: green[50],
      v2: green[100],
      v3: green[200],
      v4: green[300],
      v5: green[400],
    },

    green_dark: { 
      v1: green[500],
      v2: green[600],
      v3: green[700],
      v4: green[800],
      v5: green[900],
    },


    //  specific color - lightGreen - dynamic
    lightGreen: {
      v1: darkModeVariable?  lightGreen[50] :  lightGreen[900],
      v2: darkModeVariable?  lightGreen[100] : lightGreen[800],
      v3: darkModeVariable?  lightGreen[200] : lightGreen[700],
      v4: darkModeVariable?  lightGreen[300] : lightGreen[600],
      v5: darkModeVariable?  lightGreen[400] : lightGreen[500],
    },


    //  specific color - lightGreen - static
    lightGreen_light: { 
      v1: lightGreen[50],
      v2: lightGreen[100],
      v3: lightGreen[200],
      v4: lightGreen[300],
      v5: lightGreen[400],
    },

    lightGreen_dark: { 
      v1: lightGreen[500],
      v2: lightGreen[600],
      v3: lightGreen[700],
      v4: lightGreen[800],
      v5: lightGreen[900],
    },


    //  specific color - teal - dynamic
    teal: {
      v1: darkModeVariable?  teal[50] :  teal[900],
      v2: darkModeVariable?  teal[100] : teal[800],
      v3: darkModeVariable?  teal[200] : teal[700],
      v4: darkModeVariable?  teal[300] : teal[600],
      v5: darkModeVariable?  teal[400] : teal[500],
    },


    //  specific color - teal - static
    teal_light: { 
      v1: teal[50],
      v2: teal[100],
      v3: teal[200],
      v4: teal[300],
      v5: teal[400],
    },

    teal_dark: { 
      v1: teal[500],
      v2: teal[600],
      v3: teal[700],
      v4: teal[800],
      v5: teal[900],
    },


     //  specific color - yellow - dynamic
     yellow: {
      v1: darkModeVariable?  yellow[50] :  yellow[900],
      v2: darkModeVariable?  yellow[100] : yellow[800],
      v3: darkModeVariable?  yellow[200] : yellow[700],
      v4: darkModeVariable?  yellow[300] : yellow[600],
      v5: darkModeVariable?  yellow[400] : yellow[500],
    },


    //  specific color - yellow - static
    yellow_light: { 
      v1: yellow[50],
      v2: yellow[100],
      v3: yellow[200],
      v4: yellow[300],
      v5: yellow[400],
    },

    yellow_dark: { 
      v1: yellow[500],
      v2: yellow[600],
      v3: yellow[700],
      v4: yellow[800],
      v5: yellow[900],
    },


    //  specific color - amber - dynamic
    amber: {
      v1: darkModeVariable?  amber[50] :  amber[900],
      v2: darkModeVariable?  amber[100] : amber[800],
      v3: darkModeVariable?  amber[200] : amber[700],
      v4: darkModeVariable?  amber[300] : amber[600],
      v5: darkModeVariable?  amber[400] : amber[500],
    },


    //  specific color - amber - static
    amber_light: { 
      v1: amber[50],
      v2: amber[100],
      v3: amber[200],
      v4: amber[300],
      v5: amber[400],
    },

    amber_dark: { 
      v1: amber[500],
      v2: amber[600],
      v3: amber[700],
      v4: amber[800],
      v5: amber[900],
    },



    //  specific color - lime - dynamic
    lime: {
      v1: darkModeVariable?  lime[50] :  lime[900],
      v2: darkModeVariable?  lime[100] : lime[800],
      v3: darkModeVariable?  lime[200] : lime[700],
      v4: darkModeVariable?  lime[300] : lime[600],
      v5: darkModeVariable?  lime[400] : lime[500],
    },


    //  specific color - lime - static
    lime_light: { 
      v1: lime[50],
      v2: lime[100],
      v3: lime[200],
      v4: lime[300],
      v5: lime[400],
    },

    lime_dark: { 
      v1: lime[500],
      v2: lime[600],
      v3: lime[700],
      v4: lime[800],
      v5: lime[900],
    },

        

   }

        
 }
  
