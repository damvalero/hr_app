// require('dotenv').config();

const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_API_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});
// --------------------------
// const storage = new CloudinaryStorage({
//   cloudinary,
//   // folder: "/hr-app",
//   // allowedFormats: ["jpg", "png", "jpe"]
//   params: {
//     folder: 'hr-app',
//     format: async (req, file) => 'png',
//     // public_id: (req, file) => 'computed-filename-using-request',
//   },
// });

// const fileUpload = multer({ storage });

// module.exports = fileUpload;
// ----------------------
module.exports = { cloudinary };

// const fileUpload = multer({
//     limits: 500000,
//     storage: multer.diskStorage({
//         destination: (req, file, cb) => {

//         },
//         filename: (req, file, cb) => {}
//     })
// });

// // this fileUpload exported is an object 
// // with a lot of preconceived middlewares
// module.exports = fileUpload;