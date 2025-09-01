import React from 'react';
import { Facebook, Linkedin, Instagram, Crown } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/pamela.enoble',
      icon: Facebook,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/enoble-pamela-296a5283/',
      icon: Linkedin,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/pamelaenoble/?hl=en',
      icon: Instagram,
    },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Crown className="w-6 h-6 text-gold-400" />
              <span className="text-lg font-bold text-white">PAMELA ENOBLE</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Visionnaire et leader, transformant l'héritage familial en excellence entrepreneuriale.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Navigation</h3>
            <div className="space-y-2">
              <a href="/" className="block text-gray-400 hover:text-gold-400 transition-colors text-sm">
                Accueil
              </a>
              <a href="/entreprise" className="block text-gray-400 hover:text-gold-400 transition-colors text-sm">
                Entreprise
              </a>
              <a href="/biographie" className="block text-gray-400 hover:text-gold-400 transition-colors text-sm">
                Biographie
              </a>
              <a href="/contact" className="block text-gray-400 hover:text-gold-400 transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Suivez-moi</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-gold-400 hover:bg-gray-700 transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Pamela Enoble. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;