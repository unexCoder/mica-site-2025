'use client'
import { useEffect, useState } from 'react';
import styles from "./navbar.module.css";

export default function NavBar() {

    const sections = [
        'exhibitions',
        'performances',
        'residences',
        'collaborations',
        'talks',
        'workshops'
    ];

    const handleClick = (activeSection: string) => {
        console.log(activeSection);
        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
                element.style.display = section === activeSection ? '' : 'none';
            }
        });
    };


    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Set initial state
        const handleResize = () => {
          setIsMobile(window.innerWidth < 800);
        };
    
        handleResize(); // Set it once on mount
        window.addEventListener('resize', handleResize); // Update on resize
        return () => window.removeEventListener('resize', handleResize);
      }, []);
      
    return (

        <nav className={styles.navbar}>
            <li>
                <ul onClick={() => handleClick('exhibitions')}>
                    {/* exhibitions */}
                    {isMobile ? 'exhibs' : 'exhibitions'}
                </ul>
                <ul onClick={() => handleClick('performances')}>
                    {/* performances */}
                    {isMobile ? 'perfos' : 'performances'}

                </ul>
                <ul onClick={() => handleClick('residences')}>
                    residences
                </ul>
                <ul onClick={() => handleClick('collaborations')}>
                    {/* collaborations */}
                    {isMobile ? 'collabs' : 'collaborations'}
                </ul>
                <ul onClick={() => handleClick('talks')}>
                    talks
                </ul>
                <ul onClick={() => handleClick('workshops')}>
                    {/* workshops */}
                    {isMobile ? 'w/shops' : 'workshops'}
                </ul>
            </li>
        </nav>

    )
}