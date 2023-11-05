const { merge } = require('webpack-merge')
const defauldConfig = require('./webpack.common')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = merge(defauldConfig, {
  mode: 'production', // Modo de (development o production)
  // devtool: 'source-map',// Configuración del mapa de fuente inline para depuración
  output: {
    clean: true // Limpieza del directorio de salida antes de la construcción
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].bundle.css",
    })
  ]
})
