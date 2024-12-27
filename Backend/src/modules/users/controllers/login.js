import UserModel from "../models/index.js";
import bcrypt from "bcrypt";
import 'dotenv/config'
import jwt from "jsonwebtoken"

const LoginUsers = async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await UserModel.findOne({ email });
        if (user) {
            const checkPassword = bcrypt.compareSync(password, user.password);
            if (checkPassword) {
                let token = jwt.sign({ email: user.email }, process.env.JWT_SECURITY_KEY);
                res.status(200).send({ status: 200, message: 'user login successfully', token: token });
            } else {
                res.status(401).send({ status: 401, message: 'Incorrect Password' });
            }
        } else {
            res.status(404).send({ status: 404, message: 'User Not Found' });
        }
        console.log(token);

    } catch (error) {
        res.status(500).send({ status: 500, message: error.message });
    }
}

export default LoginUsers; 