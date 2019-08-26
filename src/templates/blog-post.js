import React, { useContext } from 'react';
import { Link, graphql } from 'gatsby';
import LazyImage from 'gatsby-image';
import { Container, Content, Section, Subtitle, Title } from 'bloomer';
import { DiscussionEmbed } from 'disqus-react';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';
import ReadingProgress from '../components/reading-progress';

// Theme
import { ThemeContext, getOppositeTheme } from '../contexts/theme';

const BlogPostTemplate = props => {
  const { theme } = useContext(ThemeContext);

  const post = props.data.markdownRemark;
  const cover = post.frontmatter.cover;
  const {
    title: siteTitle,
    author,
    siteUrl,
    keywords,
    disqusShortname
  } = props.data.site.siteMetadata;
  const postUrl = `${siteUrl}${post.fields.slug}`;
  const { previous, next } = props.pageContext;
  const siteKeywords = Array.from(
    new Set([...(keywords || []), ...(post.frontmatter.tags || [])])
  );
  const articleMeta = [
    {
      name: 'article:published_time',
      content: post.frontmatter.published_time
    },
    {
      name: 'article:author',
      content: author
    },
    {
      name: 'og:site_name',
      content: siteTitle
    },
    {
      name: 'og:image',
      content: cover && `${siteUrl}${cover.childImageSharp.fluid.originalImg}`
    },
    {
      name: 'twitter:image',
      content: cover && `${siteUrl}${cover.childImageSharp.fluid.originalImg}`
    },
    ...siteKeywords.map(k => ({
      name: 'article:tag',
      content: k
    }))
  ];

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        type="article"
        url={postUrl}
        meta={articleMeta}
        keywords={siteKeywords}
      />
      <ReadingProgress color={theme === 'light' ? 'dark' : 'warning'} />
      <Section className={`has-background-${theme}`}>
        <Container>
          <Title hasTextColor={getOppositeTheme(theme)}>
            {post.frontmatter.title}
          </Title>
          <Subtitle hasTextColor={getOppositeTheme(theme)}>
            <small>{`${post.frontmatter.date} — ${post.timeToRead} min`}</small>
          </Subtitle>
        </Container>
        {cover && (
          <div style={{ margin: `2rem -1.5rem` }}>
            <LazyImage
              fluid={cover.childImageSharp.fluid}
              alt={post.frontmatter.title}
              style={{
                maxWidth: cover.childImageSharp.fluid.presentationWidth,
                maxHeight:
                  cover.childImageSharp.fluid.presentationWidth /
                  cover.childImageSharp.fluid.aspectRatio,
                margin: `0 auto`,
                boxShadow: `0px 10px 30px -5px rgba(0, 0, 0, 0.3)`
              }}
            />
          </div>
        )}
        <Container>
          <Content
            hasTextColor={getOppositeTheme(theme)}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <hr />

          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>

          <hr />

          <DiscussionEmbed
            shortname={disqusShortname}
            config={{
              url: postUrl,
              identifier: post.id,
              title: post.frontmatter.title
            }}
          />
        </Container>
      </Section>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
        keywords
        disqusShortname
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      timeToRead
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        published_time: date(formatString: "YYYY-MM-DD")
        description
        tags
        cover {
          childImageSharp {
            fluid(maxWidth: 1400, maxHeight: 600, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
              presentationWidth
              originalImg
            }
          }
        }
      }
    }
  }
`;
