import { useEffect, useState } from 'react';
import styles from '@/styles/pages.module.scss'
import Layout from './layout';
import BlogCard from 'components/blogCard';
import { Grid } from '@mui/material';
import { GraphQLClient, gql } from 'graphql-request';

const graphCms = new GraphQLClient(
  "https://api-ap-southeast-2.hygraph.com/v2/clfukpdd33m8q01upa9z62of4/master"
)

const QUERY = gql`
  {
    blogs {
      id,
      blogTitle,
      slug,
      coverPhoto {
        url
      },
      content {
        html
      },
      pdf {
        url
      },
      datePublished
    }
  }
`

export async function getStaticProps() {
  const {blogs} = await graphCms.request(QUERY);
  return{
    props: {
      blogs,
    },
    revalidate: 10,
  }
}

export default function Blog({blogs}) {
  const [shouldRender, setShouldRender] = useState(true);
  useEffect(() => {
    if (shouldRender) {
      // Code to forcibly render the page on the client side
      // Set shouldRender to false to prevent further re-rendering
      setShouldRender(false);
    }
  }, [shouldRender]);
  const reversedBlogs = blogs.reverse();
  return (
    <Layout>
      <div className={styles.pageContainer}>
        <section>
          <h1>
          Blog
          </h1>
        </section>
        <Grid container justify-content="space-between">
          {
            reversedBlogs.map((blog) => (
              <BlogCard 
              blogTitle={blog.blogTitle}
              coverPhoto={blog.coverPhoto} 
              key={blog.id}
              datePublished={blog.datePublished}
              slug={blog.slug}
              />
            ))
          }
        </Grid>
      </div>
    </Layout>
  )
}
