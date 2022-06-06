import Link from "next/link";
import Script from "next/script";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/NavBar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMoon,
    faBars
} from "@fortawesome/free-solid-svg-icons";
import {
    faTwitterSquare,
    faLinkedin,
    faGithubSquare
  } from "@fortawesome/free-brands-svg-icons";

export default function NavBar(){ 
    const router = useRouter();
    // const [isActive, setActive] = useState("false");

    // const handleToggle = () => {
    //     {styles.navbar_menu}setActive(!isActive);
    // };
    console.log(router);
    return(<nav className={styles.navbar}>
       
        <div className={styles.navbar_logo}>
            <FontAwesomeIcon icon={faMoon}/>
            <Link href="/">
            <a className={router.pathname === "/" ? "active": ""}>CHAEWON-DEV</a>
            </Link>
        </div>
        <ul className={styles.navbar_menu}>
            <li><Link href="/resume">
                <a className={router.pathname === "" ? "active":""}>Resume</a>
                </Link></li>
            <li><Link href="/portfolio">
                <a className={router.pathname === "" ? "active":""}>Portfolio</a>
                </Link></li>
            <li><Link href="blog">
                <a className={router.pathname === "" ? "active":""}>Blog</a>
                </Link></li>
            <li><Link href="contact">
                <a className={router.pathname === "" ? "active":""}>Contact</a>
                </Link></li>
        </ul>
        <ul className={styles.navbar_icons}>
        <li><Link href="https://github.com/wakhoo"><FontAwesomeIcon icon={faGithubSquare} /></Link></li>
        <li><Link href="https://www.linkedin.com/in/chaewon-jeon-457524178/"><FontAwesomeIcon icon={faLinkedin} /></Link></li>
        <li><Link href="https://twitter.com/chaewon_dev"><FontAwesomeIcon icon={faTwitterSquare} /></Link></li>
        
        </ul>
        {/* <div  className={styles.navbar_toggleBtn}>
        <Link href="#">
           <button onClick={handleToggle}><FontAwesomeIcon icon={faBars}/></button>
        </Link>
        </div> */}
    </nav>)
}