import Head from 'next/head' //using head for SEO purpose
import { Inter } from 'next/font/google'
import styles from '@/styles/pages.module.scss'
import Layout from './layout';
import { Grid } from '@mui/material';

export default function Contact() {
  return (
    <Layout>
      <div className={styles.pageContainer}>
        <section>
          <h1>Contact</h1>
        </section>
        <Grid container className={styles.contact}>
          <Grid item xs={12} md={5} lg={5} order={{ xs: 2, sm: 2, md: 1 }}>
            <section>
              <p>
              Feel free to contact me with any questions, comments, or concerns you may have. 
              I'm always happy to hear from you and will do my best to respond as quickly as possible. 
              You can reach me via email, phone, or social media, whichever is most convenient for you. 
              Thank you for your interest, and I look forward to hearing from you soon!
              </p>
              <p><span>Email: seosydneyweb@gmail.com</span></p>
            </section>
            <button type="button">
              <a href="https://www.linkedin.com/in/jisoo-an-35baa9173/">LinkedIn</a>
            </button>
          </Grid>
          <Grid item xs={12} md={7} lg={7} order={{ xs: 1, sm: 1, md: 2 }}>
            <img src='/smaller-contact_50.jpg' alt='contact image' width="645" height="430" />
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}
