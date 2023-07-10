import Link from 'next/link';
import styles from '@/styles/components.module.scss';
import { Grid } from '@mui/material';

export default function ProjectCard({
    title, 
    // author, 
    photo, 
    datePublished, 
    slug,
    hushtags,
}){
    return(
        <Grid item xs={12} sm={6} md={4} lg={3} className={styles.projectCard}>
            <Link href={'/project/' + slug}>
                <div className={styles.imgContainer}>
                    <img src={photo[0].url} alt='blog cover photos' />
                </div>
                <section className={styles.text}>
                    <h5>{title}</h5>
                    <h6>{datePublished}</h6>
                    <div className={styles.skillTag}>
                        {
                            hushtags.map((skill) => (
                                <p key={skill.id}>{skill.tag}</p>
                            ))
                        }
                    </div>
                </section>
            </Link>
        </Grid>
    )
} 