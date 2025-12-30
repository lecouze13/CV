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
      title: 'Stage ingénieur développement logiciels',
      company: 'Airbus Hélicoptères',
      period: 'Février 2024 - Août 2024',
      description: "Développement d'une application web permettant de voir l'ensemble des paramètres mesurés pour chaque hélicoptère.",
      technologies: 'Vue, Node.js, Quasar et SQL Server',
      icon: '🚁'
    },
    {
      title: 'Stage assistant ingénieur',
      company: 'CNRS',
      period: 'Juin 2023 - Août 2023',
      description: "Développement d'une application web permettant de voir l'évolution des bâtiments historiques de France.",
      technologies: 'JavaScript, PHP et JQuery',
      icon: '🏛️'
    },
    {
      title: "Création d'une application web de cuisine",
      company: 'Projet personnel',
      period: '2024',
      description: 'Application complète de partage de recettes avec recommandations IA et recherche intelligente.',
      technologies: 'Angular, Spring Boot, MySQL, Gemini AI',
      link: 'https://lorenzogeano.com',
      icon: '🍳'
    },
    {
      title: 'Calculateur Finance',
      company: 'Projet personnel',
      period: '2024',
      description: 'Application web de calculs financiers et de gestion budgétaire.',
      technologies: 'Technologies web modernes',
      link: 'https://calculateurfinance.fr',
      icon: '💰'
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
