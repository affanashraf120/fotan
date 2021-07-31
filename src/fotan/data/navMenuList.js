const menuList = [
  {
    id: 'home',
    name: 'Home',
    url: '/',
  },
  {
    id: 'academics',
    name: 'Academics',
    url: '/',
  },
  {
    id: 'our-mission',
    name: 'Our Mission',
    url: '/',
  },
  {
    id: 'campuses',
    name: 'Campuses',
    url: '/',
  },
  {
    id: 'admissions',
    name: 'Admissions',
    items: [
      { id: 'primary', name: 'Primary|Middle', url: '/' },
      { id: 'matric', name: 'Matriculation', url: '/' },
      { id: 'intermediate', name: 'Intermediate', url: '/' },
    ],
  },
  {
    id: 'contact',
    name: 'Contact',
    items: [
      { id: 'contact-number', name: 'Contact Numbers', url: '/' },
      {
        id: 'write-to-principal',
        name: 'Write To Principal',
        url: '/',
      },
    ],
  },
];

export default menuList;
