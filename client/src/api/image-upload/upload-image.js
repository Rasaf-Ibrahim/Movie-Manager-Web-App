import axios from "axios"
import { useMutation } from '@tanstack/react-query';


const uploadImageAxios = axios.create({

    baseURL: import.meta.env.VITE_API_URL,

    headers: {
        'Content-Type': 'multipart/form-data'
     }

})



export function useUploadImage() {

  return useMutation(

    (formData) => uploadImageAxios.post('/image/upload-one', formData),

    {
      onSuccess: (data) => data,

      onError: (error) => {
        throw new Error(error.response.data.message);
      },
    }

  )
}





