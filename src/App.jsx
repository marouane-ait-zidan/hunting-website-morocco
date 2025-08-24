import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram, MessageCircle, Mail, MapPin, Phone, Globe } from 'lucide-react';


const HuntingWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('FR');
  const [email, setEmail] = useState('');
  const [hoveredAnimal, setHoveredAnimal] = useState(null);
  const [hovered, setHovered] = useState(null);

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
    // { name: 'Caille', image: '🦜', type: 'Migrateur', period: 'octobre-février' },
    // { name: 'Bécassine', image: '🦅', type: 'Migrateur', period: 'octobre-mars' },
    // { name: 'Grive', image: '🐦', type: 'Résident', period: 'toute l\'année' },
    // { name: 'Pigeon', image: '🕊️', type: 'Résident', period: 'toute l\'année' },
    // { name: 'Tourterelle', image: '🕊️', type: 'Migrateur', period: 'avril-septembre' },
    // { name: 'Perdrix', image: '🦜', type: 'Résident', period: 'toute l\'année' }
    {
    name: "Caille",
    imgUrl: "/images/caille.jpg",
    type: "Migrateur",
    period: "début octobre jusqu’à fin février",
    modalId: "caille-modal",
  },
  {
    name: "Bécassine",
    imgUrl: "/images/Bécassine.jpg",
    type: "Migrateur",
    period: "début octobre jusqu’à fin février",
    modalId: "becassine-modal",
  },
  {
    name: "Grive",
    imgUrl: "/images/grive.webp",
    type: "Migrateur",
    period: "début octobre jusqu’à fin février",
    modalId: "grive-modal",
  },
  {
    name: "Sanglier",
    imgUrl: "/images/sanglier.jpg",
    period: "début octobre à fin avril",
    modalId: "sanglier-modal",
  },
  {
    name: "Tourterelle",
    imgUrl: "/images/tourterelle.jpg",
    period: "mi-juillet à début septembre",
    modalId: "tourterelle-modal",
  },
  {
    name: "Perdrix gambra",
    imgUrl: "/images/Perdrix Gambra.jpg",
    period: "du 1er octobre à fin mars",
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
    // Here you would typically send the email to your backend
    alert(`Merci pour votre inscription : ${email}`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-orange-500">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">IC</span>
              </div>
              <span className="text-white font-bold text-lg">IGHIL CO</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {[
                { key: 'home', id: 'home' },
                { key: 'hunts', id: 'hunts' },
                { key: 'news', id: 'news' },
                { key: 'about', id: 'about' },
                { key: 'gallery', id: 'gallery' },
                { key: 'history', id: 'history' },
                { key: 'contact', id: 'contact' }
              ].map(({ key, id }) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(id)}
                  className="text-white hover:text-orange-500 transition-colors duration-300 font-medium"
                >
                  {t[key]}
                </button>
              ))}
            </nav>

            {/* Language Selector & Social Links */}
            <div className="hidden lg:flex items-center space-x-4">
              <select
                value={currentLanguage}
                onChange={(e) => setCurrentLanguage(e.target.value)}
                className="bg-transparent text-white border border-orange-500 rounded px-2 py-1 text-sm"
              >
                <option value="FR" className="bg-black">FR</option>
                <option value="EN" className="bg-black">EN</option>
                <option value="ES" className="bg-black">ES</option>
              </select>
              
              <div className="flex items-center space-x-2">
                <Facebook className="w-5 h-5 text-white hover:text-orange-500 cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 text-white hover:text-orange-500 cursor-pointer transition-colors" />
                <MessageCircle className="w-5 h-5 text-white hover:text-orange-500 cursor-pointer transition-colors" />
                <Mail className="w-5 h-5 text-white hover:text-orange-500 cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/95 border-t border-orange-500">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {[
                  { key: 'home', id: 'home' },
                  { key: 'hunts', id: 'hunts' },
                  { key: 'news', id: 'news' },
                  { key: 'about', id: 'about' },
                  { key: 'gallery', id: 'gallery' },
                  { key: 'history', id: 'history' },
                  { key: 'contact', id: 'contact' }
                ].map(({ key, id }) => (
                  <button
                    key={key}
                    onClick={() => scrollToSection(id)}
                    className="text-white hover:text-orange-500 transition-colors text-left"
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
      {/* <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
          }}
        ></div>
        
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-wider">
            {t.heroTitle}
          </h1>
          <div className="relative inline-block group">
            <p className="text-2xl md:text-3xl mb-8 font-light tracking-wide">
              <span className="transition-all duration-500 group-hover:text-orange-400">
                Séjours{' '}
              </span>
              <span className="relative overflow-hidden inline-block">
                <span className="transition-all duration-500 transform group-hover:translate-y-[-100%] group-hover:opacity-0 inline-block">
                  de chasse
                </span>
                <span className="absolute top-full left-0 transition-all duration-500 transform group-hover:translate-y-[-100%] group-hover:opacity-100 text-orange-400 font-bold">
                  DE CHASSE
                </span>
              </span>
            </p>
          </div>
          

          <div className="bg-orange-500/20 backdrop-blur-md rounded-lg p-8 max-w-md mx-auto mb-8 border border-orange-500/30">
            <h3 className="text-xl font-bold mb-2">{t.newsletter}</h3>
            <p className="text-sm mb-4 opacity-90">{t.newsletterDesc}</p>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                className="px-4 py-2 rounded bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-orange-500"
                required
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded font-semibold transition-colors duration-300"
              >
                {t.subscribe}
              </button>
            </form>
          </div>

          <button
            onClick={() => scrollToSection('contact')}
            className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
          >
            {t.getQuote}
          </button>
        </div>
      </section> */}
<section id="home" className="relative h-[580px] md:h-[700px] flex items-end justify-center overflow-hidden">
  <div className="absolute inset-0 bg-cover bg-center" style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
  }}></div>
  <div className="absolute inset-0 bg-black/55 z-10"></div>
  <div className="relative z-20 text-center mb-28">
    <h1 className="text-5xl md:text-7xl font-extrabold mb-3 tracking-widest text-white drop-shadow-lg">
      PASSION & VALEURS
    </h1>
    <h2 className="text-xl md:text-2xl text-white font-light tracking-wide mb-8">
      Sensations Pûrement Naturelles
    </h2>
  </div>
  {/* Orange Call-to-action bar */}
  <div className="absolute bottom-0 w-full flex flex-col md:flex-row justify-between items-center bg-orange-500 px-6 md:px-16 py-7 z-30 gap-6 md:gap-0">
    <div className="text-lg font-semibold text-white">
      NOUVEAU MEMBRE ? <span className="font-normal">Profitez d’une 1ère journée offerte !</span>
    </div>
    <div className="flex flex-col md:flex-row items-center gap-3">
      <button className="bg-white text-orange-500 font-bold px-8 py-2 rounded hover:bg-orange-100 transition">
        INSCRIVEZ-VOUS
      </button>
      <button
        onClick={() => scrollToSection('contact')}
        className="bg-black text-white px-8 py-2 rounded font-bold hover:bg-gray-800 transition"
      >
        RÉSERVEZ VOTRE SÉJOUR DE CHASSE
      </button>
    </div>
  </div>
</section>
      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">À propos d'IGHIL CO</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  IGHIL CO est une entreprise spécialisée dans l'organisation de séjours de chasse au Maroc. 
                  Avec des années d'expérience, nous proposons des aventures authentiques dans les plus beaux 
                  territoires de chasse du royaume.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Notre passion pour la nature et notre expertise du terrain nous permettent d'offrir 
                  des expériences inoubliables à nos clients, dans le respect de la faune et de l'environnement.
                </p>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  {t.contactUs}
                </button>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1574952793354-ad4b0f2cf8d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Hunting guide"
                  className="rounded-lg shadow-xl w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animals Section */}
      {/* <section id="hunts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">NOS GIBIERS</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {animals.map((animal, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredAnimal(index)}
                onMouseLeave={() => setHoveredAnimal(null)}
              >
                <div className="relative overflow-hidden rounded-full w-32 h-32 mx-auto bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                  <span className="text-4xl">{animal.image}</span>
                  <div
                    className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
                      hoveredAnimal === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className="text-white text-center p-2">
                      <p className="font-bold text-sm">{animal.name}</p>
                      <p className="text-xs">{animal.type}</p>
                      <p className="text-xs">{animal.period}</p>
                    </div>
                  </div>
                </div>
                <p className="text-center mt-3 font-semibold text-gray-700">{animal.name}</p>
              </div>
            ))}
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

        {/* Animals grid */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {animals.map((animal, idx) => (
            <div key={animal.name} className="flex flex-col items-center">
              <div
                className="relative w-[180px] h-[180px] rounded-full shadow-lg overflow-hidden group"
                onMouseEnter={() => setHoveredAnimal(idx)}
                onMouseLeave={() => setHoveredAnimal(null)}
              >
                <img
                  src={animal.imgUrl}
                  alt={animal.name}
                  className="w-full h-full object-cover rounded-full border-4 border-orange-500"
                  draggable={false}
                />

                {hoveredAnimal === idx && (
                  <div className="absolute inset-0 bg-orange-500/95 rounded-full flex flex-col items-center justify-center text-center px-3 transition-opacity duration-200 z-10">
                    <h3 className="text-white font-extrabold text-xl mb-2">{animal.name}</h3>
                    {animal.type && (
                      <h4 className="text-white text-sm font-semibold mb-1">
                        Type de gibier: {animal.type}
                      </h4>
                    )}
                    <h4 className="text-white text-sm">{animal.period}</h4>
                  </div>
                )}
              </div>
              <h3 className="text-orange-500 text-xl font-bold mt-4">{animal.name}</h3>
              <a
                href="#"
                style={{ color: "#636363", textDecoration: "underline" }}
                className="text-sm mt-1 hover:text-orange-500"
              >
                + Lire plus
              </a>
            </div>
          ))}
        </div> */}


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
      {/* <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">{t.huntingZones}</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <img
                src="/images/TL_CHASSE_map.svg"
                alt="Morocco map"
                className="w-full h-96 object-cover rounded-lg opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Maroc</h3>
                  <p className="text-lg opacity-90">Territoires de chasse authentiques</p>
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
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">GALERIE</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
              'https://images.unsplash.com/photo-1574952793354-ad4b0f2cf8d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
              'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
              'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
              'https://images.unsplash.com/photo-1574952793354-ad4b0f2cf8d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
              'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
              'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
              'https://images.unsplash.com/photo-1574952793354-ad4b0f2cf8d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
            ].map((src, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">{t.ourActivities}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Saison de chasse 2025",
                desc: "Découvrez notre nouvelle saison avec des territoires exclusifs",
                image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                title: "Guides expérimentés",
                desc: "Nos guides locaux vous accompagnent pour une expérience authentique",
                image: "https://images.unsplash.com/photo-1574952793354-ad4b0f2cf8d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                title: "Hébergement de qualité",
                desc: "Profitez de notre lodge confortable au cœur de la nature",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">NOTRE HISTOIRE</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Fondée par des passionnés de chasse, IGHIL CO perpétue une tradition familiale 
              de respect de la nature et de partage des valeurs cynégétiques. Depuis nos débuts, 
              nous nous engageons à offrir des expériences de chasse responsables et mémorables.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">15+</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Années d'expérience</h3>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">500+</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Clients satisfaits</h3>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">10+</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Territoires de chasse</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">{t.contactUs}</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contactez-nous</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-orange-500" />
                  <span>+212 123 456 789</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-orange-500" />
                  <span>contact@ighilco.ma</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-orange-500" />
                  <span>Marrakech, Maroc</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-bold mb-4">Suivez-nous</h4>
                <div className="flex space-x-4">
                  <Facebook className="w-8 h-8 text-orange-500 hover:text-orange-400 cursor-pointer transition-colors" />
                  <Instagram className="w-8 h-8 text-orange-500 hover:text-orange-400 cursor-pointer transition-colors" />
                  <MessageCircle className="w-8 h-8 text-orange-500 hover:text-orange-400 cursor-pointer transition-colors" />
                  <Mail className="w-8 h-8 text-orange-500 hover:text-orange-400 cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8">
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Nom complet"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <textarea
                    rows="4"
                    placeholder="Votre message"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-orange-500 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">IC</span>
                </div>
                <span className="text-white font-bold text-lg">IGHIL CO</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Votre partenaire pour des séjours de chasse authentiques au Maroc.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">{t.whoAreWe}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-orange-500 transition-colors">Notre histoire</a></li>
                <li><a href="#hunts" className="hover:text-orange-500 transition-colors">Nos territoires</a></li>
                <li><a href="#gallery" className="hover:text-orange-500 transition-colors">Galerie photos</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#contact" className="hover:text-orange-500 transition-colors">{t.requestQuote}</a></li>
                <li><a href="#contact" className="hover:text-orange-500 transition-colors">{t.contactUs}</a></li>
                <li><a href="#home" className="hover:text-orange-500 transition-colors">{t.subscribeNews}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Suivez-nous</h4>
              <div className="flex space-x-3 mb-4">
                <Facebook className="w-6 h-6 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
                <Instagram className="w-6 h-6 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
                <MessageCircle className="w-6 h-6 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
                <Mail className="w-6 h-6 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
              </div>
              <div className="text-sm text-gray-400">
                <p>Langues disponibles:</p>
                <div className="flex space-x-2 mt-2">
                  <button
                    onClick={() => setCurrentLanguage('FR')}
                    className={`px-2 py-1 rounded text-xs ${currentLanguage === 'FR' ? 'bg-orange-500 text-white' : 'bg-gray-700 hover:bg-gray-600'}`}
                  >
                    Français
                  </button>
                  <button
                    onClick={() => setCurrentLanguage('EN')}
                    className={`px-2 py-1 rounded text-xs ${currentLanguage === 'EN' ? 'bg-orange-500 text-white' : 'bg-gray-700 hover:bg-gray-600'}`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setCurrentLanguage('ES')}
                    className={`px-2 py-1 rounded text-xs ${currentLanguage === 'ES' ? 'bg-orange-500 text-white' : 'bg-gray-700 hover:bg-gray-600'}`}
                  >
                    Español
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 IGHIL CO. Tous droits réservés. | Séjours de chasse au Maroc
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={() => scrollToSection('home')}
        className="fixed bottom-8 right-8 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-40"
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