module.exports = function () {
  if (!process.env.privateKey) {
    console.error("privateKey not definded");
    process.exit(0);
  }
};
