import React, { useState, useEffect } from 'react';
import { getAllEvents } from '../config/firestoreHelpers';
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Needed to navigate with state

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const allEvents = await getAllEvents();
        const recentEvents = allEvents.slice(0, 3);
        setEvents(recentEvents);
      } catch (error) {
        console.error('Error loading events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleEventClick = (event) => {
    navigate('/events-detail', { state: event });
  };

  if (loading) {
    return <div className="text-center padding">Loading events...</div>;
  }

  return (
    <section className="max-container padding mt-12">
      <h2 className="text-4xl font-bold text-center mt-4 mb-8 font-palanquin">Events</h2>
      <p className="info-text text-center mb-8">
        Join our community events to learn more about Jetour Ethiopia.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        {events.map((event) => (
          <div
            key={event.id}
            onClick={() => handleEventClick(event)}
            className="flex flex-col items-center cursor-pointer transition-shadow duration-300"
          >
            {event.images && event.images.length > 0 ? (
              <img
                src={event.images[0]}
                alt={event.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">No image available</span>
              </div>
            )}
            <h3 className="font-montserrat text-xl font-semibold text-center">
              {event.title}
            </h3>
            <p className="font-montserrat text-sm text-gray-500">
              {new Date(event.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Link to="/all-events">
          <Button
            label="Explore more events"
            className="bg-black text-white px-6 py-3 rounded-full shadow-md hover:bg-gray-800"
          />
        </Link>
      </div>
    </section>
  );
};

export default Events;
