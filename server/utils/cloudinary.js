import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.SECRET_KEY
});

const cloudinaryUploadImg = async fileToUploads => {
  return new Promise(resolve => {
    cloudinary.v2.uploader.upload(fileToUploads, result => {
      resolve(
        {
          url: result.secure_url
        },
        {
          resoure_type: "auto"
        }
      );
    });
  });
};

export default cloudinaryUploadImg;
