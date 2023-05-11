import { books } from '../../_mock/_book.ts';

export default function handler(req, res) {
    res.status(200).json(books);
  }