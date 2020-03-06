import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import RecommendedPosts from '../components/RecommendedPosts';

import * as S from '../components/Post/styled';

function BlogPost({ data, pageContext }) {
  const post = data.markdownRemark;
  const next = pageContext.nextPost;
  const previous = pageContext.previousPost;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <S.PostWrapper>
        <S.PostDate>
          <p>{post.frontmatter.date}</p>
          {/* <S.TimeToRead>• {post.timeToRead} min read</S.TimeToRead> */}
        </S.PostDate>
        <S.PostHeader>
          <S.PostTitle>
            <h1>{post.frontmatter.title}</h1>
          </S.PostTitle>
          <S.PostDescription>
            <h2>{post.frontmatter.description}</h2>
          </S.PostDescription>
        </S.PostHeader>
        <S.MainContent>
          <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </S.MainContent>
        <RecommendedPosts next={next} previous={previous} />
      </S.PostWrapper>
      {/* <Comments url={post.fields.slug} title={post.frontmatter.title} /> */}
    </Layout>
  );
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "en-us", formatString: "DD MMM YYYY")
      }
      timeToRead
      html
    }
  }
`;

export default BlogPost;
