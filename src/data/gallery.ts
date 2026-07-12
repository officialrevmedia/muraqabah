/**
 * Gallery entries. All images are authentic Muraqabah photography drawn
 * from the supplied asset package. Categories power the gallery filter.
 */

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  category: 'Programs' | 'Khidmah' | 'Ramadan' | 'Qurbani' | 'Scholars' | 'Places';
  location?: string;
}

export const gallery: GalleryItem[] = [
  { src: '/images/photos/event-audience-1.webp', alt: 'A seated audience listening during a Muraqabah program', caption: 'Students gathered at a Muraqabah program', category: 'Programs' },
  { src: '/images/photos/event-audience-2.webp', alt: 'Attendees seated in rows at a community seminar', caption: 'A full room at one of our intensives', category: 'Programs' },
  { src: '/images/photos/event-notes.webp', alt: 'A student writing notes during a class', caption: 'Taking notes during a live session', category: 'Programs' },
  { src: '/images/photos/event-speaker.webp', alt: 'A teacher addressing students at a Muraqabah event', caption: 'Teaching at a community program', category: 'Programs' },
  { src: '/images/photos/event-majlis.webp', alt: 'Scholars seated together in a gathering of knowledge', caption: 'A gathering of knowledge', category: 'Scholars' },
  { src: '/images/photos/khidmah-meals.webp', alt: 'Rows of prepared hot meal containers ready for delivery', caption: 'Hot meals prepared for shelters', category: 'Ramadan', location: 'Hamilton, ON' },
  { src: '/images/photos/khidmah-grocery-bags.webp', alt: 'Grocery bags packed and lined up for family packages', caption: 'Family packages ready for distribution', category: 'Ramadan', location: 'Greater Toronto Area' },
  { src: '/images/photos/khidmah-volunteers.webp', alt: 'Volunteers organizing food packages indoors', caption: 'Volunteers preparing food packs', category: 'Khidmah' },
  { src: '/images/photos/khidmah-volunteers-night.webp', alt: 'Volunteers gathered outdoors in the evening during a distribution', caption: 'An evening distribution with our volunteer team', category: 'Khidmah' },
  { src: '/images/photos/khidmah-delivery.webp', alt: 'A vehicle loaded with food packages for delivery', caption: 'Deliveries heading out across the region', category: 'Khidmah' },
  { src: '/images/photos/khidmah-pallet.webp', alt: 'A pallet stacked with boxed food packages', caption: 'Provisions staged for distribution', category: 'Khidmah' },
  { src: '/images/photos/khidmah-rice-prep.webp', alt: 'Team members preparing rice bags for distribution in Tarim', caption: 'Preparing rice bags in Tarim, Yemen', category: 'Ramadan', location: 'Tarim, Yemen' },
  { src: '/images/photos/khidmah-rice-tarim.webp', alt: 'Rice distribution to residents in Tarim, Yemen', caption: 'Rice support delivered in Tarim', category: 'Ramadan', location: 'Tarim, Yemen' },
  { src: '/images/photos/khidmah-rice-carry.webp', alt: 'A man carrying a rice bag through a street in Tarim', caption: 'Carrying provisions home', category: 'Ramadan', location: 'Tarim, Yemen' },
  { src: '/images/photos/khidmah-distribution-night.webp', alt: 'A night-time distribution of provisions in Tarim, Yemen', caption: 'Night distribution during Ramadan', category: 'Qurbani', location: 'Tarim, Yemen' },
  { src: '/images/photos/tarim-city.webp', alt: 'The historic mud-brick skyline of Tarim, Yemen', caption: 'Tarim, Yemen: a centre of sacred knowledge', category: 'Places', location: 'Tarim, Yemen' },
  { src: '/images/photos/minaret-tarim.webp', alt: 'The white minaret of Al-Muhdhar Mosque in Tarim', caption: 'The minaret of Al-Muhdhar Mosque', category: 'Places', location: 'Tarim, Yemen' },
  { src: '/images/photos/dar-al-mustafa.webp', alt: 'The seminary buildings of Dar al-Mustafa in Tarim', caption: 'Dar al-Mustafa, where our scholars trained', category: 'Places', location: 'Tarim, Yemen' },
  { src: '/images/photos/istanbul-silhouette.webp', alt: 'The Istanbul skyline silhouetted at sunset', caption: 'Istanbul, destination of the 2027 Rihla', category: 'Places', location: 'Istanbul, T\u00FCrkiye' },
  { src: '/images/photos/mosque-courtyard.webp', alt: 'A person walking through a mosque courtyard archway', caption: 'Quiet steps through a courtyard', category: 'Places' }
];
