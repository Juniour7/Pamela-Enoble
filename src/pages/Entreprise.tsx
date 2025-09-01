import React from 'react';
import { Building2, Heart, Award, MapPin, Users, Star } from 'lucide-react';

const Entreprise = () => {
  const achievements = [
    {
      icon: Award,
      title: "Label des Consommateurs Africains",
      description: "Reconnaissance de l'excellence en service client",
    },
    {
      icon: Star,
      title: "Prix d'Excellence du Premier Ministre",
      description: "Récompense pour le management visionnaire",
    },
    {
      icon: Users,
      title: "Top 20 Jeunes Entrepreneurs",
      description: "Classée parmi les plus prometteurs en 2019",
    },
  ];

  const socialCauses = [
    {
      title: "Formation Professionnelle",
      description: "Programme de formation pour les jeunes de San-Pedro dans l'hôtellerie et la restauration",
      image: "im-2.jpg",
    },
    {
      title: "Développement Local",
      description: "Soutien aux initiatives locales pour promouvoir le tourisme à San-Pedro",
      image: "im-3.jpg",
    },
    {
      title: "Autonomisation des Femmes",
      description: "Programmes d'accompagnement pour les femmes entrepreneures en Côte d'Ivoire",
      image: "im-4.jpg",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Mon <span className="text-gold-400">Entreprise</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Découvrez le Groupe Enotel et mon engagement pour l'excellence entrepreneuriale
            </p>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Building2 className="w-8 h-8 text-gold-400 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Groupe ENOTEL
                </h2>
              </div>
              
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                En tant que General Manager du Groupe ENOTEL, je dirige un Village Hotel 
                situé en bordure de plage dans la ville de San-Pedro en Côte d'Ivoire.
              </p>
              
              <div className="flex items-start space-x-3 mb-6">
                <MapPin className="w-6 h-6 text-gold-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Localisation Privilégiée</h3>
                  <p className="text-gray-400">
                    Notre établissement bénéficie d'un emplacement exceptionnel en bordure 
                    de plage à San-Pedro, offrant une expérience unique à nos clients.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gold-400/10 to-gold-500/10 border border-gold-400/20 rounded-xl p-6">
                <h3 className="text-gold-400 font-semibold mb-2">Transformation Remarquable</h3>
                <p className="text-gray-300">
                  En 10 ans, j'ai transformé Enotel d'une entreprise déficitaire en l'une 
                  des plus rentables d'Afrique Francophone.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="/im-1.jpg"
                alt="Groupe Enotel"
                className="rounded-2xl w-full h-full object-cover shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
            </div>
          </div>

          {/* Achievements */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Réalisations <span className="text-gold-400">Notables</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <Icon className="w-12 h-12 text-gold-400 mx-auto mb-4" />
                    <h4 className="text-white font-semibold mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Social Cause Activities */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-gold-400 mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Engagement Social
              </h2>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Mon engagement va au-delà de l'entreprise, vers un impact positif sur la société
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialCauses.map((cause, index) => (
              <div
                key={index}
                className="group bg-gray-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cause.image}
                    alt={cause.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gold-400 transition-colors">
                    {cause.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {cause.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Entreprise;