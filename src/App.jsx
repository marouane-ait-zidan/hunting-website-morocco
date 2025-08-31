import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram, MessageCircle, Mail, MapPin, Phone, Globe, Target, Award, Users, Calendar } from 'lucide-react';
import CircularText from './components/CircularText' ; 

const HuntingWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('FR');
  const [email, setEmail] = useState('');
  const [hoveredAnimal, setHoveredAnimal] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = {
    FR: {
      home: 'Accueil',
      hunts: 'Nos chasses',
      news: 'Actualités',
      about: 'A propos',
      gallery: 'Galerie',
      history: 'Histoire',
      contact: 'Nous contacter',
      heroTitle: 'PASSION & VALEURS',
      heroSubtitle: 'Séjours de chasse au Maroc',
      newsletter: 'RECEVEZ NOS ACTUALITÉS',
      newsletterDesc: 'Inscrivez-vous à notre Newsletter',
      subscribe: 'S\'abonner',
      getQuote: 'Demander un devis',
      huntingZones: 'ZONES DE CHASSE',
      ourActivities: 'NOS ACTIVITÉS',
      whoAreWe: 'Qui sommes-nous ?',
      subscribeNews: 'S\'abonner',
      requestQuote: 'Demander un devis',
      contactUs: 'Nous contacter'
    },
    EN: {
      home: 'Home',
      hunts: 'Our hunts',
      news: 'News',
      about: 'About',
      gallery: 'Gallery',
      history: 'History',
      contact: 'Contact us',
      heroTitle: 'PASSION & VALUES',
      heroSubtitle: 'Hunting trips in Morocco',
      newsletter: 'GET OUR NEWS',
      newsletterDesc: 'Subscribe to our Newsletter',
      subscribe: 'Subscribe',
      getQuote: 'Get a quote',
      huntingZones: 'HUNTING ZONES',
      ourActivities: 'OUR ACTIVITIES',
      whoAreWe: 'Who are we?',
      subscribeNews: 'Subscribe',
      requestQuote: 'Request quote',
      contactUs: 'Contact us'
    },
    ES: {
      home: 'Inicio',
      hunts: 'Nuestras cazas',
      news: 'Noticias',
      about: 'Acerca de',
      gallery: 'Galería',
      history: 'Historia',
      contact: 'Contáctanos',
      heroTitle: 'PASIÓN Y VALORES',
      heroSubtitle: 'Viajes de caza en Marruecos',
      newsletter: 'RECIBE NUESTRAS NOTICIAS',
      newsletterDesc: 'Suscríbete a nuestro boletín',
      subscribe: 'Suscribirse',
      getQuote: 'Solicitar presupuesto',
      huntingZones: 'ZONAS DE CAZA',
      ourActivities: 'NUESTRAS ACTIVIDADES',
      whoAreWe: '¿Quiénes somos?',
      subscribeNews: 'Suscribirse',
      requestQuote: 'Solicitar presupuesto',
      contactUs: 'Contáctanos'
    }
  };

  const t = languages[currentLanguage];

  const animals = [
    {
      name: "Caille",
      imgUrl: "/images/caille.jpg",
      type: "Migrateur",
      period: "début octobre jusqu'à fin février",
      description: "Petit gibier très apprécié des chasseurs pour sa rapidité et son vol imprévisible.",
      modalId: "caille-modal",
    },
    {
      name: "Bécassine",
      imgUrl: "/images/Bécassine.jpg",
      type: "Migrateur",
      period: "début octobre jusqu'à fin février",
      description: "Échassier des marais, challenge technique pour les chasseurs expérimentés.",
      modalId: "becassine-modal",
    },
    {
      name: "Grive",
      imgUrl: "/images/grive.webp",
      type: "Migrateur",
      period: "début octobre jusqu'à fin février",
      description: "Oiseau migrateur offrant une chasse traditionnelle dans les oliveraies.",
      modalId: "grive-modal",
    },
    {
      name: "Sanglier",
      imgUrl: "/images/sanglier.jpg",
      type: "Sédentaire",
      period: "début octobre à fin avril",
      description: "Grand gibier emblématique, chasse en battue dans les forêts de chênes-lièges.",
      modalId: "sanglier-modal",
    },
    {
      name: "Tourterelle",
      imgUrl: "/images/tourterelle.jpg",
      type: "Migrateur",
      period: "mi-juillet à début septembre",
      description: "Colombe sauvage, vol rapide et direct, chasse au passage.",
      modalId: "tourterelle-modal",
    },
    {
      name: "Perdrix gambra",
      imgUrl: "/images/Perdrix Gambra.jpg",
      type: "Sédentaire",
      period: "du 1er octobre à fin mars",
      description: "Perdrix africaine endémique, gallinacé robuste des terrains rocailleux.",
      modalId: "perdrix-modal",
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Merci pour votre inscription : ${email}`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-black/95 backdrop-blur-lg shadow-lg' : 'bg-black/80'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></div>
              </div>
              <div>
                <span className="text-white font-bold text-xl tracking-wide">IGHIL CO</span>
                <p className="text-orange-400 text-xs font-medium">Hunting Experience</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {[
                { key: 'home', id: 'home' },
                { key: 'about', id: 'about' },
                { key: 'hunts', id: 'hunts' },
                { key: 'gallery', id: 'gallery' },
                { key: 'news', id: 'news' },
                { key: 'contact', id: 'contact' }
              ].map(({ key, id }) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(id)}
                  className="relative text-white hover:text-orange-400 transition-all duration-300 font-medium py-2 group"
                >
                  {t[key]}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </nav>

            {/* Language & Social */}
            <div className="hidden lg:flex items-center space-x-4">
              <select
                value={currentLanguage}
                onChange={(e) => setCurrentLanguage(e.target.value)}
                className="bg-white/10 text-white border border-orange-400/50 rounded-lg px-3 py-2 text-sm backdrop-blur-sm focus:outline-none focus:border-orange-400"
              >
                <option value="FR" className="bg-black">🇫🇷 FR</option>
                <option value="EN" className="bg-black">🇬🇧 EN</option>
                <option value="ES" className="bg-black">🇪🇸 ES</option>
              </select>
              
              <div className="flex items-center space-x-3 pl-4 border-l border-white/20">
                {[Facebook, Instagram, MessageCircle, Mail].map((Icon, index) => (
                  <Icon key={index} className="w-5 h-5 text-white/70 hover:text-orange-400 cursor-pointer transition-all duration-300 hover:scale-110" />
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/98 backdrop-blur-lg border-t border-orange-500/30">
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-4">
                {[
                  { key: 'home', id: 'home' },
                  { key: 'about', id: 'about' },
                  { key: 'hunts', id: 'hunts' },
                  { key: 'gallery', id: 'gallery' },
                  { key: 'news', id: 'news' },
                  { key: 'contact', id: 'contact' }
                ].map(({ key, id }) => (
                  <button
                    key={key}
                    onClick={() => scrollToSection(id)}
                    className="text-white hover:text-orange-400 transition-colors text-left py-2 px-4 hover:bg-white/5 rounded-lg"
                  >
                    {t[key]}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Parallax Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        ></div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
        
        {/* Hero Content */}
        <div className="relative z-20 text-center text-white px-4 max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-wider">
              <span className="bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
                PASSION
              </span>
              <span className="text-white"> & </span>
              <span className="bg-gradient-to-r from-orange-400 via-orange-200 to-white bg-clip-text text-transparent">
                VALEURS
              </span>
            </h1>
            <div className="relative inline-block">
              <p className="text-2xl md:text-4xl mb-8 font-light tracking-wide">
                Sensations Pûrement Naturelles
              </p>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => scrollToSection('hunts')}
              className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <span className="relative z-10">Découvrir nos chasses</span>
              <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="group border-2 border-white/50 hover:border-orange-400 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
            >
              <span className="group-hover:text-orange-400 transition-colors">Nous contacter</span>
            </button>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Award, number: "15+", label: "Années d'expérience" },
              { icon: Users, number: "500+", label: "Clients satisfaits" },
              { icon: Target, number: "10+", label: "Zones de chasse" },
              { icon: Calendar, number: "6", label: "Types de gibier" }
            ].map(({ icon: Icon, number, label }, index) => (
              <div key={index} className="text-center group">
                <Icon className="w-8 h-8 mx-auto mb-2 text-orange-400 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-white mb-1">{number}</div>
                <div className="text-sm text-white/80">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-5xl font-bold mb-6 text-gray-800">
                    À propos d'
                    <span className="text-orange-500">IGHIL CO</span>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mb-8"></div>
                </div>
                
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    <strong className="text-gray-800">IGHIL CO</strong> est une entreprise spécialisée dans l'organisation 
                    de séjours de chasse au Maroc. Avec des années d'expérience, nous proposons des aventures 
                    authentiques dans les plus beaux territoires de chasse du royaume.
                  </p>
                  <p>
                    Notre passion pour la nature et notre expertise du terrain nous permettent d'offrir 
                    des expériences inoubliables à nos clients, dans le respect de la faune et de l'environnement.
                  </p>
                  <p>
                    Nous nous engageons à perpétuer les traditions cynégétiques tout en adoptant une approche 
                    responsable et durable de la chasse.
                  </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-6 mt-8">
                  {[
                    { icon: Target, title: "Expertise", desc: "15+ années d'expérience" },
                    { icon: Award, title: "Qualité", desc: "Service premium garanti" },
                    { icon: Users, title: "Accompagnement", desc: "Guides expérimentés" },
                    { icon: Globe, title: "Territoires", desc: "Zones exclusives" }
                  ].map(({ icon: Icon, title, desc }, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">{title}</h4>
                        <p className="text-sm text-gray-600">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {t.contactUs}
                </button>
              </div>
              
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="/images/img9.jpg"
                    alt="Hunting guide"
                    className="rounded-2xl shadow-xl w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src="/images/img7.jpg"
                    alt="Hunting landscape"
                    className="rounded-2xl shadow-xl w-full h-64 object-cover mt-8 transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Circular Text Section - Add this after the About section */}
<section className="py-20 bg-black">
  <div className="container mx-auto px-4">
    <div className="flex justify-center items-center">
      <CircularText 
        text="IGHIL CO • HUNTING EXPERIENCE • "
        spinDuration={25}
        onHover="speedUp"
        className="w-[250px] h-[250px] text-orange-500"
      />
    </div>
  </div>
</section>

      {/* Animals/Hunts Section */}
      {/* <section id="hunts" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">
                SÉJOUR <span className="text-orange-500">DE CHASSE</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Découvrez notre sélection de gibiers dans un cadre naturel exceptionnel. 
                Chaque espèce offre une expérience unique dans les plus beaux territoires du Maroc.
              </p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {animals.map((animal, index) => (
                <div
                  key={animal.name}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                  onMouseEnter={() => setHoveredAnimal(index)}
                  onMouseLeave={() => setHoveredAnimal(null)}
                >

                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={animal.imgUrl}
                      alt={animal.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="relative">
                        <div className="w-16 h-16 border-2 border-orange-400 rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-orange-400"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-8 bg-orange-400"></div>
                      </div>
                    </div>


                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        animal.type === 'Migrateur' 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-green-500 text-white'
                      }`}>
                        {animal.type}
                      </span>
                    </div>
                  </div>

                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{animal.name}</h3>
                    <p className="text-orange-600 font-semibold mb-3">{animal.period}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{animal.description}</p>
                    
                  
                    <div className={`mt-4 transition-all duration-300 ${
                      hoveredAnimal === index ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'
                    } overflow-hidden`}>
                      <button className="text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors">
                        + En savoir plus
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            
            <div className="text-center">
              <a
                href="https://forms.gle/NfXy36NKjj8M1RPY6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Demander un devis personnalisé
              </a>
            </div>
          </div>
        </div>
      </section> */}

      <section id="hunts" className="py-16 bg-white">
  <div className="max-w-4xl mx-auto px-2">
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold uppercase">
        SÉJOUR <span className="text-orange-500">DE CHASSE</span>
      </h2>
      <div className="my-4 flex justify-center">
        {/* SVG Separator */}
        <svg width="50" height="50" viewBox="0 0 129 129">
          <g>
            <path
              d="m10.7,68.6h9c1.9,21.6 19.2,38.8 40.7,40.7v9c0,2.2 1.8,4.1 4.1,4.1 2.2,0 4.1-1.8 4.1-4.1v-9c21.6-1.9 38.8-19.2 40.7-40.7h9c2.2,0 4.1-1.8 4.1-4.1 0-2.2-1.8-4.1-4.1-4.1h-9c-1.9-21.6-19.2-38.8-40.7-40.7v-9c0-2.2-1.8-4.1-4.1-4.1-2.2,0-4.1,1.8-4.1,4.1v9c-21.6,1.9-38.8,19.2-40.7,40.7h-9c-2.3,0-4.1,1.8-4.1,4.1 3.55271e-15,2.3 1.9,4.1 4.1,4.1zm33.7-8.2h-16.5c1.9-17.1 15.5-30.7 32.5-32.5v16.5c0,2.2 1.8,4.1 4.1,4.1 2.2,0 4.1-1.8 4.1-4.1v-16.5c17.1,1.9 30.7,15.5 32.5,32.5h-16.5c-2.2,0-4.1,1.8-4.1,4.1 0,2.2 1.8,4.1 4.1,4.1h16.5c-1.9,17.1-15.5,30.7-32.5,32.5v-16.5c0-2.2-1.8-4.1-4.1-4.1-2.2,0-4.1,1.8-4.1,4.1v16.5c-17.1-1.9-30.7-15.5-32.5-32.5h16.5c2.2,0 4.1-1.8 4.1-4.1 0-2.2-1.9-4.1-4.1-4.1z"
              fill="#ff7f00"
            ></path>
          </g>
        </svg>
      </div>
      <p className="text-gray-600 text-base md:text-lg">
        T.L. Chasse vous offre un cadre de chasse agréable au Maroc avec un gibier sauvage naturellement
        sélectionné de type sédentaire et migrateur (Caille, Bécassine, perdrix gambra, sangliers à la grive)
        dans plusieurs zones du territoire national
      </p>
    </div>

    <section className="py-10 bg-[#f7f7f7]">
      <div className="flex flex-wrap justify-center gap-x-16 gap-y-8">
        {animals.map((animal, idx) => (
          <div key={animal.name} className="flex flex-col items-center">
            <div
              className="relative w-[220px] h-[220px] rounded-full border-4 border-orange-500 shadow-lg overflow-visible group transition-shadow duration-200 bg-white flex items-center justify-center"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Animal Image */}
              <img
                src={animal.imgUrl}
                alt={animal.name}
                className="w-full h-full object-cover rounded-full"
                draggable={false}
              />
              {/* Crosshair: always visible */}
              <span className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-8 w-1 bg-orange-500 z-20" />
              <span className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 h-8 w-1 bg-orange-500 z-20" />
              <span className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 w-8 h-1 bg-orange-500 z-20" />
              <span className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 w-8 h-1 bg-orange-500 z-20" />
              {/* Overlay: smaller orange circle, only on hover */}
              {hovered === idx && (
                <div className="absolute left-1/2 top-1/2 w-[180px] h-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/80 flex flex-col items-center justify-center text-center z-30">
                  <span className="text-white text-2xl font-extrabold uppercase mb-2">{animal.name}</span>
                  <span className="text-white text-base font-medium">Type de gibier: {animal.type}</span>
                </div>
              )}
            </div>
            <span className="block mt-3 text-xl font-semibold text-orange-500 text-center">{animal.name}</span>
          </div>
        ))}
      </div>
    </section>

    <div className="text-center mt-12">
      <a
        href="https://forms.gle/NfXy36NKjj8M1RPY6"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#fff",
          fontSize: "15px",
          borderRadius: "4px",
          background: "#ff7f00",
          padding: "14px 18px",
          marginTop: "30px",
          display: "inline-block",
        }}
      >
        Demander un devis
      </a>
    </div>
  </div>
</section>

      {/* Hunting Zones */}
      {/* <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white relative overflow-hidden">
        
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">
              {t.huntingZones}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-16"></div>
            
            <div className="relative">
              
              <div className="relative bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl p-8 shadow-2xl">
                <img
                  src="/images/TL_CHASSE_map.svg"
                  alt="Morocco map"
                  className="w-full max-w-4xl mx-auto h-96 object-contain opacity-20"
                />
                

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mb-6">
                      <MapPin className="w-20 h-20 text-orange-400 mx-auto mb-4 drop-shadow-lg" />
                    </div>
                    <h3 className="text-4xl font-bold mb-4">Maroc</h3>
                    <p className="text-xl text-orange-200 mb-8">Territoires de chasse authentiques</p>
                    
                  
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
                      {[
                        { title: "Atlas Mountains", desc: "Zones montagneuses pour sangliers" },
                        { title: "Plaines centrales", desc: "Terres agricoles pour petit gibier" },
                        { title: "Zones humides", desc: "Marais et étangs pour migrateurs" }
                      ].map((zone, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                          <h4 className="font-bold text-orange-300 mb-2">{zone.title}</h4>
                          <p className="text-sm text-white/80">{zone.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="py-24 bg-[#283349] text-white relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 uppercase tracking-wide">
                {t.huntingZones}
              </h2>
              <div className="relative w-full flex items-center justify-center min-h-[400px]">
                {/* SVG MAP */}
                <img
                  src="/images/TL_CHASSE_map.svg"
                  alt="Morocco map"
                  className="block mx-auto w-full max-w-3xl h-[400px] md:h-[500px] object-contain select-none"
                  draggable={false}
                  style={{ filter: "brightness(0.15)" }}
                />
                {/* Centered Pin+Text overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
                  <MapPin className="w-16 h-16 text-[#fd8900]" strokeWidth={3} />
                  <div className="mt-3 text-3xl font-bold">Maroc</div>
                  <div className="mt-2 text-lg opacity-90 font-light">
                    Territoires de chasse authentiques
                  </div>
                </div>
              </div>
            </div>
          </section>
      

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-gray-800">GALERIE</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600">Découvrez nos plus beaux moments de chasse</p>
            </div>

            {/* Masonry Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { src: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', size: 'tall' },
                { src: 'https://images.unsplash.com/photo-1574952793354-ad4b0f2cf8d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', size: 'normal' },
                { src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', size: 'wide' },
                { src: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', size: 'normal' },
                { src: 'https://images.unsplash.com/photo-1574952793354-ad4b0f2cf8d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', size: 'tall' },
                { src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', size: 'normal' },
                { src: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', size: 'normal' },
                { src: 'https://images.unsplash.com/photo-1574952793354-ad4b0f2cf8d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', size: 'wide' }
              ].map((image, index) => (
                <div
                  key={index}
                  className={`relative group overflow-hidden rounded-xl cursor-pointer ${
                    image.size === 'tall' ? 'row-span-2' : 
                    image.size === 'wide' ? 'col-span-2' : ''
                  }`}
                >
                  <img
                    src={image.src}
                    alt={`Gallery ${index + 1}`}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                      image.size === 'tall' ? 'h-96' : 'h-48'
                    }`}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-xl">+</span>
                      </div>
                      <p className="text-sm">Voir plus</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News/Activities Section */}
      <section id="news" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-gray-800">{t.ourActivities}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600">Nos dernières actualités et services</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Saison de chasse 2025",
                  desc: "Découvrez notre nouvelle saison avec des territoires exclusifs et des forfaits adaptés à tous les niveaux de chasseurs.",
                  image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                  date: "Mars 2025",
                  category: "Actualités"
                },
                {
                  title: "Guides expérimentés",
                  desc: "Nos guides locaux certifiés vous accompagnent pour une expérience authentique en toute sécurité.",
                  image: "https://images.unsplash.com/photo-1574952793354-ad4b0f2cf8d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                  date: "Service permanent",
                  category: "Services"
                },
                {
                  title: "Hébergement premium",
                  desc: "Profitez de notre lodge confortable au cœur de la nature avec tous les équipements modernes.",
                  image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                  date: "Disponible",
                  category: "Hébergement"
                }
              ].map((item, index) => (
                <article key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {item.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-orange-600 font-semibold text-sm">{item.date}</span>
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-orange-600" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-orange-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{item.desc}</p>
                    <button className="text-orange-500 font-semibold hover:text-orange-600 transition-colors flex items-center space-x-2">
                      <span>En savoir plus</span>
                      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-slate-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">{t.contactUs}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300">Prêt à vivre une expérience de chasse inoubliable ?</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold mb-8 text-orange-400">Parlons de votre projet</h3>
                  
                  <div className="space-y-6">
                    {[
                      { icon: Phone, label: "Téléphone", value: "+212 123 456 789", desc: "Disponible 7j/7" },
                      { icon: Mail, label: "Email", value: "contact@ighilco.ma", desc: "Réponse sous 24h" },
                      { icon: MapPin, label: "Adresse", value: "Marrakech, Maroc", desc: "Siège social" },
                      { icon: Globe, label: "Site web", value: "www.ighilco.ma", desc: "Plus d'informations" }
                    ].map(({ icon: Icon, label, value, desc }, index) => (
                      <div key={index} className="flex items-start space-x-4 group">
                        <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors">
                          <Icon className="w-6 h-6 text-orange-400 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-300 text-sm">{label}</p>
                          <p className="text-white font-bold text-lg">{value}</p>
                          <p className="text-gray-400 text-sm">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-8 border-t border-gray-700">
                  <h4 className="text-xl font-bold mb-6 text-orange-400">Suivez-nous</h4>
                  <div className="flex space-x-4">
                    {[
                      { icon: Facebook, name: "Facebook" },
                      { icon: Instagram, name: "Instagram" },
                      { icon: MessageCircle, name: "WhatsApp" },
                      { icon: Mail, name: "Email" }
                    ].map(({ icon: Icon, name }, index) => (
                      <button
                        key={index}
                        className="w-12 h-12 bg-white/10 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                        title={name}
                      >
                        <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-orange-400">Envoyez-nous un message</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Prénom</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-orange-400 focus:bg-white/15 transition-all"
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Nom</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-orange-400 focus:bg-white/15 transition-all"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-orange-400 focus:bg-white/15 transition-all"
                      placeholder="votre@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Type de chasse</label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-orange-400 focus:bg-white/15 transition-all">
                      <option value="" className="bg-slate-800">Choisir un type</option>
                      <option value="petit-gibier" className="bg-slate-800">Petit gibier</option>
                      <option value="sanglier" className="bg-slate-800">Sanglier</option>
                      <option value="migrateurs" className="bg-slate-800">Migrateurs</option>
                      <option value="sur-mesure" className="bg-slate-800">Sur mesure</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
                    <textarea
                      rows="5"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-orange-400 focus:bg-white/15 transition-all resize-none"
                      placeholder="Décrivez-nous votre projet de séjour de chasse..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {/* Brand */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-white font-bold text-xl">IGHIL CO</span>
                    <p className="text-orange-400 text-sm">Hunting Experience</p>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Votre partenaire de confiance pour des séjours de chasse authentiques 
                  et respectueux de l'environnement au Maroc.
                </p>
              </div>
              
              {/* Quick Links */}
              <div>
                <h4 className="font-bold mb-6 text-orange-400">Navigation</h4>
                <ul className="space-y-3">
                  {[
                    { label: 'Accueil', id: 'home' },
                    { label: 'À propos', id: 'about' },
                    { label: 'Nos chasses', id: 'hunts' },
                    { label: 'Galerie', id: 'gallery' }
                  ].map(({ label, id }) => (
                    <li key={id}>
                      <button
                        onClick={() => scrollToSection(id)}
                        className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Services */}
              <div>
                <h4 className="font-bold mb-6 text-orange-400">Services</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li><span className="hover:text-orange-400 transition-colors cursor-pointer">Chasse au sanglier</span></li>
                  <li><span className="hover:text-orange-400 transition-colors cursor-pointer">Petit gibier</span></li>
                  <li><span className="hover:text-orange-400 transition-colors cursor-pointer">Gibier migrateur</span></li>
                  <li><span className="hover:text-orange-400 transition-colors cursor-pointer">Séjours sur mesure</span></li>
                </ul>
              </div>
              
              {/* Newsletter */}
              <div>
                <h4 className="font-bold mb-6 text-orange-400">Newsletter</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Restez informé de nos dernières actualités et offres spéciales.
                </p>
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre email"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-orange-400 text-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 py-2 rounded-lg font-semibold transition-colors text-sm"
                  >
                    S'abonner
                  </button>
                </form>
              </div>
            </div>
            
            {/* Bottom Bar */}
            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-gray-400 text-sm">
                  © 2025 IGHIL CO. Tous droits réservés.
                </p>
                
                {/* Language Selector */}
                <div className="flex items-center space-x-4">
                  <span className="text-gray-400 text-sm">Langues:</span>
                  <div className="flex space-x-2">
                    {['FR', 'EN', 'ES'].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setCurrentLanguage(lang)}
                        className={`px-3 py-1 rounded text-sm transition-colors ${
                          currentLanguage === lang 
                            ? 'bg-orange-500 text-white' 
                            : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={() => scrollToSection('home')}
        className={`fixed bottom-8 right-8 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 z-50 ${
          scrollY > 300 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default HuntingWebsite;
