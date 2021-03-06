import * as express from 'express';
import * as path from 'path';
import * as open from 'open';
import * as webpack from 'webpack';
import * as webpackDevMiddleware from 'webpack-dev-middleware';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../src/index.html')),
);

app.listen(port, (err) => {
  if (err) {
    // tslint:disable-next-line:no-console
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
