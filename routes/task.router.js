const { Router } = require("express");
const taskController = require("../controllers/task.controller");
const authenticate = require("../middleware/user.middleware");

const taskRouter = Router();

taskRouter.get("/", authenticate, taskController.GetAll);
taskRouter.get("/:id", authenticate, taskController.GetById);
taskRouter.post("/", authenticate, taskController.Create);
taskRouter.put("/:id", authenticate, taskController.Update);
taskRouter.delete("/:id", authenticate, taskController.Delete);

module.exports = taskRouter;