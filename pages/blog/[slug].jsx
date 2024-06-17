import styles from '@/styles/slug.module.scss'
import Layout from '../../components/layout';
import GoBackBtn from '@/components/goBackBtn';
import { GraphQLClient, gql } from 'graphql-request';
import { Grid } from '@mui/material';

const graphCms = new GraphQLClient(
  "https://api-ap-southeast-2.hygraph.com/v2/clfukpdd33m8q01upa9z62of4/master"
)
  
  const QUERY = gql`
    query Blog($slug: String!){
      blog(where: {slug: $slug}){
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
        datePublished,
        description
      }
    }
  `

  const SLUGLIST = gql`
  {
    blogs {
        slug
    }
  }
  `

  export async function getStaticPaths() {
    const{blogs} = await graphCms.request(SLUGLIST);
    return {
        paths: blogs.map((blog) => ({params: {slug: blog.slug} })),
        fallback: false,
    };
  }
  
  export async function getStaticProps({params}) {
    const slug = params.slug;
    const data = await graphCms.request(QUERY, {slug});
    const blog = data.blog
    return{
      props: {
        blog,
      },
      revalidate: 10,
    }
  }

export default function BlogDetails({blog}) {
    return (
      <Layout>
        <div className={`${styles.slugContainer} ${styles.slugBlog}`}
        >
          <h1>Blog</h1>
          <Grid container className={styles.blogDetails}>
            <Grid item xs={12} md={12} lg={12}>
              <img src={blog.coverPhoto.url} 
              alt={blog.blogTitle + 'cover photo'} 
              width={500} height={350} />
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <section>
                <h2>{blog.blogTitle}</h2>
                <p><span>{blog.datePublished}</span></p>
              </section>
              <div className={styles.content} 
              dangerouslySetInnerHTML={{__html: blog.content.html}}></div>
              <GoBackBtn />
            </Grid>
          </Grid>
        </div>
      </Layout>
    )
}