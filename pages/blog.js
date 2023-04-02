import { Inter } from 'next/font/google'
import styles from '@/styles/pages.module.scss'
import SEOHead from '../components/seoHead';
import TopMenu from '../components/topMenu';

const inter = Inter({ subsets: ['latin'] })

export default function Blog() {
  return (
    <>
      <SEOHead />
      <main>
        <TopMenu />
        <div className={styles.pageContainer}>
          <section>
            <h1>
            Blog
            </h1>
            <p>coming soon...</p>
          </section>
        </div>
      </main>
    </>
  )
}
