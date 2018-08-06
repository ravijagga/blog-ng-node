const app = require('../index');
const http = require('http');
const envConfig = require('../config/env');
const chalk = require('chalk');

const server = http.createServer(app);

// PORT
const port = envConfig.server.port;
app.set('port', port);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  switch (error.code) {
  case 'EACCES':
    console.error(chalk.red(`${port} requires elevated privileges`));
    process.exit(1);
    break;

  case 'EADDRINUSE':
    console.error(chalk.red(`${port} is already in use`));
    process.exit(1);
    break;

  default:
    throw error;
  }
}

function onListening() {
  console.info(
    chalk.black.bgGreen(`Server is running at port: ${server.address().port}`)
  );
}