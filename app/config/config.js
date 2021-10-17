module.exports = {
  PORT: process.env.PORT || 3000,
  DB: process.env.DB || 'mongodb://database/awesome-phones',
  COLLECTION: 'awesome-phones'
}