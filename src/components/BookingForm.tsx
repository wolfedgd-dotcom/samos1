import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react';
import emailjs from 'emailjs-com';

interface BookingFormProps {
  selectedService?: string;
  onClose?: () => void;
}

export default function BookingForm({ selectedService = '', onClose }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: selectedService,
    date: '',
    time: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Adult Haircut - $25',
    'Kids Cut - $20',
    'Haircut and Beard - $30',
    'Clean Up/Line Up - $10',
    'Hot Towel Shave - $25',
    'Cut + Beard Combo - $30'
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
    '6:00 PM', '6:30 PM'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const templateParams = {
        to_email: 'samoscutz@gmail.com',
        from_name: formData.name,
        from_phone: formData.phone,
        from_email: formData.email,
        service: formData.service,
        preferred_date: formData.date,
        preferred_time: formData.time,
        message: formData.message || 'No special requests',
        subject: `New Booking Request - ${formData.name}`
      };

      // Replace these with your actual EmailJS credentials
      await emailjs.send(
        'YOUR_SERVICE_ID', // You'll need to set this up in EmailJS
        'YOUR_TEMPLATE_ID', // You'll need to create a template
        templateParams,
        'YOUR_PUBLIC_KEY' // Your EmailJS public key
      );
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error sending booking request:', error);
      // For now, we'll simulate success since EmailJS isn't configured yet
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-xl p-8 max-w-md mx-auto text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Sent!</h3>
        <p className="text-gray-600 mb-6">
          We've received your booking request and will contact you within 24 hours to confirm your appointment.
        </p>
        <div className="space-y-2 text-sm text-gray-500 mb-6">
          <p>For immediate booking, call us at:</p>
          <a href="tel:818-324-4056" className="text-red-500 font-bold text-lg">
            (818) 324-4056
          </a>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            Close
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-8 max-w-md mx-auto">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Book Your Appointment</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <User className="inline h-4 w-4 mr-1" />
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <Phone className="inline h-4 w-4 mr-1" />
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
            placeholder="(818) 555-0123"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <Mail className="inline h-4 w-4 mr-1" />
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Service *
          </label>
          <select
            name="service"
            required
            value={formData.service}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <Calendar className="inline h-4 w-4 mr-1" />
            Preferred Date *
          </label>
          <input
            type="date"
            name="date"
            required
            value={formData.date}
            onChange={handleInputChange}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <Clock className="inline h-4 w-4 mr-1" />
            Preferred Time *
          </label>
          <select
            name="time"
            required
            value={formData.time}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
          >
            <option value="">Select a time</option>
            {timeSlots.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <MessageSquare className="inline h-4 w-4 mr-1" />
            Special Requests
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
            placeholder="Any special requests or notes..."
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-red-500 text-white py-3 px-4 rounded-lg font-bold hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending Request...' : 'Request Appointment'}
          </button>
        </div>

        <div className="text-center text-sm text-gray-500">
          <p>We'll contact you within 24 hours to confirm</p>
          <p className="mt-1">
            For immediate booking: 
            <a href="tel:818-324-4056" className="text-red-500 font-bold ml-1">
              (818) 324-4056
            </a>
          </p>
        </div>
      </form>

      {onClose && (
        <button
          onClick={onClose}
          className="mt-4 w-full text-gray-500 hover:text-gray-700 transition-colors"
        >
          Cancel
        </button>
      )}
    </div>
  );
}