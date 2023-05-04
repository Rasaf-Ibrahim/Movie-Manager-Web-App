

&nbsp;

**Without `tryCatchAsync`**

&nbsp;




```js
const signup_user = async (req, res, next) => {

    // 🍪 Extract the name, email, and password from the request body
	const { username, email, password, password_confirm, role } = req.body;

    try {

        // 🍪 Create a new user in the database with the extracted data
	    const created_document = await user_model.create({
		    username,
		    email,
		    password,
            password_confirm,
            role
	    })

        // send a success response with the user data
        res.status(StatusCodes.CREATED).json({
            status:'User has been registered successfully.',
            created_document,
        })  
    }

    catch (error) {
        return next(new AppError(error.message, StatusCodes.NOT_FOUND, error))
    }
}
```




&nbsp;

**With `tryCatchAsync`**

&nbsp;


```js
const signup_user = tryCatchAsync(async (req, res, next) => {


    // 🍪 Extract the name, email, and password from the request body
    const { username, email, password, password_confirm, role } = req.body;


    // 🍪 Create a new user in the database with the extracted data
    const created_document = await user_model.create({
        username,
        email,
        password,
        password_confirm,
        role
    })


    // send a success response with the user data 
    res.status(StatusCodes.CREATED).json({

        status: 'User has been registered successfully.',
        created_document
    })

})
```