import styles from '@/styles/pages.module.scss'
import Layout from '../components/layout';
import { Grid, Link } from '@mui/material';

export default function Contact() {
  return (
    <Layout>
      <div className={styles.pageContainer}>
        <section>
          <h1>Contact</h1>
        </section>
        <Grid container className={styles.contact}>
          <Grid item xs={12} md={5} lg={5}>
              <section>
                <p>
                Feel free to contact me with any questions, comments, or concerns you may have. 
                Thank you for your interest, and I look forward to hearing from you soon!
                </p>
                <p><span>Email: seosydneyweb@gmail.com</span></p>
              </section>
              <figure>
                <Link href="https://www.linkedin.com/in/jisoo-an-35baa9173/"><img src="linkedin.png" /></Link>
                <Link href="https://github.com/seoinsydney"><img src="github_PNG23.png" /></Link>
                <Link href="https://codepen.io/collection/WvBZNd"><img src="codepen-wordmark-black.png" /></Link>
              </figure>
            </Grid>

            <Grid item xs={12} md={7} lg={7}>
              <div className={styles.hideDesktop}>
                <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSe6cAbWiRfJj3WAH7BZQiRm1tjERSdQnB0wJW55k8d1bYsYdw/viewform?embedded=true" 
                width="300" height="1100" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
              </div>
              <div className={styles.hideMobile}>
                <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSe6cAbWiRfJj3WAH7BZQiRm1tjERSdQnB0wJW55k8d1bYsYdw/viewform?embedded=true" 
                width="600" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
              </div>
            </Grid>
        </Grid>
      </div>
    </Layout>
  )
}
