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
    talk: 'DROP IN.',
    talkHint: 'Get in touch',
    sections: [
      ['approach', 'Lines of growth'],
      ['levers', 'Growth levers'],
      ['fields', 'Playing fields'],
      ['together', 'Work together'],
      ['founder', 'Founder'],
      ['contact', 'Contact'],
    ],
    hero: {
      kicker: ['Strategy', 'Audience', 'Experience', 'Growth'],
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
      lead: [
        'OFF AXIS structures the path: strategy, positioning, audience insights, roadmap, budgets, content, partnerships and execution.',
        'Senior leadership, close to the teams, aligning stakeholders, bringing in the right expertise and moving projects through to delivery, including partnership structuring and negotiation.',
      ],
    },
    levers: {
      title: 'Levers',
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
          text: 'Design and structure models that create value: sponsorship, brand partnerships, licensing, ticketing, fan programmes, first-party data and new revenue streams. Build the proposition, connect the right stakeholders and support negotiation.',
        },
        {
          title: 'Teams, activation & delivery',
          text: 'Move from strategy to activation. Bring in the right talent, align teams, partners and stakeholders, frame budgets and timing, then orchestrate delivery.',
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
    experience: {
      intro: 'A selection of brands, media, sports bodies and destinations Joseph collaborated with through his previous roles.',
      stat: 'Events & activations led since 2005',
      rows: [
        ['Brands', 'Red Bull · GoPro · Samsung · G-Shock · Allianz · Heineken · SFR'],
        ['Media', 'Warner Bros Discovery · France TV · Olympic Channel'],
        ['Sport bodies', 'UCI · FIS · FIG · World Skate · IOC'],
        ['Destinations', 'Tignes · Savoie Mont Blanc · Montpellier · Shanghai'],
      ],
    },
    together: {
      title: 'How we work together',
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
          text: 'Embedded alongside the team to provide senior direction, structure priorities, align stakeholders and drive audience, brand and business priorities from strategy through execution.',
        },
        {
          title: 'Strategic advisor',
          text: 'Ongoing senior counsel at leadership level, bringing perspective, challenge and support on growth priorities, positioning and key decisions.',
        },
      ],
    },
    founder: {
      imageAlt: 'Portrait of Joseph Villeflayoux',
      bio: [
        'Twenty years helping sport, outdoor and culture-driven organisations grow audiences, strengthen positioning and create value.',
        'VP Marketing at Hurricane Group (FISE), Head of Communications at the Freeride World Tour (FIS), IOC consultant on Tokyo 2020 and Paris 2024, with 500+ events and activations led.',
      ],
      fieldLabel: 'Field',
      field: 'Sport · Outdoor · Culture · Events · Destinations',
      recognition: 'Recognition',
      recognitionItems: [
        ['Choiseul', '2021–2024', 'Top 100 French sport business leaders under 40.'],
        ['Sporsora', '2021', 'Winner in 2021 for the E-FISE phygital event.'],
        ['Sportel Awards', '2015–2016', 'Audience Award winner as campaign producer.'],
        ['Education', 'MBA', 'Executive MBA · Montpellier Business School'],
      ],
    },
    selectedWork: {
      title: 'Selected work',
      items: [
        {
          name: 'FISE / Hurricane Group',
          role: 'VP Marketing',
          text: 'Led strategy, audience growth and commercial development for the world’s biggest action sports event dedicated to youth: positioning, sponsorship, licensing, media rights and ticketing.',
          metrics: ['€15M+ in deals', 'Community grown 0 → 1.5M', '300,000+ on site', 'Team scaled 6 → 110'],
        },
        {
          name: 'Freeride World Tour (FIS)',
          role: 'Head of Communications',
          text: 'Brand direction, audience, content and media strategy across the Tour’s global ecosystem, alongside its partners and rights holders.',
          metrics: ['500M+ global reach (social, digital & broadcast)', '1.8M-fan ecosystem'],
        },
      ],
    },
    axisTwo: 'Find your line',
    contact: {
      titleBefore: 'Find your next ',
      titleAccent: 'line',
      titleAfter: ' of growth.',
      lead: 'DROP IN.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      sending: 'Sending…',
      success: 'Message sent. Talk soon.',
      error: 'Something went wrong. Please try again later.',
      responseTime: 'We usually reply within two business days.',
      privacyBefore: 'Your details are only used to reply. Read our',
      privacyLink: 'privacy policy',
    },
    footerTagline: 'STRATEGY · AUDIENCE · EXPERIENCE · GROWTH',
    privacy: 'Privacy policy',
    legal: 'Legal notice',
    consent: {
      text: 'OFF AXIS uses audience measurement only with your consent.',
      accept: 'Accept',
      reject: 'Decline',
      learn: 'Read our privacy policy',
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
    talk: 'DROP IN.',
    talkHint: 'Contact',
    sections: [
      ['approach', 'Notre approche'],
      ['levers', 'Leviers de croissance'],
      ['fields', 'Terrains de jeu'],
      ['together', 'Travailler ensemble'],
      ['founder', 'Fondateur'],
      ['contact', 'Contact'],
    ],
    hero: {
      kicker: ['Stratégie', 'Audience', 'Expérience', 'Growth'],
      line1: 'Find new',
      line2a: 'lines',
      line2b: ' of',
      line3: 'growth.',
      lead: 'Aux côtés de ceux qui font grandir les projets, les audiences et les modèles qui façonnent le sport, l’outdoor et la culture.',
      imageAlt: 'Vue aérienne d’un surfeur sur une vague turquoise',
      imageTag: 'N 43.3° · 03.6E',
      scroll: 'Défiler · trouver la ligne',
    },
    axisOne: 'Changer d’angle',
    growth: {
      kicker: 'Notre approche',
      statementBefore:
        'OFF AXIS aide les événements, destinations et organisations à renforcer leur pertinence, développer leurs audiences et transformer l’attention en ',
      statementAccent: 'valeur concrète',
      statementAfter: ' : participation, engagement, image, partenariats et revenus.',
      lead: [
        'OFF AXIS structure le chemin : stratégie, positionnement, insights audience, feuille de route, budgets, contenus, partenariats et exécution.',
        'Un pilotage senior, au plus près des équipes, pour aligner les parties prenantes, mobiliser les bonnes expertises et faire avancer le projet jusqu’au déploiement, y compris dans la structuration et la négociation des partenariats.',
      ],
    },
    levers: {
      title: 'Leviers de croissance',
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
          text: 'Concevoir et structurer les modèles qui créent de la valeur : sponsoring, brand partnerships, licensing, ticketing, fan programmes, first-party data et nouvelles sources de revenus. Construire les propositions, connecter les bonnes parties prenantes et accompagner la négociation.',
        },
        {
          title: 'Équipes, activation & déploiement',
          text: 'Passer de la stratégie à l’activation. Mobiliser les bons talents, aligner équipes, partenaires et parties prenantes, cadrer budgets et timing, puis orchestrer le déploiement.',
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
    experience: {
      intro: 'Une sélection de marques, médias, instances sportives et destinations avec lesquels Joseph a collaboré dans le cadre de ses précédentes fonctions.',
      stat: 'Événements & activations menés depuis 2005',
      rows: [
        ['Marques', 'Red Bull · GoPro · Samsung · G-Shock · Allianz · Heineken · SFR'],
        ['Médias', 'Warner Bros Discovery · France TV · Olympic Channel'],
        ['Instances', 'UCI · FIS · FIG · World Skate · CIO'],
        ['Destinations', 'Tignes · Savoie Mont Blanc · Montpellier · Shanghai'],
      ],
    },
    together: {
      title: 'Comment travailler ensemble',
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
          text: 'Un accompagnement embarqué aux côtés des équipes pour apporter une direction senior, structurer les priorités, aligner les parties prenantes et faire avancer les enjeux d’audience, de marque et de business, de la stratégie à l’exécution.',
        },
        {
          title: 'Conseil stratégique',
          text: 'Un regard senior dans la durée, au niveau direction : recul, challenge et accompagnement sur les priorités de croissance, le positionnement et les décisions clés.',
        },
      ],
    },
    founder: {
      imageAlt: 'Portrait de Joseph Villeflayoux',
      bio: [
        '20 ans à aider des acteurs du sport, de l’outdoor et de la culture à développer leurs audiences, renforcer leur positionnement et créer de la valeur.',
        'VP Marketing chez Hurricane Group (FISE), Head of Communications du Freeride World Tour (FIS), consultant du CIO sur Tokyo 2020 et Paris 2024, plus de 500 événements et activations menés.',
      ],
      fieldLabel: 'Domaine',
      field: 'Sport · Outdoor · Culture · Événements · Destinations',
      recognition: 'Distinctions',
      recognitionItems: [
        ['Choiseul', '2021–2024', 'Top 100 des dirigeants du sport français de moins de 40 ans.'],
        ['Sporsora', '2021', 'Lauréat 2021 pour l’événement phygital E-FISE.'],
        ['Sportel Awards', '2015–2016', 'Lauréat du Prix du public en tant que producteur de campagne.'],
        ['Education', 'MBA', 'Executive MBA · Montpellier Business School'],
      ],
    },
    selectedWork: {
      title: 'Références clés',
      items: [
        {
          name: 'FISE / Hurricane Group',
          role: 'VP Marketing',
          text: 'Pilotage de la stratégie, du développement des audiences et du développement commercial du plus grand événement mondial de sports d’action dédié aux jeunes : positionnement, sponsoring, licensing, droits médias et billetterie.',
          metrics: ['15 M€+ de contrats', 'Communauté développée de 0 → 1,5 M', '300 000+ visiteurs sur site', 'Équipe passée de 6 → 110'],
        },
        {
          name: 'Freeride World Tour (FIS)',
          role: 'Head of Communications',
          text: 'Direction de marque et stratégie audience, contenus et médias à l’échelle de l’écosystème international du Tour, aux côtés de ses partenaires et détenteurs de droits.',
          metrics: ['500 M+ de portée mondiale (social, digital et broadcast)', 'Écosystème de 1,8 M de fans'],
        },
      ],
    },
    axisTwo: 'Trouvez votre ligne',
    contact: {
      titleBefore: 'Trouvez votre prochaine ',
      titleAccent: 'ligne',
      titleAfter: ' de croissance.',
      lead: 'DROP IN.',
      name: 'Nom',
      email: 'Email',
      message: 'Message',
      send: 'Envoyer',
      sending: 'Envoi…',
      success: 'Message envoyé. À très vite.',
      error: 'Une erreur est survenue. Merci de réessayer plus tard.',
      responseTime: 'Nous répondons généralement sous deux jours ouvrés.',
      privacyBefore: 'Vos coordonnées sont uniquement utilisées pour vous répondre. Consultez notre',
      privacyLink: 'politique de confidentialité',
    },
    footerTagline: 'STRATÉGIE · AUDIENCE · EXPÉRIENCE · GROWTH',
    privacy: 'Politique de confidentialité',
    legal: 'Mentions légales',
    consent: {
      text: 'OFF AXIS utilise la mesure d’audience uniquement avec votre accord.',
      accept: 'Accepter',
      reject: 'Refuser',
      learn: 'Lire notre politique de confidentialité',
    },
  },
} as const;

export type SiteContent = (typeof siteContent)[Lang];
