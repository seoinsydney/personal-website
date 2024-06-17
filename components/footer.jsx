import React from 'react';
import styles from '@/styles/pages.module.scss'
import { Grid, Box, Link, Container } from '@mui/material';


const Footer = () => {
  const curentYear = new Date().getFullYear();


  return (
    <Box className={styles.footerContainer} component="footer" py={4}>
      <Container className={styles.footerWrapper} maxWidth="lg">
      <Grid container spacing={3} justifyContent="center">

        <Grid item xs={12} sm={4}>
          <h6 variant="h6">Quick Links</h6>
          <p>
            <Link href="/services" color="inherit">Home</Link>
          </p>
          <p>
            <Link href="/about" color="inherit">About</Link>
          </p>
          <p>
            <Link href="/portfolio" color="inherit">Portfolio</Link>
          </p>
          <p>
            <Link href="/blog" color="inherit">Blog</Link>
          </p>
          <p>
            <Link href="/contact" color="inherit">Contact</Link>
          </p>
        </Grid>

        <Grid item xs={12} sm={4}>
          <h6 variant="h6">Follow Me</h6>
          <p>
            <Link href="https://www.linkedin.com/in/jisoo-an-35baa9173/" target="_blank" rel="noopener" color="inherit">
              LinkedIn
            </Link>
          </p>
          <p>
            <Link href="https://github.com/seoinsydney" target="_blank" rel="noopener" color="inherit">
              Github
            </Link>
          </p>
          <p>
            <Link href="https://codepen.io/collection/WvBZNd" target="_blank" rel="noopener" color="inherit">
              Codepen
            </Link>
          </p>
        </Grid>

        <Grid item xs={12} sm={4}>
          <h6 variant="h6">Contact</h6>
          <p><Link href="/contact" color="inherit">Send me a message</Link></p>
          <p>
            Email: <Link href="mailto:your.email@example.com" color="inherit">seosydneyweb@gmail.com</Link>
          </p>
        </Grid>

      </Grid>
      <Box mt={4} textAlign="center">
        <p>© {curentYear} Web Developer | Jisoo An. All rights reserved.</p>
        <Link href="/privacyPolicy" color="inherit">Privacy Policy</Link> | 
        <Link href="/termsOfCondition" color="inherit">Terms of Service</Link>
      </Box>
      </Container>
    </Box>
  );
};

export default Footer;
