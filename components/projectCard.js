import Link from 'next/link';
import styles from '@/styles/projectCard.module.scss';
import { Grid } from '@mui/material';

export default function BlogPost({
    title, 
    // author, 
    photo, 
    datePublished, 
    slug,
    hushtags,
}){
    return(
        <Grid item xs={12} md={6} lg={4} className={styles.projectCard}>
            <Link href={'/projects/' + slug}>
                <div className={styles.imgContainer}>
                    <img src={photo[0].url} alt='blog cover photos' width="365" height="275" />
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