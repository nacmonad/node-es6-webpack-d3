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
		index: './0-world/index.html'
	}
});

server.listen(PORT, 'localhost', (err, result)=>{
	if(err) { console.log(err )}
	console.log(`Listening at localhost:${PORT}`);
});

// const app = express();
// const compiler = webpack(config);

// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true,
//   publicPath: config.output.publicPath
// }));

// app.use(require('webpack-hot-middleware')(compiler));

// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, '/0-world/index.html'));
// });

// app.listen(PORT, 'localhost', function(err) {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log(`Listening at http://localhost:${PORT}`);
// });
