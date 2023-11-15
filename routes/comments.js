const { Router } = require("express");

const auth = require("../middlewares/auth");
const admin = require("../middlewares/admin");

const commentController = require("../controllers/comments");

const router = Router();

router.post("/", auth, commentController.create);
router.put("/:commentId", auth, commentController.update);
// router.delete("/:commentId", commentController.remove);

module.exports = router;
