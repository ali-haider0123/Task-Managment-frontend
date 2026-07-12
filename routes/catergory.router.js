const { Router } = require("express");

const categoryController = require("../controllers/category.controller");
const categoriesRouter = Router();


categoriesRouter.get(
    "/",
    // authenticate,

    categoryController.GetAll,
);
categoriesRouter.get(
    "/:id",
    // authenticate,
    categoryController.GetById,
);

categoriesRouter.delete(
    "/:id",
    categoryController.Delete
)

categoriesRouter.put(
    "/:id",
    categoryController.Edit
)

categoriesRouter.post("/", categoryController.Create);



module.exports = categoriesRouter;