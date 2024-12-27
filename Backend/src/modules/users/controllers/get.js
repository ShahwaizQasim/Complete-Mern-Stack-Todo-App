import UserModel from "../models/index.js";

const getUsers = async (req, res) => {
    try {
        const getUser  = await UserModel.find();
        res.status(200).send({ status: 200, message: 'user fetch successfully', user: getUser });
    } catch (error) {
        res.status(400).send({ status: 400, message: error.message });
    }
}

export default getUsers; 