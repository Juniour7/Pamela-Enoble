import React from 'react';
import { Award, GraduationCap, Building2, Crown, Star, MapPin } from 'lucide-react';

const Biographie = () => {
  const milestones = [
    {
      year: "2010",
      title: "Prise de direction du Groupe Enotel",
      description: "Début de la transformation d'un héritage familial",
      icon: Building2,
    },
    {
      year: "2019",
      title: "Top 20 Jeunes Entrepreneurs",
      description: "Reconnaissance parmi les plus prometteurs du pays",
      icon: Star,
    },
    {
      year: "2020",
      title: "Chevalier de l'Ordre du Mérite National",
      description: "Décoration prestigieuse pour services rendus",
      icon: Crown,
    },
    {
      year: "2025",
      title: "Leader Reconnu",
      description: "Référence dans l'hôtellerie ivoirienne",
      icon: Award,
    },
  ];

  const education = [
    { location: "Bingerville", description: "Formation initiale" },
    { location: "Abidjan", description: "Développement académique" },
    { location: "Barcelone", description: "Formation internationale" },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Ma <span className="text-gold-400">Biographie</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Un parcours d'excellence, de foi et de résilience au service de l'entrepreneuriat ivoirien
              </p>
            </div>
            
            <div className="relative">
              <img
                src="/Pamela 2.jpg"
                alt="Pamela Enoble"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Biography */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              À la tête du Groupe Enotel depuis plus de dix ans, Pamela incarne une nouvelle 
              génération de leaders alliant excellence, foi et résilience. Visionnaire et 
              passionnée, elle a su transformer un héritage familial en une entreprise 
              florissante, aujourd'hui reconnue comme un acteur incontournable du secteur 
              de l'hôtellerie et de la restauration en Côte d'Ivoire.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Formée entre Bingerville, Abidjan et Barcelone, Pamela a très tôt appris à 
              conjuguer rigueur académique et audace entrepreneuriale. Son parcours exemplaire 
              lui a valu de figurer parmi les 20 jeunes entrepreneurs les plus prometteurs du 
              pays en 2019, avant d'être décorée Chevalier de l'Ordre du Mérite national en 2020.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-12">
              Sous son leadership, le Groupe Enotel a obtenu des distinctions prestigieuses 
              telles que le Label des Consommateurs Africains et le Prix d'Excellence du 
              Premier Ministre, récompenses qui témoignent de son management visionnaire et 
              de son engagement constant envers la qualité.
            </p>

            <div className="bg-gradient-to-r from-gold-400/10 to-gold-500/10 border border-gold-400/20 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-gold-400 mb-4">Vision d'Avenir</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Fière de ses racines et profondément attachée à son pays, Pamela nourrit une 
                ambition claire : faire du Groupe Enotel San-Pedro une référence nationale et 
                internationale, en valorisant la culture ivoirienne et en positionnant 
                San-Pedro comme une destination touristique incontournable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Journey */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <GraduationCap className="w-8 h-8 text-gold-400 mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Parcours Académique
              </h2>
            </div>
            <p className="text-xl text-gray-400">
              Une formation internationale d'excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl p-8 text-center hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
              >
                <MapPin className="w-8 h-8 text-gold-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {edu.location}
                </h3>
                <p className="text-gray-400">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Étapes <span className="text-gold-400">Clés</span>
            </h2>
            <p className="text-xl text-gray-400">
              Les moments marquants de mon parcours entrepreneurial
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gold-400/30" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={index} className="relative flex items-center">
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold-400 rounded-full border-4 border-black z-10" />
                    
                    <div className={`w-1/2 ${isEven ? 'pr-8 text-right' : 'pl-8 ml-auto'}`}>
                      <div className={`bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 ${
                        isEven ? 'mr-8' : 'ml-8'
                      }`}>
                        <div className={`flex items-center mb-4 ${isEven ? 'justify-end' : 'justify-start'}`}>
                          <Icon className="w-6 h-6 text-gold-400 mr-2" />
                          <span className="text-gold-400 font-bold text-lg">
                            {milestone.year}
                          </span>
                        </div>
                        <h3 className="text-white font-semibold mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Biographie;