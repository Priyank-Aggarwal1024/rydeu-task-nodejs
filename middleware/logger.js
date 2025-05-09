const chalk = require("chalk");

const logger = async (req, res, next) => {
  const now = new Date();
  const method = req.method;
  const url = req.originalUrl;

  const timestamp = chalk.magenta(`[${now.toISOString()}]`);

  let methodColor;
  switch (method) {
    case "GET":
      methodColor = chalk.green(method);
      break;
    case "POST":
      methodColor = chalk.blue(method);
      break;
    case "PUT":
      methodColor = chalk.yellow(method);
      break;
    case "DELETE":
      methodColor = chalk.red(method);
      break;
    default:
      methodColor = chalk.white(method);
  }

  console.log(`${timestamp} ${methodColor} ${chalk.cyan(url)}`);
  next();
};

module.exports = logger;
