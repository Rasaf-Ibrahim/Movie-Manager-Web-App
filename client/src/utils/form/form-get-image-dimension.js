
export default async function form_get_image_dimension (file) {
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