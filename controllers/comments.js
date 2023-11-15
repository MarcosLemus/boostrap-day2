const { Comment } = require("../models/comment");

const create = async (req, res) => {
  const { comment, date } = req.body;

  const newComment = {
    comment,
    date,
    userId: req.user.id,
  };

  // console.log("BODY REQUEST");
  // console.log(req.body);
  // console.log("TOKEN USER");
  // console.log(req.user);
  // console.log("DOCUMENTO CREADO");
  // console.log(newComment);

  const createdComment = await Comment.create(newComment);
  res.json(createdComment);
};

const getAll = async (req, res) => {
  const comment = await Comment.find().populate("commentsID");
  res.json(comment);
};

const getById = async (req, res) => {
  const comment = await Comment.findById(req.params.commentId);
  res.json(comment);
};

const update = async (req, res) => {
  // Falta logica que comprueba que el comentario que el usuario logueado es el autor del comentario que se va a actualizar. si no es propietario del comment responder con un status 403 y un return para que no siga ejecutandose el controlador

  const comment = await Comment.findByIdAndUpdate(
    req.params.commentId,
    req.body,
    {
      new: true,
    }
  );
  res.json(comment);
};

const remove = async (req, res) => {
  // No se usa esta operación pero de usarse hay que tener en cuenta que faltaría:

  // logica que comprueba que el comentario que el usuario logueado es el autor del comentario que se va a actualizar. si no es propietario del comment responder con un status 403 y un return para que no siga ejecutandose el controlador

  const comment = await Comment.findByIdAndDelete(req.params.commentId);
  res.json(comment);
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
};
