import styles from './project.module.css';
import data from "../../../../data/db.json";
import Image from 'next/legacy/image';

interface ProjectPageProps {
  params: { id: string }; // `id` will come as a string from the URL
}
// Generate static params for all project IDs
export function generateStaticParams() {
  const projects = data.projects;

  return projects.map((project) => ({
    id: project.id.toString(), // Convert `id` to string for URL compatibility
    title: project.title
  }));
}

// Dynamic page component
export default async function ProjectPage({ params }: ProjectPageProps) {

  const { id } = await params;
  const projectId = parseInt(id, 10); // Convert the `id` back to a number
  const project = data.projects.find((p) => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className={styles.container}>
      <Image
        src={project.image}
        layout='responsive'
        width={5}
        height={3}
        alt="unexcoder"
        quality={100}
        priority={true}
      />
      <div className={styles.textContainer}>
        <h1>{project.title}</h1>
        <p>{project.body}</p>
        <p>Contact: {project.user_email}</p>
      </div>
      {/* <img
        src={project.image || "https://via.placeholder.com/150"}
        alt={project.title}
      /> */}

    </div>
  );
}
