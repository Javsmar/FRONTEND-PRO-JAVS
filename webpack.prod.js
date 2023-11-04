const { merge } = require('webpack-merge');
const defauldConfig = require('./webpack.common');

module.exports = merge(defauldConfig, {
    mode: 'production', // Modo de (development o production)
    //devtool: 'source-map',// Configuración del mapa de fuente inline para depuración
    output: {
        clean: true,  // Limpieza del directorio de salida antes de la construcción
    }
});
