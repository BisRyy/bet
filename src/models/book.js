import { Schema, model, models } from 'mongoose';

const bookSchema = new Schema({
    title: String,
    description: String,
    cover: String,
    link: String,
});

const Book = models.Book || model('Book', bookSchema);

export default Book;