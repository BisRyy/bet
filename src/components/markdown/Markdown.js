import PropTypes from 'prop-types';
import '../../utils/highlight';
import ReactMarkdown from 'react-markdown';
// markdown plugins
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
// next
import NextLink from 'next/link';
// @mui
import { Link, Typography, Divider } from '@mui/material';
//
import Image from '../image';
//
import StyledMarkdown from './styles';

// ----------------------------------------------------------------------

Markdown.propTypes = {
  sx: PropTypes.object,
};

export default function Markdown({ sx, ...other }) {
  return (
    <StyledMarkdown sx={sx}>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeHighlight, [remarkGfm, { singleTilde: false }]]}
        components={components}
        {...other}
      />
    </StyledMarkdown>
  );
}

// ----------------------------------------------------------------------

const components = {
  h1: ({ ...props }) => <Typography variant="h1" gutterBottom {...props} />,
  h2: ({ ...props }) => <Typography variant="h2" gutterBottom {...props} />,
  h3: ({ ...props }) => <Typography variant="h3" gutterBottom {...props} />,
  h4: ({ ...props }) => <Typography variant="h4" gutterBottom {...props} />,
  h5: ({ ...props }) => <Typography variant="h5" gutterBottom {...props} />,
  h6: ({ ...props }) => <Typography variant="h6" gutterBottom {...props} />,
  p: ({ ...props }) => <Typography paragraph {...props} />,
  hr: ({ ...props }) => <Divider sx={{ my: 3 }} {...props} />,
  img: ({ ...props }) => (
    <Image alt={props.alt} ratio="16/9" sx={{ borderRadius: 2, my: 5 }} {...props} />
  ),
  a: ({ ...props }) => {
    const isHttp = props.href.includes('http');

    return isHttp ? (
      <Link target="_blank" rel="noopener" {...props} />
    ) : (
      <Link component={NextLink} href={props.href} {...props}>
        {props.children}
      </Link>
    );
  },
};
