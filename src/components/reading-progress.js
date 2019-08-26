import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Progress } from 'bloomer';

const ReadingProgress = props => {
  const [scrollTop, setScrollTop] = useState();
  const [scrollMax, setScrollMax] = useState();

  const _handlePageScroll = () => {
    setScrollTop(window.scrollY);
  };

  const _handleWindowResize = () => {
    setScrollMax(document.body.clientHeight - window.innerHeight);
  };

  useEffect(() => {
    setScrollTop(window.scrollY);
    window.addEventListener('scroll', _handlePageScroll);
    return () => {
      window.removeEventListener('scroll', _handlePageScroll);
    };
  }, []);

  useEffect(() => {
    setScrollMax(document.body.clientHeight - window.innerHeight);
    window.addEventListener('resize', _handleWindowResize);
    return () => {
      window.removeEventListener('resize', _handleWindowResize);
    };
  }, []);

  return (
    <Progress
      isColor={props.color}
      isHidden={scrollTop <= 0}
      value={scrollTop}
      max={scrollMax}
      style={{
        borderRadius: 0,
        position: 'fixed',
        margin: 0,
        left: 0,
        top: props.position === 'top' && 0,
        bottom: props.position === 'bottom' && 0,
        right: 0,
        height: '0.3rem',
        zIndex: 1
      }}
    />
  );
};

ReadingProgress.defaultProps = {
  position: 'top',
  color: 'info'
};

ReadingProgress.propTypes = {
  position: PropTypes.oneOf(['top', 'bottom']),
  color: PropTypes.oneOf([
    'white',
    'light',
    'dark',
    'black',
    'primary',
    'info',
    'success',
    'warning',
    'danger'
  ])
};

export default ReadingProgress;
