

const whole_component_css = {
    // margin top is bigger than usual because card image is positioned absolute and it has minus value for 'top' property.
    marginTop: '5.5rem',

    // centering all the content of the component
    display: 'grid',
    justifyItems: 'center'
}




const all_cards_wrapper_css = {

    /* structuring all the cards with grid*/
    display: 'grid',

    /* mobile will have one card in a row, tablet will have 2, laptop will have 3, desktop will have 4. */
    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr' },

    /* By default, value of alignItems is 'stretch' and that makes all the cards' size to be same. But there is a problem with making all the cards's size to be same. There are some cards which have less content but they get stretched to have the same size as another more contented card. In this way, we get empty space on that less contented stretched card and it doesn't look good. To avoid this situation, changing alignItems to 'start' */
    alignItems: 'start',

    /* rowGap is bigger than usual because card image is positioned absolute and it has minus value for 'top' property. */
    rowGap: '5.5rem',
    columnGap: '2.2rem'
}



const a_card_wrapper_css = {

    /* providing width to the card. width must not be larger than 18rem because I have created all the breakpoints by multiplying 20rem(320px) */
    width: '17rem',


    backgroundColor: 'background.variation_1',
    boxShadow: 1,

    borderRadius: '1rem',


    /* here, position is relative because we want the 'card_image_wrapper_css' position to be absolute */
    position: 'relative'
}



const card_image_wrapper_css = {
    position: 'absolute',
    width: '80%',
    top: '-3rem',

    //positioning this section to the horizontal center of its parent 
    left: '50%',
    transform: 'translateX(-50%)'
}


const card_image_css = {
    objectFit: 'cover',
    height: '18rem',
    width: '100%'  /* 100% of the parent */
}


const card_all_content_except_image_css = {

    // margin top is way larger than usual because card image is positioned absolute and the rest of content must be placed after the image.
    marginTop: '15rem',

    padding: '1.1rem',

    // centering all the child component and providing gap between them 
    display: 'grid',
    justifyItems: 'center',
    gap: '1.6rem',

    textAlign: 'center',


}


const movie_title_css = {
    typography: 'h5',
    fontWeight: '600'
}


const movie_type_year_wrapper_css = {

    // centering all the child component and providing gap between them 
    display: 'grid',
    justifyItems: 'center',

    // typography style for the child components
    typography: 'subtitle2'
}












export {
    whole_component_css,
    all_cards_wrapper_css,
    a_card_wrapper_css,
    card_image_wrapper_css,
    card_image_css,
    card_all_content_except_image_css,
    movie_type_year_wrapper_css,
    movie_title_css,
}