import React, { useState } from 'react';
import { Phone, MapPin, Clock, Star, Instagram, Scissors, Shield, Calendar, Menu, X, Users, Award, Zap, Heart } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-red-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <img 
                  src="/src/assets/image-removebg-preview.png" 
                  alt="Samos Cuts Logo" 
                  className="w-8 h-8"
                />
              </div>
              <span className="text-2xl font-bold text-gray-900">Samos Cuts</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-red-500 transition-colors">Services</button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-red-500 transition-colors">Pricing</button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-red-500 transition-colors">Gallery</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-red-500 transition-colors">About</button>
              <button onClick={() => scrollToSection('location')} className="text-gray-700 hover:text-red-500 transition-colors">Location</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-red-500 transition-colors">Contact</button>
              <a href="tel:818-324-4056" className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors">Call Now</a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-red-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-gray-700 hover:text-red-500">Services</button>
              <button onClick={() => scrollToSection('pricing')} className="block px-3 py-2 text-gray-700 hover:text-red-500">Pricing</button>
              <button onClick={() => scrollToSection('gallery')} className="block px-3 py-2 text-gray-700 hover:text-red-500">Gallery</button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-gray-700 hover:text-red-500">About</button>
              <button onClick={() => scrollToSection('location')} className="block px-3 py-2 text-gray-700 hover:text-red-500">Location</button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-700 hover:text-red-500">Contact</button>
              <a href="tel:818-324-4056" className="block mx-3 my-2 bg-red-500 text-white px-6 py-2 rounded-lg text-center">Call Now</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-red-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Fresh Cuts.<br />
                <span className="text-white drop-shadow-lg">Done Right.</span>
              </h1>
              <p className="text-xl mb-8 text-red-100 leading-relaxed">
                Woodland Hills' premier barbershop. Quality cuts, fair prices. Walk in looking good, walk out looking great.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="bg-white text-red-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Your Cut
                </button>
                <a 
                  href="tel:818-324-4056" 
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-500 transition-colors text-center"
                >
                  Call (818) 324-4056
                </a>
              </div>

              {/* Trust Row */}
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center space-x-1">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-white text-white" />
                  ))}
                  <span className="ml-2">5.0 rating</span>
                </div>
                <span>•</span>
                <span>9+ Google reviews</span>
                <span>•</span>
                <span>Good for kids</span>
              </div>

              <div className="mt-4 text-sm text-red-200">
                Walk-ins welcome • Cash talks • Street parking
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center">
                  <img 
                    src="/src/assets/image-removebg-preview.png" 
                    alt="Samos Cuts Logo" 
                    className="w-32 h-32"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">We don't mess around. Every cut is precision.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Adult Haircut",
                description: "Clean fades and sharp tapers. Professional cuts that get noticed.",
                duration: "30–45 min",
                icon: Scissors
              },
              {
                title: "Kids' Cut",
                description: "Patient and friendly service for the little ones. Great with kids.",
                duration: "30 min",
                icon: Users
              },
              {
                title: "Beard Trim & Line-Up",
                description: "Precise lines and clean edges. Your beard will look on point.",
                duration: "15–20 min",
                icon: Award
              },
              {
                title: "Cut + Beard Combo",
                description: "Complete makeover package. Fresh cut plus beard styling.",
                duration: "45–60 min",
                icon: Zap
              },
              {
                title: "Hot Towel Shave",
                description: "Classic straight razor shave. Traditional barbering at its finest.",
                duration: "30 min",
                icon: Shield
              },
              {
                title: "Add-ons",
                description: "Eyebrow trimming, styling, and other finishing touches.",
                duration: "5–15 min",
                icon: Star
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <service.icon className="h-12 w-12 text-red-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{service.duration}</span>
                  <button 
                    onClick={() => scrollToSection('book')}
                    className="text-red-500 font-bold hover:text-red-600 transition-colors"
                  >
                    Get This
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Straight Up Pricing</h2>
            <p className="text-xl text-gray-600">Clear pricing, no surprises. Quality you can trust.</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-red-50 rounded-2xl p-8 text-center border-2 border-red-100">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-white rounded-full transform scale-110"></div>
                <Scissors className="w-16 h-16 relative z-10 text-red-500" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">NEW PRICES</h3>
              
              <div className="space-y-4 mb-8">
                <div className="bg-white rounded-xl p-4 border-2 border-red-200">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-900">NORMAL HAIRCUT:</span>
                    <span className="text-2xl font-bold text-red-500">$25</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-4 border-2 border-red-200">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-900">HAIRCUT AND BEARD:</span>
                    <span className="text-2xl font-bold text-red-500">$30</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-4 border-2 border-red-200">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-900">CLEAN UP/LINE UP:</span>
                    <span className="text-2xl font-bold text-red-500">$10</span>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6 text-left">
                <div className="flex items-center space-x-3">
                  <Heart className="h-5 w-5 text-red-500" />
                  <span className="text-gray-700">Professional quality cuts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="h-5 w-5 text-red-500" />
                  <span className="text-gray-700">Personalized styling advice</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="h-5 w-5 text-red-500" />
                  <span className="text-gray-700">Honest service, genuine care</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="h-5 w-5 text-red-500" />
                  <span className="text-gray-700">Walk-ins always welcome</span>
                </div>
              </div>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-red-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-600 transition-colors"
              >
                Get Your Cut
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
            <p className="text-xl text-gray-600">Check out some of our best work</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              "/src/assets/66C3D61C-6705-4265-AA62-6001B2950F40.jpeg",
              "/src/assets/42E55135-FCFC-4F30-A346-8D79E7AA15B4.jpeg",
              "/src/assets/A2965E05-5AA0-4345-90EB-9E47FBDEA6E7.jpeg",
              "/src/assets/F7303108-76EE-43A7-B64F-DFD5A253134A.jpeg",
              "/src/assets/3E4556FC-EB9F-4ACF-84A8-9D7987C8AA12.jpeg",
              "/src/assets/74361358-44C3-4DAE-A8EF-3843BA62EC44.jpeg",
              "/src/assets/CE49D163-46F3-452C-97F3-FFB4887A8751.jpeg",
              "/src/assets/1F36E7E6-3FDA-4697-8A0B-3C9B17CD5361.jpeg"
            ].map((imageSrc, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={imageSrc} 
                  alt={`Samos Cuts haircut ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="https://instagram.com/samos_cuts" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span>See More on Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Reviews</h2>
            <p className="text-xl text-gray-600">Don't take our word for it</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: "Best fade I've ever gotten. Really professional work and great attention to detail.",
                author: "Mike R."
              },
              {
                text: "Incredible precision on the line-ups. This is my go-to barbershop now.",
                author: "Carlos M."
              },
              {
                text: "Amazing hot towel shave experience. Really knows the classic techniques.",
                author: "David K."
              }
            ].map((review, index) => (
              <div key={index} className="bg-red-50 rounded-xl p-6 border border-red-100">
                <div className="flex items-center mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-red-500 text-red-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <p className="text-gray-900 font-bold">— {review.author}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://g.page/r/your-google-business-url/review" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-red-500 font-semibold hover:text-red-600 transition-colors"
            >
              <span>See All the Love</span>
              <Star className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Book Online Section */}
      <section id="book" className="py-20 bg-red-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Book Your Appointment</h2>
          <p className="text-xl text-red-100 mb-12">Choose your service and schedule your visit</p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { service: "Adult Cut", description: "Professional haircut and styling", action: () => scrollToSection('contact') },
              { service: "Kids' Cut", description: "Patient, kid-friendly service", action: () => scrollToSection('contact') },
              { service: "Cut + Beard", description: "Complete grooming package", action: () => scrollToSection('contact') }
            ].map((option, index) => (
              <button 
                key={index}
                onClick={option.action}
                className={`p-6 rounded-xl transition-colors ${
                  selectedService === option.service 
                    ? 'bg-white text-red-500' 
                    : 'bg-red-400 hover:bg-red-300'
                }`}
              >
                <h3 className="text-xl font-bold mb-2">{option.service}</h3>
                <p className={selectedService === option.service ? 'text-red-400' : 'text-red-100'}>
                  {option.description}
                </p>
              </button>
            ))}
          </div>

          <p className="text-red-200 mb-8">Walk-ins welcome when available</p>
          
          <h3 className="text-2xl font-bold mb-4">Ready to book?</h3>
          <p className="text-red-100 mb-6">Call us or book online. We'll take great care of you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:818-324-4056"
              className="bg-white text-red-500 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Samos Cuts</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We're a neighborhood barbershop in Woodland Hills focused on quality cuts and genuine service. 
                No corporate nonsense, just skilled barbers who care about their craft. You come in looking good, 
                you leave looking great. That's the Samos way.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Heart className="h-6 w-6 text-red-500" />
                  <span className="text-gray-700">Personal attention for every client</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-red-500" />
                  <span className="text-gray-700">Respect your time - minimal wait</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-red-500" />
                  <span className="text-gray-700">Clean tools, clean shop, clean cuts</span>
                </div>
              </div>

              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-red-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-600 transition-colors"
              >
                Visit Us
              </button>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <Scissors className="h-24 w-24 mx-auto mb-4 text-red-500" />
                  <p className="text-red-600 font-bold text-lg">Real Recognize Real</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section id="location" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hours & Location</h2>
            <p className="text-xl text-gray-600">Visit us in Woodland Hills</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-red-50 rounded-xl p-8 border border-red-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Us Here</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-red-500 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900">The Address</p>
                    <p className="text-gray-700">6043 Lockhurst Dr<br />Woodland Hills, CA 91367</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-red-500 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900">When We're Cutting</p>
                    <p className="text-gray-700">
                      Mon-Sat: 9:00 AM - 7:00 PM<br />
                      Sun: 12:00 PM - 5:00 PM
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="h-6 w-6 text-red-500 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900">Call Us</p>
                    <a href="tel:818-324-4056" className="text-red-500 hover:text-red-600 transition-colors">
                      (818) 324-4056
                    </a>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-6">Street parking available</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://maps.google.com/?q=6043+Lockhurst+Dr+Woodland+Hills+CA+91367" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-red-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-600 transition-colors text-center"
                >
                  Get Directions
                </a>
                <a 
                  href="tel:818-324-4056"
                  className="bg-red-100 text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-red-200 transition-colors text-center"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Questions</h2>
            <p className="text-xl text-gray-600">Straight answers to what people ask</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Do you take walk-ins?",
                answer: "Yes! Walk-ins are welcome. Booking ahead helps avoid wait times."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept both cash and cards for your convenience."
              },
              {
                question: "You cut kids' hair?",
                answer: "Absolutely! We specialize in kids' cuts and are very patient with children."
              },
              {
                question: "What if I need to cancel?",
                answer: "Please call us at least 12 hours in advance to reschedule."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-red-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">Get in touch to schedule or ask questions</p>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="h-6 w-6 text-red-500" />
                <a href="tel:818-324-4056" className="text-lg text-red-500 hover:text-red-600 transition-colors">
                  Call Us: (818) 324-4056
                </a>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Instagram className="h-6 w-6 text-red-500" />
                <a 
                  href="https://instagram.com/samos_cuts" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg text-red-500 hover:text-red-600 transition-colors"
                >
                  Text on Instagram
                </a>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-6 border border-red-100">
              <h4 className="font-bold text-gray-900 mb-2">Quick Response</h4>
              <p className="text-gray-700 text-sm">
                We respond quickly during business hours. 
                For same-day appointments, please call directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <img 
                    src="/src/assets/image-removebg-preview.png" 
                    alt="Samos Cuts Logo" 
                    className="w-6 h-6"
                  />
                </div>
                <span className="text-2xl font-bold">Samos Cuts</span>
              </div>
              <p className="text-gray-400">
                Woodland Hills' neighborhood barbershop. Quality cuts, honest service, fair prices.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="text-gray-400 hover:text-white transition-colors">Pricing</button></li>
                <li><button onClick={() => scrollToSection('contact-cta')} className="text-gray-400 hover:text-white transition-colors">Get Cut</button></li>
                <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors">About</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">The Spot</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">6043 Lockhurst Dr</li>
                <li className="text-gray-400">Woodland Hills, CA 91367</li>
                <li><a href="tel:818-324-4056" className="text-gray-400 hover:text-white transition-colors">(818) 324-4056</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Stay Connected</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com/samos_cuts" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">&copy; 2025 Samos Cuts. Quality cuts for everyone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;