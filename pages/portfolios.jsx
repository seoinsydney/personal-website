import styles from '@/styles/pages.module.scss'
import Layout from '../components/layout';
import Designs from '../components/design';
import ProjectCard from '../components/projectCard';
import { Grid } from '@mui/material';
import { GraphQLClient, gql } from 'graphql-request';
// import TuneIcon from '@mui/icons-material/Tune';
// import CloseIcon from '@mui/icons-material/Close';
// import PrimaryButton from '../components/primaryButton';

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
  console.log(projects)
  return{
    props: {
      projects,
    },
    revalidate: 10,
  }
}

export default function Portfolios({projects}) {

  const sortedData = projects.sort((a, b) => new Date(b.datePublished) - new Date(a.datePublished));

  // const [openFilter, setOpenFilter] = useState(false)
  // const toggleIcon = () => {
  //   setOpenFilter(!openFilter)
  // }
  // console.log(projects)
  // console.log(projects[1].hushtags[0].tag)
  // const categories = [
  //   {id: 0, name: "All"},
  //   {id: 1, name: "React.js"},
  //   {id: 2, name: "Next.js"},
  //   {id: 3, name: "Python"},
  //   {id: 4, name: "WordPress"},
  // ]
  // const category = categories.map(category =>
  //     <Checkbox label={category.name} id={category.id} key={category.id} />
  //   )

  return (
    <Layout>
    <div className={styles.pageContainer}>
      <section>
        <h1>Portfolios</h1>
      </section>
      <Designs />

        {/* <div className={styles.filterProjects}>
          <div onClick={toggleIcon}>
            {
              openFilter ?
              <PrimaryButton><p>Filter </p><TuneIcon style={{ transition: ".3s",transform: 'scaleX(-1)'}}/></PrimaryButton>
              :
              <PrimaryButton><p>Filter </p><TuneIcon style={{transition: ".3s"}} /></PrimaryButton>
            }
          </div>
          <div className={styles.filterProjects__checkbox}>
            { openFilter ? <>{category}</> : <></> }
          </div>
        </div> */}
        <section>
          <h5>Projects</h5>
        </section>
        <Grid container className={styles.cardContainer}>
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

      </Layout>
  )
}

