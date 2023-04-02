import { Inter } from 'next/font/google'
import styles from '@/styles/pages.module.scss'
import SEOHead from '../components/seoHead';
import TopMenu from '../components/topMenu';

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
      <SEOHead />
      <main>
        <TopMenu />
        <div className={styles.pageContainer}>
          <section>
            <h1>
            About me
            </h1>
            <p>
              Hi there!
              <br />
              I am a React Developer with 1 year of experience, passionate about creating intuitive and efficient user interfaces using React.
              <br />
              In the past year, I have honed my skills in developing web applications using React and other related technologies. I have hands-on experience in building interactive components, implementing state management, and integrating APIs with the application. I am also proficient in working with React hooks and functional components, which help me write clean and reusable code.
              <br />
              Apart from technical skills, I believe in being a team player and have actively contributed to the success of the projects I have worked on. I am comfortable working in an agile environment and have experience in collaborating with designers and other developers to deliver high-quality code.
              <br />
              I am always eager to learn and stay updated with the latest developments in the React ecosystem. I am currently exploring the use of Next.js, GraphQL and other front-end frameworks to enhance my skills further.
              <br />
              In summary, I am a highly motivated React Developer with a year of experience, ready to take on new challenges and contribute to building innovative and user-friendly applications.
            </p>
          </section>
        </div>
      </main>
    </>
  )
}
