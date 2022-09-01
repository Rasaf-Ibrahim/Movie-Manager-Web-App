import responsiveSpacing from "utils/responsive-spacing/responsive-spacing"

const navbar_wrapper_css = {
    bgcolor: 'brand.t1.v2',
    padding: responsiveSpacing(0.5),
    display: 'grid',
    gridTemplateColumns: '11fr 1fr',
    alignItems: 'center' 
}


const logo_and_title_wrapper_css = {
    cursor: 'pointer', 
    display: 'flex', 
    gap: '1rem', 
    alignItems: 'center' 
}

const logo_wrapper_css = {
    marginTop: responsiveSpacing(0.7)
}

const logo_css = {
    fontSize: 35
}

const title_wrapper_css = {
    color: 'text.opp.v1',
    fontFamily: 'Source Code Pro, monospace'
}

const theme_switch_icon_wrapper_css = {
    justifySelf: 'end'
}

const theme_switch_icon_css = {
    marginLeft: responsiveSpacing(0.5), 
    color: 'text.opp.v1', 
    fontSize: 'h5.fontSize' 
}



export {navbar_wrapper_css, logo_and_title_wrapper_css, logo_wrapper_css, logo_css, title_wrapper_css, theme_switch_icon_wrapper_css, theme_switch_icon_css}
