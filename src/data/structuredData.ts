import type { Lang } from './content';

export const buildStructuredData = (lang: Lang) => {
  const origin = 'https://www.offaxis.partners';
  const home = lang === 'fr' ? `${origin}/fr/` : `${origin}/`;
  const serviceNames =
    lang === 'fr'
      ? ['Marketing sportif', 'Stratégie d’audience', 'Expérience fan', 'Stratégie et structuration de partenariats', 'Pilotage et déploiement de projets', 'Marketing territorial', 'Sports d’action']
      : ['Sport marketing', 'Audience strategy', 'Fan experience', 'Partnership strategy and structuring', 'Project leadership and delivery', 'Destination marketing', 'Action sports'];
  const awards =
    lang === 'fr'
      ? [
          'Choiseul Top 100 des dirigeants du sport français de moins de 40 ans, 2021–2024',
          'Lauréat Sporsora 2021 pour l’événement phygital E-FISE',
          'Prix du public des Sportel Awards, 2015–2016',
        ]
      : [
          'Choiseul Top 100 French sport business leaders under 40, 2021–2024',
          'Sporsora winner 2021 for the E-FISE phygital event',
          'Sportel Awards Audience Award, 2015–2016',
        ];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': `${origin}/#organization`,
        name: 'OFF AXIS',
        url: home,
        logo: `${origin}/og.png`,
        image: `${origin}/og.png`,
        description:
          lang === 'fr'
            ? 'Conseil en stratégie, audience, expérience et business pour aider les acteurs du sport, de l’outdoor et de la culture à identifier et concrétiser de nouveaux leviers de croissance.'
            : 'Strategy, audience, experience and business advisory helping sport, outdoor and culture-driven organisations find and deliver new lines of growth.',
        areaServed: 'Worldwide',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '171 Rue du Mas de Roue',
          postalCode: '34670',
          addressLocality: 'Baillargues',
          addressCountry: 'FR',
        },
        founder: { '@id': `${origin}/#joseph-villeflayoux` },
        parentOrganization: {
          '@type': 'Organization',
          name: 'SMACK THE LIP SARL',
          vatID: 'FR77983143942',
        },
        sameAs: ['https://www.linkedin.com/in/joseph-villeflayoux-87047040/'],
        knowsAbout: serviceNames,
      },
      {
        '@type': 'Person',
        '@id': `${origin}/#joseph-villeflayoux`,
        name: 'Joseph Villeflayoux',
        jobTitle: lang === 'fr' ? 'Fondateur · Stratégie & Croissance' : 'Founder · Strategy & Growth',
        worksFor: { '@id': `${origin}/#organization` },
        sameAs: ['https://www.linkedin.com/in/joseph-villeflayoux-87047040/'],
        alumniOf: { '@type': 'CollegeOrUniversity', name: 'Montpellier Business School' },
        award: awards,
      },
      {
        '@type': 'WebSite',
        '@id': `${origin}/#website`,
        url: `${origin}/`,
        name: 'OFF AXIS',
        inLanguage: ['en-GB', 'fr-FR'],
        publisher: { '@id': `${origin}/#organization` },
      },
    ],
  };
};
