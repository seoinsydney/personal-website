import Link from 'next/link';
import styles from '@/styles/topMenu.module.scss'
import { useState } from 'react';
import { TbMenu2, TbArrowBadgeRight } from "react-icons/tb";


export default function TopMenu () {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={styles.topMenu}>
            <nav className={styles.desktopMenu}>
                <div className={styles.logo}>
                    <Link href="/"><img src="/JA-logo.png" alt="JA - logo" width="60" height="50" /></Link>
                </div>
                <ul>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    {/* <li>
                        <Link href="/blog">Blog</Link>
                    </li> */}
                    <li>
                        <Link href="/projects">Projects</Link>
                    </li>
                    {/* <li>
                        <Link href="/contact">Contact</Link>
                    </li> */}
                    <li>
                        <a href="/Jisoo An - Resume.pdf" target="blank">Resume</a>
                    </li>
                    <li>
                        <a href="https://github.com/seoinsydney"><img src="/akar-icons_github-outline-fill.png" alt="icons_github" width="23" height="23" /></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/jisoo-an-35baa9173/"><img src="/ph_linkedin-logo-thin.png" alt="linkedin-logo" width="25" height="25" /></a>
                    </li>
                </ul>
            </nav>


            <div className={styles.mobileMenu}>
                <div className={styles.logo}>
                    <Link href="/"><img src="/JA-logo.png" alt="JA - logo" width="60" height="50" /></Link>
                </div>
                <button onClick={handleMenuClick}>
                    {isMenuOpen ? 
                        <TbArrowBadgeRight />
                        :
                        <TbMenu2 />
                    }
                </button>
                <div>
                    {isMenuOpen && (
                        <nav className={styles.mobileMenu__close}>
                            <ul>
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                {/* <li>
                                    <Link href="/about">About</Link>
                                </li> */}
                                {/* <li>
                                    <Link href="/blog">Blog</Link>
                                </li> */}
                                <li>
                                    <Link href="/projects">Projects</Link>
                                </li>
                                
                                {/* <li>
                                    <Link href="/contact">Contact</Link>
                                </li> */}
                                <li>
                                    <a href="/Jisoo An - Resume.pdf" target="blank">Resume</a>
                                </li>
                                <li>
                                    <a href="https://github.com/seoinsydney"><img src="/akar-icons_github-outline-fill.png" alt="icons_github" width="23" height="23" /></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/jisoo-an-35baa9173/"><img src="/ph_linkedin-logo-thin.png" alt="linkedin-logo" width="25" height="25" /></a>
                                </li>
                            </ul>
                        </nav>
                    )}
                </div>
            </div>
        </div> 
    )
}