// styled-components
import { styled } from '@mui/material/styles';
import ROUTER_LINK___STYLED from '@/styles/styled-components/router-link/router-link';

// components
import { Button } from '@mui/material';
import SVG_404___COMPONENT from './svg-jsx/svg-404';



/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function NOT_FOUND___COMPONENT() {


/*-------------------------------------------------------------------
     ✅ JSX
----------------------------------------------------------------------*/
    return (


        <WRAPPER_OF_JSX___STYLED>


            <SVG_404___COMPONENT
                background_is_always_light={false}
                background_is_always_dark={false}
                background_has_opposite_theme_color=
                {false}
            />


            <ROUTER_LINK___STYLED to='/'>
                <Button variant='outlined' size='large'>Back to Home</Button>
            </ROUTER_LINK___STYLED>



        </WRAPPER_OF_JSX___STYLED>


    )
}




/*-------------------------------------------------------------------
✅ Styled Components for <NOT_FOUND___COMPONENT/>
----------------------------------------------------------------------*/

/* 🍔 */
const WRAPPER_OF_JSX___STYLED = styled('div')

    (({ theme }) => `

    min-height: 100vh; 

    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center; 
    gap: 2.5rem; 
`)
