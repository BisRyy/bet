import Link from "next/link";
import { fCurrency } from "../../../utils/formatNumber";
import { Avatar, Badge, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

const { Meta } = Card;

const CourseCard = ({ course }) => {
  const { name, instructor, price, image, slug, paid, category,description } = course;
  return (
    <Card height="200" sx={{ borderRadius: 1 }}>
      <CardMedia component="img" alt={name} height="240" image={image.secure_url} title={name} sx={{ objectFit: 'contain' }} />
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ my: 2, maxHeight: 90, overflow: 'hidden' }}>
          {description} 
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Typography variant="subtitle1" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap:1 }}>
          <Avatar alt={instructor.name} src={'/assets/images/eotcmk.jpg'} />
          {instructor.name}
        </Typography>
        <Link href={`/dashboard/courses/${slug}`} passHref>
          <Button variant="outlined" color="primary">
            View Course
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CourseCard;
