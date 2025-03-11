import React from 'react';
import { Navigation } from '../components/Navigation';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const events = [
  {
    title: "Taco Tuesday Special",
    date: "Every Tuesday",
    time: "4:00 PM - 10:00 PM",
    location: "All Locations",
    description: "Join us for our famous Taco Tuesday! $2 tacos all night long.",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&q=80"
  },
  {
    title: "Live Music Night",
    date: "Every Friday",
    time: "7:00 PM - 10:00 PM",
    location: "Downtown Location",
    description: "Enjoy live Latin music while savoring your favorite Mexican dishes.",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80"
  },
  {
    title: "Cooking Class: Authentic Mexican Tacos",
    date: "March 15, 2024",
    time: "2:00 PM - 4:00 PM",
    location: "Beachside Location",
    description: "Learn the art of making authentic Mexican tacos from our master chef.",
    image: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&q=80"
  }
];

const upcomingEvents = [
  {
    title: "Cinco de Mayo Celebration",
    date: "May 5, 2024",
    description: "Join us for our biggest celebration of the year!"
  },
  {
    title: "Summer Food Festival",
    date: "June 15, 2024",
    description: "A day of Mexican street food, music, and fun."
  },
  {
    title: "Mexican Independence Day",
    date: "September 16, 2024",
    description: "Celebrate Mexican culture with special menu items and live entertainment."
  }
];

export function Events() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80"
            alt="Events"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>
        
        <Navigation />

        <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">Events</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-12 animate-fade-in-delay-1">
            Join us for special events, live music, and unforgettable experiences
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Featured Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {events.map((event, index) => (
            <div 
              key={index}
              className="bg-zinc-900/50 backdrop-blur-sm rounded-3xl overflow-hidden group hover:scale-105 transition duration-300"
            >
              <div className="relative h-64">
                <img 
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                <div className="space-y-3 text-gray-300 mb-6">
                  <p className="flex items-center">
                    <Calendar className="w-5 h-5 mr-3 text-yellow-400" />
                    {event.date}
                  </p>
                  <p className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-yellow-400" />
                    {event.time}
                  </p>
                  <p className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3 text-yellow-400" />
                    {event.location}
                  </p>
                </div>
                <p className="text-gray-400 mb-6">{event.description}</p>
                <button className="w-full bg-yellow-400 text-black py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Events */}
        <div className="bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12">
          <h2 className="text-4xl font-bold mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-start">
                  <Calendar className="w-6 h-6 text-yellow-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-yellow-400 mb-2">{event.date}</p>
                    <p className="text-gray-400">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Private Events */}
        <div className="mt-32 text-center">
          <h2 className="text-4xl font-bold mb-6">Host Your Private Event</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            From birthday parties to corporate events, we'll help you create an unforgettable experience with authentic Mexican cuisine and exceptional service.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Group Size</h3>
              <p className="text-gray-400">Accommodates up to 100 guests</p>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 text-center">
              <MapPin className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Locations</h3>
              <p className="text-gray-400">Available at all our venues</p>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Calendar className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Availability</h3>
              <p className="text-gray-400">Flexible scheduling options</p>
            </div>
          </div>
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transition">
            Inquire About Private Events
          </button>
        </div>
      </div>
    </div>
  );
}