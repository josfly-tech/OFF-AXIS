import type { Lang } from './content';

export const buildStructuredData = (lang: Lang) => {
  const origin = 'https://www.offaxis.partners';
  const home = lang === 'fr' ? `${origin}/fr/` : `${origin}/`;
  const serviceNames =
    lang === 'fr'
      ? ['Stratégie audience', 'Positionnement de marque', 'Expérience', 'Partenariats et revenus', 'Conseil stratégique']
      : ['Audience strategy', 'Brand positioning', 'Experience strategy', 'Partnerships and revenue', 'Strategic advisory'];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': `${origin}/#business`,
        name: 'OFF AXIS',
        legalName: 'SMACK THE LIP SARL',
        url: home,
        image: `${origin}/og.png`,
        description:
          lang === 'fr'
            ? 'Conseil en stratégie, audience, expérience et croissance pour le sport, l’outdoor et la culture.'
            : 'Strategy, audience, experience and growth advisory for sport, outdoor and culture-driven organisations.',
        areaServed: { '@type': 'AdministrativeArea', name: 'Worldwide' },
        address: {
          '@type': 'PostalAddress',
          streetAddress: '171 Rue du Mas de Roue',
          postalCode: '34670',
          addressLocality: 'Baillargues',
          addressCountry: 'FR',
        },
        founder: { '@id': `${origin}/#joseph-villeflayoux` },
        sameAs: ['https://www.linkedin.com/in/joseph-villeflayoux-87047040/'],
        knowsAbout: serviceNames,
      },
      {
        '@type': 'Person',
        '@id': `${origin}/#joseph-villeflayoux`,
        name: 'Joseph Villeflayoux',
        jobTitle: lang === 'fr' ? 'Fondateur · Stratégie & Croissance' : 'Founder · Strategy & Growth',
        worksFor: { '@id': `${origin}/#business` },
        sameAs: ['https://www.linkedin.com/in/joseph-villeflayoux-87047040/'],
        alumniOf: { '@type': 'CollegeOrUniversity', name: 'Montpellier Business School' },
      },
      {
        '@type': 'WebSite',
        '@id': `${origin}/#website`,
        url: `${origin}/`,
        name: 'OFF AXIS',
        inLanguage: ['en', 'fr'],
        publisher: { '@id': `${origin}/#business` },
      },
    ],
  };
};
