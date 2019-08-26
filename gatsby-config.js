module.exports = {
  siteMetadata: {
    title: `Bomb site`,
    author: `Matheus Mazeto`,
    email: `mgmazeto@gmail.com`,
    description: `A dev blog by Matheus Mazeto.`,
    siteUrl: `https://mazeto.dev`,
    siteDomain: `mazeto.dev`,
    language: `en`,
    disqusShortname: `mazeto-dev`,
    social: {
      instagram: `matheusmazeto`,
      facebook: `matheusmazeto`,
      linkedin: `matheusmazeto`,
      twitter: `mazeto`,
      github: `matheusmazeto`
    },
    keywords: [
      `matheus`,
      `mazeto`,
      `blog`,
      `gatsby`,
      `javascript`,
      `js`,
      `react`,
      `reactjs`,
      `html`,
      `html5`,
      `css`,
      `css3`
    ]
  },
  pathPrefix: `/`,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
        ignore: [`**/\.*`] // ignore files starting with a dot
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1400,
              linkImagesToOriginal: false,
              withWebp: {
                quality: 80
              },
              wrapperStyle: fluidResult =>
                `flex:${Math.round(fluidResult.aspectRatio, 2)};`
            }
          },
          `gatsby-remark-embed-video`,
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-external-links`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-a11y-emoji`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true,
              noInlineHighlight: true
            }
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`
            }
          }
        ]
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: process.env.GTM_ID
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] }
                  filter: { frontmatter: { draft: { ne: true } } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                        description
                        tags
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            setup: ({
              query: {
                site: { siteMetadata }
              }
            }) => {
              return {
                title: siteMetadata.title,
                description: siteMetadata.description,
                language: siteMetadata.language,
                categories: siteMetadata.keywords,
                feed_url: siteMetadata.siteUrl + `/rss.xml`,
                site_url: siteMetadata.siteUrl,
                image_url: siteMetadata.siteUrl + `/icons/icon-144x144.png`,
                managingEditor: `${siteMetadata.email} (${siteMetadata.author})`,
                webMaster: `${siteMetadata.email} (${siteMetadata.author})`,
                generator: `GatsbyJS`
              };
            },
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description:
                    edge.node.frontmatter.description || edge.node.excerpt,
                  author: site.siteMetadata.author,
                  categories: Array.from(
                    new Set([
                      ...(site.siteMetadata.keywords || []),
                      ...(edge.node.frontmatter.tags || [])
                    ])
                  ),
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }]
                });
              });
            }
          }
        ],
        query: `
          {
            site {
              siteMetadata {
                title
                author
                email
                description
                language
                siteUrl
                keywords
              }
            }
          }
        `
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Quicksand`,
            variants: [`300`, `400`, `500`, `700`]
          }
        ]
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dev Blog by Dennis Morello`,
        short_name: `Dev Blog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#363636`,
        display: `minimal-ui`,
        icon: `content/assets/logo-1024.png`,
        include_favicon: true,
        crossOrigin: `use-credentials`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`
  ]
};
