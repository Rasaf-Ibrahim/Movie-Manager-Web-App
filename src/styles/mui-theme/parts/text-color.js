import { grey} from '@mui/material/colors';


// Use this text object for coloring your text with 'sx' prop

export function textColor (darkModeVariable) {

    
    return {

        text: {
          v1: darkModeVariable?  grey[50] :  grey[900],
          v2: darkModeVariable?  grey[100] : grey[800],
          v3: darkModeVariable?  grey[200] : grey[700],
          v4: darkModeVariable?  grey[300] : grey[600],
          v5: darkModeVariable?  grey[400] : grey[500],
        
        
          opp: {
            v1: darkModeVariable?  grey[900] : grey[50],
            v2: darkModeVariable?  grey[800] : grey[100],
            v3: darkModeVariable?  grey[700] : grey[200],
            v4: darkModeVariable?  grey[600] : grey[300],
            v5: darkModeVariable?  grey[500] : grey[400],
          }
        
        },

  
        text_light: { 
          v1: grey[50],
          v2: grey[100],
          v3: grey[200],
          v4: grey[300],
          v5: grey[400],
        },

        text_dark: { 
          v1: grey[500],
          v2: grey[600],
          v3: grey[700],
          v4: grey[800],
          v5: grey[900],
        },
    

    }

}