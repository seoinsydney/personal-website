import styles from '@/styles/slug.module.scss'
import Layout from '../../components/layout';
import { GraphQLClient, gql } from 'graphql-request';
import GoBackBtn from '@/components/goBackBtn';
import { Grid, Divider, spacing  } from '@mui/material';


const graphCms = new GraphQLClient(
    "https://api-ap-southeast-2.hygraph.com/v2/clfukpdd33m8q01upa9z62of4/master"
  )
  
  const QUERY = gql`
    query Project($slug: String!){
        project(where: {slug: $slug}){
            id,
            title,
            slug,
            photo {
                url
            }
            richtext{
                html
            }
            datePublished,
            author {
                id
                name
            },
            hushtags {
                id
                tag
            }
        }
    }
  `

  const SLUGLIST = gql`
  {
    projects {
      slug
    }
  }
  `

  export async function getStaticPaths() {
    const{projects} = await graphCms.request(SLUGLIST);
    return {
        paths: projects.map((project) => ({params: {slug: project.slug} })),
        fallback: false,
    };
  }
  
  export async function getStaticProps({params}) {
    const slug = params.slug;
    const data = await graphCms.request(QUERY, {slug});
    const project = data.project
    return{
      props: {
        project,
      },
      revalidate: 10,
    }
  }

export default function ProjectDetails({project}) {
    return (
      <Layout>
        <div className={styles.slugContainer}>
          <h1>Project</h1>
          <Grid container className={styles.projectDetails}>

            <Grid item xs={12} md={6} lg={6}>
              <img src={project.photo[0].url} 
              alt={project.title + 'cover photo'} />
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
            <Divider variant="middle"  />
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
              <section>
                <h2>{project.title}</h2>
                <p><span>{project.datePublished}</span></p>
                <div className={styles.tagFlex} >
                {
                  project.hushtags.map((tag) => (
                    <p key={tag.id}><span>{tag.tag}</span></p>
                  ))
                }
                </div>
              </section>
              <div className={styles.content} dangerouslySetInnerHTML={{__html: project.richtext.html}}></div>
              <GoBackBtn />
            </Grid>
          </Grid>
        </div>
      </Layout>
    )
}