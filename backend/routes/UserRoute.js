import express from "express";
import {getUsers, getUsersById, createUser, deleteUser, updateUser} from "../controllers/UserController.js";

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.post('/users', createUser);
router.delete('/users/:id', deleteUser);
router.patch('/users/:id', updateUser);

export default router;