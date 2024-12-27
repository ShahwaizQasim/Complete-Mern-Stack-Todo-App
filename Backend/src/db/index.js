import mongoose from 'mongoose';
import 'dotenv/config'
import { ENV } from "../constant/index.js";

const url = `mongodb+srv://${ENV.DB_USERNAME}:${ENV.DB_PASSWORD}@lms.fdc0y.mongodb.net/${ENV.DB_NAME}?retryWrites=true&w=majority&appName=LMS`
mongoose.connect(url);

export default mongoose
