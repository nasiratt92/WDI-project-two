const DB_URI = process.env.MONGODB_URI ||'mongodb://localhost/Project-2';
const port = process.env.PORT || 8000;

module.exports = {
  port,
  DB_URI
};
