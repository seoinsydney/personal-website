import Link from 'next/link';
import styles from '@/styles/blogCard.module.scss';
import { Grid } from '@mui/material';

export default function BlogCard({
    blogTitle,
    coverPhoto, 
    datePublished, 
    slug,
    pdf,
}){
    console.log(blogTitle)
    return(
        <Grid item xs={12} md={6} lg={6}>
            <div className={styles.blogCard}>
            <Link href={'/blog/' + slug}>
                <div className={styles.blogImgContainer}>
                    <img src={coverPhoto.url} 
                    alt='blog cover photos' 
                    width="544" height="300" />
                </div>
                <section className={styles.text}>
                    <h5>{blogTitle}</h5>
                    <h6>{datePublished}</h6>
                </section>
            </Link>
            </div>
        </Grid>
    )
} 