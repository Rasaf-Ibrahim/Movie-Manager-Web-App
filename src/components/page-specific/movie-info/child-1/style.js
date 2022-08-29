import responsiveSpacing from 'utils/responsive-spacing/responsive-spacing'


const movie_detail_wrapper_parent_css = {

    marginTop: responsiveSpacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}


const movie_detail_wrapper_css = {
    width: { xs: '18rem', sm: '60%', md: '55%', lg: '40%', xl: '25%' },
    padding: responsiveSpacing(1),
    backgroundColor: 'backgroundVariation.v1',
    boxShadow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    gap: responsiveSpacing(1),

}



const image_css= {
    objectFit: 'cover', 
    height: '26rem', 
    width: '16rem'
}


const info_wrapper_css = {

    width: '100%',
    backgroundColor: 'backgroundVariation.v2',
    boxShadow: 1,
    display: 'grid',
    gridTemplateColumns: '1fr',

}


const info_title_css = {
    padding: responsiveSpacing(0.5),
    typography: 'h6',
    fontWeight: 'medium',
    backgroundColor: 'backgroundVariation.v3',
}



const info_value_css = {
    padding: responsiveSpacing(0.5),
    typography: 'h6',
}








export { movie_detail_wrapper_parent_css, movie_detail_wrapper_css, image_css, info_wrapper_css, info_title_css, info_value_css }