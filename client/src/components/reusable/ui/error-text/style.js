import responsiveSpacing from "utils/responsive-spacing/responsive-spacing"

const wrapper_css = {
    marginTop: responsiveSpacing(1),
    textAlign:'center', 
    display: 'flex',
    flexDirection: 'column',
    gap: responsiveSpacing(0.2), 
    alignItems: 'center', 
    justifyContent: 'center'
}

const icon_css = {
     fontSize:responsiveSpacing(6),
     color:'brand.t1.v3'
}


export {wrapper_css, icon_css}