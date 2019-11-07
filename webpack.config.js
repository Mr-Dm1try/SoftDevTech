const path = require('path');
 
module.exports = {
    entry: "./src/index.js", // входная точка - исходный файл
	mode: "development",
    output:{
        //path: path.resolve(__dirname, './dist'),     // путь к каталогу выходных файлов - папка public
        //publicPath: '/public/',
        filename: "./main.js"       // название создаваемого файла
    },
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000,
		watchContentBase: true,
		progress: true
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ['@babel/preset-env',
									'@babel/react',{
									'plugins': ['@babel/plugin-proposal-class-properties']}]
					}
				},
				
			},
			{
				test: /\.css$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
						modules: true
						}
					}
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ["file-loader"]
			}
		]
	}
    // module:{
        // rules:[   //загрузчик для jsx
            // {
                // test: /\.js?$/, // определяем тип файлов
                // exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                // loader: "babel-loader",   // определяем загрузчик
                // options:{
                    // presets:["@babel/preset-env", "@babel/preset-react"]    // используемые плагины
                // }
            // }
        // ]
    // }
}