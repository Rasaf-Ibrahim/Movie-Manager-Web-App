// packages
import { Request, Response, NextFunction } from "express"
import tryCatchAsync from "../../error-handlers/try-catch-async.js"
import axios from "axios"
import config_obj from "../../config/index.js"
import success_response from "../../utils/success-response/success-response.js"
import error_response from "../../error-handlers/error-response/error-response.js"
import { type_of_obj_with_any_values } from "../../types/commonly-used-types.js"



/*__________________________________________

 ✅ language map (100 Languages)
____________________________________________*/

// the following languages are selected based on volume of film production, global influence, and diversity (GPT 4)

const language_map = {
    'en': 'English',
    'hi': 'Hindi',
    'zh': 'Mandarin',
    'es': 'Spanish',
    'fr': 'French',
    'ru': 'Russian',
    'ja': 'Japanese',
    'ko': 'Korean',
    'pt': 'Portuguese',
    'de': 'German',
    'it': 'Italian',
    'ar': 'Arabic',
    'bn': 'Bengali',
    'tr': 'Turkish',
    'yue': 'Cantonese',
    'te': 'Telugu',
    'ta': 'Tamil',
    'pa': 'Punjabi',
    'fa': 'Persian',
    'nl': 'Dutch',
    'ml': 'Malayalam',
    'th': 'Thai',
    'sv': 'Swedish',
    'pl': 'Polish',
    'uk': 'Ukrainian',
    'da': 'Danish',
    'el': 'Greek',
    'no': 'Norwegian',
    'kn': 'Kannada',
    'mr': 'Marathi',
    'ro': 'Romanian',
    'hu': 'Hungarian',
    'cs': 'Czech',
    'fi': 'Finnish',
    'id': 'Indonesian',
    'tl': 'Filipino',
    'vi': 'Vietnamese',
    'he': 'Hebrew',
    'ms': 'Malay',
    'sr': 'Serbian',
    'hr': 'Croatian',
    'sk': 'Slovak',
    'bg': 'Bulgarian',
    'ne': 'Nepali',
    'si': 'Sinhalese',
    'lt': 'Lithuanian',
    'lv': 'Latvian',
    'et': 'Estonian',
    'ka': 'Georgian',
    'az': 'Azerbaijani',
    'gu': 'Gujarati',
    'ur': 'Urdu',
    'sw': 'Swahili',
    'my': 'Burmese',
    'km': 'Khmer',
    'lo': 'Lao',
    'am': 'Amharic',
    'or': 'Odia',
    'jv': 'Javanese',
    'su': 'Sundanese',
    'ky': 'Kyrgyz',
    'uz': 'Uzbek',
    'mn': 'Mongolian',
    'ps': 'Pashto',
    'sd': 'Sindhi',
    'so': 'Somali',
    'hy': 'Armenian',
    'ku': 'Kurdish',
    'ckb': 'Sorani Kurdish',
    'tg': 'Tajik',
    'kk': 'Kazakh',
    'la': 'Latin',
    'eu': 'Basque',
    'gl': 'Galician',
    'af': 'Afrikaans',
    'xh': 'Xhosa',
    'zu': 'Zulu',
    'mt': 'Maltese',
    'ga': 'Irish',
    'cy': 'Welsh',
    'be': 'Belarusian',
    'sl': 'Slovenian',
    'mk': 'Macedonian',
    'bs': 'Bosnian',
    'sq': 'Albanian',
    'lb': 'Luxembourgish',
    'is': 'Icelandic',
    'fo': 'Faroese',
    'mi': 'Maori',
    'sm': 'Samoan',
    'fj': 'Fijian',
    'ha': 'Hausa',
    'yo': 'Yoruba',
    'ig': 'Igbo',
    'mg': 'Malagasy',
    'st': 'Sotho',
    'tn': 'Tswana',
    'ts': 'Tsonga',
    'lu': 'Luba-Katanga',
    'rw': 'Kinyarwanda'
}




/*__________________________________________

 ✅ search movie
____________________________________________*/


/*💡 Controller's Info 💡

    method: GET

    endpoint: '/api/v1/movie-manager/tmdb/search-movie'

    access: sign_in_required, verified_email_required
*/


const search_movie = tryCatchAsync(async (req: Request, res: Response, next: NextFunction) => {


    // Check if the search query parameter is provided
    if(!req.query.search){
        
        error_response({
            next:next,
            message: 'Please provide a valid search term.'
        })
    }


    // Construct the URL for the TMDB API search endpoint
    const api_url = `https://api.themoviedb.org/3/search/movie?query=${req.query.search}&include_adult=false&language=en-US&page=1`


    // Define the headers for the API request
    const headers = {
        'Authorization': `Bearer ${config_obj.env.tmdb_authorization_header}`
    }


    // Make the API request to TMDB
    const response = await axios.get(
        api_url, 
        { headers }
    )


    // Process and modify the results from the TMDB API
    const modified_results = response.data.results.map(movie => {

        const year = new Date(movie.release_date).getFullYear()

        const language = language_map[movie.original_language] || movie.original_language

        const viewer_approval = `${Math.round(movie.vote_average * 10)}%`

        const poster_url = `https://image.tmdb.org/t/p/w342${movie.poster_path}`
    
        return {
            id: movie.id,
            title: movie.title,
            year,
            language,
            viewer_approval,
            poster_url,
            
        }
    })


    // Send a success response with the modified search results
    return success_response({
        res: res,
        message: "Movie search results fetched successfully.",
        info: {
            search_result: modified_results
        }
    })
    
})





/*__________________________________________

 ✅ search series
____________________________________________*/


/*💡 Controller's Info 💡

    method: GET

    endpoint: '/api/v1/movie-manager/tmdb/search-series'

    access: sign_in_required, verified_email_required
*/


const search_series = tryCatchAsync(async (req: Request, res: Response, next: NextFunction) => {


    // Check if the search query parameter is provided
    if(!req.query.search){
        
        error_response({
            next:next,
            message: 'Please provide a valid search term.'
        })
    }


    // Construct the URL for the TMDB API search endpoint
    const api_url = `https://api.themoviedb.org/3/search/tv?query=${req.query.search}&include_adult=false&language=en-US&page=1`

  

    // Define the headers for the API request
    const headers = {
        'Authorization': `Bearer ${config_obj.env.tmdb_authorization_header}`
    }


    // Make the API request to TMDB
    const response = await axios.get(
        api_url, 
        { headers }
    )


    // Process and modify the results from the TMDB API
    const modified_results = response.data.results.map(series => {


        const first_aired = new Date(series.first_air_date).getFullYear()

        const language = language_map[series.original_language] || series.original_language

        const viewer_approval = `${Math.round(series.vote_average * 10)}%`

        const poster_url = `https://image.tmdb.org/t/p/w342${series.poster_path}`
    
        return {
            id: series.id,
            title: series.name,
            first_aired,
            language,
            viewer_approval,
            poster_url
            
        }
    })


    // Send a success response with the modified search results
    return success_response({
        res: res,
        message: "Series search results fetched successfully.",
        info: {
            search_result: modified_results
        }
    })
    
})






/*__________________________________________

 ✅ trending movies
____________________________________________*/


/*💡 Controller's Info 💡

    method: GET

    endpoint: '/api/v1/movie-manager/tmdb/trending-movies'

    access: sign_in_required, verified_email_required
*/


const trending_movies = tryCatchAsync(async (req: Request, res: Response, next: NextFunction) => {


      // Check if the movie query parameter is provided
      if(!req.query.page){
        
        error_response({
            next:next,
            message: 'Please provide a valid page number.'
        })
    }


    // Construct the URL for the TMDB API search endpoint
    const api_url = `https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=${req.query.page}`


    // Define the headers for the API request
    const headers = {
        'Authorization': `Bearer ${config_obj.env.tmdb_authorization_header}`
    }


    // Make the API request to TMDB
    const response = await axios.get(
        api_url, 
        { headers }
    )


    // Process and modify the results from the TMDB API
    const modified_results = response.data.results.map(movie => {


        const language = language_map[movie.original_language] || movie.original_language

        const year = new Date(movie.release_date).getFullYear()

        const viewer_approval = `${Math.round(movie.vote_average * 10)}%`

        const poster_url = `https://image.tmdb.org/t/p/w342${movie.poster_path}`
    
        return {
            id: movie.id,
            title: movie.title,
            year,
            viewer_approval,
            language,
            poster_url
        }
    })


    // Send a success response with the modified search results
    return success_response({
        res: res,
        message: "Trending movies fetched successfully.",
        info: {
            trending_movies: modified_results,
            current_page: response.data.page,
            total_pages: response.data.total_pages,
            total_results: response.data.total_results
        }
    })
    
})






/*__________________________________________

 ✅ trending series
____________________________________________*/


/*💡 Controller's Info 💡

    method: GET

    endpoint: '/api/v1/movie-manager/tmdb/trending-series'

    access: sign_in_required, verified_email_required
*/


const trending_series = tryCatchAsync(async (req: Request, res: Response, next: NextFunction) => {


    // Check if the movie query parameter is provided
    if(!req.query.page){
      
      error_response({
          next:next,
          message: 'Please provide a valid page number.'
      })
  }



  // Construct the URL for the TMDB API search endpoint
  const api_url = `https://api.themoviedb.org/3/trending/tv/week?language=en-US&page=${req.query.page}`



  // Define the headers for the API request
  const headers = {
      'Authorization': `Bearer ${config_obj.env.tmdb_authorization_header}`
  }


  // Make the API request to TMDB
  const response = await axios.get(
      api_url, 
      { headers }
  )


  // Process and modify the results from the TMDB API
  const modified_results = response.data.results.map(series => {

    const language = language_map[series.original_language] || series.original_language

    const first_aired = new Date(series.first_air_date).getFullYear()

    const viewer_approval = `${Math.round(series.vote_average * 10)}%`

    const poster_url = `https://image.tmdb.org/t/p/w342${series.poster_path}`

    return {
        id: series.id,
        title: series.name,
        first_aired,
        viewer_approval,
        language,
        poster_url
        
    }
  })


  // Send a success response with the modified search results
  return success_response({
      res: res,
      message: "Trending series fetched successfully.",
      info: {
          trending_series: modified_results,
          current_page: response.data.page,
          total_pages: response.data.total_pages,
          total_results: response.data.total_results
      }
  })
  
})




/*__________________________________________

 ✅ top rated movies
____________________________________________*/


/*💡 Controller's Info 💡

    method: GET

    endpoint: '/api/v1/movie-manager/tmdb/top-rated-movies'

    access: sign_in_required, verified_email_required
*/


const top_rated_movies = tryCatchAsync(async (req: Request, res: Response, next: NextFunction) => {


  // Check if the movie query parameter is provided
  if(!req.query.page){
      
      error_response({
          next:next,
          message: 'Please provide a valid page number.'
      })
  }


  // Construct the URL for the TMDB API search endpoint
  const api_url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${req.query.page}`


  // Define the headers for the API request
  const headers = {
      'Authorization': `Bearer ${config_obj.env.tmdb_authorization_header}`
  }


  // Make the API request to TMDB
  const response = await axios.get(
      api_url, 
      { headers }
  )


  // Process and modify the results from the TMDB API
  const modified_results = response.data.results.map(movie => {

      const language = language_map[movie.original_language] || movie.original_language

      const year = new Date(movie.release_date).getFullYear()

      const viewer_approval = `${Math.round(movie.vote_average * 10)}%`

      const poster_url = `https://image.tmdb.org/t/p/w342${movie.poster_path}`
  
      return {
          id: movie.id,
          title: movie.title,
          year,
          language,
          viewer_approval,
          poster_url
      }
  })


  // Send a success response with the modified search results
  return success_response({
      res: res,
      message: "Top rated movies fetched successfully.",
      info: {
          top_rated_movies: modified_results,
          current_page: response.data.page,
          total_pages: response.data.total_pages,
          total_results: response.data.total_results
      }
  })
  
})






/*__________________________________________

✅ top rated series
____________________________________________*/


/*💡 Controller's Info 💡

  method: GET

  endpoint: '/api/v1/movie-manager/tmdb/top-rated-series'

  access: sign_in_required, verified_email_required
*/


const top_rated_series = tryCatchAsync(async (req: Request, res: Response, next: NextFunction) => {


    // Check if the movie query parameter is provided
    if(!req.query.page){
        
        error_response({
            next:next,
            message: 'Please provide a valid page number.'
        })
    }


    // Construct the URL for the TMDB API search endpoint
    const api_url = `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=${req.query.page}`


    // Define the headers for the API request
    const headers = {
        'Authorization': `Bearer ${config_obj.env.tmdb_authorization_header}`
    }


    // Make the API request to TMDB
    const response = await axios.get(
        api_url, 
        { headers }
    )


    // Process and modify the results from the TMDB API
    const modified_results = response.data.results.map(series => {

        const language = language_map[series.original_language] || series.original_language

        const first_aired = new Date(series.first_air_date).getFullYear()

        const viewer_approval = `${Math.round(series.vote_average * 10)}%`

        const poster_url = `https://image.tmdb.org/t/p/w342${series.poster_path}`

        return {
            id: series.id,
            title: series.name,
            first_aired,
            language,
            viewer_approval,
            poster_url
        }
    })


    // Send a success response with the modified search results
    return success_response({
        res: res,
        message: "Top rated series fetched successfully.",
        info: {
            top_rated_series: modified_results,
            current_page: response.data.page,
            total_pages: response.data.total_pages,
            total_results: response.data.total_results
        }
    })

})




/*__________________________________________

 ✅ movie details
____________________________________________*/


/*💡 Controller's Info 💡

    method: GET

    endpoint: '/api/v1/movie-manager/tmdb/movie-details'

    access: sign_in_required, verified_email_required
*/


const movie_details = tryCatchAsync(async (req: Request, res: Response, next: NextFunction) => {


    // Check if the search query parameter is provided
    if(!req.query.id){
        
        error_response({
            next:next,
            message: 'Please provide a valid id.'
        })
    }


    // Construct the URL for the TMDB API search endpoint
    const api_url = `https://api.themoviedb.org/3/movie/${req.query.id}?language=en-US` 

  

    // Define the headers for the API request
    const headers = {
        'Authorization': `Bearer ${config_obj.env.tmdb_authorization_header}`
    }


    // Make the API request to TMDB
    const response:type_of_obj_with_any_values = await axios.get(
        api_url, 
        { headers }
    )


    // Process and modify the results from the TMDB API
    const getModifiedResults = () => {

        const id = response.data.id

        const poster_url = `https://image.tmdb.org/t/p/w780${response.data.poster_path}`


        const genre = response.data.genres.map(genreObj => genreObj.name).join(', ');
    

        const year = new Date(response.data.release_date).getFullYear()


        const viewer_approval = `${Math.round(response.data.vote_average)*10}%`

        
        const language = language_map[response.data.original_language] || response.data.original_language;
        const overview = response.data.overview;
    
 
        const production_countries = response.data.production_countries.map(countryObj => countryObj.name).join(', ')

        const budget = `${Math.round((response.data.budget / 1000000))}M`
    
        const box_office = `${Math.round((response.data.revenue / 1000000))}M`


        // Return the processed data
        return {
            id,
            poster_url,
            title: response.data.original_title,
            genre,
            viewer_approval,
            year,
            runtime: response.data.runtime,
            language,
            production_countries,
            budget: budget === '0M' ? 'N/A' : budget,
            box_office: box_office === '0M' ? 'N/A' : box_office,
            overview
        }
    }
    

    // Send a success response with the modified search results
    return success_response({
        res: res,
        message: "Movie details fetched successfully.",
        info: {
            movie_details: getModifiedResults()
        }
    })
    
})




/*__________________________________________

 ✅ series details
____________________________________________*/


/*💡 Controller's Info 💡

    method: GET

    endpoint: '/api/v1/movie-manager/tmdb/series-details'

    access: sign_in_required, verified_email_required
*/


const series_details = tryCatchAsync(async (req: Request, res: Response, next: NextFunction) => {


    // Check if the search query parameter is provided
    if(!req.query.id){
        
        error_response({
            next:next,
            message: 'Please provide a valid id.'
        })
    }


    // Construct the URL for the TMDB API search endpoint
    const api_url = `https://api.themoviedb.org/3/tv/${req.query.id}?language=en-US` 

  

    // Define the headers for the API request
    const headers = {
        'Authorization': `Bearer ${config_obj.env.tmdb_authorization_header}`
    }


    // Make the API request to TMDB
    const response:type_of_obj_with_any_values = await axios.get(
        api_url, 
        { headers }
    )


    // Process and modify the results from the TMDB API
    const getModifiedResults = () => {

        const id = response.data.id

        const poster_url = `https://image.tmdb.org/t/p/w780${response.data.poster_path}`


        const genre = response.data.genres.map(genreObj => genreObj.name).join(', ');
    
        
        const first_aired_year = new Date(response.data.first_air_date).getFullYear()

        const last_aired_year = response.data.in_production ? 'Present' : new Date(response.data.last_air_date).getFullYear()

        const year = first_aired_year === last_aired_year ? first_aired_year : `${first_aired_year} - ${last_aired_year}`


        const viewer_approval = `${Math.round(response.data.vote_average)*10}%`

        
        const language = language_map[response.data.original_language] || response.data.original_language

        
        const production_countries = response.data.production_countries.map(countryObj => countryObj.name).join(', ')


        const overview = response.data.overview
    
 
        // Return the processed data
        return {
            id,
            poster_url,
            title: response.data.name,
            genre,
            viewer_approval,
            year,
            total_seasons: response.data.number_of_seasons,
            total_episodes: response.data.number_of_episodes,
            language,
            production_countries,
            overview
        }
    }
    

    // Send a success response with the modified search results
    return success_response({
        res: res,
        message: "Series details fetched successfully.",
        info: {
            series_details: getModifiedResults()
        }
    })
    
})



export {
    search_movie,
    search_series,
    trending_movies,
    trending_series,
    top_rated_movies,
    top_rated_series,
    movie_details,
    series_details
}