import { 
  people01, 
  people02, 
  people03, 
  facebook, 
  instagram, 
  linkedin, 
  twitter, 
  airbnb, 
  binance, 
  coinbase, 
  dropbox, 
  send, 
  shield, 
  star
} from "../assets";

import { images } from './images';

export const navLinks = [
  {
    id: "home",
    title: "Accueil",
  },
  {
    id: "features",
    title: "Stratégie",
  },
  {
    id: "product",
    title: "Système",
  }
];

export const features = [
  {
    id: "feature-1",
    icon: images.icons.techIcon,
    title: "Technologie de Pointe",
    content:
      "Exécution ultra-rapide en microsecondes, infrastructure optimisée pour le high-frequency trading et analyse temps réel des données de marché",
  },
  {
    id: "feature-2",
    icon: images.icons.riskIcon,
    title: "Gestion du Risque Avancée",
    content:
      "Système propriétaire de contrôle des positions avec stop-loss dynamiques et allocation optimale du capital par actif",
  },
  {
    id: "feature-3",
    icon: images.icons.trendingIcon,
    title: "Market Making Intelligent",
    content:
      "Stratégie sophistiquée de market making adaptative qui s'ajuste en temps réel aux conditions de liquidité du marché",
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Performance Annuelle",
    value: "60%+",
  },
  {
    id: "stats-2",
    title: "Actifs Surveillés",
    value: "1000+",
  },
  {
    id: "stats-3",
    title: "Ordres/Seconde",
    value: "500+",
  },
];

export const footerLinks = [
  {
    title: "Notre Expertise",
    links: [
      {
        name: "Stratégie Quantitative",
        link: "#",
      },
      {
        name: "Market Making",
        link: "#",
      },
      {
        name: "Gestion des Risques",
        link: "#",
      },
      {
        name: "Technologies",
        link: "#",
      }
    ],
  },
  {
    title: "Performances",
    links: [
      {
        name: "Track Record",
        link: "#",
      },
      {
        name: "Statistiques",
        link: "#",
      },
      {
        name: "Rapports Mensuels",
        link: "#",
      }
    ],
  },
  {
    title: "Contact",
    links: [
      {
        name: "Investisseurs",
        link: "#",
      },
      {
        name: "Partenaires",
        link: "#",
      },
      {
        name: "Support Technique",
        link: "#",
      }
    ],
  }
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  }
];