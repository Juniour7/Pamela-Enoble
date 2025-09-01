import React from 'react';
import { Play, ExternalLink, Facebook, Youtube } from 'lucide-react';

const Accueil = () => {
  const interviews = [
    {
      title: "L'interview cash de Pamela Enoble",
      url: "https://www.facebook.com/watch/?v=840703443819805",
      platform: "Facebook",
      thumbnail: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: Facebook,
    },
    {
      title: "Podcast avec YouthMedia",
      url: "https://youthmedia.net/podcast/pamela-enoble",
      platform: "YouthMedia",
      thumbnail: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: ExternalLink,
    },
    {
      title: "Interview Exclusive",
      url: "https://www.facebook.com/watch/?v=3354380464646536",
      platform: "Facebook",
      thumbnail: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: Facebook,
    },
  ];

  const socialPlatforms = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/pamela.enoble",
      icon: Facebook,
      followers: "25K+",
      color: "from-blue-600 to-blue-700",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/enoble-pamela-296a5283/",
      icon: ExternalLink,
      followers: "10K+",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/pamelaenoble/?hl=en",
      icon: ExternalLink,
      followers: "15K+",
      color: "from-pink-500 to-purple-600",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <img
              src="/Pamela.jpg"
              alt="Pamela Enoble"
              className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-gold-400 shadow-2xl object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent">
            PAMELA ENOBLE
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Visionnaire • Entrepreneure • Leader
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            À la tête du Groupe Enotel, incarnant une nouvelle génération de leaders 
            alliant excellence, foi et résilience.
          </p>

          {/* Latest Apparition */}
          <div className="mb-12">
            <h3 className="text-gold-400 font-semibold mb-4">Dernière Apparition</h3>
            <a
              href="https://www.youtube.com/watch?v=VsJHwS5_0h8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <Youtube className="w-5 h-5" />
              <span>Voir sur YouTube</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/biographie"
              className="bg-gradient-to-r from-gold-400 to-gold-500 text-black px-8 py-4 rounded-full font-semibold hover:from-gold-300 hover:to-gold-400 transition-all duration-300 transform hover:scale-105"
            >
              Découvrir mon parcours
            </a>
            <a
              href="/contact"
              className="border-2 border-gold-400 text-gold-400 px-8 py-4 rounded-full font-semibold hover:bg-gold-400 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Partenariat
            </a>
          </div>
        </div>
      </section>

      {/* Most Popular Interviews */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Interviews Populaires
            </h2>
            <p className="text-xl text-gray-400">
              Découvrez mes dernières interventions médiatiques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {interviews.map((interview, index) => {
              const Icon = interview.icon;
              return (
                <div
                  key={index}
                  className="group bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  <div className="relative">
                    <img
                      src={interview.thumbnail}
                      alt={interview.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute top-4 right-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play className="w-16 h-16 text-gold-400" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gold-400 transition-colors">
                      {interview.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{interview.platform}</p>
                    <a
                      href={interview.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gold-400 hover:text-gold-300 transition-colors"
                    >
                      Regarder maintenant
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Media Platforms */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Réseaux Sociaux
            </h2>
            <p className="text-xl text-gray-400">
              Suivez-moi pour rester connecté
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialPlatforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className={`bg-gradient-to-br ${platform.color} p-8 rounded-2xl text-center hover:transform hover:scale-105 transition-all duration-300 shadow-xl`}>
                    <Icon className="w-12 h-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {platform.name}
                    </h3>
                    <p className="text-white/80 text-lg font-semibold">
                      {platform.followers} abonnés
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accueil;