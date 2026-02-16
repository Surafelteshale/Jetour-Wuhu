// src/pages/EventsDetail.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CalendarDays, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from "react-helmet";

const cyan = '#00bcd4';

const EventsDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { state: event } = useLocation();
  const location = useLocation();
  const data = location.state;
  if (!event) return <p>No event data provided</p>;

  const images = data?.images || [];

  return (
  <>
    <Helmet>
      <title>{data?.title || "Event Details"} | Jetour Ethiopia</title>
      <meta
        name="description"
        content={data?.description || "Details about this Jetour Ethiopia event."}
      />
      <meta name="keywords" content={`Jetour event, ${data?.title || ""}, Ethiopia events`} />
      <meta property="og:title" content={`${data?.title || "Event Details"} | Jetour Ethiopia`} />
      <meta property="og:description" content={data?.description || "Event details from Jetour Ethiopia"} />
      <meta property="og:image" content={data?.images?.[0] || "/default-event-image.jpg"} />
      <meta property="og:url" content={window.location.href} />
    </Helmet>

    {/* Full-width image carousel */}
    <div className="w-full overflow-hidden py-4">
      <motion.div
        className="flex gap-4"
        animate={{ x: ['0%', '-100%'] }}
        transition={{ repeat: Infinity, duration: 70, ease: 'linear' }}
      >
        {[...images, ...images].map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`event-${i}`}
            className="h-64 w-full sm:w-auto flex-shrink-0 object-cover rounded-lg"
          />
        ))}
      </motion.div>
    </div>

    {/* Content container */}
    <div className="min-h-screen bg-white text-black px-4 py-8 max-w-5xl mx-auto">
      {/* Event title */}
      <h1 className="text-4xl font-bold mb-8">{data?.title}</h1>

      {/* Date & location */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-12 mb-6 text-gray-900 mb-8">
        {/* Date and Time */}
        <div className="flex items-start gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-md bg-gray-100">
            <CalendarDays className="text-cyan-600" size={20} />
          </div>
          <div>
            <p className="font-semibold text-base sm:text-lg">
              {new Date(data?.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
            <p className="text-sm text-gray-600">{data?.time} (GMT+10)</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-md bg-gray-100">
            <MapPin className="text-cyan-600" size={20} />
          </div>
          <div>
            <p className="font-semibold text-base sm:text-lg">{data?.location}</p>
            <p className="text-sm text-gray-600">{data?.subLocation}</p>
          </div>
        </div>
      </div>

      {/* Event Recap */}
      <h2 className="text-2xl font-semibold mb-2">Event Recap</h2>
      <p className="text-gray-800 mb-8">{data?.description}</p>

{/* Additional Event Images Grid */}
{images.length > 0 && (
  <div className="mt-10">
    <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {images.map((img, i) => (
        <img
          key={`gallery-${i}`}
          src={img}
          alt={`gallery-${i}`}
          className="w-full h-auto object-cover rounded-lg"
        />
      ))}
    </div>
  </div>
)}

    </div>
  </>
  );
};

export default EventsDetail;
