import multer from "multer";

const storage = multer.diskStorage({
    filename: function(req, file, callback) {
        callback(null, file.originalname)
    }
})

const upload = multer ({storage})

export default upload


//Multer is a node.js middleware for handling multipart/form-data , which is primarily used for uploading files.