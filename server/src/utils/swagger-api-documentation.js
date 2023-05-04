// importing node module
import { fileURLToPath } from 'url'
import path from 'path'

// Importing libraries
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'

// path of this file and this file's directory
const path_of_this_file = fileURLToPath(import.meta.url)
const path_of_this_directory = path.dirname(path_of_this_file)




// Options for the Swagger JSdoc
const options = {

    // Swagger API definition.
    definition: {

        // Using OpenAPI version 3.0.0      
        openapi: '3.0.0',

        info: {
            //title of the Swagger UI
            title: 'REST API Docs',
            version: 1.0,

            contact: {
                name: "Rasaf Ibrahim",
                url: "https://rasaf-ibrahim.vercel.app",
                email: "rasaf1999@email.com",
            },
        },



        // defining reusable security components that can be used throughout the API definition.
        components: {

            securitySchemas: {

                // a custom security schema called "bearerAuth" that uses the "bearer" scheme and expects a JWT token to be passed in the request headers.
                bearerAuth: {

                    type: 'http',
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },

            },

        },



        //  security
        security: [

            {
                bearerAuth: [],
            },
        ],


    },




    // Defining the routes to document
    apis: [
        path.resolve(path_of_this_directory, '../models/*.js'),
        path.resolve(path_of_this_directory, '../controllers/*.js')
    ]

}


// Generating the Swagger specification object
const swaggerSpec = swaggerJsdoc(options)


// Function to set up the Swagger UI
function swagger_documentation(app) {

    // Documentation - Swagger UI 
    app.use(
        '/docs-ui',
        swaggerUi.serve,
        swaggerUi.setup(swaggerSpec, {

            /* more theme is available at: https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/ */

            customCssUrl:
                "https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-flattop.css",
        })
    )


    // Documentation - JSON
    app.get('/docs-json', (req, res) => {

        res.setHeader('content-Type', 'application/json')

        res.send(swaggerSpec)
    })

    console.log("UI Documentation is available at '/docs-ui' & JSON documentation is available at '/docs-json'")
}



// Exporting the 'swagger_documentation' function
export default swagger_documentation

