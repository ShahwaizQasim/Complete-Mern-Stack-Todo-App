import UserModel from "../models/index.js";

const AddUsers = async (req, res) => {
    try {
        let addUser = await UserModel(req.body);
        addUser = await user.save();
        res.status(200).send({ status: 200, message: 'user added successfully', user: addUser });
    } catch (error) {
        res.status(400).send({ status: 400, message: error.message });
    }
}

export default AddUsers; 