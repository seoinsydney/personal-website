import styles from '@/styles/Home.module.scss'
import Layout from './layout';
import { Grid } from '@mui/material';

export default function Home() {
  return (
    <Layout>
      <Grid container className={styles.homeContainer}>
          <Grid item xs={12} md={6} lg={6}>
            <section>
              <h1>
              Hi, <br />
              I’m Jisoo An <br />
              <span>Frontend Developer</span>
              </h1>
              <p><span>
                React.js / Next.js / GraphQL / Node.js 
              </span></p>
              <p>CMS /  UI/UX Design / SEO</p>
            </section>
          </Grid>
          <Grid item xs={12} md={6} lg={6} 
          className={styles.hideMobile}
          >
            <img src="/mesmall2.png" alt="" />
          </Grid>
      </Grid>

      <div className={styles.displayMobileHideDesktop}>
        <section>
          <h2>About me.</h2>
          <p>
            Hi there!
            <br />
            I am a Frontend Developer with 2 years of experience, passionate about creating intuitive and efficient user interfaces using React.
            <br />
            I have hands-on experience in building interactive components, implementing state management, and integrating APIs with the application. I am also proficient in working with React hooks and functional components, which help me write clean and reusable code.
            <br />
            Apart from technical skills, I believe in being a team player and have actively contributed to the success of the projects I have worked on. I am comfortable working in an agile environment and have experience in collaborating with designers and other developers to deliver high-quality code.
            <br />
            I am always eager to learn and stay updated with the latest developments in the React ecosystem. I am currently exploring the use of Next.js, GraphQL and other front-end frameworks to enhance my skills further.
            <br />
            I am a highly motivated React Developer, ready to take on new challenges and contribute to building innovative and user-friendly applications.
          </p>
        </section>
      </div>
    </Layout>
  )
}
