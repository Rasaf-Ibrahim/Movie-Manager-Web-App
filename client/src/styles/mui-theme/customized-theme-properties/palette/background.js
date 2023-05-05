const light_1 = 'hsl(0, 0%, 99%)'
const light_2 = 'hsl(0, 0%, 96%)' 
const light_3 = 'hsl(0, 0%, 93%)' 

const dark_1 = 'hsl(200, 10%, 10%)'  
const dark_2 = 'hsl(200, 10%, 14%)'  
const dark_3 = 'hsl(200, 10%, 18%)' 



export function theme_palette_background(darkModeVariable) {


    return {

        background: {

            default: darkModeVariable ? dark_1 : light_1,

            // adding 2 custom variations property here
            variation: darkModeVariable ? dark_2 : light_2,
    
            variation_2: darkModeVariable ? dark_3 : light_3,
    
    
            // when the paper's elevation is 0
            paper: darkModeVariable ? dark_2 : light_2,

        }


    }

}