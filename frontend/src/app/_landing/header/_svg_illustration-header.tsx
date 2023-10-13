/*__________________________________________

 ✅ import
____________________________________________*/

// hook
import { useTheme } from '@mui/material/styles';

// styled-components
import { styled } from '@mui/material/styles';

// utils
import css_media_queries from '@/styles/css-utils/media-queries';

// colors
import { blueGrey, pink, teal, grey, brown, cyan } from "@mui/material/colors";

// components
import { SvgIcon } from '@mui/material';

/*__________________________________________

 ✅ types
____________________________________________*/

type type_of_svg_illustration_header_props = {

    background_is_always_light?: boolean,
    background_is_always_dark?: boolean,
    background_has_opposite_theme_color?: boolean
}



/*__________________________________________

✅ Functional Component 
____________________________________________*/
function SVG_ILLUSTRATION_HEADER___COMPONENT(props: type_of_svg_illustration_header_props) {

    //  useTheme
    const { background_is_always_dark, background_is_always_light, background_has_opposite_theme_color } = props

    
    
    // useTheme
    const theme = useTheme()


    /* 🍪 color 🍪  */
    let first_color
    let second_color
    let third_color
    let fourth_color
    let fifth_color
    let sixth_color
    let seventh_color
    let eighth_color
    let ninth_color




    if (
        // theme is either dark or light, background is always light. So, svg should always be dark
        (background_is_always_light && !background_is_always_dark && !background_has_opposite_theme_color) ||

        // theme is dark but background is light. So, svg should be dark
        (theme.palette.mode === 'dark' && background_has_opposite_theme_color && !background_is_always_light && !background_is_always_dark) ||

        //  theme is light and background is also light. So, svg should be dark
        (theme.palette.mode !== 'dark' && !background_has_opposite_theme_color && !background_is_always_light && !background_is_always_dark)
    ) {

        // bottom of the couch, top of the couch depends on this
        first_color = grey[900]

        // shoe, hair, pant
        second_color = brown[700]

        // shirt
        third_color = pink[900]

        // stand of lamp
        fourth_color = cyan[500]

        // lamp, couch cover, popcorn box shade, right glass 
        fifth_color = cyan[600]

        // skin
        sixth_color = "#ffb8b8"

        // left glass 
        seventh_color = pink[400]

        // popcorn
        eighth_color = grey[100]

        // button of lamp
        ninth_color = cyan[700]
       
    }


    else if (
        // theme is either dark or light, background is always dark. So, svg should always be light
        (background_is_always_dark && !background_is_always_light && !background_has_opposite_theme_color) ||

        // theme is dark and background is  also dark. So, svg should be light
        (theme.palette.mode === 'dark' && !background_has_opposite_theme_color && !background_is_always_light && !background_is_always_dark) ||

        //  theme is light but background is dark. So, svg should be light
        (theme.palette.mode !== 'dark' && background_has_opposite_theme_color && !background_is_always_light && !background_is_always_dark)
    ) {

        first_color = blueGrey[800]
        second_color = grey[100]
        third_color = grey[900]
        fourth_color = cyan[100]
        fifth_color = cyan[400]
        sixth_color = "#ffb8b8"
        seventh_color = pink[400]
        eighth_color = grey[100]
        ninth_color = cyan[400]
    }



    // TSX
    return (
        
        <SVG_STYLED viewBox="0 0 719.769 687.25">

            <path
                fill={ninth_color}
                d="M668.77 182.587V144h-6v38.587a8 8 0 106 0z"
            ></path>
            <path
                fill={fourth_color}
                d="M682.77 572h-41V74h-16v498h-41a37 37 0 00-37 37h172a37 37 0 00-37-37z"
            ></path>
            <path
                fill={fifth_color}
                d="M547.852 148h171.834L709.18 16.66A18.198 18.198 0 00691.133 0H576.406a18.198 18.198 0 00-18.046 16.66z"
            ></path>
            <path
                fill={first_color}
                d="M61.098 457.536h524.478v-53.547c0-144.598-117.64-262.239-262.239-262.239S61.097 259.39 61.097 403.99z"
            ></path>
            <path
                d="M61.098 457.536h524.478v-53.547c0-144.598-117.64-262.239-262.239-262.239S61.097 259.39 61.097 403.99z"
                opacity="0.2"
            ></path>
            <path
                fill={fifth_color}
                d="M129.072 476.07h403.633a81.097 81.097 0 00-80.994-79.632H210.066a81.097 81.097 0 00-80.994 79.633z"
            ></path>
            <circle cx="81.006" cy="386.827" r="81.006" fill={first_color}></circle>
            <circle cx="572.533" cy="386.827" r="81.006" fill={first_color}></circle>
            <path
                fill={first_color}
                d="M511.435 428.017v30.205H137.298v-30.205H53.546v147.222a34.011 34.011 0 0034.011 34.011h473.62a34.011 34.011 0 0034.01-34.011V428.017z"
            ></path>
            <circle cx="81.006" cy="386.827" r="16.476" opacity="0.2"></circle>
            <circle cx="572.533" cy="386.827" r="16.476" opacity="0.2"></circle>
            <path
                fill={sixth_color}
                d="M353.178 132.496s1.62 30.775 12.958 37.254 0 50.211 0 50.211l-53.451 1.62-3.24-51.831s6.48-21.056 3.24-30.775 40.493-6.479 40.493-6.479z"
            ></path>
            <path
                fill={sixth_color}
                d="M413.107 560.102L393.671 582.778 424.446 611.933 440.643 579.539 413.107 560.102z"
            ></path>
            <path
                fill={sixth_color}
                d="M275.431 560.102L294.868 582.778 264.093 611.933 247.896 579.539 275.431 560.102z"
            ></path>
            <path
                fill={second_color}
                d="M402.58 345.49s116.619 38.873 110.14 76.126-56.69 168.45-56.69 168.45-27.535 0-48.592-29.154l14.578-32.394s-6.479-17.817 4.86-21.057 17.816-59.93 17.816-59.93-82.606-6.478-100.423-37.253l-32.394-77.746z"
            ></path>
            <path
                fill={second_color}
                d="M285.96 345.49s-116.62 38.873-110.141 76.126 56.69 168.45 56.69 168.45 27.535 0 48.591-29.154l-14.577-32.394s6.479-17.817-4.86-21.057-17.816-59.93-17.816-59.93 82.606-6.478 100.422-37.253l32.395-77.746zM418.776 599.785s16.198-14.577 17.817-3.24-1.62 56.69-1.62 56.69 16.198 34.015-8.098 34.015-35.634-25.915-32.394-51.831-11.338-35.634-11.338-35.634-17.817-35.634 0-38.873 24.295 4.86 24.295 4.86-6.478 29.154 11.338 34.013z"
            ></path>
            <path
                fill={second_color}
                d="M269.762 599.785s-16.197-14.577-17.816-3.24 1.62 56.69 1.62 56.69-16.198 34.015 8.098 34.015 35.634-25.915 32.394-51.831 11.338-35.634 11.338-35.634 17.817-35.634 0-38.873-24.296 4.86-24.296 4.86 6.48 29.154-11.338 34.013z"
            ></path>
            <circle cx="328.072" cy="113.87" r="37.254" fill={sixth_color}></circle>
            <path
                fill={third_color}
                d="M333.741 177.849l-22.676-17.817-55.07 25.915-1.62 147.395s-34.014 16.197-24.296 37.253c0 0 29.155 6.479 42.113 19.437s85.845-4.86 116.62-14.578 38.873-21.056 38.873-21.056l-30.775-43.733 17.817-111.76-55.064-37.021z"
            ></path>
            <path
                fill={second_color}
                d="M373.363 88.514a32.723 32.723 0 01-2.22-3.447c-1.156-2.813.669-6.128-1.036-8.756-1.74-2.681-6.159-3.247-9.165-5.069-4.63-2.806-5.473-8.313-9.811-11.406-3.127-2.229-7.585-2.83-11.762-2.702s-8.3.882-12.479.965a37.622 37.622 0 01-16.377-3.349l3.083 6.03a30.776 30.776 0 01-9.678-3.922c-1.363 1.691 1.132 4.259-.415 5.845a4.963 4.963 0 01-2.185 1.013 52.246 52.246 0 00-16.537 8.068 8.31 8.31 0 00-2.783 2.938c-.804 1.78-.091 3.748-.152 5.641-.11 3.441-2.738 6.441-4.602 9.54s-2.87 7.119-.105 9.75a25.135 25.135 0 011.931 1.703c2.77 3.267-2.133 8.052.23 11.519 1.026 1.505 3.13 2.267 4.957 3.156a19.807 19.807 0 018.475 7.553l-1.421-10.428a1.72 1.72 0 01.283-1.519c.688-.701 2.13-.422 3.079-.886 1.045-.511 1.124-1.684 1.082-2.666l-.32-7.57c-.143-3.405-.183-3.857 2.324-6.606 1.752-1.92 4.508-3.078 7.276-3.93 6.325-1.947 13.128-2.62 19.853-3.278 7.809-.764 16.602-4.553 22.666-.53 4.964 3.293 6.615 8.706 9.007 13.507 2.15 4.315 7.668 17.02 12.262 10.142 2.884-4.319 7.297-16.497 4.54-21.306z"
            ></path>
            <path
                fill={first_color}
                d="M334.468 103.063a.58.58 0 00-.58.579v15.597a.58.58 0 00.58.578h26.85a.58.58 0 00.578-.578v-15.597a.58.58 0 00-.579-.579z"
            ></path>
            <path
                fill={seventh_color}
                d="M337.468 104.438a1.08 1.08 0 00-1.078 1.08v11.845a1.08 1.08 0 001.078 1.079h20.849a1.08 1.08 0 001.078-1.079v-11.846a1.08 1.08 0 00-1.078-1.079z"
            ></path>
            <path fill={first_color} d="M320.784 108.201H334.77V111.44H320.784z"></path>
            <path
                fill={first_color}
                d="M296.447 103.063a.58.58 0 00-.579.579v15.597a.58.58 0 00.579.578h26.85a.58.58 0 00.578-.578v-15.597a.58.58 0 00-.578-.579z"
            ></path>
            <path
                fill={fifth_color}
                d="M299.448 104.438a1.08 1.08 0 00-1.08 1.08v11.845a1.08 1.08 0 001.08 1.079h20.848a1.08 1.08 0 001.079-1.079v-11.846a1.08 1.08 0 00-1.08-1.079z"
            ></path>
            <path
                fill={first_color}
                d="M281.77 297.75h93a14 14 0 0114 14h-121a14 14 0 0114-14z"
            ></path>
            <path
                fill={eighth_color}
                d="M381.27 296.75a4.961 4.961 0 00-1.6.272 2.995 2.995 0 00-5.9.728c0 .015.003.029.003.044a5.142 5.142 0 00-1.103.228 3.011 3.011 0 00-1.483-1.91 5.017 5.017 0 002.164-2.37 4.02 4.02 0 10-.082-7.992 4.961 4.961 0 00-1.599.272 2.99 2.99 0 10-5.749 1.625c-.12.084-.23.177-.343.27a2.84 2.84 0 00-2.044-.68 4.98 4.98 0 00-9.684 1.55 5.118 5.118 0 00-1.18.235 3 3 0 00-.172-.493 3.758 3.758 0 001.271-2.779 4.272 4.272 0 00-4.5-4 4.961 4.961 0 00-1.599.272 2.99 2.99 0 10-5.749 1.625 4.987 4.987 0 00-2.137 3.87c-.042.037-.09.068-.13.107a3.563 3.563 0 00.115-.874 4.272 4.272 0 00-4.5-4 4.961 4.961 0 00-1.599.272 2.99 2.99 0 10-5.749 1.625 4.987 4.987 0 000 8.206 2.727 2.727 0 000 1.794 5.049 5.049 0 00-1.28 1.292 2.981 2.981 0 00-5.84.505 4.764 4.764 0 00-1.286-.52 5.027 5.027 0 001.836-2.181 4.02 4.02 0 10-.082-7.993 4.961 4.961 0 00-1.599.272 2.99 2.99 0 10-5.749 1.625c-.064.045-.122.097-.184.145-.156-.015-.307-.042-.468-.042a4.961 4.961 0 00-1.599.272c-.019-.075-.05-.145-.074-.218a2.947 2.947 0 00-3.063-3.568 4.995 4.995 0 10-7.85 5.566 5.173 5.173 0 00-1.013.22 2.973 2.973 0 00-4.762-1.608 4.676 4.676 0 00-3.639-1.664 4.961 4.961 0 00-1.599.272 2.99 2.99 0 10-5.749 1.625 4.99 4.99 0 00-2.152 4.103c0 .016.005.03.005.045a4.148 4.148 0 00-2.104.227 2.99 2.99 0 10-5.749 1.625 4.98 4.98 0 003.936 8.97 4.982 4.982 0 009.414 1.28 31.17 31.17 0 0010.802-.488 4.982 4.982 0 009.278.334 4.892 4.892 0 002.098-.52 4.977 4.977 0 008.902-.48 4.844 4.844 0 015.418 3.007 7.8 7.8 0 015.744-3.179 4.875 4.875 0 005.415-2.067 4.998 4.998 0 009.423 3.239 4.892 4.892 0 002.098-.52 4.977 4.977 0 008.902-.48 4.892 4.892 0 002.098-.52 4.948 4.948 0 007.412 1.437 4.979 4.979 0 008.906 2.066 4.966 4.966 0 007.584-1.983 4.02 4.02 0 10-.082-7.993zm-89.379-2.064l-.014.073c-.036-.001-.07-.009-.108-.009a2.978 2.978 0 00-.445.045c.008-.018.02-.034.027-.052a4.98 4.98 0 00.54-.057zm41.78-1.664c-.015-.058-.04-.111-.058-.168a5.024 5.024 0 001.738-2.111 4.681 4.681 0 003.477-1.575 3.01 3.01 0 00-.059.582 2.967 2.967 0 00.152.897 5.018 5.018 0 00-1.859 2.437 4.907 4.907 0 00-3.392-.062zm29.95.373c-.002-.061.005-.124.001-.185a2.986 2.986 0 00.381-.026 4.956 4.956 0 00.953 1.765c-.094.026-.194.042-.286.073a3.016 3.016 0 00-1.05-1.627z"
            ></path>
            <path
                fill={first_color}
                d="M277.843 302.75a10.441 10.441 0 00-10.427 11.002l6.771 93.115a10.44 10.44 0 0010.427 9.883h87.31a10.44 10.44 0 0010.427-9.883l6.772-93.115a10.441 10.441 0 00-10.427-11.002z"
            ></path>
            <path fill={fifth_color} d="M282.769 302.75H288.769V416.75H282.769z"></path>
            <path fill={fifth_color} d="M299.769 302.75H305.769V416.75H299.769z"></path>
            <path fill={fifth_color} d="M316.769 302.75H322.769V416.75H316.769z"></path>
            <path fill={fifth_color} d="M333.769 302.75H339.769V416.75H333.769z"></path>
            <path fill={fifth_color} d="M350.769 302.75H356.769V416.75H350.769z"></path>
            <path fill={fifth_color} d="M367.769 302.75H373.769V416.75H367.769z"></path>
            <path
                fill={sixth_color}
                d="M367.755 359.257l-19.436 11.338s-46.972 38.873-14.578 45.352 40.493-27.535 40.493-27.535l11.338-12.958z"
            ></path>
            <path
                fill={sixth_color}
                d="M275.431 351.158l19.437 11.338s46.972 38.874 14.578 45.353-40.493-27.536-40.493-27.536l-11.338-12.957z"
            ></path>
            <path
                fill={third_color}
                d="M393.67 197.285l21.057 1.62s16.197 14.577 14.578 34.014c0 0 14.577 42.113 11.338 59.93 0 0 3.24 29.155-1.62 40.493s-45.352 55.07-45.352 55.07-37.254-29.155-35.634-30.775l48.592-48.591-24.296-32.395zM255.995 185.947l-.81.81s-36.444 15.387-34.824 34.824c0 0-14.577 42.113-11.338 59.93 0 0-3.24 29.154 1.62 40.493s45.352 55.07 45.352 55.07 37.253-29.155 35.634-30.775l-48.592-48.591 24.296-32.395z"
            ></path>
        </SVG_STYLED>
    );



}





/*__________________________________________
✅ Styled Components for <SVG_ILLUSTRATION_HEADER___COMPONENT/>
____________________________________________*/

const SVG_STYLED = styled(SvgIcon)
    (({ theme }) => `
          
    ${css_media_queries.name_xs_sm_md_lg('height', '15rem', '18rem', '20rem', '22rem')}

    ${css_media_queries.name_xs_sm_md_lg('width', '15rem', '18rem', '20rem', '22rem')}
`)







export default SVG_ILLUSTRATION_HEADER___COMPONENT