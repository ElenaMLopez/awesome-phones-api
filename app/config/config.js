module.exports = {
  PORT: process.env.PORT || 3000,
  DB: process.env.DB || 'mongodb://database/node-mongo-api',
  COLLECTION: 'phones-collection'
}