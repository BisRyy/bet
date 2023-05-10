import axios from 'axios';
import connectMongo from '../../lib/dbConnect';
import Blog from '../../models/blog';
import { posts } from '../../_mock/_blog.ts';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

const handleImageUpload = (image) => {
    console.log(image)
    console.log(process.env.REACT_APP_CLOUD_NAME)
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'qtfvzmdj');

    axios
      .post(`https://${process.env.REACT_APP_CLOUD_API_KEY}:${process.env.REACT_APP_CLOUD_API_SECRET}@api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`, formData)
      .then((res) => {
        console.log("uploaded cover");
        return res.data.secure_url
      })
      .catch((err) => console.log(err));

  };

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            console.log('CONNECTING TO MONGO');
            await connectMongo();
            console.log('CONNECTED TO MONGO');
        
            console.log('CREATING DOCUMENT');
            // const cover = req.body.cover.preview
            // console.log("cover", cover);
            const blog = await Blog.create(req.body);
            console.log('CREATED BLOG');
        
            res.json({ blog });
          } catch (error) {
            console.log(error);
            res.json({ error });
          }
      }else if (req.method === 'GET') {
        return res.status(200).json({ posts });
      } else {
        // Handle any other HTTP method
        res.status(200).json({ posts });
      }
    return res.status(200).json({ posts }); 
}