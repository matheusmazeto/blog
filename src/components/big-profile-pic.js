import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import LazyImage from 'gatsby-image';

const BigProfilePic = props => {
  return (
    <StaticQuery
      query={profilePicQuery}
      render={data => {
        const { author } = data.site.siteMetadata;
        const profilePic = data.file.childImageSharp;
        return (
          <LazyImage
            className={props.className}
            fluid={profilePic.fluid}
            alt={author}
            imgStyle={{
              borderRadius: `50%`,
              boxShadow: `0px 10px 30px -5px rgba(0, 0, 0, 0.3)`
            }}
            style={{
              maxWidth: profilePic.fluid.presentationWidth,
              maxHeight:
                profilePic.fluid.presentationWidth /
                profilePic.fluid.aspectRatio,
              overflow: `visible`,
              ...props.style
            }}
          />
        );
      }}
    />
  );
};

const profilePicQuery = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
    file(relativePath: { eq: "profile-pic.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
          presentationWidth
        }
      }
    }
  }
`;

export default BigProfilePic;
