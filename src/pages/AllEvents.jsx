import React, { useEffect, useState } from 'react';
import { getAllEvents } from '../config/firestoreHelpers';
import { useNavigate } from 'react-router-dom'; 
import { Helmet } from "react-helmet";

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const allEvents = await getAllEvents();
        setEvents(allEvents); // already sorted by date (newest first)
      } catch (error) {
        console.error('Failed to fetch events:', error);
      } finally {
        setLoading(false);
      }
    };
    window.scrollTo(0, 0);

    fetchEvents();
  }, []);

  return (
    <>
    <Helmet>
      <title>All Events | Jetour Ethiopia</title>
      <meta
        name="description"
        content="Explore all upcoming and past events hosted by Jetour Ethiopia. Stay updated with our latest shows, launches, and community activities."
      />
      <meta name="keywords" content="Jetour events, car launches, Ethiopia events, Jetour Ethiopia" />
      <meta property="og:title" content="All Events | Jetour Ethiopia" />
      <meta property="og:description" content="Stay up to date with all Jetour Ethiopia events and activities." />
      <meta property="og:url" content="https://jetouret.com/all-events" />
    </Helmet>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 py-4">All Events</h1>

      {loading ? (
        <p className="text-center">Loading events...</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-3xl hover:shadow-lg transition duration-300 cursor-pointer"
              onClick={() => navigate('/events-detail', { state: event })} // ✅ Click to navigate
            >
              {event.images && event.images[0] && (
                <img
                  src={event.images[0]}
                  alt={event.title}
                  className="w-full h-60 object-cover rounded-t-xl"
                />
              )}
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-500">
                  {new Date(event.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default AllEvents;
