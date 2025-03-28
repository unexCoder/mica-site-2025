import styles from './event.module.css';
import data from "../../../../../data/db.json";

interface EventPageProps {
  params: { id: string, category: string }; // `id` will come as a string from the URL
}

type FlatItem = {
  category: string;
  id: number;
  title?: string;
  name?: string;
  image?: string;
  body?: string;
  user_email?: string;
  host?: string;
  date?: string;
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
  // console.log(flatArray);
  return flatArray.map((event) => ({
    id: event.id.toString() // Convert `id` to string for URL compatibility
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

  const event = flatArray.find((e) => e.id === eventId);

  if (!event) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <div className={styles.container}>
        <h1>{event.category}</h1>
        <h1>{event.title}</h1>
        <p>{event.body}</p>
        <p>{event.name}</p>
        <p>{event.host}</p>
      </div>
    </>
  );
}
