import styles from "../components/content.module.css";
import Card from "./Card";
import data from "../../../data/db.json";
import Link from "next/link";

export default function MainContent() {

    // Define the expected data structure
    interface Projects {
        id: number;
        title: string;
        image: string;
      }

    interface ProjectData {
        projects: Projects[];
    }

    const projectData: ProjectData = data; // Directly use the imported JSON data
    // console.log(projectData.projects);

    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div>
                    projects
                </div>
            </nav>

            <div className={styles.cards}>
                {/* Map over the JSON data to create Card components */}
                {projectData.projects.map((project) => (
                    <Link key={project.id} href={`/projects/${project.id}`}>
                        <Card
                            key={project.id}
                            title={project.title}
                            image={project.image || "https://via.placeholder.com/150"} // Fallback image
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
}