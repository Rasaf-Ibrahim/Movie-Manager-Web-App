
import responsiveSpacing from "utils/responsive-spacing/responsive-spacing"


const from_wrapper_css = {
    margin: responsiveSpacing(2),
    display: 'flex', 
    alignItems: 'flex-end', 
    justifyContent: 'center', 
    gap: responsiveSpacing(1) 
}

const search_icon_css= {

   fontSize:responsiveSpacing(1.3),
   color: 'brand.t1.v3',
   
}


export {from_wrapper_css, search_icon_css}