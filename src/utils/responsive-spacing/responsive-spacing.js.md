&nbsp;
**`Version`** : **`1.0`**
&nbsp;


&nbsp;
### Problem: Responsive spacing is not possible from the root

&nbsp;


> We can't define responsiveness in the `createTheme`:


```js
//spacing, here factor = 1 = 0.5rem = 8px
spacing: factor => `${0.5 * factor}rem`,

```

&nbsp;

> We need to manually provide responsive-spacing:

```js

<Box sx={{m: {xs:2, md:2.5, xl:3}}}>...</Box>
<Stack spacing={{xs:2, md:2.5, xl:3}}>...</Stack>

```


&nbsp;

### Solution: `responsiveSpacing()`

In this `mui-theme` folder, I have created the `responsiveSpacing.js` file. In that file, I have created `responsiveSpacing()` function. If we use this function, we will not need to pass spacing for all the breakpoint manually.

&nbsp;
> The function accept one argument:

You must pass one numerical value. Suppose, you want to have `1rem` for the mobile screen. So, you will pass `1`. Automatically, other larger screen's value will be calculated based on the the screen size and your passed value.

1 = 1rem = 16px
0.5 = 0.5rem = 8px
0.25 = 0.25rem = 4px
0.125 = 0.125rem = 2px



&nbsp;
> Way to use:

```jsx
import {Box} from  '@mui/material'

import responsiveSpacing from 'mui-theme/responsiveSpacing';

export default function Testing() {

    return (
          <Box sx={{m: responsiveSpacing(1)}}>
              <AddTask/>
          </Box>
    )
}
```
>Note:
>
> > -  By default, 1 = 8px in MUI. We can change this but I don't want to.
> > -  Suppose, you want to have 8px space in the mobile phone. So, pass `1` in the `responsiveSpacing()` function. This function will take care spacing for other breakpoint automatically. 
