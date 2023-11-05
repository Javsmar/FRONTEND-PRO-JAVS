const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // Configuración de múltiples puntos de entrada (entry points)
    entry: {
        home: './src/homePage.js',      // Punto de entrada para la página de inicio
        teams: './src/teamsPage.js',    // Punto de entrada para la página de equipos
        contact: './src/contactPage.js',// Punto de entrada para la página de contacto
        error: './src/notFoundPage.js'
    },
    output: {
        filename: '[name].[chunkhash].bundle.js',   // Nombre del archivo de salida (será reemplazado por los nombres en entry)
        path: path.resolve(__dirname, 'dist'),     // Directorio de salida para los archivos generados
    },
    // devServer: {
    //     hot: true, // Habilita la recarga en caliente (Hot Module Replacement)
    //     devMiddleware: {
    //         writeToDisck: true,
    //     }
    // },
    // Configuración de reglas para procesar archivos CSS
    module: {
        rules:
            [
                {
                    test: /\.ts?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                //configuración de Webpack que define cómo se deben manejar los archivos con extensiones .png, .jpg, .jpeg, .gif, .webp y .ico
                {
                    // Esta regla se aplica a archivos con extensiones .png, .jpg, .jpeg o .gif.
                    test: /\.(png|jpg|jpeg|gif|webp|ico)$/i,
                    
                    // La propiedad "type" define cómo se deben manejar los archivos coincidentes.
                    // En este caso, se configura como 'asset/resource', lo que significa que los archivos
                    // se tratarán como recursos y se emitirán a la carpeta de salida sin procesamiento.
                    type: 'asset/resource'
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                }
            ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template/index.html',
            filename: 'index.html',
            chunks: ['home'],
        }),
        new HtmlWebpackPlugin({
            template: './src/template/contact.html',  // Ruta de la plantilla HTML de la página de contacto
            filename: 'contact.html',  // Nombre del archivo HTML de salida
            chunks: ['contact'],  // Chunk asociado a esta página HTML
        }),
        new HtmlWebpackPlugin({
            template: './src/template/teams.html',
            filename: 'teams.html',
            chunks: ['teams'],
        }),
        new HtmlWebpackPlugin({
            template: './src/template/404.html',
            filename: '404.html',
            chunks: ['error'],
        }),
    ]
}
