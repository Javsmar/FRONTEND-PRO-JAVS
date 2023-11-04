const { merge } = require('webpack-merge');
const defauldConfig = require('./webpack.common');

module.exports = merge(defauldConfig, {
    mode: 'development', // Modo de (development o production)
    devtool: 'inline-source-map',// Configuración del mapa de fuente inline para depuración
    // Configuración de la salida de los archivos generados
    output: {
        clean: false, // Limpieza del directorio de salida antes de la construcción
    },
});
