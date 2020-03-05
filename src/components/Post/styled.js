import styled from 'styled-components';

export const PostWrapper = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
`;

export const PostDate = styled.section`
  display: flex;
  margin-bottom: 4rem;

  p {
    font-size: 1.7rem;
    color: #999;
  }
`;

export const PostHeader = styled.header`
  width: 100%;
  display: flex;
  flex-flow: column wrap;

  display: flex;
  flex-direction: column;
  color: var(--text);
  font-size: 40px;
  line-height: 40px;
`;

export const PostTitle = styled.section`
  display: flex;
  margin-bottom: 1.8rem;

  h1 {
    font-size: 4rem;
    line-height: 4rem;
    font-weight: 700;
    color: var(--text);
  }
`;

export const PostDescription = styled.section`
  display: flex;
  padding-bottom: 3rem;
  border-bottom: 0.1rem solid var(--shadow);

  h2 {
    font-size: 1.7rem;
    line-height: 2.6rem;
    font-weight: 400;
    color: var(--text);
  }
`;

export const TimeToRead = styled.section`
  font-size: 1.4rem;
`;

export const MainContent = styled.section`
  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: var(--text);
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
    padding: 0 1.4rem;
  }
  p {
    margin: 0 auto 1.6rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
  }
  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }
  li {
    padding: 0.625rem 0;
    & > ul {
      margin-bottom: 0;
    }
  }
  p,
  li {
    code {
      word-wrap: break-word;
    }
  }
  img {
    display: block;
    max-width: 100%;
    margin: 1.875rem auto;
  }
  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;
  }
  blockquote {
    color: var(--white);
    border-left: 0.3rem solid #1fa1f2;
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }
  hr {
    border: 1px solid #38444d;
    margin: 3rem auto;
  }
  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }
  h1 {
    font-size: 2.8rem;
  }
  h2 {
    font-size: 2.1rem;
  }
  h3 {
    font-size: 1.6rem;
  }
  h4 {
    font-size: 1.4rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  strong {
    font-weight: 700;
  }
  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }
  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;
    &.lazyload {
      opacity: 0;
    }
    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }
  .gatsby-highlight {
    padding: 0 1.6rem 1.6rem;
  }
  .instagram-media {
    margin: 1rem auto !important;
  }
  a {
    border-bottom: 1px dashed #1fa1f2;
    color: #1fa1f2;
    text-decoration: none;
    transition: opacity 0.5s;
    svg {
      color: var(--white);
    }
    &:hover {
      opacity: 0.8;
    }
  }
`;
