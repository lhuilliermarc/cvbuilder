import { Education, Experience, Hobby, Language, PersonalDetails, Skill } from '@/type';

export const personalDetailsPreset: PersonalDetails = {
    fullName: 'Kevin Stackoverflow',
    email: 'kevin.stackoverflow@fullstack.dev',
    phone: '+33 6 99 88 77 66',
    address: '404 rue Not Found, 75000 Paris, France',
    photoUrl: '/profile.jpg',
    postSeeking:'Développeur Full Stack (survivant du legacy)',
    description:'Développeur full stack passionné par les architectures propres, les commits clairs et les réunions qui auraient pu être un email. Je transforme le café en fonctionnalités et les bugs en "cas particuliers". À l’aise du pixel au serveur, je maîtrise aussi l’art ancestral du "ça fonctionnait hier".'
};

export const experiencesPreset: Experience[] = [
    {
        id: 'uuid-1',
        jobTitle: 'Développeur Full Stack',
        companyName: 'StartupDisruptive.io',
        startDate: '2022-01-01',
        endDate: '2024-01-01',
        description: 'Développement d’applications en React, Node.js et base de données SQL. Refactorisation d’un projet legacy écrit "rapidement" en 2016. Mise en place de bonnes pratiques, CI/CD et suppression de 12 console.log stratégiquement oubliés.'
    },
    {
        id: 'uuid-2',
        jobTitle: 'Développeur Back-End',
        companyName: 'API & Compagnie',
        startDate: '2020-06-01',
        endDate: '2022-01-01',
        description: 'Création d’APIs REST robustes. Gestion de bases de données et optimisation de requêtes qui prenaient le temps d’une pause café. Responsable officiel des messages d’erreur "500 Internal Server Error".'
    }
];

export const educationsPreset: Education[] = [
    {
        id: 'uuid-3',
        degree: 'Master en Informatique',
        school: 'Université des Bugs Persistants',
        startDate: '2015-09-01',
        endDate: '2018-06-01',
        description: 'Spécialisation en développement web, algorithmes et décryptage de messages d’erreur incompréhensibles. Mémoire soutenu sans StackOverflow (exploit validé).'
    }
];

export const skillsPreset: Skill[] = [
    { id: 'uuid-4', name: 'React.js (oui, avec hooks propres)' },
    { id: 'uuid-5', name: 'Node.js (promises > callbacks, toujours)' },
    { id: 'uuid-6', name: 'TypeScript (parce que le futur moi mérite du respect)' },
    { id: 'uuid-7', name: 'Docker (ça marche chez moi, donc partout)' },
    { id: 'uuid-8', name: 'SQL & optimisation (SELECT * est un crime)' }
];

export const languagesPreset: Language[] = [
    { id: 'uuid-9', language: 'JavaScript', proficiency: 'Natif' },
    { id: 'uuid-10', language: 'TypeScript', proficiency: 'Fluide et typé' },
    { id: 'uuid-11', language: 'Anglais', proficiency: 'Courant (surtout pour lire les erreurs)' },
    { id: 'uuid-12', language: 'Français', proficiency: 'Natif (avec ironie intégrée)' }
];

export const hobbiesPreset: Hobby[] = [
    { id: 'uuid-13', name: 'Refactoriser du code qui fonctionne "à peu près"' },
    { id: 'uuid-14', name: 'Lire des threads techniques à 2h du matin' },
    { id: 'uuid-15', name: 'Automatiser des tâches que j’aurais pu faire en 5 minutes' }
];