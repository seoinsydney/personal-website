import styles from '@/styles/pages.module.scss'
import SEOHead from '@/components/seoHead';
import TopMenu from '@/components/topMenu';
import { TbArrowNarrowDown } from "react-icons/tb";
import { Grid } from '@mui/material';

export default function Projects() {
  return (
    <>
      <SEOHead />
      <main>
        <TopMenu />
        <div className={styles.pageContainer}>
            <section>
                <h1>Design</h1>
            </section>
            <div className={styles.figmaDesign}>
              <section>
                <h4>Mobile Weather App</h4>
                <p>Explore and interact with the screen by clicking around!</p>
                <br />
                <h6>Please click <b>"Web Design"</b> to see more designs</h6>
                <TbArrowNarrowDown />
              </section>
              <iframe 
                className={styles.figmaDesign__desktop}
                width="750" height="600" 
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FIjhZDncX3Atl5YziMjQPFF%2FWeb-Design%3Ftype%3Ddesign%26node-id%3D549-124%26scaling%3Dscale-down%26page-id%3D539%253A39%26starting-point-node-id%3D549%253A124" 
                allowfullscreen></iframe>  
              <iframe 
                className={styles.figmaDesign__tablet}
                width="400" height="600" 
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FIjhZDncX3Atl5YziMjQPFF%2FWeb-Design%3Ftype%3Ddesign%26node-id%3D549-124%26scaling%3Dscale-down%26page-id%3D539%253A39%26starting-point-node-id%3D549%253A124" 
                allowfullscreen></iframe> 
              <iframe 
                className={styles.figmaDesign__mobile}
                width="300" height="600" 
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FIjhZDncX3Atl5YziMjQPFF%2FWeb-Design%3Ftype%3Ddesign%26node-id%3D549-124%26scaling%3Dscale-down%26page-id%3D539%253A39%26starting-point-node-id%3D549%253A124" 
                allowfullscreen></iframe> 
            </div>

          <section>
            <h2>Portfolio Design</h2>
          </section>
            <Grid container className={styles.webDesign}>
              <Grid item xs={12} sm={12} md={5} lg={5}>
                  <img src='/Perfume.Co.png' 
                  alt='blog cover photos' 
                  width="954" height="637" />
              </Grid>
              <Grid item xs={12} sm={12} md={7} lg={7}>
                <section>
                  <h4>Perfume Co.</h4>
                  <p>Perfume.Co's web design portfolio embodies elegance and sophistication, featuring clean and minimalist layouts that allow the fragrances to take center stage. With captivating imagery, refined typography, and a harmonious color palette, the portfolio showcases the brand's artistry in creating handcrafted perfumes, providing visitors with a luxurious and immersive experience that celebrates the power of scent.</p>
                  <ul>
                    <li><a href="/Perfume.Co - combined.pdf" target="blank">Web Design</a></li>
                    <li><a href="/Style guide 1-merged.pdf" target="blank">Style Guide</a></li>
                    <li><a href="/Perfume Co. Brand Concept.pdf" target="blank">Brand Concept</a></li>
                  </ul>
                </section>
              </Grid>
            </Grid>
        </div>
      </main>
    </>
  )
}



