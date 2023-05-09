import PropTypes from 'prop-types';
// next
import dynamic from 'next/dynamic';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
// config
import { HEADER } from '../../config-global';
//
const Header = dynamic(() => import('./Header'), { ssr: false });

// ----------------------------------------------------------------------

SimpleLayout.propTypes = {
  children: PropTypes.node,
};

export default function SimpleLayout({ children }) {
  const isOffset = useOffSetTop(HEADER.H_MAIN_DESKTOP);

  return (
    <>
      <Header isOffset={isOffset} />

      {children}
    </>
  );
}
