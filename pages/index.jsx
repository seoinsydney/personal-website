import styles from '@/styles/Home.module.scss'
import Layout from '../components/layout';
import { Grid } from '@mui/material';
import PrimaryButton from '../components/primaryButton';


export default function Home() {

  const servicesIOffer = [
    {
      icon: 'fluent_design-regular.png',
      title: 'Graphic Design',
      width: 40,
      text: "I craft captivating visuals that connect with your brand's style, creating a visual language that speaks directly to your audience.",
    },
    {
      icon: 'web design.png',
      title: 'Web Design',
      width: 40,
      text: "My designs go beyond looks, they're easy to use and customized to effectively convey your unique message.",
    },
    {
      icon: 'code icon.png',
      title: 'Web Development',
      width: 50,
      text: "From the idea stage to launching your website, I follow a precise development process, resulting in strong websites built to last.",
    },
    {
      icon: 'wp-Vector.png',
      title: 'CMS/Woo Commerce',
      width: 40,
      text: "I give you control over your website's content with CMS integration, making it effortless for you to update and manage your site.",
    },
    {
      icon: 'uil_react.png',
      title: 'React Developer',
      width: 55,
      text: "I'm an expert in creating interactive and adaptable user interfaces for the best viewing experience on all devices.",
    },
  ]

  return (
    <Layout>
      <div className={styles.homeContainer}>

      <Grid container className={styles.iBuildDigital}>
          <Grid item xs={12} sm={2} md={2} lg={2} 
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            >
            <figure>
              <img src="/ph_dots-nine-thin.png" alt="dots" />
            </figure>
          </Grid>
          <Grid item xs={12} sm={8} md={4} lg={4}>
            <section>
              <h2>I<br />Build<br /><span>Digital</span></h2>
            </section>
          </Grid>
          <Grid item xs={1} sm={1} md={4} lg={4} 
          className={styles.hideMobile}
          >
            <img src="/mobile-wireframe-concept-illustration_114360-5184.jpg"
            alt="mobile wireframe concept illustration"/>
          </Grid>
          <Grid xs={12} sm={2} md={2} lg={2} 
            container
            direction="column"
            justifyContent="flex-end"
            alignItems="flex-end"
            >
            <figure>
              <img src="/ph_dots-six-thin.png" alt="dots" width="100"/>
            </figure>
          </Grid>
      </Grid>

      {/* <div className={styles.homeTitle}>
        <div className={styles.homeBlueCircle}></div>
        <section>
          <h1>Hi, I'm Jisoo An.</h1>
          <p>Web Designer / Developer</p>
        </section>
        <div className={styles.homePinkCircle}></div>
      </div> */}

      <Grid container className={styles.services}>
        <Grid item xs={12} sm={4} md={4} lg={4} className={styles.servicesTitle}>
          <div className={styles.BlueCircle}></div>
          <h2>Services I Offer</h2>
          <div className={styles.PinkCircle}></div>
        </Grid>
        {
          servicesIOffer.map((list) => (
            <Grid item xs={12} sm={4} md={4} lg={4} key={list.icon}>
            <figure>
              <img src={list.icon} width={list.width} />
              <h5>{list.title}</h5>
              <p>{list.text}</p>
            </figure>
          </Grid>
          ))
        }
      </Grid>

      <Grid className={styles.pinkBackground}>
        <Grid container className={styles.pinkContainer}>
          <Grid item xs={12} sm={12} md={5} lg={5} >
            <img src="/wireframe-image.png" alt="wireframe-image" />
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={7} >
            <section>
              <h2>Everything your project needs for success.</h2>
              <p>
                I'm here to make your online experience amazing. I'm a freelance web designer and developer, and I use my creative and technical skills to turn your digital dreams into reality. My services cover a lot of important things to ensure your website not only looks fantastic but also works perfectly to help your business.
              </p>
            </section>
          </Grid>
        </Grid>
      </Grid>

      <Grid container className={styles.freelancer}>
        <Grid item xs={12} sm={12} md={6}>
          <img src="designer-working-layout_53876-101277 1.png" />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <h2>What is the difference between freelancer and agency?</h2>
          <p>Understanding the difference between a freelancer and an agency is crucial for making the right choice for your project. As a solo freelancer, I offer a personal touch and dedicated approach that larger agencies often can't provide. The biggest benefit? There's no minimum project size. Whether you need a designer or developer for a small task or a comprehensive project, I'm here to cater to your unique needs and ensure your vision comes to life</p>
        </Grid>
      </Grid>

      <Grid className={styles.consultation}>
        <div className={styles.diagonal}></div>
        <section>
          <h2>Do you need a consultation?</h2>
          <PrimaryButton linkTo="/contact">Get a FREE quote</PrimaryButton>
        </section>
      </Grid>

      <Grid className={styles.faq}>
        <Grid container className={styles.container}>
          <Grid item xs={12} sm={12} md={6}>
            <h2>Frequently Asked Questions</h2>
            <p>Answers to Your Common Questions <br />
              Welcome to our FAQ section, where we address your most frequent inquiries about our services and the process of working with us.</p>
              {/* <PrimaryButton linkTo="/" >See more FAQs</PrimaryButton> */}
              <h3>Coming soon..</h3>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <img src="Rectangle 105.png" />
          </Grid>
        </Grid>
      </Grid>

      </div>
    </Layout>
  )
}
