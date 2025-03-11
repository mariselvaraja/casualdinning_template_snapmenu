import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { Calendar, Clock, Users, CalendarCheck, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

const Reservation = () => {
  const { siteContent } = useContent();
  const reservationContent = siteContent.reservation;
  
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the reservation data to a server
    console.log('Reservation submitted:', formData);
    alert('Reservation submitted successfully!');
  };

  // Available time slots
  const timeSlots = [
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', 
    '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'
  ];

  // Guest options
  const guestOptions = Array.from({ length: 8 }, (_, i) => i + 1);

  // Special occasion options
  const occasionOptions = [
    'None', 'Birthday', 'Anniversary', 'Business Dinner', 'Date Night', 'Other'
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative bg-zinc-900 py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80" 
            alt="Restaurant interior" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">{reservationContent.header.title}</h1>
          <p className="text-xl text-gray-300">{reservationContent.header.description}</p>
        </div>
      </div>

      {/* Reservation Form */}
      <div className="max-w-4xl mx-auto -mt-16 relative z-10 bg-zinc-800 rounded-lg shadow-xl p-8 mb-16">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Date Selection */}
            <div>
              <label className="flex items-center gap-2 text-lg font-medium mb-2">
                <Calendar className="w-5 h-5 text-yellow-400" />
                {reservationContent.form.labels.date}
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-zinc-600 bg-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white"
              />
            </div>

            {/* Time Selection */}
            <div>
              <label className="flex items-center gap-2 text-lg font-medium mb-2">
                <Clock className="w-5 h-5 text-yellow-400" />
                {reservationContent.form.labels.time}
              </label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-zinc-600 bg-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white"
              >
                <option value="">Select a time</option>
                {timeSlots.map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>

            {/* Number of Guests */}
            <div>
              <label className="flex items-center gap-2 text-lg font-medium mb-2">
                <Users className="w-5 h-5 text-yellow-400" />
                {reservationContent.form.labels.guests}
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-zinc-600 bg-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white"
              >
                {guestOptions.map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>

            {/* Special Occasion */}
            <div>
              <label className="flex items-center gap-2 text-lg font-medium mb-2">
                <CalendarCheck className="w-5 h-5 text-yellow-400" />
                Special Occasion
              </label>
              <select
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-zinc-600 bg-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white"
              >
                {occasionOptions.map(occasion => (
                  <option key={occasion} value={occasion}>{occasion}</option>
                ))}
              </select>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4">Contact Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="flex items-center gap-2 text-lg font-medium mb-2">
                <User className="w-5 h-5 text-yellow-400" />
                {reservationContent.form.labels.name}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={reservationContent.form.placeholders.name}
                required
                className="w-full px-4 py-3 border border-zinc-600 bg-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="flex items-center gap-2 text-lg font-medium mb-2">
                <Mail className="w-5 h-5 text-yellow-400" />
                {reservationContent.form.labels.email}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={reservationContent.form.placeholders.email}
                required
                className="w-full px-4 py-3 border border-zinc-600 bg-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white"
              />
            </div>

            {/* Phone Number */}
            <div className="md:col-span-2">
              <label className="flex items-center gap-2 text-lg font-medium mb-2">
                <Phone className="w-5 h-5 text-yellow-400" />
                {reservationContent.form.labels.phone}
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={reservationContent.form.placeholders.phone}
                required
                className="w-full px-4 py-3 border border-zinc-600 bg-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white"
              />
            </div>
          </div>

          {/* Special Requests */}
          <div>
            <label className="flex items-center gap-2 text-lg font-medium mb-2">
              <MessageSquare className="w-5 h-5 text-yellow-400" />
              {reservationContent.form.labels.specialRequests}
            </label>
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              placeholder={reservationContent.form.placeholders.specialRequests}
              rows={4}
              className="w-full px-4 py-3 border border-zinc-600 bg-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Confirm Reservation
            </button>
          </div>
        </form>
      </div>

      {/* Restaurant Information */}
      <div className="bg-zinc-900 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Opening Hours */}
          <div>
            <div className="bg-zinc-800 p-6 rounded-lg h-full">
              <Clock className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
              <p className="text-gray-400 mb-2">
                {reservationContent.info.hours.weekdays.label}: {reservationContent.info.hours.weekdays.time}
              </p>
              <p className="text-gray-400 mb-2">
                {reservationContent.info.hours.weekends.label}: {reservationContent.info.hours.weekends.time}
              </p>
              <p className="text-gray-400">
                {reservationContent.info.hours.sunday.label}: {reservationContent.info.hours.sunday.time}
              </p>
            </div>
          </div>

          {/* Location */}
          <div>
            <div className="bg-zinc-800 p-6 rounded-lg h-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-yellow-400 mx-auto mb-4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <p className="text-gray-400 mb-2">
                {reservationContent.info.location.street}
              </p>
              <p className="text-gray-400">
                {reservationContent.info.location.city}, {reservationContent.info.location.state} {reservationContent.info.location.zip}
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="bg-zinc-800 p-6 rounded-lg h-full">
              <Phone className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-gray-400 mb-4">
                Phone: {reservationContent.info.contact.phone}
              </p>
              <p className="text-gray-400 text-sm">
                {reservationContent.info.note}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Reservation;
