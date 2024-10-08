import { useEffect, useState, useCallback } from 'react';
// next
import Head from 'next/head';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
// @mui
import { Box, Divider, Stack, Container, Typography, Pagination, Button } from '@mui/material';
// hooks
import { useSnackbar } from 'notistack';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// utils
import axios from '../../utils/axios';
// layouts
import MainLayout from '../../layouts/main';
// components
import Markdown from '../../components/markdown';
import CustomBreadcrumbs from '../../components/custom-breadcrumbs';
import { useSettingsContext } from '../../components/settings';
import { SkeletonPostDetails } from '../../components/skeleton';
// sections
import {
  BlogPostHero,
  BlogPostTags,
  BlogPostCard,
  BlogPostCommentList,
  BlogPostCommentForm,
} from '../../sections/@dashboard/blog';
import Iconify from '../../components/iconify/Iconify';
import { useAuthContext } from '../../auth/useAuthContext';
import ConfirmDialog from '../../components/confirm-dialog';

// ----------------------------------------------------------------------

BlogPostPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function BlogPostPage() {
  const { themeStretch } = useSettingsContext();
  const { enqueueSnackbar } = useSnackbar();

  const {
    query: { title },
    push,
  } = useRouter();

  const { user } = useAuthContext();

  const [recentPosts, setRecentPosts] = useState([]);

  const [post, setPost] = useState(null);

  const [loadingPost, setLoadingPost] = useState(true);

  const [errorMsg, setErrorMsg] = useState(null);

  const [openConfirm, setOpenConfirm] = useState(false);

  const getPost = useCallback(async () => {
    try {
      const response = await axios.get('/api/blog/post', {
        params: { title },
      });

      setPost(response.data.post);
      setLoadingPost(false);
    } catch (error) {
      console.error(error);
      setLoadingPost(false);
      setErrorMsg(error.message);
    }
  }, [title]);

  const getRecentPosts = useCallback(async () => {
    try {
      const response = await axios.get('/api/blog/posts/recent', {
        params: { title },
      });

      setRecentPosts(response.data.recentPosts);
    } catch (error) {
      console.error(error);
    }
  }, [title]);

  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  const handleDeletePost = async () => {
    console.log('delete post', post._id);
    try {
      await axios.delete('/api/blog/post', {
        params: { id: post._id },
      });
    } catch (error) {
      console.error(error);
    }
    push(PATH_DASHBOARD.blog.root);
    enqueueSnackbar('Post deleted', { variant: 'error' });
  };

  const handlePublishPost = async () => {
    console.log('publish post', post._id);
    try {
      const response = await axios.put('/api/blog/post', {
        id: post._id,
        publish: post?.publish ? false : true,
      });

      setPost(response.data.post);
    } catch (error) {
      console.error(error);
    }

    if (post?.publish) {
      enqueueSnackbar('Post unpublished', { variant: 'error' });
    } else {
      enqueueSnackbar('Post published', { variant: 'success' });
    }
  };

  useEffect(() => {
    getRecentPosts();
  }, [getRecentPosts]);

  useEffect(() => {
    if (title) {
      getPost();
    }
  }, [getPost, title]);

  return (
    <>
      <Head>
        <title>{`Blog: ${post?.title || ''} | Bete Liq`}</title>
      </Head>

      <Container maxWidth={themeStretch ? false : 'lg'} sx={{ mb: 10 }}>
        <CustomBreadcrumbs
          heading="Post Details"
          links={[
            // {
            //   name: 'Dashboard',
            //   href: PATH_DASHBOARD.root,
            // },
            {
              name: 'Blogs',
              href: '/blogs',
            },
            {
              name: post?.title,
            },
          ]}
          action={
            (user?.role === 'admin' || user?.role === 'teacher') && (
              <Stack direction="row" spacing={1}>
                <Button
                  onClick={handleOpenConfirm}
                  variant="contained"
                  startIcon={<Iconify icon="eva:trash-2-fill" />}
                  color="error"
                >
                  Delete Post
                </Button>
                <Button
                  onClick={handlePublishPost}
                  variant="contained"
                  startIcon={
                    post?.publish ? (
                      <Iconify icon="eva:eye-off-fill" />
                    ) : (
                      <Iconify icon="eva:eye-fill" />
                    )
                  }
                  color={post?.publish ? 'warning' : 'success'}
                >
                  {post?.publish ? 'Unpublish' : 'Publish'}
                </Button>
              </Stack>
            )
          }
        />

        {post && (
          <Stack
            sx={{
              borderRadius: 2,
              boxShadow: (theme) => ({
                md: theme.customShadows.card,
              }),
            }}
          >
            <BlogPostHero post={post} />

            <Typography
              variant="h6"
              sx={{
                py: 5,
                px: { md: 5 },
              }}
            >
              {post.description}
            </Typography>

            <Markdown
              children={post.content}
              sx={{
                px: { md: 5 },
              }}
            />

            <Stack
              spacing={3}
              sx={{
                py: 5,
                px: { md: 5 },
              }}
            >
              <Divider />
              <BlogPostTags post={post} />
              <Divider />
            </Stack>
            {/* {post.commentsOn && (
              <>
                <Stack
                  sx={{
                    px: { md: 5 },
                  }}
                >
                  <Stack direction="row" sx={{ mb: 3 }}>
                    <Typography variant="h4">Comments</Typography>

                    <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                      ({post.comments.length})
                    </Typography>
                  </Stack>

                  <BlogPostCommentForm />

                  <Divider sx={{ mt: 5, mb: 2 }} />
                </Stack>

                <Stack
                  sx={{
                    px: { md: 5 },
                  }}
                >
                  <BlogPostCommentList comments={post.comments} />

                  <Pagination
                    count={8}
                    sx={{
                      my: 5,
                      ml: 'auto',
                      mr: { xs: 'auto', md: 0 },
                    }}
                  />
                </Stack>
              </>
            )} */}
          </Stack>
        )}

        {errorMsg && !loadingPost && <Typography variant="h6">404 {errorMsg}</Typography>}

        {loadingPost && <SkeletonPostDetails />}

        {!!recentPosts.length && (
          <>
            <Typography variant="h4" sx={{ my: 5 }}>
              Recent posts
            </Typography>

            <Box
              gap={3}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(4, 1fr)',
              }}
            >
              {recentPosts.slice(recentPosts.length - 4).map((recentPost) => (
                <BlogPostCard key={recentPost._id} post={recentPost} />
              ))}
            </Box>
          </>
        )}
      </Container>
      <ConfirmDialog
        open={openConfirm}
        onClose={handleCloseConfirm}
        title="Delete"
        content={<>Are you sure want to delete this blog?</>}
        action={
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              handleDeletePost();
              handleCloseConfirm();
            }}
          >
            Delete
          </Button>
        }
      />
    </>
  );
}
