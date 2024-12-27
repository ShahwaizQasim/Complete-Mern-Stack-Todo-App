import { Router } from "express";
import getUsers from "./controllers/get.js";
import AddUsers from "./controllers/post.js";



const userRoutes = Router()

userRoutes.get('/', getUsers)
userRoutes.post('/', AddUsers)

export default userRoutes;