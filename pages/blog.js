import styles from '@/styles/pages.module.scss'
import Layout from '../components/layout';
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

  const sortedData = blogs.sort((a, b) => new Date(b.datePublished) - new Date(a.datePublished));

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
            blogs.map((blog) => (
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
