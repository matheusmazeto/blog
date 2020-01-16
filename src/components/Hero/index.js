import React from 'react';
import { Link } from 'gatsby';

function Hero() {
  return (
    <section>
      {/* use playfair */}
      <h1>Hi, my Name is Matheus Mazeto</h1>
      <p>I'm a software developer currently living in Brazil.</p>
      <p>
        I have been working with web technologies, such as React, React Native
        and NodeJS.
      </p>
      <p>
        You can read my <Link to="/blog">Blog</Link> and also find my complete
        professional background and experience on my{' '}
        <a href="https://www.linkedin.com/in/matheusmazeto/">Linkedin</a>.
      </p>
    </section>
  );
}

export default Hero;
