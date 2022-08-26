
// import { grey, blueGrey, red, pink, orange, deepOrange, brown, blue, lightBlue, purple, indigo, cyan,  green, lightGreen, teal, yellow, amber, lime } from '@mui/material/colors';


import {  amber, deepOrange, teal} from '@mui/material/colors';



/*  Note: When you change the type 1 brand color, make sure to change the primary color and have the same color as the type 1 brand color. Similarly, When you change the type 2 brand color, make sure to change the secondary color and have the same color as the type 2 brand color. 


Because Brand color is an alternative to the primary & the secondary color. Here, the type 1 is the primary color and the type 2 is the secondary color. I have made this brand color for having more variations of primary and secondary color. Moreover, here I have opposite color which will be helpful when I want to use secondary color over a primary color or a primary color over a secondary color. 


*/



/* Color Review: 

cyan:  works really well with the dark mode but not that good with the light mode.  

deepOrange: works better in light mode but not but in dark mode too. 

teal: works fine with both light and dark mode.


*/



export function brandColor (darkModeVariable) {

    
    return {

        brand: {
            // type 1
            t1: {
              v1: darkModeVariable?  teal[50] :  teal[900],
              v2: darkModeVariable?  teal[100] : teal[800],
              v3: darkModeVariable?  teal[200] : teal[700],
              v4: darkModeVariable?  teal[300] : teal[600],
              v5: darkModeVariable?  teal[400] : teal[500],
      
              opp: {
                v1: darkModeVariable?  teal[900] :  teal[50],
                v2: darkModeVariable?  teal[800] : teal[100],
                v3: darkModeVariable?  teal[700] : teal[200],
                v4: darkModeVariable?  teal[600] : teal[300],
                v5: darkModeVariable?  teal[500] : teal[400],
              }
           },

      
            // type 2
            t2: {
              v1: darkModeVariable?  amber[50] :  amber[900],
              v2: darkModeVariable?  amber[100] : amber[800],
              v3: darkModeVariable?  amber[200] : amber[700],
              v4: darkModeVariable?  amber[300] : amber[600],
              v5: darkModeVariable?  amber[400] : amber[500],
      
        
              opp: {
                v1: darkModeVariable?  amber[900] :  amber[50],
                v2: darkModeVariable?  amber[800] : amber[100],
                v3: darkModeVariable?  amber[700] : amber[200],
                v4: darkModeVariable?  amber[600] : amber[300],
                v5: darkModeVariable?  amber[500] : amber[400],
              }
            },
      
          }
        }
  
}