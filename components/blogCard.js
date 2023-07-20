import Link from 'next/link';
import styles from '@/styles/components.module.scss';
import { Grid } from '@mui/material';

export default function BlogCard({
    blogTitle,
    coverPhoto, 
    datePublished, 
    slug,
    description
}){

    return(
        <Grid item xs={12} md={12} lg={12}>
            <div className={styles.blogCard}>
            <Link href={'/blog/' + slug}>
                <div className={styles.blogImgContainer}>
                    <img src={coverPhoto.url} 
                    alt='blog cover photos' 
                    width="544" height="300" />
                </div>
                <section>
                    <h6>{datePublished}</h6>
                    <h5>{blogTitle}</h5>
                    {
                        description ? <p>{description.slice(0, 200)}...</p> : <></>
                    }
                </section>
            </Link>
            </div>
        </Grid>
    )
} 