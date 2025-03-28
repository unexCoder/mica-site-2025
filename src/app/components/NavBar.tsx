'use client'
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

    return (

        <nav className={styles.navbar}>
            <li>
                <ul onClick={() => handleClick('exhibitions')}>
                    exhibitions
                </ul>
                <ul onClick={() => handleClick('performances')}>
                    performances
                </ul>
                <ul onClick={() => handleClick('residences')}>
                    residences
                </ul>
                <ul onClick={() => handleClick('collaborations')}>
                    collaborations
                </ul>
                <ul onClick={() => handleClick('talks')}>
                    talks
                </ul>
                <ul onClick={() => handleClick('workshops')}>
                    workshops
                </ul>
            </li>
        </nav>

    )
}