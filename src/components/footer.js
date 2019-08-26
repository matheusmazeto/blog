import React from 'react';
import PropTypes from 'prop-types';

function Footer({ copyrights }) {
  return (
    <footer>
      {copyrights ? (
        <div
          dangerouslySetInnerHTML={{
            __html: copyrights,
          }}
        />
      ) : (
        <>
          <span className="footerCopyrights">
            © 2019 <a href="https://mazeto.dev">Matheus Mazeto</a>
          </span>
        </>
      )}
    </footer>
  );
}

Footer.propTypes = {
  copyrights: PropTypes.string,
};

export default Footer;
