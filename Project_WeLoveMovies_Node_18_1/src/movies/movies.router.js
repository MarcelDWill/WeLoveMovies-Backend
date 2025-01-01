const router = require("express").router();
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").get(controller.list).all(methodNotAllowed);
router.route("/:movieId").get(controller.read).all(methodNotAllowed);
router
.route("/:movieId/theaters")
    .get(controller.readTheaterByMovie)
    .all(methodNotAllowed);
router
    .route("/:movieId/reviews")
    .get(controller.readReviewsByMovie)
    .all(methodNotAllowed);

module.exports= router;
