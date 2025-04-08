// "use client"
import styles from "./page.module.css";
import MainContent from "./components/MainContent";
import SideContent from "./components/SideContent";


export default function Home() {

  // const handleMouseOver = (event: React.MouseEvent<HTMLDivElement>) => {
  //   const innerText = (event.target as HTMLDivElement).innerText;
  //   console.log(`Hover over: ${innerText}`);
  // };

  return (
    <div className={styles.container}>
      <div className={styles.primaryContainer}>
        <MainContent></MainContent>
      </div>
      <div className={styles.secondaryContainer} /*  onMouseOver={handleMouseOver} */ >
        <SideContent></SideContent>
      </div>
    </div>
  );
}
