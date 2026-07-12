/**
 * Curated video library. Add entries here after selecting videos from the
 * YouTube channel. The site never scrapes YouTube in the visitor's browser;
 * players load only after the visitor presses play (privacy-enhanced embeds).
 */

export interface Video {
  id: string;            // YouTube video ID
  title: string;
  description: string;
  speaker?: string;
  category: 'Khidmah' | 'Courses' | 'Reflections' | 'Events' | 'Updates';
  date?: string;         // e.g. 'June 2026'
  duration?: string;     // e.g. '6 min'
  transcript?: string;   // optional URL or path to a transcript
}

export const featuredVideo: Video = {
  id: 'wizaPMOFPt4',
  title: 'Qurbani 2026: Yemen Impact Update',
  description:
    'Full documentation of the Qurbani 2026 distribution in Tarim, Yemen: roughly 100 animals facilitated and more than 300 households reached through Shaykh Zakaria Abdilaziz\u2019s trusted network on the ground.',
  speaker: 'Muraqabah Initiative',
  category: 'Khidmah',
  date: 'June 2026'
};

/**
 * Additional curated videos. Add objects following the Video shape above,
 * for example:
 * { id: 'XXXXXXXXXXX', title: '...', description: '...', category: 'Courses' }
 */
export const videos: Video[] = [];
