import axios from 'axios';
import * as Yup from 'yup';
import { useState, useCallback } from 'react';
// next
import { useRouter } from 'next/router';
// form
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
// @mui
import { LoadingButton } from '@mui/lab';
import { Grid, Card, Stack, Button, Typography, Alert, CircularProgress } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import { useSnackbar } from '../../../components/snackbar';
import FormProvider, {
  RHFSwitch,
  RHFEditor,
  RHFUpload,
  RHFTextField,
  RHFAutocomplete,
} from '../../../components/hook-form';
//
import BlogNewPostPreview from './BlogNewPostPreview';
import Iconify from '../../../components/iconify/Iconify';
import { useAuthContext } from '../../../auth/useAuthContext';

// ----------------------------------------------------------------------

import { TAGS_OPTION } from '../../../_mock/_blog';

// ----------------------------------------------------------------------

export default function BlogNewPostForm() {
  const { user } = useAuthContext();
  const { push } = useRouter();

  const { enqueueSnackbar } = useSnackbar();

  const [openPreview, setOpenPreview] = useState(false);

  const [imageLoading, setImageLoading] = useState(false);

  const NewBlogSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    tags: Yup.array().min(2, 'Must have at least 2 tags'),
    metaKeywords: Yup.array().min(1, 'Meta keywords is required'),
    cover: Yup.mixed().required('Cover is required').nullable(true),
    content: Yup.string().required('Content is required'),
  });

  const defaultValues = {
    title: '',
    description: '',
    content: '',
    cover: null,
    tags: ['Orthodox', 'Education'],
    publish: false,
    commentsOn: false,
    metaTitle: 'Ethiopian Orthodox Tewahdo Church',
    metaDescription: '',
    metaKeywords: ['Orthodox', 'Education'],
  };

  const methods = useForm({
    resolver: yupResolver(NewBlogSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  const values = watch();

  const handleOpenPreview = () => {
    setOpenPreview(true);
  };

  const handleClosePreview = () => {
    setOpenPreview(false);
  };

  const [image, setImage] = useState(null);
  const onSubmit = async (data) => {
    try {
      const author = {
        id: user._id,
        name: user.displayName,
        photoURL: user.photoURL,
      };
      const res = await axios.post('/api/posts', { ...data, cover: image, author });
      console.log(res);
      reset();
      handleClosePreview();
      enqueueSnackbar('Post success!');
      push(PATH_DASHBOARD.blog.posts);
      console.log('DATA', data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue('cover', newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  const handleRemoveFile = () => {
    setValue('cover', null);
  };

  const handleImageUpload = (e) => {
    setImageLoading(true);
    const file = e.target.files[0];
    // const filePreview = files.map((file) => URL.createObjectURL(file));
    const newFile = Object.assign(file, {
      preview: URL.createObjectURL(file),
    });

    if (file) {
      setValue('cover', newFile, { shouldValidate: true });
    }
    console.log(process.env.REACT_APP_CLOUD_NAME);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'qtfvzmdj');
    axios
      .post(
        `https://${process.env.REACT_APP_CLOUD_API_KEY}:${process.env.REACT_APP_CLOUD_API_SECRET}@api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
        formData
      )
      .then((res) => {
        console.log('uploaded', res.data);
        setImage(res.data.secure_url);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setImageLoading(false);
      });
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Stack spacing={3}>
              <RHFTextField name="title" label="Post Title" />

              <RHFTextField name="description" label="Description" multiline rows={3} />

              <Stack spacing={1}>
                <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                  Content
                </Typography>

                <RHFEditor simple name="content" />
              </Stack>

              <Stack spacing={1}>
                <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                  Cover
                </Typography>
                <Button
                  variant="contained"
                  component="label"
                  startIcon={
                    imageLoading ? (
                      <Iconify icon="line-md:loading-loop" />
                    ) : (
                      <Iconify icon="eva:image-fill" />
                    )
                  }
                >
                  <Typography variant="body2" sx={{ mr: 1, display: { xs: 'none', sm: 'block' } }}>
                    {image ? 'Change Cover' : imageLoading ? 'Uploading...' : 'Upload Cover'}
                  </Typography>
                  <input type="file" accept="image/*" hidden onChange={handleImageUpload} />
                </Button>

                {image ? (
                  <RHFUpload
                    name="cover"
                    maxSize={3145728}
                    onDrop={handleDrop}
                    onDelete={handleRemoveFile}
                    onChange={handleImageUpload}
                  />
                ) : (
                  <Alert severity="info"> Cover is required</Alert>
                )}
              </Stack>
            </Stack>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3 }}>
            <Stack spacing={3}>
              <div>
                {(user.role === 'admin' || user.role === 'teacher') && (
                  <RHFSwitch
                    name="publish"
                    label="Publish"
                    labelPlacement="start"
                    sx={{ mb: 1, mx: 0, width: 1, justifyContent: 'space-between' }}
                  />
                )}

                <RHFSwitch
                  name="commentsOn"
                  label="Enable comments"
                  labelPlacement="start"
                  sx={{ mx: 0, width: 1, justifyContent: 'space-between' }}
                />
              </div>

              <RHFAutocomplete
                name="tags"
                label="Tags"
                multiple
                freeSolo
                options={TAGS_OPTION.map((option) => option)}
                ChipProps={{ size: 'small' }}
              />

              <RHFTextField name="metaTitle" label="Meta title" />

              <RHFTextField
                name="metaDescription"
                label="Meta description"
                fullWidth
                multiline
                rows={3}
              />

              <RHFAutocomplete
                name="metaKeywords"
                label="Meta keywords"
                multiple
                freeSolo
                options={TAGS_OPTION.map((option) => option)}
                ChipProps={{ size: 'small' }}
              />
            </Stack>
          </Card>

          <Stack direction="row" spacing={1.5} sx={{ mt: 3 }}>
            <Button
              fullWidth
              color="inherit"
              variant="outlined"
              size="large"
              onClick={handleOpenPreview}
            >
              Preview
            </Button>

            <LoadingButton
              fullWidth
              type="submit"
              variant="contained"
              size="large"
              loading={isSubmitting}
            >
              Post
            </LoadingButton>
          </Stack>
        </Grid>
      </Grid>

      <BlogNewPostPreview
        values={values}
        open={openPreview}
        isValid={isValid}
        isSubmitting={isSubmitting}
        onClose={handleClosePreview}
        onSubmit={handleSubmit(onSubmit)}
      />
    </FormProvider>
  );
}
