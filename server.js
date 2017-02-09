//NODE + WEBPACK + ES6 + D3 DEV SERVER
"user strict";
import path from 'path';
import express from 'express';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack.config';

const PORT = 3000;
const server = new WebpackDevServer(webpack(config), {
	publicPath:config.output.publicPath,
	hot:true,
	historyApiFallback:{
		index: './public/index.html'
	}
});

server.listen(PORT, 'localhost', (err, result)=>{
	if(err) { console.log(err )}
	console.log(`Listening at localhost:${PORT}`);
});
