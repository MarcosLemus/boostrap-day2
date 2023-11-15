const { Router } = require("express");

const auth = require("../middlewares/auth");
const admin = require("../middlewares/admin");

const comicController = require("../controllers/comics");

const router = Router();

router.get("/", comicController.getAll);

router.get("/:comicId", comicController.getById);

router.post("/", auth, admin, comicController.create);

router.put("/:comicId/favorite", auth, comicController.toggleFavorite);

router.put("/:comicId", auth, admin, comicController.update);

router.delete("/:comicId", auth, admin, comicController.remove);

module.exports = router;
