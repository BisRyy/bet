import { Schema, model, models } from 'mongoose';

const testSchema = new Schema({
  name: {},
});

const Test = models.Test2 || model('Test2', testSchema);

export default Test;
