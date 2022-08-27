import responsiveSpacing from 'utils/responsive-spacing/responsive-spacing'

const wrapper_css = {
    display: 'flex',
    flexDirection: 'column', 
    gap: responsiveSpacing(1.5), 
    alignItems: 'center', 
    justifyContent: 'center', 
    minHeight: '100vh' 
}

const svg_css = {

    margin: responsiveSpacing(1), 
    width:  { xs: '75%', sm: '60%', md: '55%', lg: '40%', xl: '25%' }, height: { xs: '75%', sm: '60%', md: '55%', lg: '40%', xl: '25%' }
}



export {wrapper_css, svg_css}