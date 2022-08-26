export default function responsiveSpacingWithStyledComponent (type, space,) {
   

    const halfPixel= 0.03125
    const fourPixel = 0.25

    const multiplierOfFourPixel = Math.floor(space/fourPixel)

    const increase = multiplierOfFourPixel*halfPixel
   

    return {

        "@media (min-width:0px)": {
            [`${type}`]: `${space}rem`
          },

        "@media (min-width:600px)": {
           [`${type}`]: `${space+(increase*1)}rem`
        },

        "@media (min-width:900px)": {
            [`${type}`]: `${space+(increase*2)}rem`
         },

         "@media (min-width:1200px)": {
            [`${type}`]: `${space+(increase*3)}rem`
         },

         "@media (min-width:1536px)": {
            [`${type}`]: `${space+(increase*4)}rem`
         },

    }
       
        
} 


/*

dynamic way of adding media query in the styled component

[`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
            backgroundColor:theme.palette.pink.v2,
          },


*/