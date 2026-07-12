const router = require("express").Router();
const upload = require("../config/multer");
const userController = require("../controllers/user.controller");
const auth = require("../middleware/user.middleware")


router.post("/create", upload.single("img"), userController.Create);
router.post("/login", userController.Login);
router.get("/Profile", auth, userController.Profile)

module.exports = router;