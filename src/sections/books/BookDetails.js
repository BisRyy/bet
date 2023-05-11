import PropTypes from "prop-types";
import { Box, Button, Dialog, DialogContent, Typography } from "@mui/material";
import { useState } from "react";
import { EmbedPDF } from "@simplepdf/react-embed-pdf";
import ReactPDF from "@react-pdf/renderer";
import BookView from "./BookView";
// import Label from '../../../components/label';

BookDetails.propTypes = {
  book: PropTypes.object,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

export default function BookDetails({ book, open, setOpen }) {
  const [read, setRead] = useState(false);
  return (
  <>
    <Dialog open={open} onClose={() => setOpen(!open)} fullWidth maxWidth="md">
      <DialogContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <img
              src={
                book.image ||
                "https://img.freepik.com/premium-vector/food-tray-icon-isolated-white-background-vector-illustration_736051-483.jpg"
              }
              alt={book.title}
              width={700}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: { xs: "100%", sm: "auto" },
            }}
          >
            <Typography variant="h4" component="div">
              {book.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" maxWidth={500}>
              {book.description}
            </Typography>
              <Button variant="contained" onClick={() => setRead(true)}>
                Read
              </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
    <BookView open={read} setOpen={setRead} pdf="http://www.africau.edu/images/default/sample.pdf" />
    </>
  );
}
