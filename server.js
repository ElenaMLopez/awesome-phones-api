const { connect } = require('./app/config/database');
const CONFIG = require('./app/config/config');
const app = require('./app/app');

connect()
app.listen(CONFIG.PORT, function (error) {
  if (error) return console.log(`Error at listening port: ${CONFIG.PORT}`, error);
  console.log(`Server running on port: ${CONFIG.PORT}`)
});