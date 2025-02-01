const cloudinary = require('cloudinary')
const fs = require('fs')
require('dotenv').config();

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uplodeOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;

        // upload the file on cloudinary
        const response = await cloudinary.v2.uploader.upload(localFilePath,
            { resource_type: "auto" }
        )
        //local image uploaded to Cloudinary successfully
        console.log("file uploaded successfully on Cloudinary", response.url);
        fs.unlinkSync(localFilePath);//delete local copy of the image after it's been uploaded to Cloudinary
        return response

    } catch (error) {
        fs.unlinkSync(localFilePath);//remove the locally saved temporary file as the upload operation got failed
        console.log(error);
        return null
        
    }
};

module.exports = {
    uplodeOnCloudinary
}