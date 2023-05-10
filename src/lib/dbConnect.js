import mongoose from 'mongoose';
import { MONGODB_URI } from '../../config.ts';


const connectMongo = async () => mongoose.connect(process.env.MONGODB_URI);

export default connectMongo;