import styles from './event.module.css';
import data from "../../../../../data/db.json";
// import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import Link from 'next/link';

interface EventPageProps {
  params: Promise< { id: string, category: string }>; // `id` will come as a string from the URL
}

type FlatItem = {
  category: string;
  id: number;
  title?: string;
  name?: string;
  subtitle?: string;
  image?: string;
  body?: string;
  host?: string;
  date?: string;
  content?:boolean;
  link?: string;
  resume?: string;
  description?: string;
  abstract?: { title: string, [key: string]: any };
  structure?: {
    title: string;
    duration: string;
    resources: { title: string; content: string[] };
    suport: { title: string; content: string[] };
    [key: string]: any;
  };
  outcomes?: {
    title: string;
    completion: string;
    content: string[];
    goals: string;
    [key: string]: any;
  };
  curriculum?: {
    title: string;
    chapters: Array<{
      chp: string;
      cnt: string;
    }>;
  };
  footer?: string;
};


// Generate static params for all project IDs
export function generateStaticParams() {

  // Transform to flat array
  const flatArray = Object.entries(data).flatMap(([category, items]) =>
    items.map(item => ({
      ...item,
      category: category.toLowerCase()
    }))
  );

  return flatArray.map((event) => ({
    id: event.id.toString(), // Convert `id` to string for URL compatibility
    category: event.category
  }));

  // const events = data.events;
  // return events.map((event) => ({
  //   id: event.id.toString(), // Convert `id` to string for URL compatibility
  //   title: event.title
  // }));
}

// Dynamic page component
export default async function EventPage({ params }: EventPageProps) {

  const { id } = await params;
  const eventId = parseInt(id, 10); // Convert the `id` back to a number

  const flatArray: FlatItem[] = Object.entries(data).flatMap(([category, items]) =>
    items.map(item => ({
      ...item,
      category: category.toLowerCase()
    }))
  );
  console.log(flatArray);
  const event = flatArray.find((e) => e.id === eventId);

  if (!event) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <div className={styles.container}>
        {/* <h1>{event.category}</h1>
        <h1>{event.title}</h1>
        <p>{event.body}</p>
        <p>{event.name}</p>
        <p>{event.host}</p>
        <p>{event.user_email}</p> */}

        {event?.category === "workshops" && (

          <div className={styles.workshop}>

            <div className={styles.header}>
              <Link href={`/`}><h3>{event.category.slice(0, -1)}</h3></Link>
              <h1>{event.name}. {event.subtitle}</h1>
              <p>{event.resume}</p>
              {/* <p>{event.description}</p> */}
            </div>

            {event?.abstract && (
              <div className={styles.abstract}>
                {/* <h2>{event.abstract.title}</h2> */}
                {event.abstract.features?.map((entry: string, index: number) => (
                  <div key={index} className={styles.abstractItem}>
                    <h2>{entry}</h2>
                  </div>
                ))}
              </div>
            )}

            {event?.outcomes && (
              <div className={styles.outcomes}>
                {/* <h2>{event.outcomes.title}</h2> */}
                <div className={styles.outcomeItem}>
                  <h2>{event.outcomes.goals}</h2>
                </div>
                <div className={styles.outcomeItem}>
                  <h2>{event.outcomes.completion}</h2>
                  {event.outcomes.content?.map((entry: string, index: number) => (
                    <div key={index} className={styles.outcomeSubItem}>
                      <h3>{entry}</h3>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {event?.curriculum && (
              <div className={styles.curriculum}>
                <h3>{event.curriculum.title}</h3>
                {event.curriculum?.chapters?.map((entry: { chp: string, cnt: string }, index: number) => (
                  <div key={index} className={styles.curriculumChapter}>
                    <h2>{entry.chp}</h2>
                    <p>{entry.cnt}</p>
                  </div>
                ))}
                <div className={styles.buttonsSmall}>
                  <button>Download Full Program</button>
                </div>
              </div>
            )}

            {event?.structure && (
              <div className={styles.structure}>
                {/* <h2>{event.structure.title}</h2> */}
                <h2>{event.structure.duration}</h2>
                <h2>{event.structure.resources.title}</h2>
                {event.structure.resources.content?.map((entry: string, index: number) => (
                  <div key={index} className={styles.structureItem}>
                    <h3>{entry}</h3>
                  </div>
                ))}
              </div>
            )}

            <div className={styles.footer}>
              <h2>{event.footer}</h2>
            </div>

            <div className={styles.buttons}>
              <button>Schedule a Discovery Call</button>
              <button>Enroll Now</button>
            </div>

          </div>
        )}

        {event?.category === "performances" && (
          <div>perfos</div>
        )}
        {event?.category === "exhibitions" && (
          <div>exhibs</div>
        )}
        {event?.category === "residences" && (
          <div>residences</div>
        )}
        {event?.category === "collaborations" && (
          <div>collabs</div>
        )}
        {event?.category === "talks" && (
          <div>talks</div>
        )}

      </div>
    </>
  );
}
