const express = require("express");

const ctrl = require("../../controllers");

const { authenticate } = require("../../middlewares");

const router = express.Router();

router.get("/", ctrl.getAllScores);

// router.get("/:id", authenticate, ctrl.getContactById);

router.post("/", authenticate, ctrl.addScore);

/* router.delete("/:contactId", authenticate, ctrl.deleteContact);

router.put("/:contactId", authenticate, ctrl.putContact);

router.patch("/:contactId/favorite", authenticate, ctrl.patchContactFavorite); */

module.exports = router;
