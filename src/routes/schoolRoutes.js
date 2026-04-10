const express = require("express");
const router = express.Router();

const schoolController = require("../controllers/schoolController");
const { validateSchool } = require("../middlewares/validate");

router.post("/addSchool", validateSchool, schoolController.addSchool);

router.get("/listSchools", schoolController.listSchools);

module.exports = router;