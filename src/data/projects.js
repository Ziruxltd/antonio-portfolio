// `title` and `description` are either a plain string (same in every language)
// or an object keyed by locale code (see src/i18n/index.js).
export const projects = [
  {
    title: {
      en: 'Who pays your salary?',
      es: '¿Quién paga tu nómina?',
      de: 'Wer zahlt dein Gehalt?',
    },
    description: {
      en: 'An interactive estimate of how many people in Spain live on public income (public employment, pensions, unemployment benefits…) versus private income, with adjustable assumptions. Built with the help of Claude Code.',
      es: 'Una estimación interactiva de cuánta gente en España vive de un ingreso público (empleo público, pensiones, paro…) frente a un ingreso privado, con supuestos ajustables. Hecho con la ayuda de Claude Code.',
      de: 'Eine interaktive Schätzung, wie viele Menschen in Spanien von öffentlichen Einkommen (öffentlicher Dienst, Renten, Arbeitslosengeld…) im Vergleich zu privaten Einkommen leben, mit anpassbaren Annahmen. Entwickelt mit Hilfe von Claude Code.',
    },
    tech: ['Astro', 'TypeScript', 'Claude Code'],
    link: 'https://quien-paga.antoniojaramillo.dev',
    repo: 'https://github.com/Ziruxltd/quien-paga-tu-nomina',
  },
  {
    title: 'Días de pensiones',
    description: {
      en: 'A small project that helps raise awareness about the excessive spending on retirement pensions in Spain.',
      es: 'Un pequeño proyecto para concienciar sobre el gasto excesivo en pensiones de jubilación en España.',
      de: 'Ein kleines Projekt, das auf die übermäßigen Ausgaben für Altersrenten in Spanien aufmerksam macht.',
    },
    tech: ['Vue.js', 'Quasar'],
    link: 'https://diaspensiones.antoniojaramillo.dev',
    repo: 'https://github.com/Ziruxltd/dias-de-pensiones',
  },
  {
    title: 'Word Clock',
    description: {
      en: 'A clock that displays the time in words instead of numbers.',
      es: 'Un reloj que muestra la hora con palabras en lugar de números.',
      de: 'Eine Uhr, die die Zeit in Worten statt in Zahlen anzeigt.',
    },
    image: '/wordclock.webp',
    tech: ['JavaScript'],
    link: 'https://wordclock.antoniojaramillo.dev',
    repo: 'https://github.com/Ziruxltd/word-clock',
  },
  {
    title: 'Game of Life',
    description: {
      en: "A simulation of Conway's Game of Life.",
      es: 'Una simulación del Juego de la vida de Conway.',
      de: 'Eine Simulation von Conways Spiel des Lebens.',
    },
    image: '/game-of-life.webp',
    tech: ['JavaScript'],
    link: 'https://gameoflife.antoniojaramillo.dev',
    repo: 'https://github.com/Ziruxltd/game-of-life',
  },
  {
    title: 'Advent of Code',
    description: {
      en: 'A collection of my solutions to the Advent of Code challenges using JavaScript.',
      es: 'Una colección de mis soluciones a los retos de Advent of Code en JavaScript.',
      de: 'Eine Sammlung meiner Lösungen für die Advent-of-Code-Aufgaben in JavaScript.',
    },
    image: '/advent-of-code.webp',
    tech: ['JavaScript'],
    repo: 'https://github.com/Ziruxltd/Advent-of-code',
  },
];
