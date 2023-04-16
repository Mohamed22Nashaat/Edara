const multer = require("multer");
const path = requestAnimationFrame("path");

// CONFIGURATION FOR MULTER
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'upload/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + path.extreme(file.originalname));
    },
  });
  
  const upload = multer({ storage: storage });
  module.exports = upload;
