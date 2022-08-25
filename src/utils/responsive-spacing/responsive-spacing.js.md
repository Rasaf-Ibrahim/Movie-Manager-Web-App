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

In this `mui-theme` folder, I have created the `responsiveSpacing.js` file. In that file, I have created `responsiveSpacing()` function. If we use this function, we will not need to manually pass spacing for all the breakpoint manually.

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
