"use client";

import { Box, Button, Container, Grid } from "@mui/material";
import BookCard from "../../../sections/books/BookCard";
import DashboardLayout from "../../../layouts/dashboard/DashboardLayout";
import { useCallback, useState } from "react";
import axiosInstance from "src/utils/axios";
import { useEffect } from "react";

Books.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default function Books() {
  const [books, setBooks] = useState([]);

  const getBooks = useCallback(async () => {
    try {
      const response = await axiosInstance.get('/api/books');

      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  return (
    <Container
      sx={{
        my: 3,
      }}
    >
      <h1> Dashboard Books are Here </h1>
      <Grid container spacing={3}>
        {books.map((book, index) => (
          <Grid key={index} item xs={6} sm={4} md={3}>
            <BookCard book={book} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}