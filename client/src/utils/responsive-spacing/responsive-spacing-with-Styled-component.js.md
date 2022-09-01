&nbsp;
**`Version`** : **`1.0`**
&nbsp;



&nbsp;
**Way to Use**
&nbsp;



```jsx

...⏭️


import responsiveSpacingWithStyledComponent from "utils/responsive-spacing/responsive-spacing-with-Styled-component";

// executing the function, by passing two value. One is the name of the css property and other one is the value in rem unit.
let padding = responsiveSpacingWithStyledComponent('padding', 0.4)

// making component
const MOVIE_TYPE_STYLED = styled(Typography)(
    ({ theme }) => ({
        ...⏭️

       {/* Destructuring */}
        ...padding

    })
  )

  

export default function MOVIE_POSTER({ movie }) {


return (


    <>


        ...⏭️

        <MOVIE_TYPE_STYLED> ... </MOVIE_TYPE_STYLED>


        ...⏭️

     </>


    )
}