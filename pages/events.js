import { useState } from "react";
import { useRouter } from "next/router";

const EventList = ({ eventList }) => {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();

  const fetchSports = async () => {
    const response = await fetch(
      `http://localhost:4000/events?category=sports`
    );
    const data = await response.json();
    setEvents(data);
    router.push("/events?category=sports", undefined, { shallow: true });
  };

  return (
    <div className="container">
      <h2>List of Events</h2>
      <button className="btn" onClick={fetchSports}>
        Sports
      </button>
      {events.map((event) => (
        <div className="card" key={`event-${event.id}`}>
          <h3>
            {event.title} - {event.date} | {event.category}
          </h3>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
};
export default EventList;

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category=sports" : "";
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();

  return { props: { eventList: data } };
};
