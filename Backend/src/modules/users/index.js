import { Router } from "express";
import getUsers from "./controllers/get.js";
import AddUsers from "./controllers/post.js";



const userRoutes = Router()

userRoutes.post('/', AddUsers)
userRoutes.get('/', getUsers)

export default userRoutes;