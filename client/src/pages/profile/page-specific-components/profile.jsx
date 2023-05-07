// store
import { user_store } from '@/store/user-store';
import media_queries from '@/utils/media-queries/media-queries';
import { Avatar, Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles';

// styled-components
import { styled } from "@mui/material/styles";

/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function PROFILE___COMPONENT() {


    // 🍪 get the state properties 
    const { user_info } = user_store(state => ({
        user_info: state?.user_info
    }))


    // 🍪 theme
    const theme = useTheme()




    return (
        <WRAPPER_OF_JSX___STYLED>

            <PROFILE_CARD___STYLED>

                <AVATAR___STYLED
                    src={user_info.picture_link}
                    alt={user_info.username}
                >
                    {/* if the user has no profile picture, we will show the first letter of the username as avatar */}
                    {user_info.username.slice(0, 1)}

                </AVATAR___STYLED>


                <Typography variant='h4'>
                    {user_info.full_name}
                </Typography>

                
                <Typography variant='body1'>
                   Username: {user_info.username}
                </Typography>


                <Typography variant='body1'>
                   Email: {user_info.email}
                </Typography>




                
            </PROFILE_CARD___STYLED>

        </WRAPPER_OF_JSX___STYLED>
    )
}





/*-------------------------------------------------------------------
✅ Styled Components for <PROFILE___COMPONENT/>
----------------------------------------------------------------------*/



const WRAPPER_OF_JSX___STYLED = styled((props) =>

    <Box {...props} />

)(({ theme }) => `

    ${/* child layout */ ''}
    display: flex;
    flex-direction: column;
    align-items: center;


`)







const PROFILE_CARD___STYLED = styled((props) =>

    <Box {...props} />

)(({ theme }) => `

    ${/* layout */ ''}
    margin-top:7rem; 
    padding:2rem;
    ${media_queries.name_xs_sm_md_lg_xl('width', '100%', '90%', '80%', '70%', '60%')};

    ${/* appearance */ ''}
    background-color: ${theme.palette.background.variation};
    border: 0.05rem solid ${theme.palette.divider};
    border-radius: 0.5rem;


    ${/* child layout */ ''}
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:2rem;


`)







const AVATAR___STYLED = styled((props) =>

    <Avatar {...props} />

)(({ theme }) => `

    ${/* layout */''}
    width: 7rem;
    height: 7rem;
    margin-top:-6rem;

    ${/* appearance */''}
    border: 0.5rem solid ${theme.palette.background.default}; 
    borderRadius:50%; 

`)

