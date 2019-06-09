const Application = require('./application');
const Router = require('./system/require.routes');
const Middlewares = require('./system/require.routes');

Application().listen(3000);
Application().use(undefined,Router);