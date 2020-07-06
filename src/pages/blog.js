import React from 'react';
import Layout from '../components/layout';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Head from '../components/head'

import blogStyles from './blog.module.scss';

const BlogPage = () => {

    // const data = useStaticQuery(graphql`
    //     query{
    //         allMarkdownRemark{
    //         edges{
    //             node{
    //                 frontmatter{
    //                 title
    //                 date
    //             }
    //             html
    //             excerpt
    //             fields{
    //                 slug
    //             }
    //             }
    //         }
    //         }
    //     }
    // `)

    const contentfulData = useStaticQuery(graphql`
    query{
        allContentfulBlogPost(
          sort: {
            fields:publishedDate,
            order:DESC
          }
        ) {
          edges{
            node{
              title
              slug
              publishedDate(formatString:"MMMM Do, YYYY")
            }
          }
        }
      }
`   )

    return(
        
        <Layout>
          <Head title="Blog" />
            <h1>Blog</h1>
            {/* <p>This list of post is generated using markdown</p>
            <ol className={blogStyles.posts}>
            {
                data.allMarkdownRemark.edges.map((edge) => (
                    <li className={blogStyles.post}>
                        <Link to={`/blog/${edge.node.fields.slug}`}>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date}</p>
                        </Link>
                    </li>   
                ))
            }
            </ol>

           <hr/> */}

           <p>This list of post is generated using contentful</p>
            <ol className={blogStyles.posts}>
            {
                contentfulData.allContentfulBlogPost.edges.map((edge) => (
                    <li className={blogStyles.post}>
                        <Link to={`/blog/${edge.node.slug}`}>
                            <h2>{edge.node.title}</h2>
                            <p>{edge.node.publishedDate}</p>
                        </Link>
                    </li>   
                ))
            }
            </ol>
        </Layout>
    )  
}

export default BlogPage;