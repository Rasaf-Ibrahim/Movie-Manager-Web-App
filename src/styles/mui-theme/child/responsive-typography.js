/* Suppose, we want modify the fontSize of the 'h1' or 'body1' Even if we just want to change the fontSize and keep the default values of other properties, we need to define every other properties like fontHeight, fontFamily. etc too otherwise those properties' default style will not be applied! */



  
export function responsiveTypography () {

    
    return {

        // don't know what is the htmlFontSize, so just copying the value of 16 from the default theme and pasting it.
        htmlFontSize: 16,
        fontFamily: 'Source Sans Pro, sans-serif',
        fontSize: 'clamp( 1rem, 0.9625rem + 0.2vw, 1.1875rem )',
        fontWeightLight:300,
        fontWeightRegular:400,

        // the default value for 'fontWeightMedium' was 500. Using 600 here as 'Source Sans Pro' doesn't have 500 but both 'Source Sans Pro' & 'Source Code Pro' has 600. 
        fontWeightMedium:600,
        fontWeightBold:700,


        // there was a property called 'pxToREM' in the default theme but can't have that here as that's property's value is little bit confusing to me!


        h1:{

            // fontSize
            // console.log(clampBuilder(300, 1800, 80, 90)) 
            fontSize: 'clamp( 5rem, 4.875rem + 0.6666666666666667vw, 5.625rem )',

            // fontFamily
            fontFamily: 'Source Sans Pro, sans-serif',

            // Default Style (Copied)
            fontWeight: 300,
            lineHeight:1.167, 
            letterSpacing: '-0.01562em'
        },

        h2:{

            // fontSize
            // console.log(clampBuilder(300, 1800, 57.5, 65))
            fontSize: 'clamp( 3.59375rem, 3.5rem + 0.5vw, 4.0625rem )',

            // fontFamily
            fontFamily: 'Source Sans Pro, sans-serif',
        
            // Default Style (Copied)
            fontWeight: 300,
            lineHeight:1.2, 
            letterSpacing: '-0.00833em'
        },

        h3:{

            // fontSize
            // console.log(clampBuilder(300, 1800, 46, 52))
            fontSize: 'clamp( 2.875rem, 2.8rem + 0.4vw, 3.25rem )',

            // fontFamily
            fontFamily: 'Source Sans Pro, sans-serif',

            // Default Style (Copied)
            fontWeight: 400,
            lineHeight:1.167, 
            letterSpacing: '0em'
        },

        h4:{

            // fontSize
            // console.log(clampBuilder(300, 1800, 32, 38))
            fontSize: 'clamp( 2rem, 1.925rem + 0.4vw, 2.375rem )',

            // fontFamily
            fontFamily: 'Source Sans Pro, sans-serif',
    
            // Default Style (Copied)
            fontWeight: 400,
            lineHeight:1.235, 
            letterSpacing: '0.00735em'
        },

        h5:{

            // fontSize
            // console.log(clampBuilder(300, 1800, 22.5, 27))
            fontSize: 'clamp( 1.40625rem, 1.35rem + 0.3vw, 1.6875rem )',

            // fontFamily
            fontFamily: 'Source Sans Pro, sans-serif',
        
            // Default Style (Copied)
            fontWeight: 400,
            lineHeight:1.334, 
            letterSpacing: '0em'
        },

        h6:{

            // fontSize
            // console.log(clampBuilder(300, 1800, 18.5, 23))
            fontSize: 'clamp( 1.15625rem, 1.1rem + 0.3vw, 1.4375rem )',

            // fontFamily
            fontFamily: 'Source Sans Pro, sans-serif',
        
            // Default Style (Copied)
            fontWeight: 500,
            lineHeight:1.6, 
            letterSpacing: '0.0075em'
        },

        body1:{

            // fontSize
            // console.log(clampBuilder(300, 1800, 16, 19))
            fontSize: 'clamp( 1rem, 0.9625rem + 0.2vw, 1.1875rem )',

            // fontFamily
            fontFamily: 'Source Sans Pro, sans-serif',

            // Default Style (Copied)
            fontWeight: 400,
            lineHeight:1.5, 
            letterSpacing: '0.00938em'
        },

        body2:{

            // fontSize
            // console.log(clampBuilder(300, 1800, 14, 17))
            fontSize: 'clamp( 0.875rem, 0.8375rem + 0.2vw, 1.0625rem )',

            // fontFamily
            fontFamily: 'Source Sans Pro, sans-serif',

            // Default Style (Copied)
            fontWeight: 400,
            lineHeight:1.43, 
            letterSpacing: '0.01071em'
        },

        subtitle1:{

            // fontSize
            // console.log(clampBuilder(300, 1800, 16, 19))
            fontSize: 'clamp( 1rem, 0.9625rem + 0.2vw, 1.1875rem )',

            // fontFamily
            fontFamily: 'Source Code Pro, sans-serif',
    
            // Default Style (Copied)
            fontWeight: 400,
            lineHeight:1.75, 
            letterSpacing: '0.00938em'
        },


        subtitle2:{

            // fontSize
            // console.log(clampBuilder(300, 1800, 14, 17))
            fontSize: 'clamp( 0.875rem, 0.8375rem + 0.2vw, 1.0625rem )',

            // fontFamily
            fontFamily: 'Source Code Pro, sans-serif',

            // Default Style (Copied)
            fontWeight: 500,
            lineHeight:1.57, 
            letterSpacing: '0.00714em'
        },

        caption:{

            // fontSize
            // console.log(clampBuilder(300, 1800, 12, 15))
            fontSize: 'clamp( 0.75rem, 0.7125rem + 0.2vw, 0.9375rem )',

            // fontFamily
            fontFamily: 'Source Sans Pro, sans-serif',

            // Default Style (Copied)
            fontWeight: 400,
            lineHeight:1.66, 
            letterSpacing: '0.03333em'
        },

        overline:{

            // fontSize
            // console.log(clampBuilder(300, 1800, 12, 15))
            fontSize: 'clamp( 0.75rem, 0.7125rem + 0.2vw, 0.9375rem )',

            // fontFamily
            fontFamily: 'Source Sans Pro, sans-serif',
        
            // Default Style (Copied)
            fontWeight: 400,
            lineHeight:2.66, 
            letterSpacing: '0.08333em',
            textTransform: 'uppercase'
        },

        button:{

            // fontSize
            // console.log(clampBuilder(300, 1800, 14, 17))
            fontSize: 'clamp( 0.875rem, 0.8375rem + 0.2vw, 1.0625rem )',

            // fontFamily
            fontFamily: 'Source Sans Pro, sans-serif',
            
            
            // Default Style (Copied)
            fontWeight: 500,
            lineHeight:1.75, 
            letterSpacing: '0.02857em',
            textTransform: 'uppercase'
        },



        

        
    }

}

  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 
  
  
  

  
  
  
  
  
  

   
  
  
  
   
  
  
  
  
  
  

