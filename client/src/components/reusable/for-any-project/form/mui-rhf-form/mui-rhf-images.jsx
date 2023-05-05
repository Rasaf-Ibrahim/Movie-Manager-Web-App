/* eslint-disable array-callback-return */



// PropTypes
import { PropTypes } from "prop-types";


// rhf
import { useForm } from 'react-hook-form';

// icon
import PhotoCamera from '@mui/icons-material/PhotoCamera';


// components
import { Button, Typography, ImageList, ImageListItem, Box } from '@mui/material'



/*-------------------------------------------------------------------
 ✅ Functional Component 
----------------------------------------------------------------------*/
export default function MUI_RHF_IMAGES___COMPONENT(props) {

    const { label, selectedImages, setSelectedImages, selectedImagesLink, setSelectedImagesLink, validation_variables_obj } = props



    // useForm
    const { register, formState } = useForm({ mode: 'onChange' })


    // function to handle all the selected images and their preview link
    const handleSelectedImages = (e) => {

        // selected_files
        const selected_files = e.target.files
        const selected_files_array = Array.from(selected_files)


        // updating 'selectedImages' state
        setSelectedImages([...selectedImages, ...selected_files_array]);

        // this time's selected images link's array
        const current_selected_images_link = selected_files_array.map((file) => {


            return {
                link: URL.createObjectURL(file),
                name: file.name
            }

        })


        // updating 'selectedImagesLink' state
        setSelectedImagesLink([...selectedImagesLink, ...current_selected_images_link]);



        // checking for duplicated image
        if (selectedImages.length !== 0 && selectedImagesLink.length !== 0) {


            //step-1: remove the duplicated image
            selectedImages.map((alreadySelected) => {

                selected_files_array.map((tryingToSelect) => {

                    if (alreadySelected.name === tryingToSelect.name) {

                        setSelectedImages(selectedImages.filter((image) => image !== tryingToSelect))
                    }

                })

            })



            // step-2: remove the duplicated image's link
            selectedImagesLink.map((alreadySelected) => {


                current_selected_images_link.map((tryingToSelect) => {


                    if (alreadySelected.name === tryingToSelect.name) {

                        setSelectedImagesLink(selectedImagesLink.filter((link) => link !== tryingToSelect))

                    }

                })

            })

        }




    }




    // function to delete an specific image from all the selected images
    function handleDeleteAnImageFromSelectedImages(deleteThis) {

        setSelectedImages(selectedImages.filter((image) => image.name !== deleteThis.name))

        setSelectedImagesLink(selectedImagesLink.filter((linkObj) => linkObj !== deleteThis))
    }



    // rules for form validation 
    const images_validation_rules = {

        validate: () => {

            // 🍪 nothing to validate when no file is selected
            if (selectedImages.length === 0) return;



            // 🍪 limit
            if ((Object.hasOwn(validation_variables_obj, 'accepted_total_files'))) {

                const accepted_total_files = validation_variables_obj.accepted_total_files

                let file_limit_error = false

                if (selectedImages.length > accepted_total_files) {
                    file_limit_error = true
                }

                if (file_limit_error) {


                    setSelectedImages([])
                    setSelectedImagesLink([])

                    return 'You can not select more than 3 files.'
                }

            }


            // 🍪 file format
            if ((Object.hasOwn(validation_variables_obj, 'accepted_file_formats'))) {

                const accepted_file_formats = validation_variables_obj.accepted_file_formats

                let file_format_error = false

                const array_of_format_of_uploaded_files = selectedImages.map((item) => {

                    return item.name.split('.')[1]
                })


                array_of_format_of_uploaded_files.map((uploaded_file_format) => {

                    if (!accepted_file_formats.includes(uploaded_file_format)) {
                        return file_format_error = true
                    }
                })


                if (file_format_error) {

                    setSelectedImages([])
                    setSelectedImagesLink([])

                    return `All files must have valid file format. Valid Formats: ${JSON.stringify(accepted_file_formats)}`
                }


            }


            // 🍪 file size
            if ((Object.hasOwn(validation_variables_obj, 'accepted_maximum_file_size'))) {

                const accepted_maximum_file_size = validation_variables_obj.accepted_maximum_file_size

                let file_size_error = false

                const array_of_size_of_uploaded_files = selectedImages.map((item) => {

                    return Math.round(item.size / 1024)
                })


                array_of_size_of_uploaded_files.map((uploaded_file_size) => {

                    if (uploaded_file_size > accepted_maximum_file_size) {
                        return file_size_error = true
                    }

                })


                if (file_size_error) {

                    setSelectedImages([])
                    setSelectedImagesLink([])

                    return `File size must be lower than ${accepted_maximum_file_size}kb`
                }



            }


            /* ~~~ a note type of comment has been removed from here after making this repository public ~~~ */

            /* ⚠️⚠️⚠️ couldn't make logic to check all the selected images dimension! In the MUI_RHF_IMAGE___COMPONENT component, I have done it when I was working with just one image. */

        }


    }





    /*-------------------------------------------------------------------
     ✅ JSX 
    ----------------------------------------------------------------------*/
    return (

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: '1rem' }}>

            {/* images upload */}
            <Button component="label" variant="outlined" startIcon={<PhotoCamera />}>
                {label}

                <input style={{ width: '0px' }}
                    {...register('images', { ...images_validation_rules })}
                    type="file" multiple
                    onInput={handleSelectedImages}
                />

            </Button>

            {/* images upload - error */}
            {formState.errors.images &&
                <Typography variant='body1' sx={{ color: 'error.main', textAlign: 'center' }}>{formState.errors.images.message}</Typography>
            }


            {/* images upload - preview */}
            {!formState.errors.images && selectedImagesLink.length > 0 &&

                <Box sx={{ display: 'flex', justifyContent: 'center' }}>

                    <ImageList sx={{ width: '208px', height: '150px' }} cols={2} gap={8}>
                        {selectedImagesLink.map((item) => (
                            <ImageListItem key={item.link}>
                                <img
                                    src={item.link}
                                    alt=''
                                />

                                <Button onClick={() => handleDeleteAnImageFromSelectedImages(item)} size="small">
                                    Remove
                                </Button>
                            </ImageListItem>
                        ))}
                    </ImageList>

                </Box>

            }


        </Box>

    )

}




/*-------------------------------------------------------------------
 ✅ propTypes of <MUI_RHF_IMAGES___COMPONENT/>
----------------------------------------------------------------------*/

MUI_RHF_IMAGES___COMPONENT.propTypes = {

    // required
    label: PropTypes.string.isRequired,

    selectedImages: PropTypes.any.isRequired,

    setSelectedImages: PropTypes.any.isRequired,

    selectedImagesLink: PropTypes.any.isRequired,

    setSelectedImagesLink: PropTypes.any.isRequired,

    validation_variables_obj: PropTypes.object.isRequired

}
