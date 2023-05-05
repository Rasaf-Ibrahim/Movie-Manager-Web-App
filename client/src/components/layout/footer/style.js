import { styled } from '@mui/material/styles'

const FOOTER_WRAPPER = styled('footer')(
     ({ theme }) => `

         padding:1.2rem;
   
         background-color: ${theme.palette.grey[700]};
         color: ${theme.palette.grey[100]};

         text-align:center;
       `
   )
   


export {FOOTER_WRAPPER}
