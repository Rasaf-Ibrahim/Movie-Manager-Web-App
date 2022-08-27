import responsiveSpacing from "utils/responsive-spacing/responsive-spacing"

    

    
    // CSS
    const all_cards_wrapper_css = {
       margin: responsiveSpacing(1),
       display: 'flex',
       justifyContent: 'center', 
       flexWrap: 'wrap', 
       gap: responsiveSpacing(1)
    }

    const card_wrapper_css = {
        width: '16rem', position: 'relative'
    }

    const card_image_css= {
        objectFit: 'cover', height: '18rem', width: '100%'
    }

    const movie_type_css = {
        position: 'absolute',
        top: '0rem',
        right: '0rem',
        backgroundColor: 'brand.t1.v1',
        color: 'text.opp.v1',
        fontWeight: '600',
        borderRadius: '0 0 0 1rem',
        padding:responsiveSpacing(0.4)

    }


    const card_title_css = {
        marginTop:responsiveSpacing(0.8),
        marginBottom:responsiveSpacing(2),
        padding:responsiveSpacing(0.2),
        textAlign:'center',
        fontWeight:'600' 
    }

    const card_more_info_button_css = {
        position: 'absolute', bottom:'0', 
        right: '0',
        left:'0', 
        margin: '0 auto', display:'flex', justifyContent:'center'
    }



    export {

        all_cards_wrapper_css,
        card_image_css,
        movie_type_css,
        card_wrapper_css,
        card_title_css,
        card_more_info_button_css

    }