import mongoose from 'mongoose';
import { MONGODB_URI } from '../config-global';

const connectMongo = async () => mongoose.connect(MONGODB_URI);

export default connectMongo;