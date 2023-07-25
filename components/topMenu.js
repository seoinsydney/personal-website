import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '@/styles/components.module.scss'
import { TbMenu2, TbArrowBadgeRight } from "react-icons/tb";

export default function TopMenu () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const links = [
        { id: 1, href: "/about", text: "about"},
        { id: 2, href: "/project", text: "projects"},
        { id: 3, href: "/design", text: "designs"},
        { id: 4, href: "/blog", text: "blog"},
        { id: 5, href: "/contact", text: "contact"},
        { id: 6, href: "/Resume-Front End Developer-Jisoo An.pdf", text: "resume"},
        { id: 7, href: "https://github.com/seoinsydney", text: "", src: "/akar-icons_github-outline-fill.png", alt: "icons_github", width: 23, height: 23 },
        { id: 8, href: "https://www.linkedin.com/in/jisoo-an-35baa9173/", text: "", src: "/ph_linkedin-logo-thin.png", alt: "linkedin-logo", width: 25, height: 25 }
    ]

    const router = useRouter();
    const currentPath = router.pathname;

    return (
        <div className={styles.topMenu}>
            <nav className={styles.desktopMenu}>
                <div className={styles.logo}>
                    <Link href="/">
                        <img src="/JA-logo.png" alt="JA - logo" width="60" height="50" />
                    </Link>
                </div>
                <ul>
                    {
                        links.map((menu) => (
                            <li key={menu.id} className={currentPath === menu.href || currentPath ===  menu.href + '/[slug]' ? styles.active : ''}>
                                <Link href={menu.href}>{
                                    menu.text === "" ?
                                    <><img src={menu.src} alt={menu.alt} width={menu.width} height={menu.height} /></>
                                    :
                                    <>{menu.text}</>
                                }</Link>
                            </li>
                        ))
                    }
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
                            {
                                links.map((menu) => (
                                    <li key={menu.id}
                                    className={currentPath === menu.href || currentPath ===  menu.href + '/[slug]' ? styles.mobileActive : ''}
                                    >
                                        <Link href={menu.href}>{
                                            menu.text === "" ?
                                            <><img src={menu.src} alt={menu.alt} width={menu.width} height={menu.height} /></>
                                            :
                                            <>{menu.text}</>
                                        }</Link>
                                    </li>
                                ))
                            }
                            </ul>
                        </nav>
                    )}
                </div>
            </div>
        </div> 
    )
}