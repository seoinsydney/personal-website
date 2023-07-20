import styles from '@/styles/pages.module.scss'
import Layout from '../components/layout';
import { Grid } from '@mui/material';

export default function Projects() {

  const designList = [
    {
      id: 1,
      title: 'Perfume Co.',
      tag: 'E-commerce',
      // text: 'Perfume.Co's web design portfolio embodies elegance and sophistication, featuring clean and minimalist layouts that allow the fragrances to take center stage. With captivating imagery, refined typography, and a harmonious color palette, the portfolio showcases the brand's artistry in creating handcrafted perfumes, providing visitors with a luxurious and immersive experience that celebrates the power of scent.',
      image: '/Perfume.Co.png',
      alt: 'blog cover photos',
      webDesignPdf: '/Perfume.Co - combined-compressed.pdf',
      styleGuidePdf: '/Style guide 1-merged.pdf',
      brandConceptPdf: '/Perfume Co. Brand Concept.pdf',
    },
    {
      id: 2,
      title: 'Drew work',
      tag: 'E-commerce',
      image: '/drew work Home page.png',
      alt: 'blog cover photos for Drew Work Handmade',
      webDesignPdf: '/drew work-merged-compressed.pdf',
      styleGuidePdf: '',
      brandConceptPdf: '',
    },
    {
      id: 3,
      title: 'Weather App',
      tag: 'Mobile Application',
      image: '/portfolio-dark.png',
      alt: 'blog cover photos',
      webDesignPdf: '/portfolio-dark-merged.pdf',
      styleGuidePdf: '',
      brandConceptPdf: '',
    },
    {
      id: 4,
      title: 'See the street',
      tag: 'One Page Website',
      image: '/see the street home.png',
      alt: 'blog cover photos',
      webDesignPdf: '/CREATIVE STUDIO-compressed.pdf',
      styleGuidePdf: '',
      brandConceptPdf: '',
    },
    {
      id: 5,
      title: 'Nature',
      tag: 'One Page Website',
      image: '/lanecove-homepage.png',
      alt: 'blog cover photos',
      webDesignPdf: '/lanecove-web-design_compressed.pdf',
      styleGuidePdf: '',
      brandConceptPdf: '',
    },
    {
      id: 6,
      title: 'Recipes',
      tag: 'Brochure',
      image: '/Kimchi Pancake paper frame-whitebgr.png',
      alt: 'blog cover photos',
      webDesignPdf: '/Kimchi recipes-merged-compressed.pdf',
      styleGuidePdf: '',
      brandConceptPdf: '',
    },
    {
      id: 7,
      title: 'Artist',
      tag: 'Portfolio Website',
      image: '/artist.png',
      alt: 'blog cover photos',
      webDesignPdf: '/aneta-merged-compressed.pdf',
      styleGuidePdf: '',
      brandConceptPdf: '',
    },
  ]

  return (
    <Layout>
        <div className={styles.pageContainer}>
          <section>
            <h1>Portfolio Design</h1>
          </section>
          <Grid container 
          className={styles.webDesign} 
          spacing={1}
          >
            {
              designList.map( design => 
              <Grid item xs={12} sm={6} md={4} lg={4}
              key={design.id}
              className={styles.webDesign__card}
              >
                <div className={styles.webDesign__layout}>
                <img src={design.image} 
                alt={design.alt}
                />
                <section>
                  <h6>{design.tag}</h6>
                  <h4>{design.title}</h4>
                  <p>{design.text}</p>
                  <ul>
                    <li><a href={design.webDesignPdf} >Design</a></li>
                    {
                      design.styleGuidePdf === "" ?
                      <></>
                      :
                      <li><a href={design.styleGuidePdf} >Style Guide</a></li>
                    }
                    {
                      design.brandConceptPdf === "" ?
                      <></>
                      :
                      <li><a href={design.brandConceptPdf} >Brand Concept</a></li>
                    }
                  </ul>
                </section>
                </div>
              </Grid>
              )
            }
          </Grid>
        </div>
    </Layout>
  )
}



