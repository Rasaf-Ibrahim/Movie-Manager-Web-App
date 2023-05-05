

const light_1 = `hsl(88, 60%, 89%)`
const light_2 = `hsl(88, 60%, 84%)`
const light_3 = `hsl(88, 60%, 79%)`

const dark_1 = `hsl(88, 40%, 12%)`
const dark_2 = 'hsl(88, 40%, 15%)'
const dark_3 = 'hsl(88, 40%, 18%)'




export function theme_palette_primary(darkModeVariable) {



    return {

        primary: {


        
            light: darkModeVariable ? light_1 : dark_3,
            main: darkModeVariable ? light_2 : dark_2,
            dark: darkModeVariable ? light_3 : dark_1,
            contrastText: darkModeVariable ? 'rgba(0, 0, 0, 0.87)' : '#fff',

            opposite_theme: {

                light: darkModeVariable ? dark_3 : light_1,
                main: darkModeVariable ? dark_2 : light_2,
                dark: darkModeVariable ? dark_1 : light_3,
                contrastText: darkModeVariable ? '#fff' : 'rgba(0, 0, 0, 0.87)',
            },


            static_variant: {

                light_1: light_1,
                light_2: light_2,
                light_3: light_3,

                dark_1: dark_1,
                dark_2: dark_2,
                dark_3: dark_3
            }


        }


    }

}