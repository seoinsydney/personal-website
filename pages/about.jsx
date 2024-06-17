import styles from '@/styles/pages.module.scss'
import Layout from '../components/layout';
import { Grid } from '@mui/material';

export default function About() {

  return (
    <Layout>
      <div className={styles.pageContainer}>

      {/* <div className={styles.colorChangingBackground}>
        <div></div>
        <div className={styles.colorfulShapes}></div>
        <div className={styles.content}>
            <h1>Welcome to the Colorful Hero Section</h1>
            <p>This is an example of a hero section with dynamic color-changing effects.</p>
        </div>
      </div> */}

        <Grid container className={styles.aboutMe} justifyContent={'space-between'}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <img src="/jisoo-an.jpg" alt="jisoo" />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <section>
              <h2>Frontend Developer</h2>
              <p>As a Frontend developer with a couple of years of experience, 
                I have a strong proficiency in building modern and responsive user interfaces. 
                I am skilled in developing web applications using React/Next.js, JavaScript, GraphQL, HTML, and CSS.
              </p>
            </section>

            <section>
              <h2>UI/UX Designer</h2>
              <p>Focused on creating visually appealing and user-friendly digital experiences. 
                I conducted user research to understand target audiences and their preferences, 
                and utilized wireframing and prototyping techniques to demonstrate design concepts.
              </p>
            </section>
          </Grid>

          <Grid><h3>Coming soon..</h3></Grid>     
        </Grid>
      </div>
    </Layout>
  )
}
