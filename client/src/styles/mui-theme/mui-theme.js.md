&nbsp;

**`Version`** : **`1.0`**

&nbsp;



&nbsp;

**I am doing 2 things in this file**

&nbsp;

>Number 1:

mui's default theme is an object. I am customizing that default theme object here in this file. I have modified some properties of the default theme object and added a lot of new properties too. Almost all the new property's value is an object too. Storing all these new properties in this file was making this file messy and huge. So, I have created the `mui-theme/children` folder. In that folder, I have some files, each file is created based on a topic and each file is containing some part of the new customized theme object that I am creating here in this file. 

Now, let's talk about the process of making connection between this file's theme object and 'mui-theme/children' folder's files:

Each file of the 'mui-theme/children' folder export a function. And every function returns an object. We are importing those functions here and and invoking them and storing the returned object in a variable. Then we are merging those returned object with the theme object by using spread operator. 


&nbsp;
> Number 2:

I am making functionality to switch theme(from light to dark and dark to light) and saving the preference of the theme in the localStorage. Using `createContext` API of react so that I can switch theme in any file of the application. After creating context in this file, I have imported the context in the 'src/index.js' file and wrapped the whole application with the context so that in any file of the application, I can switch the theme. 
