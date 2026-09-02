export type Lang = 'en' | 'fr';

export const siteContent = {
  en: {
    lang: 'en' as const,
    homePath: '/',
    alternatePath: '/fr/',
    legalPath: '/legal/',
    privacyPath: '/privacy/',
    title: 'OFF AXIS | Strategy, Audience, Experience & Business',
    description:
      'OFF AXIS helps sport, outdoor and culture-driven organisations grow audiences, strengthen positioning and create value, from strategy to execution.',
    navLabel: 'Index',
    talk: 'Let’s talk',
    sections: [
      ['approach', 'Lines of growth'],
      ['levers', 'Growth levers'],
      ['fields', 'Playing fields'],
      ['collaborations', 'Collaborations'],
      ['together', 'Work together'],
      ['founder', 'Founder'],
      ['contact', 'Contact'],
    ],
    hero: {
      kicker: ['Strategy', 'Audience', 'Experience', 'Business'],
      line1: 'Find new',
      line2a: 'lines',
      line2b: ' of',
      line3: 'growth.',
      lead: 'Alongside those building the projects, audiences and models that shape sport, outdoor and culture.',
      imageAlt: 'Aerial view of a surfer riding a turquoise wave',
      imageTag: 'N 43.3° · IN THE FIELD',
      scroll: 'Scroll · find the line',
    },
    axisOne: 'A change of angle',
    growth: {
      kicker: 'Lines of growth',
      statementBefore:
        'OFF AXIS helps events, destinations and organisations strengthen their relevance, grow their audiences and turn attention into ',
      statementAccent: 'tangible value',
      statementAfter: ': participation, engagement, brand value, partnerships and revenue.',
      lead: 'An approach shaped by twenty years in the field, alongside events, brands, federations and destinations, with the same drive: understanding what can genuinely move a project forward.',
    },
    levers: {
      title: 'Growth levers',
      intro: 'Four areas, worked as one line: from reading the signals to delivering in the field.',
      items: [
        {
          title: 'Audiences, insights & positioning',
          text: 'Read the signals, understand behaviours, perceptions and expectations. Identify high-potential audiences, untapped spaces and the positioning that can open them up.',
        },
        {
          title: 'Brand, narrative & experience',
          text: 'Turn strategy into brand territories, narratives, content territories, formats and experiences that build preference and engagement.',
        },
        {
          title: 'Partnerships, revenue & value',
          text: 'Design models that create value: sponsorship, brand partnerships, licensing, ticketing, fan programmes, first-party data and new revenue streams.',
        },
        {
          title: 'Teams, activation & delivery',
          text: 'Move from strategy to activation. Bring in the right talent, align teams and partners, frame budgets and timing, then orchestrate delivery.',
        },
      ],
    },
    band: {
      textBefore: 'Turn attention into tangible ',
      accent: 'value',
      imageAlt: 'Festival crowd with raised hands in the sun',
    },
    fields: {
      title: 'Our playing fields',
      intro: 'Organisations whose growth depends on audiences, experience and relevance.',
      items: [
        {
          title: 'Events & rights holders',
          text: 'Grow audiences and relevance, then turn attention into participation, loyalty and long-term value.',
        },
        {
          title: 'Destinations & resorts',
          text: 'Attract new audiences, strengthen desirability and create experiences that make people want to come, then come back.',
        },
        {
          title: 'Sport, outdoor & lifestyle brands',
          text: 'Build credible connections with the cultures and communities that matter, and turn them into brand and business value.',
        },
        {
          title: 'Leagues & federations',
          text: 'Grow participation, modernise the fan experience and keep the sport relevant to the next generation.',
        },
      ],
    },
    collaborations: {
      title: 'Collaborations',
      intro: 'Twenty years across sport, outdoor, media, brands and destinations.',
      stat: 'Events & activations since 2005',
      rows: [
        ['Brands', 'Red Bull · GoPro · Samsung · G-Shock · Allianz · Heineken · SFR'],
        ['Media', 'Warner Bros Discovery · France TV · Olympic Channel'],
        ['Sport bodies', 'UCI · FIS · FIG · World Skate · IOC'],
        ['Destinations', 'Tignes · Savoie Mont Blanc · Montpellier'],
      ],
    },
    together: {
      title: 'How we work together',
      intro: 'Four ways in, from a focused diagnostic to senior counsel over time.',
      items: [
        {
          title: 'Growth & audience sprint',
          text: 'A focused 2 to 4 week diagnostic to identify growth opportunities, audience priorities and the roadmap to act on them.',
        },
        {
          title: 'Growth & experience strategy',
          text: 'A deeper mandate to define positioning, audience strategy, experience, content, partnerships and the roadmap to acceleration.',
        },
        {
          title: 'Growth partner',
          text: 'Embedded alongside the team to provide senior direction, structure priorities and drive audience, brand and business priorities from strategy through execution.',
        },
        {
          title: 'Strategic advisor',
          text: 'Ongoing senior counsel at leadership level, bringing perspective, challenge and support on growth priorities, positioning and key decisions.',
        },
      ],
    },
    founder: {
      role: 'Founder · Strategy & Growth',
      imageAlt: 'Portrait of Joseph Villeflayoux',
      bio: [
        'Twenty years helping sport, outdoor and culture-driven organisations grow audiences, strengthen positioning and create value.',
        'VP Marketing at Hurricane Group (FISE), Head of Communications at the Freeride World Tour (FIS), IOC consultant on Tokyo 2020 and Paris 2024, with 500+ events and activations led.',
      ],
      fieldLabel: 'Field',
      field: 'Sport · Outdoor · Culture · Events · Destinations',
      basedLabel: 'Based',
      based: 'South of France · N 43.3° · 03.6E · working internationally',
      recognition: 'Recognition',
      recognitionItems: [
        ['Choiseul', '2021–2024', 'Top 100 French sport business leaders under 40.'],
        ['Sporsora', '2021', 'Winner in 2021 for the E-FISE phygital event.'],
        ['Sportel Awards', '2015–2016', 'Audience Award winner as campaign producer.'],
        ['Education', 'MBA', 'Executive MBA · Montpellier Business School'],
      ],
    },
    axisTwo: 'Find your line',
    contact: {
      titleBefore: 'Find your next ',
      titleAccent: 'line',
      titleAfter: ' of growth.',
      lead: 'Let’s talk.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      sending: 'Sending…',
      success: 'Message sent. Talk soon.',
      error: 'Something went wrong. Please try again later.',
      location: 'Based in the South of France. Working internationally.',
      responseTime: 'We usually reply within two business days.',
      privacyBefore: 'Your details are only used to reply. Read our',
      privacyLink: 'privacy policy',
    },
    footerTagline: 'STRATEGY · AUDIENCE · EXPERIENCE · BUSINESS',
    privacy: 'Privacy policy',
    legal: 'Legal notice',
    consent: {
      text: 'OFF AXIS uses audience measurement only with your consent.',
      accept: 'Accept',
      reject: 'Decline',
      learn: 'Learn more',
    },
  },
  fr: {
    lang: 'fr' as const,
    homePath: '/fr/',
    alternatePath: '/',
    legalPath: '/fr/mentions-legales/',
    privacyPath: '/fr/confidentialite/',
    title: 'OFF AXIS | Stratégie, Audience, Expérience & Business',
    description:
      'OFF AXIS aide les acteurs du sport, de l’outdoor et de la culture à développer leurs audiences, renforcer leur positionnement et créer de la valeur.',
    navLabel: 'Index',
    talk: 'Parlons-en',
    sections: [
      ['approach', 'Lignes de croissance'],
      ['levers', 'Leviers de croissance'],
      ['fields', 'Terrains de jeu'],
      ['collaborations', 'Collaborations'],
      ['together', 'Travailler ensemble'],
      ['founder', 'Fondateur'],
      ['contact', 'Contact'],
    ],
    hero: {
      kicker: ['Stratégie', 'Audience', 'Expérience', 'Business'],
      line1: 'Find new',
      line2a: 'lines',
      line2b: ' of',
      line3: 'growth.',
      lead: 'Aux côtés de celles et ceux qui façonnent les projets, les audiences et les modèles du sport, de l’outdoor et de la culture.',
      imageAlt: 'Vue aérienne d’un surfeur sur une vague turquoise',
      imageTag: 'N 43.3° · SUR LE TERRAIN',
      scroll: 'Défiler · trouver la ligne',
    },
    axisOne: 'Changer d’angle',
    growth: {
      kicker: 'Lignes de croissance',
      statementBefore:
        'OFF AXIS aide les événements, destinations et organisations à renforcer leur pertinence, développer leurs audiences et transformer l’attention en ',
      statementAccent: 'valeur concrète',
      statementAfter: ' : participation, engagement, image, partenariats et revenus.',
      lead: 'Une approche façonnée par vingt années de terrain, aux côtés d’événements, de marques, de fédérations et de destinations, avec une même exigence : comprendre ce qui peut réellement faire avancer un projet.',
    },
    levers: {
      title: 'Leviers de croissance',
      intro: 'Quatre domaines travaillés comme une seule ligne : de la lecture des signaux à l’exécution sur le terrain.',
      items: [
        {
          title: 'Audiences, insights & positionnement',
          text: 'Lire les signaux, comprendre les comportements, les perceptions et les attentes. Identifier les audiences à fort potentiel, les espaces inexploités et le positionnement capable de les ouvrir.',
        },
        {
          title: 'Marque, récit & expérience',
          text: 'Transformer la stratégie en territoires de marque, récits, territoires de contenus, formats et expériences capables de créer de la préférence et de l’engagement.',
        },
        {
          title: 'Partenariats, revenus & valeur',
          text: 'Concevoir des modèles créateurs de valeur : sponsoring, partenariats de marque, licensing, billetterie, programmes fans, first-party data et nouveaux revenus.',
        },
        {
          title: 'Équipes, activation & exécution',
          text: 'Passer de la stratégie à l’activation. Mobiliser les bons talents, aligner les équipes et les partenaires, cadrer les budgets et les timings, puis orchestrer l’exécution.',
        },
      ],
    },
    band: {
      textBefore: 'Transformer l’attention en ',
      accent: 'valeur concrète',
      imageAlt: 'Foule d’un festival levant les mains dans la lumière',
    },
    fields: {
      title: 'Nos terrains de jeu',
      intro: 'Des organisations dont la croissance dépend des audiences, de l’expérience et de la pertinence.',
      items: [
        {
          title: 'Événements & détenteurs de droits',
          text: 'Développer l’audience et la pertinence, puis transformer l’attention en participation, fidélité et valeur durable.',
        },
        {
          title: 'Destinations & stations',
          text: 'Attirer de nouveaux publics, renforcer la désirabilité et créer des expériences qui donnent envie de venir, puis de revenir.',
        },
        {
          title: 'Marques sport, outdoor & lifestyle',
          text: 'Créer des connexions crédibles avec les cultures et les communautés qui comptent, et les transformer en valeur de marque et business.',
        },
        {
          title: 'Ligues & fédérations',
          text: 'Développer la pratique, moderniser l’expérience fan et maintenir la pertinence du sport auprès des nouvelles générations.',
        },
      ],
    },
    collaborations: {
      title: 'Collaborations',
      intro: 'Vingt ans dans le sport, l’outdoor, les médias, les marques et les destinations.',
      stat: 'Événements & activations depuis 2005',
      rows: [
        ['Marques', 'Red Bull · GoPro · Samsung · G-Shock · Allianz · Heineken · SFR'],
        ['Médias', 'Warner Bros Discovery · France TV · Olympic Channel'],
        ['Instances', 'UCI · FIS · FIG · World Skate · CIO'],
        ['Destinations', 'Tignes · Savoie Mont Blanc · Montpellier'],
      ],
    },
    together: {
      title: 'Comment travailler ensemble',
      intro: 'Quatre portes d’entrée, du diagnostic concentré au conseil senior dans la durée.',
      items: [
        {
          title: 'Sprint Growth & Audience',
          text: 'Un diagnostic concentré sur 2 à 4 semaines pour identifier les opportunités de croissance, les priorités d’audience et la feuille de route pour passer à l’action.',
        },
        {
          title: 'Stratégie Growth & Expérience',
          text: 'Une mission plus approfondie pour poser le positionnement, la stratégie audience, l’expérience, les contenus, les partenariats et le plan d’accélération.',
        },
        {
          title: 'Growth Partner',
          text: 'Un accompagnement embarqué aux côtés des équipes pour apporter une direction senior, structurer les priorités et faire avancer les enjeux d’audience, de marque et de business, de la stratégie à l’exécution.',
        },
        {
          title: 'Conseil stratégique',
          text: 'Un regard senior dans la durée, au niveau direction : recul, challenge et accompagnement sur les priorités de croissance, le positionnement et les décisions clés.',
        },
      ],
    },
    founder: {
      role: 'Fondateur · Stratégie & Croissance',
      imageAlt: 'Portrait de Joseph Villeflayoux',
      bio: [
        '20 ans à aider des acteurs du sport, de l’outdoor et de la culture à développer leurs audiences, renforcer leur positionnement et créer de la valeur.',
        'VP Marketing chez Hurricane Group (FISE), Head of Communications du Freeride World Tour (FIS), consultant du CIO sur Tokyo 2020 et Paris 2024, plus de 500 événements et activations menés.',
      ],
      fieldLabel: 'Domaine',
      field: 'Sport · Outdoor · Culture · Événements · Destinations',
      basedLabel: 'Basé',
      based: 'Sud de la France · N 43.3° · 03.6E · au service de l’international',
      recognition: 'Distinctions',
      recognitionItems: [
        ['Choiseul', '2021–2024', 'Top 100 des dirigeants du sport français de moins de 40 ans.'],
        ['Sporsora', '2021', 'Lauréat 2021 pour l’événement phygital E-FISE.'],
        ['Sportel Awards', '2015–2016', 'Lauréat du Prix du public en tant que producteur de campagne.'],
        ['Formation', 'MBA', 'Executive MBA · Montpellier Business School'],
      ],
    },
    axisTwo: 'Trouvez votre ligne',
    contact: {
      titleBefore: 'Trouvez votre prochaine ',
      titleAccent: 'ligne',
      titleAfter: ' de croissance.',
      lead: 'Parlons-en.',
      name: 'Nom',
      email: 'Email',
      message: 'Message',
      send: 'Envoyer',
      sending: 'Envoi…',
      success: 'Message envoyé. À très vite.',
      error: 'Une erreur est survenue. Merci de réessayer plus tard.',
      location: 'Basé dans le Sud de la France. Missions en France et à l’international.',
      responseTime: 'Nous répondons généralement sous deux jours ouvrés.',
      privacyBefore: 'Vos coordonnées sont uniquement utilisées pour vous répondre. Consultez notre',
      privacyLink: 'politique de confidentialité',
    },
    footerTagline: 'STRATÉGIE · AUDIENCE · EXPÉRIENCE · BUSINESS',
    privacy: 'Politique de confidentialité',
    legal: 'Mentions légales',
    consent: {
      text: 'OFF AXIS utilise la mesure d’audience uniquement avec votre accord.',
      accept: 'Accepter',
      reject: 'Refuser',
      learn: 'En savoir plus',
    },
  },
} as const;

export type SiteContent = (typeof siteContent)[Lang];
