const path = require("path");

module.exports = {
    entry : {
        main : './client/src/index.js' // nom du bundle (main.js) : (le fichier de travail)
    },
    mode : 'development',
    output : {
        filename : '[name].js',
        path : path.resolve(__dirname, 'dist') // où mettre le bundle (dans "dist")
    }
}