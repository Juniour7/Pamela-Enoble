import React, { useState } from 'react';
import { X, Crown } from 'lucide-react';

interface PopupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PopupModal: React.FC<PopupModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-gray-900 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl border border-gray-800">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <Crown className="w-12 h-12 text-gold-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">
            Bienvenue !
          </h2>
          <p className="text-gray-400 text-sm">
            Restez connecté avec Pamela Enoble
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 transition-colors"
            />
          </div>
          
          <div>
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 transition-colors"
            />
          </div>
          
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Votre téléphone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 transition-colors"
            />
          </div>
          
          <div>
            <input
              type="text"
              name="country"
              placeholder="Votre pays"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-gold-400 to-gold-500 text-black font-semibold py-3 rounded-lg hover:from-gold-300 hover:to-gold-400 transition-all duration-300 transform hover:scale-105"
          >
            Rester connecté
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupModal;