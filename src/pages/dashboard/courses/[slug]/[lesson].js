import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from '@mui/material';
import Markdown from '../../../../components/markdown/Markdown';

const LessonPage = ({ open, setOpen, lesson1 }) => {
  const router = useRouter();
  const { slug } = router.query;

  // Mock lesson data for demonstration purposes
  const [lesson, setLesson] = useState({
    title: 'Introduction to MongoDB',
    video: '/assets/eotc.pdf',
    content: `<ol>
  <li>ነጠላ፣አንሶላ እና የሌሊት ልብስ(ፎጣ) መያዝ</li>
  <li>የግቢ መታወቂያ መያዝ</li>
  <li>የጉዞ ቲኬት መያዝ: በሞባይል ባንኪንግ የቆረጣችሁ ደግሞ የደረሰኝ እስክሪንሹት እና የትኬት ቁጥር መናገር ።</li>
  <li>አንዳንድ በገዳሙ የሚሸጡ ለበረከት የሚሆኑ ነገሮችን ለመግዛት ከፈለገን ገንዘብ</li>
  <li>ሻርፕ 12:00 ሰዓት ላይ ቱሉዲምቱ በር ላይ መገኘት።</li>
</ol>`,

  });
  const { title, video, content } = lesson1 || lesson;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} closeAfterTransition fullWidth maxWidth="md">
      <DialogContent>
        <Box sx={{ position: 'relative', pb: '26.25%'}}>
          <iframe
            src={video}
            width="100%"
            height="300px"
            frameborder="0"
            allowtransparency="true"
            allowfullscreen="true"
            title="pdf"
          />
          <Markdown children={content} />
        </Box>
      </DialogContent>
      <DialogActions>
        <Typography variant="h6" color="text.primary">
          {title}
        </Typography>
      </DialogActions>
    </Dialog>
  );
};

export default LessonPage;
