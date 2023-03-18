const cloudinary = require('cloudinary')

cloudinary.config(process.env.CLOUDINARY_URL)

const uploadPhotoCloudinary = async (file) => {
    const { tempFilePath } = file

    const response = await cloudinary.uploader.upload(tempFilePath)

    return response.secure_url
}

const destroyPhotoCloudinary = async (id) => {
    try {
        await cloudinary.uploader.destroy(id)
    } catch (error) {
        console.log(error)
    }
}

module.exports = { uploadPhotoCloudinary, destroyPhotoCloudinary }