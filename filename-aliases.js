const path = require("path");

const fileNameAliases = {
  "@components": path.resolve(__dirname,"./src/components"),
  "@constants": path.resolve(__dirname, "./src/constants"),
  "@contexts": path.resolve(__dirname, "./src/contexts"),
  "@pages": path.resolve(__dirname, "./src/pages"),
  "@services": path.resolve(__dirname, "./src/services"),
  "@states": path.resolve(__dirname,'./src/states'),
  "@styles": path.resolve(__dirname,'./src/styles'),
  "@utils": path.resolve(__dirname, "./src/utils"),
  "@images": path.resolve(__dirname, "./src/assets/images"),
  "@icons": path.resolve(__dirname, "./src/assets/icons"),
  "@fonts": path.resolve(__dirname, "./public/fonts"),
}

module.exports = fileNameAliases;