
// import { grey, blueGrey, red, pink, orange, deepOrange, brown, blue, lightBlue, purple, indigo, cyan,  green, lightGreen, teal, yellow, amber, lime } from '@mui/material/colors';


import { blueGrey} from '@mui/material/colors';



/*  Note: When you change the background color here, make sure to change the background color in the default theme ('palette.background.default')   

Because this file's background colors are an addition to the 'palette.background.default' color. 'palette.background.default' just has one color. I wanted to have more variation, so I have created the variations in this file.

*/





export function backgroundVariationColor (darkModeVariable) {

    
    return {

        /* Can't name it 'background' as there is already a 'background' property in the default theme. */

        backgroundVariation: {
         
            v1: darkModeVariable?  'hsl(200, 20%, 21%)' : 'hsl(200, 20%, 88%)', 
            v2: darkModeVariable?  'hsl(200, 20%, 24%)' :  'hsl(200, 20%, 91%)',
            v3: darkModeVariable?  'hsl(200, 20%, 27%)' :  'hsl(200, 20%, 94%)', 

            v4: darkModeVariable?  'hsl(200, 20%, 30%)' :  'hsl(200, 20%, 97%)'
    
          }
        }
}