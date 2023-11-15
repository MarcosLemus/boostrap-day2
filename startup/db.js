const mongoose = require("mongoose");

module.exports = function () {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("DB on..."))
    .catch(() => console.log("problema al conectar con mongo"));
};
