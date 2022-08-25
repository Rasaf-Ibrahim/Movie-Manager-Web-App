//  brand color  (A alternative to the primary & the secondary color. Here, the type 1 is the primary color and the type 2 is the secondary color. I have made this for having more variations of primary and secondary color. Moreover, here I have opposite color which will be helpful when I want to use secondary color over a primary color or a primary color over a secondary color. )


// import { grey, blueGrey, red, pink, orange, deepOrange, brown, blue, lightBlue, purple, indigo, cyan,  green, lightGreen, teal, yellow, amber, lime } from '@mui/material/colors';


import { cyan, amber} from '@mui/material/colors';




export function brandColor (darkModeVariable) {

    
    return {

        brand: {
            // type 1
            t1: {
              v1: darkModeVariable?  cyan[50] :  cyan[900],
              v2: darkModeVariable?  cyan[100] : cyan[800],
              v3: darkModeVariable?  cyan[200] : cyan[700],
              v4: darkModeVariable?  cyan[300] : cyan[600],
              v5: darkModeVariable?  cyan[400] : cyan[500],
      
              opp: {
                v1: darkModeVariable?  cyan[900] :  cyan[50],
                v2: darkModeVariable?  cyan[800] : cyan[100],
                v3: darkModeVariable?  cyan[700] : cyan[200],
                v4: darkModeVariable?  cyan[600] : cyan[300],
                v5: darkModeVariable?  cyan[500] : cyan[400],
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