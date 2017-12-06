const sharp = require("sharp");
sharp("picture.jpeg")
  .resize(500, 500)
  .withoutEnlargement()
  .max()
  .blur(10)
  .toFormat("jpeg", { quality: 40 })
  .toFile("output.jpg");
