import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CvEntry {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string;
  icon: string;
  link?: string;
}

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
    frontend: ['JavaScript', 'TypeScript', 'React', 'Angular', 'Vue', 'Quasar', 'Astro', 'Preact', 'Tailwind CSS', 'AppScript', 'GoogleScript', 'Electron'],
    backend: ['Django', 'Node.js (Express)', 'PHP', 'Spring'],
    database: ['MySQL', 'MongoDB', 'SQL Server'],
    software: ['Java'],
  };

  // Expériences
  experiences: CvEntry[] = [
    {
      title: 'Ingénieur conception logiciel',
      company: 'SCALIAN',
      period: 'Octobre 2024 - Présent',
      description: "Conception et développement de solutions logicielles pour les projets Airbus Hélicoptères. Participation à l'analyse des besoins, à la conception d'architectures logicielles et à l'implémentation de solutions techniques robustes pour le secteur aéronautique. Travail en équipe agile avec méthodologies Scrum.",
      technologies: 'Stack technique adaptée aux projets Airbus Hélicoptères',
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
      title: 'Equipier Polyvalent',
      company: 'McDonalds',
      period: 'Février 2022 - Août 2022',
      description: 'Service client en restauration rapide. Gestion des commandes, préparation, travail en équipe dans un environnement dynamique.',
      technologies: '',
      icon: '🍔'
    }
  ];

  // Projets personnels
  projects: CvEntry[] = [
    {
      title: 'SimulateurFinance',
      company: 'Projet personnel',
      period: 'Novembre 2024 - Présent',
      description: "Site de plus de 200 simulateurs et calculateurs gratuits (prêt immobilier, impôts, salaire brut/net, aides sociales, frais de notaire, auto, santé...) fondés sur les barèmes officiels. Application Angular rendue côté serveur (SSR) avec plus de 1 000 pages prérendues pour le référencement naturel, tests unitaires lancés à chaque build, audits de fiabilité des formules et des taux, export des résultats. Plusieurs centaines de clics par jour depuis Google (Search Console, septembre 2026).",
      technologies: 'Angular 18 (SSR, prérendu), TypeScript, PrimeNG, Chart.js, Karma/Jasmine, Cloudflare Workers, Google Search Console',
      link: 'https://simulateurfinance.fr',
      icon: '💰'
    },
    {
      title: 'Mnemoz - Quiz de culture générale',
      company: 'Projet personnel',
      period: 'Septembre 2026 - Présent',
      description: "Plateforme de QCM de culture générale en quatre langues (français, anglais, italien, espagnol) : plus de 1 000 pages de quiz organisées par thèmes, scores, historique et classements, comptes avec authentification JWT, création manuelle ou génération de quiz par IA (Gemini) relue par l'auteur avant publication, filtre anti-injures côté serveur. Pages publiques rendues côté serveur avec SEO complet (hreflang, JSON-LD, sitemap généré par l'API).",
      technologies: 'Angular 22 (SSR), Spring Boot 3.5, MySQL, JWT Security, Gemini AI API',
      icon: '🧠'
    },
    {
      title: 'Calcul Mental',
      company: 'Projet personnel',
      period: 'Octobre 2026 - Présent',
      description: "Site gratuit d'entraînement au calcul mental pour tous les âges : jeu chronométré (additions, soustractions, multiplications, divisions sur six niveaux), mode équations jusqu'à la Terminale (20 familles), test de niveau, 16 fiches d'astuces, plan de progression et fiches d'exercices imprimables avec corrigé. Pages 100 % statiques, thème clair/sombre piloté par variables CSS, progression gardée dans le navigateur sans inscription. Moteur de génération couvert par plus de 500 tests unitaires et par des tests de bout en bout. En cours de finalisation avant mise en ligne.",
      technologies: 'Astro, Preact, TypeScript, Tailwind CSS, Vitest, Playwright, Cloudflare',
      icon: '🧮'
    },
    {
      title: "Application de Partage de Recettes",
      company: 'Projet personnel',
      period: '2024',
      description: "Plateforme complète de partage de recettes de cuisine avec fonctionnalités avancées : système de recommandations personnalisées basé sur l'IA (analyse des notes et favoris), recherche intelligente de recettes par critères (ingrédients, régime alimentaire, pays d'origine) utilisant l'API Gemini AI, gestion des utilisateurs avec authentification JWT, système de notation et favoris. Interface moderne et responsive.",
      technologies: 'Angular, Spring Boot, MySQL, JWT Security, Gemini AI API',
      link: 'https://lorenzogeano.com',
      icon: '🍳'
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
    { name: 'Potager nourricier', icon: '🌱' },
    { name: 'Lecture', icon: '📚' }
  ];

  // Qualités
  qualities = ['Patience', 'Calme', 'Rationnel'];

  // Méthode pour ouvrir un lien
  openLink(url: string) {
    window.open(url, '_blank');
  }
}
