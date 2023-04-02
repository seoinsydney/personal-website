import Head from 'next/head' //using head for SEO purpose
import { Inter } from 'next/font/google'
import styles from '@/styles/pages.module.scss'
import SEOHead from '@/components/seoHead';
import TopMenu from '@/components/topMenu';

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  return (
    <>
      <SEOHead />
      <main>
        <TopMenu />
        <div className={styles.pageContainer}>
          <section>
            <h1>
            Contact
            </h1>
            
          </section>
        </div>
      </main>
    </>
  )
}
