/**
 * Scholar profiles. Biographical wording follows the supplied donor
 * presentation and scholar documents. Items flagged in
 * CONTENT-VERIFICATION.md must be confirmed before edits expand them.
 */

export interface Scholar {
  slug: string;
  name: string;
  role: string;
  portrait: string;
  portraitAlt: string;
  short: string;
  bio: string[];
  training: string[];
  programs: { label: string; href: string }[];
}

export const scholars: Scholar[] = [
  {
    slug: 'shaykh-zakaria-abdilaziz',
    name: 'Shaykh Zakaria Abdilaziz',
    role: 'Lead Scholar and Teacher',
    portrait: '/images/photos/scholar-zakaria.webp',
    portraitAlt: 'Portrait of Shaykh Zakaria Abdilaziz',
    short:
      'Head of Muraqabah\u2019s academic vision and a graduate of the distinguished Alimiyyah program at Dar al-Mustafa in Tarim, Yemen, where he spent nearly two decades immersed in the traditional curriculum.',
    bio: [
      'Shaykh Zakaria Abdilaziz is a graduate of the distinguished Alimiyyah program at Dar al-Mustafa in Tarim, Yemen, where he spent nearly two decades immersed in the traditional curriculum under the direct tutelage of eminent scholars, including Habib Umar bin Hafiz.',
      'During his years of study he specialized in the sciences of Qur\u2019anic recitation, Hadith, Shafi\u2019i jurisprudence, theology, logic, and Arabic linguistics, completing extensive readings across the canon of classical Islamic literature. He holds advanced training and authorization in Qur\u2019anic recitation, along with formal authorizations in several fields of study.',
      'His teaching reflects a combination of analytical rigour and fidelity to traditional sources. He is noted for his clarity, his precision, and his ability to contextualize classical concepts for a modern audience without compromising the integrity of the original texts.',
      'As the head of Muraqabah Initiative\u2019s academic vision, he leads a growing platform devoted to the transmission of traditional Islamic knowledge and the advancement of khidmah: service expressed through education, mentorship, and community engagement. His work continues the living tradition of transmission that connects contemporary learners to the scholarly heritage of Tarim.'
    ],
    training: [
      'Graduate of the Alimiyyah program at Dar al-Mustafa, Tarim, Yemen',
      'Nearly two decades of traditional study under eminent scholars, including Habib Umar bin Hafiz',
      'Advanced training and authorization in Qur\u2019anic recitation',
      'Formal authorizations (ijazat) in several fields, including Hadith and Shafi\u2019i jurisprudence',
      'Theology, logic, Arabic linguistics, and classical Islamic literature'
    ],
    programs: [
      { label: 'Gardens of Paradise (coming soon)', href: '/programs/gardens-of-paradise/' },
      { label: 'Spheres of Faith (completed flagship program)', href: '/programs/spheres-of-faith/' },
      { label: 'The Beginning of Guidance (past intensive)', href: '/events/' },
      { label: 'The Perfect Example (past course)', href: '/events/' },
      { label: 'Turkey Rihla 2027', href: '/rihla-2027/' }
    ]
  },
  {
    slug: 'shaykh-nuh-sanders',
    name: 'Shaykh Nuh Sanders',
    role: 'Teacher, Chains of Trust',
    portrait: '/images/photos/scholar-nuh.webp',
    portraitAlt: 'Portrait of Shaykh Nuh Sanders',
    short:
      'Raised in Philadelphia and trained for more than six years as a full-time student at Dar al-Mustafa in Tarim, Yemen, he teaches Chains of Trust, Muraqabah\u2019s weekly course in the foundations of Hadith sciences.',
    bio: [
      'Shaykh Nuh Sanders was raised in Philadelphia, where his path as a student of Arabic, Tajweed, the Qur\u2019anic sciences, Aqidah, Shafi\u2019i jurisprudence, Hadith, and classical Islamic scholarship began. He continued his studies in Egypt before travelling to Yemen.',
      'For more than six years he studied full time at Dar al-Mustafa in Tarim, Yemen, under leading scholars including Habib Umar bin Hafidh, immersed in the seminary\u2019s traditional curriculum and its emphasis on precise, responsible transmission.',
      'He has taught with initiatives including Lamppost Education Initiative and Safina Society, and is the founder of Dar al-Qurra. His teaching is known for clarity and scholarly precision, with particular attention to Qur\u2019anic recitation, Dawah, and the responsibility that comes with carrying sacred knowledge.',
      'At Muraqabah he teaches Chains of Trust: Foundations of Hadith Sciences, a live weekly study of the classical poem Al-Bayquniyyah.'
    ],
    training: [
      'More than six years of full-time study at Dar al-Mustafa, Tarim, Yemen',
      'Student of leading scholars, including Habib Umar bin Hafidh',
      'Arabic, Tajweed, Qur\u2019anic sciences, Aqidah, Shafi\u2019i jurisprudence, and Hadith',
      'Former instructor with Lamppost Education Initiative and Safina Society',
      'Founder of Dar al-Qurra'
    ],
    programs: [{ label: 'Chains of Trust: Foundations of Hadith Sciences (enrolling now)', href: '/programs/chains-of-trust/' }]
  }
];
