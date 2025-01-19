import styles from "../components/content.module.css";
import Card from "./Card";
import data from "../../../data/db.json";

export default function MainContent() {

    // Define the expected data structure
    interface Projects {
        id: number;
        title: string;
        image: string;
        body: string;
        user_email: string;
    }

    interface ProjectData {
        projects: Projects[];
    }

    const projectData: ProjectData = JSON.parse(JSON.stringify( data ));
    // console.log(projectData.projects);

    return (
        <div className={styles.container}>    
            <nav className={styles.navbar}>
                <div>
                    projects
                </div>
            </nav>

            <div className={styles.cards}>
                <Card title="work" image="https://live.staticflickr.com/65535/52861634524_cf430465ed_o.jpg" ></Card>
                <Card title="work" image="https://live.staticflickr.com/65535/52861634524_cf430465ed_o.jpg" ></Card>
                <Card title="work" image="https://live.staticflickr.com/65535/52861634524_cf430465ed_o.jpg" ></Card>
                <Card title="work" image="https://live.staticflickr.com/65535/52861634524_cf430465ed_o.jpg" ></Card>
            </div>
        </div>
    )
}