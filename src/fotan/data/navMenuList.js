import routes from '../../routes';

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
    id: 'jobs',
    name: 'Jobs',
    url: routes.jobs(),
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
    id: 'photo-gallery',
    name: 'Photo Gallery',
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
