import responsiveSpacing from 'utils/responsive-spacing/responsive-spacing'


/* Note about Width:

Haven't added any width to the 'whole_component_css' or 'all_contents_css' or 'everything_without_poster_title_css' because these are just wrappers. I don't want to add width to any wrappers. I want to add width to every individual section. So, I have added width to 'poster_img_css' &  'a_info_section_css' 


 I have created all the breakpoints by multiplying 20rem(320px). So, any individual section's width must be smaller than 20rem(320px). Actually, one section must not have larger than 18rem because then It would be possible to provide 1rem margin to the left and right side. 

*/




const whole_component_css = {
    marginTop: responsiveSpacing(2),

    // centering the the content horizontally
    display: 'grid',
    justifyItems: 'center'
}


const all_contents_css = {
    padding: responsiveSpacing(1),

    backgroundColor: 'backgroundVariation.v1',
    boxShadow: 1,

    borderRadius: '1rem',

    display: 'grid',
    justifyItems: 'center',
    textAlign: 'center',
    gap: responsiveSpacing(2),
}


const poster_image_wrapper_css = {

    boxShadow: 4,

    padding: responsiveSpacing(0.5),
    borderRadius:'1rem',

    // centering the the content horizontally and vertically
    display: 'grid',
    justifyItems: 'center',
    alignItems:'center'

}



const poster_img_css = {

    objectFit: 'cover',
    borderRadius:'1rem',
    height: { xs: '26rem', sm: '28rem', md: '32rem', lg:'34rem' },
    width: { xs: '16rem', sm: '19rem', md: '22rem', lg:'25rem' },
}

const title_css = {
    marginTop:responsiveSpacing(1),
    marginBottom:responsiveSpacing(1)
}


const everything_without_poster_title_css = {
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr', lg:'1fr 1fr 1fr 1fr' },


    // by default, alignItems is 'stretch', it makes lot of section larger than it needs to be. so, changing to 'start'
    alignItems:'start'



  /* If any section is bigger than than other sections, then you may provide at least "gridRow: 'span 2'" to that section. For example, plot section is larger than other section. So, in the 'movie-detail.jsx' file,on the sx={{}} object of plot section, use gridRow:'span 2'.  */

}




const a_info_section_css = {


    width: '18rem',
    minHeight:'8rem',
    padding:'1.5rem',
    backgroundColor: 'backgroundVariation.v2',
    boxShadow: 1,
    borderTopColor: 'primary.main',
    borderTop: 6,

    borderRadius:3,

    gridTemplateColumns: '1fr',

    position:'relative',


    // centering the the content horizontally & vertically
    display: 'grid',
    justifyItems: 'center',
    alignItems:'center'

}


const info_title_css = {

    position:'absolute',
    top:'-1.5rem',
    left:'-0.5rem',
    padding: responsiveSpacing(0.5),

 
    borderRadius:3,
    
    typography: 'subtitle2',
    fontWeight: 'medium',
    backgroundColor:'backgroundVariation.v3',
    boxShadow:2
}


const info_value_css = {
    padding: responsiveSpacing(0.5),
    typography: 'h6',
}





export { whole_component_css, all_contents_css, poster_image_wrapper_css,  poster_img_css, title_css, everything_without_poster_title_css, a_info_section_css, info_title_css, info_value_css }