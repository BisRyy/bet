import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fCurrency } from '../../../../utils/formatNumber';
import { Button, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import DashboardLayout from '../../../../layouts/dashboard';
import axios from '../../../../utils/axios';
import mockcourse from '../../../../_mock/arrays/_courses';
import LessonPage from './[lesson]';
import Markdown from '../../../../components/markdown/Markdown';

CourseDetails.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default function CourseDetails() {
  const router = useRouter();
  const { slug } = router.query;

  const [course, setCourse] = useState(mockcourse);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        // Fetch course details based on the slug from your API or data source
        // Example using MongoDB and Mongoose
        const fetchedCourse = await axios.get(`/api/courses/${slug}`);
        setCourse(fetchedCourse.data);
      } catch (error) {
        console.error('Error fetching course details:', error);
      }
    };
    null;
    // fetchCourseDetails();
  }, [slug]);

  if (!course) {
    return <div>Loading...</div>;
  }

  const [selectedLesson, setSelectedLesson] = useState(null);


  const handleOpen = (lesson) => {
    setSelectedLesson(lesson);
    setOpen(true);
  };

  const { name, instructor, price, description, category, image, lessons } = course;

  const LessonsList = ({ lessons }) => {
    // list of lessons by material ui
    return (
      <Stack direction="column" spacing={2}>
        {lessons.map((lesson) => (
          <LessonItem key={lesson.id} lesson={lesson} />
        ))}
      </Stack>
    );
  };

  const LessonItem = ({ lesson }) => {
    return (
      <>
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          // href={lesson.video}
          sx={{ justifyContent: 'space-between' }}
        >
          {lesson.title}
          <Button variant="contained" color="primary" onClick={() => handleOpen(lesson)}>
            Preview
          </Button>
        </Button>
      </>
    );
  };

  return (
    <Card>
      <CardMedia
        component="img"
        alt={name}
        image={image.secure_url}
        title={name}
        sx={{ maxHeight: 500, objectFit: 'contain' }}
      />
      <CardContent>
        <Typography variant="h3" component="div">
          {name}
        </Typography>

        <Typography variant="h5" component="div" sx={{ my: 2 }}>
          Course Overview
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          <Markdown
            children={description}
            sx={{
              px: { md: 5 },
            }}
          />
        </Typography>
      </CardContent>

      <CardContent>
        <Typography variant="h5" component="div">
          Lessons
        </Typography>
        <LessonsList lessons={lessons} />
      </CardContent>
      <LessonPage open={open} setOpen={setOpen} lesson1={selectedLesson} />
    </Card>
  );
}
