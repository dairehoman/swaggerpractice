import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import config from './config';

let app = express();

app.server = http.createServer(app);

app.use(bodyParser.json({
    limit :  config.bodyLimit
}));

app.use('/library',routes);

app.server.listen(process.env.PORT || config.port);

console.log(`stated server on port ${app.server.address().port}`);

export default app;