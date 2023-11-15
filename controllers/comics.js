const { Title } = require("../models/comic");

const getAll = async (req, res) => {
  const comic = await Title.find().select("-commentsID -authors");
  res.json(comic);
};

const getById = async (req, res) => {
  const comic = await Title.findById(req.params.comicId).populate("commentsID");
  res.json(comic);
};

const create = async (req, res) => {
  const newTitle = await Title.create(req.body);
  res.json(newTitle);
};

const update = async (req, res) => {
  const comic = await Title.findByIdAndUpdate(req.params.comicId, req.body, {
    new: true,
  });
  res.json(comic);
};

const remove = async (req, res) => {
  const comic = await Title.findByIdAndDelete(req.params.comicId);
  res.json(comic);
};

const toggleFavorite = async (req, res) => {
  const { id: userId } = req.user;

  const comic = await Title.findById(req.params.comicId);

  const index = comic.favorites.indexOf(userId);
  comic.favorites =
    index < 0
      ? [...comic.favorites, userId]
      : comic.favorites.filter((id) => id.toString() !== userId);

  const updateComic = await comic.save();

  res.json(updateComic);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  toggleFavorite,
};
