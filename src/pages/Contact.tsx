import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Building2, Handshake } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    partnershipType: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    alert('Merci pour votre message ! Nous vous contacterons bientôt.');
    
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
      partnershipType: '',
    });
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "groupe.enotel_pamela@yahoo.fr",
      link: "mailto:groupe.enotel_pamela@yahoo.fr",
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "San-Pedro, Côte d'Ivoire",
      link: null,
    },
    {
      icon: Building2,
      title: "Entreprise",
      value: "Groupe ENOTEL",
      link: null,
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Handshake className="w-8 h-8 text-gold-400 mr-3" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Partenariat
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Collaborons ensemble pour créer des opportunités exceptionnelles
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                Informations de <span className="text-gold-400">Contact</span>
              </h2>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gold-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-gold-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-400 hover:text-gold-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-400">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-gradient-to-r from-gold-400/10 to-gold-500/10 border border-gold-400/20 rounded-xl p-6">
                <h3 className="text-gold-400 font-semibold mb-3">
                  Opportunités de Partenariat
                </h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Collaborations d'entreprise</li>
                  <li>• Partenariats de marque</li>
                  <li>• Événements et conférences</li>
                  <li>• Projets de développement</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Demande de Partenariat
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 transition-colors"
                        placeholder="Votre nom"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 transition-colors"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Entreprise
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 transition-colors"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 transition-colors"
                        placeholder="+225 XX XX XX XX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Type de partenariat
                    </label>
                    <select
                      name="partnershipType"
                      value={formData.partnershipType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-gold-400 transition-colors"
                    >
                      <option value="">Sélectionnez un type</option>
                      <option value="brand">Partenariat de marque</option>
                      <option value="business">Collaboration d'entreprise</option>
                      <option value="event">Événement/Conférence</option>
                      <option value="development">Projet de développement</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 transition-colors resize-none"
                      placeholder="Décrivez votre projet de partenariat..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-gold-400 to-gold-500 text-black font-semibold py-4 rounded-lg hover:from-gold-300 hover:to-gold-400 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Envoyer la demande</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;