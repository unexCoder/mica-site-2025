import styles from './project.module.css';
import data from "../../../../data/db.json";
import Image from 'next/legacy/image';

import BlogBody from '../../components/BlogBody';
import YouTubeEmbed from '@/app/components/YoutubeEmbed';
import Gallery from '@/app/components/Gallery';

interface BlogEntry {
  chapter: string;
  body: string | string[];
}
interface Project {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  blog?: BlogEntry[];
  user_email: string;
  gallery?: string[];
}

interface SocialLinks {
  youtube?: string;
  bandcamp?: string;
}


interface ProjectPageProps {
  params: Promise<{ id: string }> // `id` will come as a string from the URL
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
  const projectId = parseInt(id, 10);
  const project = data.projects.find((p) => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (

    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src={project.image}
          alt={project.title}
          // sizes="(max-width: 768px) 100vw, 88vh"
          layout='responsive'
          // objectFit="cover"
          width={5}
          height={2.75}
          quality={100}
          priority={true}
          className={styles.image}
        />

        <h1 className={styles.projectTitle}>{project.title}</h1>
      </div>

      {/* Content Section */}
      <div className={styles.content}>

        {/* <div className={styles.header}>
            <h1 className={styles.title}>{project.title}</h1>
            <h2 className={styles.subtitle}>{project.subtitle}</h2>
          </div> */}

        {/* Blog Entries */}
        <article>
          {project.blog?.map((entry, index) => (
            <div key={entry.chapter} className={styles.blogEntry}>
              <h3 className={styles.chapterTitle}>{entry.chapter}</h3>
              <BlogBody body={entry.body} />
            </div>
          ))}

          {/* YouTube Embed */}
          {project.social?.youtube && (
            <div className={styles.videoSection}>
              <h3 className={styles.sectionTitle}>Video Documentation</h3>
              <YouTubeEmbed url={project.social.youtube} />
            </div>
          )}

          {/* Social Links */}
          {(project.social?.youtube || project.social?.bandcamp || project.social?.hasher || project.social?.brvtvs) && (
            <div className={styles.socialLinks}>
              {/* {project.social.youtube && (
                  <a
                    href={project.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    YouTube Channel
                  </a>
                )} */}
              {project.social.bandcamp && (
                <a
                  href={project.social.bandcamp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  Bandcamp Profile
                </a>
              )}
              {project.social.hasher && (
                <a
                  href={project.social.hasher}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <h1>Hasher</h1>
                </a>
              )}
              {project.social.brvtvs && (
                <a
                  href={project.social.brvtvs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <h1>B R V T V S</h1>
                </a>
              )}
            </div>
          )}

          {/* Footer links */}
          {project.social?.footer1 && (
            <div className={styles.footers}>
              <h3>{project.social.footer1}</h3>
              <a href={project.social.wathsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>{project.social.footer2}</h3>
              </a>
            </div>
          )}

          {/* image gallerie */}
          {project?.gallery && (
            <div>
              <Gallery images={project.gallery}></Gallery>
            </div>
          )}

        </article>
      </div>

      {/* Footer image */}
      {project?.footimage && (
        <div className={styles.footerImg} style={{ display: project.title === 'BioCode: The Secret Music of Plants' ? 'block' : 'none' }}>
          <Image
            src={project.footimage}
            layout='responsive'
            width={5}
            height={3}
            alt="unexcoder"
            quality={100}
            priority={true}
          />
        </div>
      )}

    </div>

  );
}
