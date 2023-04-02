import styles from '@/styles/pages.module.scss'
import SEOHead from '@/components/seoHead';
import TopMenu from '@/components/topMenu';
import ProjectCard from 'components/projectCard';
import { Grid } from '@mui/material';

// import ProjectAPI from 'api/projectAPI';
import { GraphQLClient, gql } from 'graphql-request';

const graphcms = new GraphQLClient(
    "https://api-ap-southeast-2.hygraph.com/v2/clfukpdd33m8q01upa9z62of4/master"
  )
  
  const QUERY = gql`
  {
    projects {
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
  }`
  
  export async function getStaticProps() {
    const {projects} = await graphcms.request(QUERY);
    return{
      props: {
        projects,
      },
      revalidate: 10,
    }
  }

export default function Projects({projects}) {
  return (
    <>
      <SEOHead />
      <main>
        <TopMenu />
        <div className={styles.pageContainer}>
          <section>
            <h1>
            Projects
            </h1>
          </section>
          <Grid container cpacing={2} className={styles.cardContainer}>
            {
              projects.map((project) => (
                <ProjectCard 
                title={project.title}
                author={project.author} 
                photo={project.photo} 
                key={project.id}
                datePublished={project.datePublished}
                slug={project.slug}
                hushtags={project.hushtags}
                />
              ))
            }
          </Grid>
        </div>
      </main>
    </>
  )
}
