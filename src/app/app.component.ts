import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Lorenzo GEANO - CV';

  // Informations personnelles
  personalInfo = {
    name: 'Lorenzo GEANO',
    title: 'Ingénieur informatique',
    age: 25,
    location: 'Marseille, France',
    // phone: '06 87 60 12 73',
    email: 'lorenzogeano.pro@gmail.com',
    photo: 'assets/photo.jpg'
  };

  // Formation
  education = [
    {
      degree: "Ecole d'ingénieur",
      school: 'Polytech Luminy',
      location: 'Marseille',
      period: 'Septembre 2021 - Septembre 2024',
      icon: '🎓'
    },
    {
      degree: 'DUT GEII',
      school: 'IUT St Jérôme',
      location: 'Marseille, 13013',
      period: 'Septembre 2018 - Septembre 2020',
      icon: '📚'
    }
  ];

  // Compétences
  skills = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Angular', 'Vue', 'Quasar', 'Bootstrap', 'JQuery'],
    backend: ['Django', 'Node.js (Express)', 'PHP', 'Spring'],
    database: ['MySQL', 'MongoDB', 'SQL Server'],
    software: ['C', 'C++', 'Java'],
    mobile: ['Flutter', 'React Native']
  };

  // Expériences
  experiences = [
    {
      title: 'Ingénieur conception logiciel',
      company: 'SCALIAN',
      period: 'Octobre 2024 - Présent',
      description: "Conception et développement de solutions logicielles pour des projets clients dans divers secteurs industriels. Participation à l'analyse des besoins, à la conception d'architectures logicielles et à l'implémentation de solutions techniques robustes. Travail en équipe agile avec méthodologies Scrum.",
      technologies: 'Stack technique variable selon les projets clients',
      icon: '💼'
    },
    {
      title: 'Stage ingénieur développement logiciels',
      company: 'Airbus Hélicoptères',
      period: 'Février 2024 - Août 2024',
      description: "Développement d'une application web full-stack pour la visualisation et l'analyse des paramètres de vol mesurés pour chaque hélicoptère. Mise en place d'une interface intuitive permettant aux ingénieurs de suivre en temps réel les performances des appareils. Intégration de dashboards interactifs avec graphiques dynamiques pour faciliter la prise de décision.",
      technologies: 'Vue.js, Node.js, Quasar Framework, SQL Server',
      icon: '🚁'
    },
    {
      title: 'Stage assistant ingénieur',
      company: 'CNRS (Centre National de la Recherche Scientifique)',
      period: 'Juin 2023 - Août 2023',
      description: "Développement d'une plateforme web dédiée à la visualisation de l'évolution historique des bâtiments patrimoniaux français. Création d'interfaces interactives permettant aux chercheurs de consulter et comparer les transformations architecturales au fil du temps. Intégration de données historiques et de cartographies dynamiques.",
      technologies: 'JavaScript, PHP, jQuery, HTML/CSS',
      icon: '🏛️'
    },
    {
      title: "Application de Partage de Recettes",
      company: 'Projet personnel',
      period: '2024',
      description: "Plateforme complète de partage de recettes de cuisine avec fonctionnalités avancées : système de recommandations personnalisées basé sur l'IA (analyse des notes et favoris), recherche intelligente de recettes par critères (ingrédients, régime alimentaire, pays d'origine) utilisant l'API Gemini AI, gestion des utilisateurs avec authentification JWT, système de notation et favoris. Interface moderne et responsive.",
      technologies: 'Angular, Spring Boot, MySQL, JWT Security, Gemini AI API',
      link: 'https://lorenzogeano.com',
      icon: '🍳'
    },
    {
      title: 'Calculateur Financier',
      company: 'Projet personnel',
      period: '2024',
      description: "Application web de gestion financière personnelle offrant divers outils de calcul : simulateur de prêt immobilier avec tableau d'amortissement, calculateur d'épargne et d'investissement, analyse de budget mensuel, simulateur de crédit à la consommation. Interface intuitive avec graphiques et visualisations pour faciliter la planification financière.",
      technologies: 'Technologies web full-stack modernes',
      link: 'https://calculateurfinance.fr',
      icon: '💰'
    },
    {
      title: 'Equipier Polyvalent',
      company: 'McDonalds',
      period: 'Février 2022 - Août 2022',
      description: 'Service client en restauration rapide. Gestion des commandes, préparation, travail en équipe dans un environnement dynamique.',
      technologies: '',
      icon: '🍔'
    }
  ];

  // Langues
  languages = [
    { name: 'Anglais', level: 'C1', detail: 'TOEIC: 905/990' },
    { name: 'Espagnol', level: 'A2', detail: '' },
    { name: 'Italien', level: 'A2', detail: '' }
  ];

  // Centres d'intérêt
  interests = [
    { name: 'Sport', icon: '⚽' },
    { name: 'Nutrition', icon: '🥗' },
    { name: 'Cuisine', icon: '👨‍🍳' },
    { name: 'Potager nourricier', icon: '🌱' }
  ];

  // Qualités
  qualities = ['Patience', 'Calme', 'Rationnel'];

  // Méthode pour ouvrir un lien
  openLink(url: string) {
    window.open(url, '_blank');
  }
}
