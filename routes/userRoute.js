const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
// const { validateUser, validateUpdate } = require("../middlewares/validateUser");

// Create a new user (with validation)
router.post("/",  userController.createUser);

// Get all users
router.get("/", userController.getAllUsers);

// Get a single user by ID
router.get("/:id", userController.getUserById);

// Update a user by ID (with validation)
router.put("/:id",  userController.updateUser);

// Delete a user by ID
router.delete("/:id", userController.deleteUser);

module.exports = router;
