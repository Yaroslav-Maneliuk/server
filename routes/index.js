const { Router } = require("express");
const router = Router();
const uploadImage = require("../middlewares/uploadImage.mw")
const UserController = require("../controllers/user.controller");
const TaskController = require("../controllers/task.controller");

router
.route("/users")
.post(uploadImage, UserController.createUser); 
// .post(upload.single('image'), UserController.createUserWithImage)
//   .get(UserController.getAllUsers)

// router
//   .route('/users/:userId')
//   .put(UserController.updateUser)
//   .get(UserController.getUser)
//   .delete(UserController.deleteUser)

// router
//   .route('/users/:userId/tasks')
//   .post(checkUser, TaskController.createTask)
//   .get(checkUser, TaskController.getAllTasks)

// router
//   .route('/users/:userId/tasks/taskId')
//   .put(TaskController.updateTask)
//   .get(TaskController.getTask)
//   .delete(TaskController.deleteTask)

module.exports = router;
