&nbsp;
**`Version`** : **`1.0`**
&nbsp;


&nbsp;
### Problem: Responsive spacing is not possible from the root

&nbsp;


**sx prop**
&nbsp;

> We need to manually provide responsive-spacing:

```js

<Box sx={{m: {xs:2, md:2.5, xl:3}}}>...</Box>
<Stack spacing={{xs:2, md:2.5, xl:3}}>...</Stack>

```

&nbsp;

**Styled Component**

Same problem, we need to manually provide responsive-spacing. But in this case, we need to use media query too.





&nbsp;

### Solution: `responsiveSpacing` object.

&nbsp;

- In the `utils/responsive-spacing` folder, I have created the `responsive-spacing.js` file.

&nbsp;

- In that file, I have created `responsiveSpacing` object. The object is holding necessary functions  and by using those functions, we will not need to pass spacing for all the breakpoint manually.

&nbsp;

- All the functions, inside the `responsiveSpacing` object  accepts two arguments: `type` & `space`. You must pass both of the arguments. 

&nbsp;

- For `type`, you need to pass a string. The string has to be a valid space property: `margin`, `margin-top`, `padding`, `gap`, etc. 
  
&nbsp;

- For `space` You must pass one numerical value. Suppose, you want to have `1rem` for the mobile screen. So, you will pass `1`. Automatically, other larger screen's value will be calculated based on the the screen size and your passed value.

&nbsp;

> Remember:
- 1 = 1rem = 16px
- 0.5 = 0.5rem = 8px
- 0.25 = 0.25rem = 4px
- 0.125 = 0.125rem = 2px


&nbsp;

**sx Prop**

&nbsp;


In the `responsiveSpacing` object, there is `sxProp()` function. We can access that function with dot notation: `responsiveSpacing.sxProp()`.



&nbsp;
> Way to use:

```jsx
import {Box} from  '@mui/material'

import responsiveSpacing from'@/styles/utils/responsive-spacing/responsive-spacing';

export default function Testing() {

    return (
          <Box sx={{...responsiveSpacing.sxProp('margin-bottom', 10)}}>
            Hello
          </Box>
    )
}
```

In the above example, the `Box` component will have margin bottom of 10rem or 160px.




&nbsp;

**Styled Component - CSS Syntax**

&nbsp;



In the `responsiveSpacing` object, there is `styledComponent` object. Inside the `styledComponent` object, there is  `cssSyntax()` function.  We can access that function with dot notation: `responsiveSpacing.styledComponent.cssSyntax()`.



&nbsp;
> Way to use:


```js
import { styled } from '@mui/material/styles';

import responsiveSpacing from'@/styles/utils/responsive-spacing/responsive-spacing';


const STYLED_TESTING = styled('div')(

    ({ theme }) => `

        ${responsiveSpacing.styledComponent.cssSyntax('margin-bottom', 10)}

    `
  )

```

In the above example, the `STYLED_TESTING` component will have margin bottom of 10rem or 160px.




&nbsp;

### Why Should we not use JavaScript Object Syntax While Working With Styled Component?

&nbsp;


There is a big benefit of using `JavaScript Object Syntax` is that we can use spread operator to copy styles with very little code. But it has the following media query problem:

&nbsp;

**We can't have same media query more than one time in `JavaScript Object Syntax`**

&nbsp;


Suppose, there is class a `box-section` in the html and we are styling it by writing normal CSS:

```css

@media (min-width: 640px) {

  .box-section {

      margin: 1rem;

  }

}


@media (min-width: 640px) {

  .box-section {

      padding: 1rem;

  }

}

```

In the above example, we can see that the both media query is actually same. So, it was enough to have one media query and all the properties inside it. But we have written the same media query twice.  Writing same media query twice like the above example has no problem, the code will work perfectly.


But when we write the same media query multiple times while working with styled component's JavaScript Syntax, only the last media query's code will be executed:


```js
const Box_Section = styled(Box)(
    ({ theme }) => ({
  
      "@media (min-width:640px)": {
            
            margin:'1rem'
          
       },

       "@media (min-width:640px)": {
            
            padding:'1rem'
          
       },


    )}

  ) 
```


In the above example, as the both media query is same, only the last media query's code will be executed. So, the `Box_Section` component will only have `padding`, not `margin`. 

&nbsp;
> Reason of this problem:
As we are working with JavaScript object here, we must have unique property name. But in the above example, we are having `"@media (min-width:640px)"` property name twice. So, JavaScript is considering the last property name's value to be the updated version and only having that.



&nbsp;
>Note: This problem will not occur with `CSS Like Syntax` in styled components. We can have same media query more than one time just like normal CSS.  





