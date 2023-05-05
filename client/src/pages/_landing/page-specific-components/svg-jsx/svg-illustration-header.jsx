// hook
import { useTheme } from '@mui/material/styles';

// PropTypes
import { PropTypes } from "prop-types";


// styled-components
import { styled } from '@mui/material/styles';

// utils
import media_queries from '@/utils/media-queries/media-queries';

// colors
import { blueGrey, pink, teal } from "@mui/material/colors";

// components
import { SvgIcon } from '@mui/material';



/*-------------------------------------------------------------------
✅ Functional Component 
----------------------------------------------------------------------*/

export default function SVG_ILLUSTRATION_HEADER___COMPONENT ({ background_is_always_dark, background_is_always_light, background_has_opposite_theme_color }) {



    
    // useTheme
    const theme = useTheme()


    /* 🍪 color 🍪  */
    let first_color
    let second_color




    if (
        // theme is either dark or light, background is always light. So, svg should always be dark
        (background_is_always_light && !background_is_always_dark && !background_has_opposite_theme_color) ||

        // theme is dark but background is light. So, svg should be dark
        (theme.palette.mode === 'dark' && background_has_opposite_theme_color && !background_is_always_light && !background_is_always_dark) ||

        //  theme is light and background is also light. So, svg should be dark
        (theme.palette.mode !== 'dark' && !background_has_opposite_theme_color && !background_is_always_light && !background_is_always_dark)
    ) {

        first_color = teal[200]
        second_color = blueGrey[700]
    }


    else if (
        // theme is either dark or light, background is always dark. So, svg should always be light
        (background_is_always_dark && !background_is_always_light && !background_has_opposite_theme_color) ||

        // theme is dark and background is  also dark. So, svg should be light
        (theme.palette.mode === 'dark' && !background_has_opposite_theme_color && !background_is_always_light && !background_is_always_dark) ||

        //  theme is light but background is dark. So, svg should be light
        (theme.palette.mode !== 'dark' && background_has_opposite_theme_color && !background_is_always_light && !background_is_always_dark)
    ) {

        first_color = teal[100]
        second_color = blueGrey[700]

    }




/*-------------------------------------------------------------------
    ✅ JSX
----------------------------------------------------------------------*/
    return (


        <SVG_STYLED viewBox="0 0 1139.17088 654.54324">
            
            <title>{"progressive_app"}</title>
            <circle cx={246.827} cy={521.765} r={59.243} fill="#f2f2f2" />
            <circle cx={256.46} cy={513.095} r={59.243} fill={first_color} />
            <path
                fill={second_color}
                d="M304.171 447.543h733v2h-733zM683.793 18.652h-260.17V13.29h-117.97v5.362H44.41a17.599 17.599 0 0 0-17.598 17.599v356.252A17.599 17.599 0 0 0 44.41 410.1h639.383a17.599 17.599 0 0 0 17.598-17.598V36.25a17.599 17.599 0 0 0-17.598-17.599Z"
            />
            <path fill={first_color} d="M50.406 49.754h627.391v353.913H50.406z" />
            <circle cx={363.565} cy={33.667} r={6.435} fill={first_color} />
            <path opacity={0.1} d="M498.374 403.667H50.406V49.754l447.968 353.913z" />
            <circle cx={148.574} cy={316.876} r={60.307} fill="#f2f2f2" />
            <path
                fill={second_color}
                d="M509.953 240.622h58.605v12.246h-58.605zM439.102 145.279h200.307v5.248H439.102zM439.102 161.898h200.307v5.248H439.102zM439.102 178.518h200.307v5.248H439.102zM439.102 195.137h200.307v5.248H439.102zM439.102 211.756h200.307v5.248H439.102z"
            />
            <path fill="#f2f2f2" d="M614.917 56.934h24.492v24.492h-24.492z" />
            <path
                d="M650.78 92.797h-29.74v-29.74h29.74Zm-28.447-1.293h27.154V64.35h-27.154ZM719.007 397.232h-61.23v-4.412a.875.875 0 0 0-.874-.874H635.91a.875.875 0 0 0-.875.874v4.412h-13.12v-4.412a.875.875 0 0 0-.875-.874h-20.993a.875.875 0 0 0-.874.874v4.412h-13.121v-4.412a.875.875 0 0 0-.875-.874h-20.993a.875.875 0 0 0-.874.874v4.412h-13.12v-4.412a.875.875 0 0 0-.876-.874h-20.992a.875.875 0 0 0-.875.874v4.412h-13.12v-4.412a.875.875 0 0 0-.875-.874h-20.993a.875.875 0 0 0-.875.874v4.412h-13.12v-4.412a.875.875 0 0 0-.875-.874h-20.993a.875.875 0 0 0-.875.874v4.412h-13.12v-4.412a.875.875 0 0 0-.875-.874H277.28a.875.875 0 0 0-.874.874v4.412h-13.12v-4.412a.875.875 0 0 0-.876-.874h-20.993a.875.875 0 0 0-.874.874v4.412h-13.12v-4.412a.875.875 0 0 0-.876-.874h-20.992a.875.875 0 0 0-.875.874v4.412h-13.12v-4.412a.875.875 0 0 0-.875-.874h-20.993a.875.875 0 0 0-.875.874v4.412h-13.12v-4.412a.875.875 0 0 0-.875-.874H133.83a.875.875 0 0 0-.875.874v4.412h-13.12v-4.412a.875.875 0 0 0-.875-.874H97.967a.875.875 0 0 0-.875.874v4.412h-13.12v-4.412a.875.875 0 0 0-.875-.874H62.104a.875.875 0 0 0-.875.874v4.412H20.993A20.993 20.993 0 0 0 0 418.225v9.492a20.993 20.993 0 0 0 20.993 20.993h698.014A20.993 20.993 0 0 0 740 427.717v-9.492a20.993 20.993 0 0 0-20.993-20.993ZM163.171 354.543a76 76 0 1 1 76-76 76.086 76.086 0 0 1-76 76Zm0-150a74 74 0 1 0 74 74 74.084 74.084 0 0 0-74-74ZM586.171 32.543h255v2h-255zM406.171 560.543h733v2h-733zM192.672 652.543h255v2h-255z"
                fill={second_color}
            />
            <path fill={first_color} d="M471 550h28v28h-28z" />
            <path
                d="M516 562h-34v-34h34Zm-32.522-1.478h31.044v-31.044h-31.044Z"
                fill={second_color}
            />
            <path fill={first_color} d="M796 22h28v28h-28z" />
            <path
                d="M841 34h-34V0h34Zm-32.522-1.478h31.044V1.478h-31.044Z"
                fill={second_color}
            />
            <path fill={first_color} d="M1078 550h28v28h-28z" />
            <path
                d="M1123 562h-34v-34h34Zm-32.522-1.478h31.044v-31.044h-31.044ZM1057.171 231.958h-2.378v-65.161a37.714 37.714 0 0 0-37.714-37.714H879.025a37.714 37.714 0 0 0-37.713 37.714v357.481a37.714 37.714 0 0 0 37.713 37.714h138.054a37.714 37.714 0 0 0 37.714-37.714V278.341h2.378Z"
                fill={second_color}
            />
            <path
                d="M1046.761 169.013v356.96a28.165 28.165 0 0 1-28.16 28.17h-138.72a28.165 28.165 0 0 1-28.16-28.17v-356.96a28.163 28.163 0 0 1 28.16-28.16h16.83a13.38 13.38 0 0 0 12.39 18.43h79.09a13.38 13.38 0 0 0 12.39-18.43h18.02a28.163 28.163 0 0 1 28.16 28.16Z"
                fill={first_color}
            />
            <path
                fill={second_color}
                d="M928.58 376.218h41.324v12.246H928.58zM878.621 280.875h141.24v5.248h-141.24zM878.621 297.494h141.24v5.248h-141.24zM878.621 314.114h141.24v5.248h-141.24zM878.621 330.733h141.24v5.248h-141.24zM878.621 347.352h141.24v5.248h-141.24z"
            />
            <path fill="#f2f2f2" d="M929.684 211.179h24.492v24.492h-24.492z" />
            <path
                d="M939.06 217.303v29.74h29.74v-29.74Zm28.45 28.45h-27.16v-27.16h27.16Z"
                fill={second_color}
            />
            <path
                d="M1046.761 487.853v38.12a28.165 28.165 0 0 1-28.16 28.17h-138.72a28.165 28.165 0 0 1-28.16-28.17v-192.21l116.87 92.33 2 1.58 21.74 17.17 2.03 1.61Z"
                opacity={0.1}
            />
            <circle cx={937.241} cy={498.707} r={43.868} fill="#f2f2f2" />
            <path
                d="M320.171 654.543a87 87 0 1 1 87-87 87.099 87.099 0 0 1-87 87Zm0-172a85 85 0 1 0 85 85 85.096 85.096 0 0 0-85-85ZM950.171 532.543a55 55 0 1 1 55-55 55.062 55.062 0 0 1-55 55Zm0-108a53 53 0 1 0 53 53 53.06 53.06 0 0 0-53-53Z"
                fill={second_color}
            />
        </SVG_STYLED>



    )

}





/*-------------------------------------------------------------------
✅ Styled Components for <SVG_ILLUSTRATION_HEADER___COMPONENT/>
----------------------------------------------------------------------*/

const SVG_STYLED = styled(SvgIcon)
    (({ theme }) => `
          
    ${media_queries.name_xs_sm_md_lg('height', '15rem', '18rem', '20rem', '22rem')}

    ${media_queries.name_xs_sm_md_lg('width', '15rem', '18rem', '20rem', '22rem')}
`)