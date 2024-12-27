import { Router } from "express";
import getUsers from "./controllers/get.js";
import AddUsers from "./controllers/post.js";
import LoginUsers from "./controllers/login.js";

const userRoutes = Router()

userRoutes.post('/login', LoginUsers)
userRoutes.post('/', AddUsers)
userRoutes.get('/', getUsers)

export default userRoutes;