import { Schema, model, models } from 'mongoose';

const blogSchema = new Schema({
  title: String,
  description:String,
  metaDescription: String,
  metaKeywords: [Array],
  content: String,
  view: Number,
  comment: Number,
  share: Number,
  favorite: Number,
  publish: Boolean,
  author: String,
  tags: [String],
  body: String,
  favoritePerson: [],
  comments: Boolean,
});

const Blog = models.Blog || model('Blog', blogSchema);

export default Blog;