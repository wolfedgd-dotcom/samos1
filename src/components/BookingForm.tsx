import React from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, ExternalLink } from 'lucide-react';

interface BookingFormProps {
  selectedService?: string;
  onClose?: () => void;
}

export default function BookingForm({ selectedService = '', onClose }: BookingFormProps) {
  // Google Form URL - you'll need to replace this with your actual Google Form URL
  const googleFormUrl = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform";
  
  // If a service is pre-selected, we can add it as a URL parameter
  const formUrlWithService = selectedService 
    ? `${googleFormUrl}?usp=pp_url&entry.SERVICE_FIELD_ID=${encodeURIComponent(selectedService)}`
    : googleFormUrl;

  const handleBookNow = () => {
    window.open(formUrlWithService, '_blank');
    if (onClose) onClose();
  };

  const handleCallNow = () => {
    window.location.href = 'tel:818-324-4056';
    if (onClose) onClose();
  };

  return (
    <div className="bg-white rounded-xl p-8 max-w-md mx-auto">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Calendar className="h-8 w-8 text-red-500" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Book Your Appointment</h3>
        <p className="text-gray-600">Choose how you'd like to book your cut</p>
      </div>

      {selectedService && (
        <div className="bg-red-50 rounded-lg p-4 mb-6 border border-red-100">
          <p className="text-sm text-gray-600">Selected Service:</p>
          <p className="font-bold text-red-600">{selectedService}</p>
        </div>
      )}

      <div className="space-y-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-bold text-gray-900 mb-2 flex items-center">
            <User className="h-5 w-5 mr-2 text-red-500" />
            What we'll need:
          </h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Your name and phone number</li>
            <li>• Preferred service and date/time</li>
            <li>• Any special requests</li>
          </ul>
        </div>
      </div>

      <div className="space-y-3">
        <button
          onClick={handleBookNow}
          className="w-full bg-red-500 text-white py-4 px-6 rounded-lg font-bold hover:bg-red-600 transition-colors flex items-center justify-center space-x-2"
        >
          <Calendar className="h-5 w-5" />
          <span>Book Online</span>
          <ExternalLink className="h-4 w-4" />
        </button>

        <div className="text-center text-sm text-gray-500 py-2">
          <span>or</span>
        </div>

        <button
          onClick={handleCallNow}
          className="w-full bg-gray-100 text-gray-900 py-4 px-6 rounded-lg font-bold hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
        >
          <Phone className="h-5 w-5" />
          <span>Call (818) 324-4056</span>
        </button>
      </div>

      <div className="mt-6 text-center text-sm text-gray-500">
        <p>We'll confirm your appointment within 24 hours</p>
        <p className="mt-1">Walk-ins welcome when available</p>
      </div>

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