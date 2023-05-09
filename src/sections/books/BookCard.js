"use client";
import { useState } from "react";
import PropTypes from "prop-types";
// @mui
import {
  Box,
  Card,
  Link,
  Typography,
  Stack,
  IconButton,
  Collapse,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import BookDetails from "./BookDetails"
import Image from "next/image";
// utils
// components
// import Label from '../../components/label';
import Iconify from '../../components/iconify';

// ----------------------------------------------------------------------

const StyledProductImg = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

// ----------------------------------------------------------------------

BookCard.propTypes = {
  menu: PropTypes.object,
};

export default function BookCard({ book }) {
  const {
    title = "name",
    image = "",
    price = "",
    description = "jdfhduhfd",
  } = book;

  const [collapse, setCollapse] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card>
        <CardActionArea
          onClick={() => setOpen(true)}
        >
          <CardMedia component="img" height={300} image={image} alt={title} />
          {/* <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontWeight="bold"
            >
              {title}
            </Typography>
          </CardContent> */}
        </CardActionArea>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 2,
            }}
          >
            <Typography variant="subtitle1">{title}</Typography>
            <IconButton onClick={() => setCollapse(!collapse)}>
              {collapse ? (<Iconify icon="eva:arrow-ios-upward-fill" />) : (<Iconify icon="eva:arrow-ios-downward-fill" />)}
            </IconButton>
          </CardActions>
        <Collapse in={collapse} timeout="auto" unmountOnExit>
          <Stack spacing={2} sx={{ p: 3, pt: 0 }}>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </Stack>
        </Collapse>
      </Card>
      <BookDetails open={open} setOpen={setOpen} book={book} />
    </>
  );
}