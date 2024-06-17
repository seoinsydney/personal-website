import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '@/styles/components.module.scss'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function TopMenu () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const links = [
        { id: "/", href: "/", text: "home"},
        { id: "about", href: "/about", text: "about"},
        // { id: "loadMap", href: "/loadMap", text: "load map"},
        { id: "portfolios", href: "/portfolios", text: "portfolio"},
        // { id: "design", href: "/design", text: "designs"},
        { id: "blog", href: "/blog", text: "blog"},
        { id: "contact", href: "/contact", text: "contact"},
        // { id: "resume", href: "/Resume-Front End Developer-Jisoo An.pdf", text: "resume"},
        { id: "git", href: "https://github.com/seoinsydney", text: "", src: "/akar-icons_github-outline-fill.png", alt: "icons_github", width: 23, height: 23 },
        { id: "linkedin", href: "https://www.linkedin.com/in/jisoo-an-35baa9173/", text: "", src: "/ph_linkedin-logo-thin.png", alt: "linkedin-logo", width: 25, height: 25 }
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
                        <CloseIcon />
                        :
                        <MenuIcon />
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
