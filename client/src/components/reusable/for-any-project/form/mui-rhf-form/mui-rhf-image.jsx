// PropTypes
import { PropTypes } from "prop-types";

// rhf
import { useForm } from 'react-hook-form';

// icon
import PhotoCamera from '@mui/icons-material/PhotoCamera';

// components
import { Box, Button, Typography } from '@mui/material'


/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function MUI_RHF_IMAGE___COMPONENT(props) {


    const { label, setSelectedImage, selectedImageLink, setSelectedImageLink, validation_variables_obj } = props


    // useForm
    const { register, formState } = useForm({ mode: 'onChange' })



    // function to handle the selected image and it's preview link
    const handleSelectedImage = (e) => {

        const selectedFile = e.target.files[0]

        setSelectedImage(selectedFile);

        setSelectedImageLink(URL.createObjectURL(selectedFile))
    }


    // function to delete the selected image 
    function handleDeleteTheImage() {

        setSelectedImage('')

        setSelectedImageLink(null)
    }



    // validation - function to get image dimension. 


    const getImageDimension = async (file) => {
        let reader = new FileReader();
        return new Promise((resolve, reject) => {
            reader.onerror = () => {
                reader.abort()
                reject(new DOMException("Problem parsing input file."))
            };

            reader.onload = () => {
                var image = new Image()
                image.src = reader.result
                image.onload = function () {
                    resolve({ width: this.width, height: this.height })
                }
            }
            reader.readAsDataURL(file);
        })
    }



    // rules for form validation 
    const image_validation_rules = {


        validate: async (value) => {

            // 🍪 nothing to validate when no file is selected
            if (value.length === 0) return;


            // file types
            if ((Object.hasOwn(validation_variables_obj, 'accepted_file_formats'))) {

                const accepted_file_formats = validation_variables_obj.accepted_file_formats

                const uploaded_file_formats = value[0].name.split('.')[1]

                if (!accepted_file_formats.includes(uploaded_file_formats)) {


                    setSelectedImage('')
                    setSelectedImageLink(null)

                    return `Please upload a valid file format. Valid Formats: ${JSON.stringify(accepted_file_formats)}`
                }

            }



            // size
            if ((Object.hasOwn(validation_variables_obj, 'accepted_maximum_file_size'))) {

                const accepted_maximum_file_size = validation_variables_obj.accepted_maximum_file_size

                const fileSize = Math.round(value[0].size / 1024)

                if (fileSize > accepted_maximum_file_size) {

                    setSelectedImage('')
                    setSelectedImageLink(null)

                    return `File size must be lower than ${accepted_maximum_file_size}kb`
                }


            }



            // dimension
            if ((Object.hasOwn(validation_variables_obj, 'accepted_image_width')) && (Object.hasOwn(validation_variables_obj, 'accepted_image_height'))) {

                const accepted_image_width = validation_variables_obj.accepted_image_width

                const accepted_image_height = validation_variables_obj.accepted_image_height

                const dimension = await getImageDimension(value[0]);

                if (dimension.width > accepted_image_width && dimension.height > accepted_image_height) {

  
                    setSelectedImage('')
                    setSelectedImageLink(null)

                    return `Image's width must be lower than ${accepted_image_width}px and height must be lower than ${accepted_image_height}px`
                }

            }



        }

    }





    /*-------------------------------------------------------------------
     ✅ JSX 
    ----------------------------------------------------------------------*/
    return (

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: '1rem' }}>

            {/*🍔🍪 Upload image */}
            <Button component="label" variant="outlined" startIcon={<PhotoCamera />}> {label}

     
                <input style={{ width: '0px' }}
                    {...register('image', { ...image_validation_rules })}
                    type="file"
                    onInput={handleSelectedImage}
                />

            </Button>


            {/* image upload - error */}
            {formState.errors.image &&
                <Typography variant='body1' sx={{ color: 'error.main', textAlign: 'center' }}>
                    {formState.errors.image.message}
                </Typography>
            }



            {/* image upload - previewing */}
            {!formState.errors.image && selectedImageLink &&

                <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                    <img style={{ width: '100px', height: '100px' }} src={selectedImageLink} alt="" />

                    <Button onClick={() => handleDeleteTheImage()} size="small">
                        Remove
                    </Button>

                </Box>
            }


        </Box>

    )

}



/*-------------------------------------------------------------------
 ✅ propTypes of <MUI_RHF_IMAGE___COMPONENT/>
----------------------------------------------------------------------*/
MUI_RHF_IMAGE___COMPONENT.propTypes = {

    // required
    label: PropTypes.string.isRequired,

    setSelectedImage: PropTypes.any.isRequired,

    selectedImageLink: PropTypes.any.isRequired,

    setSelectedImageLink: PropTypes.any.isRequired,


    validation_variables_obj: PropTypes.object.isRequired

}
