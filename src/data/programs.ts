/**
 * Program registry. Status values drive badges and page copy:
 * 'enrolling' | 'coming-soon' | 'completed'
 */

export interface Program {
  slug: string;
  title: string;
  subtitle: string;
  status: 'enrolling' | 'coming-soon' | 'completed';
  statusLabel: string;
  teacher: string;
  teacherHref: string;
  image: string;
  imageAlt: string;
  summary: string;
  schedule?: string;
  format?: string;
  text?: string;
  level?: string;
  cta: { label: string; href: string; external: boolean };
}

export const programs: Program[] = [
  {
    slug: 'chains-of-trust',
    title: 'Chains of Trust',
    subtitle: 'Foundations of Hadith Sciences',
    status: 'enrolling',
    statusLabel: 'Enrolling Now',
    teacher: 'Shaykh Nuh Sanders',
    teacherHref: '/scholars/shaykh-nuh-sanders/',
    image: '/images/photos/manuscript-books.webp',
    imageAlt: 'Classical manuscripts and bound texts on a study table',
    summary:
      'A guided, line-by-line study of Al-Bayquniyyah, introducing how the words of the Prophet \uFDFA were preserved, examined, and classified by the scholars of Islam.',
    schedule: 'Sundays, 2:00 to 3:00 PM Eastern Time',
    format: 'Live online through Zoom',
    text: 'Al-Bayquniyyah',
    level: 'Foundational, open to beginners and serious students alike',
    cta: { label: 'Register Through Zeffy', href: 'ZEFFY_CHAINS', external: true }
  },
  {
    slug: 'gardens-of-paradise',
    title: 'Gardens of Paradise',
    subtitle: 'Weekly study circle, opening with Weight of Words',
    status: 'coming-soon',
    statusLabel: 'Coming Soon',
    teacher: 'Shaykh Zakaria Abdilaziz',
    teacherHref: '/scholars/shaykh-zakaria-abdilaziz/',
    image: '/images/photos/istanbul-garden.webp',
    imageAlt: 'A mosque courtyard garden with trees and stone pathways',
    summary:
      'A recurring study circle with Shaykh Zakaria Abdilaziz. The opening series, Weight of Words, examines the responsibility of speech and the purification of expression in the Prophetic tradition.',
    format: 'Hybrid, online and in person, subject to confirmation',
    level: 'Open to all',
    cta: { label: 'Register Interest', href: '/contact/?subject=gardens-of-paradise', external: false }
  },
  {
    slug: 'spheres-of-faith',
    title: 'Spheres of Faith',
    subtitle: 'Islam, Iman, Ihsan, and Irfan',
    status: 'completed',
    statusLabel: 'Completed Flagship Program',
    teacher: 'Shaykh Zakaria Abdilaziz',
    teacherHref: '/scholars/shaykh-zakaria-abdilaziz/',
    image: '/images/photos/prayer-hall.webp',
    imageAlt: 'Students seated in a prayer hall during a class',
    summary:
      'Muraqabah\u2019s first flagship weekly program: guided readings on the spheres of the Islamic tradition through the framework of Habib Abd al-Rahman Balfaqih, taught live from Tarim, with more than 80 students attending weekly.',
    format: 'Live weekly sessions on Zoom',
    level: 'Open to all',
    cta: { label: 'Explore the Archive', href: '/programs/spheres-of-faith/', external: false }
  }
];

/** Earlier programs shown on the events timeline (no dedicated pages). */
export const pastPrograms = [
  {
    title: 'The Beginning of Guidance',
    when: '2025 \u00B7 Sold out',
    teacher: 'Shaykh Zakaria Abdilaziz',
    summary:
      'Muraqabah\u2019s debut one-day intensive on Imam al-Ghazali\u2019s classic, with more than 100 people in attendance.'
  },
  {
    title: 'The Perfect Example',
    when: '2025 \u00B7 Sold out',
    teacher: 'Shaykh Zakaria Abdilaziz',
    summary:
      'A dedicated course on the life and character of the Prophet \uFDFA, hosted at Sheridan College.'
  },
  {
    title: 'Sacred Nights',
    when: 'Ramadan program',
    teacher: 'Shaykh Zakaria Abdilaziz',
    summary:
      'A special Ramadan program on the rank of the last ten nights, with a clear strategy for seeking Laylat al-Qadr.'
  }
];
