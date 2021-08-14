import routes from '../../routes';

const menuList = [
  {
    id: 'home',
    name: 'Home',
    url: routes.home(),
  },
  {
    id: 'academics',
    name: 'Academics',
    url: routes.home(),
  },
  {
    id: 'jobs',
    name: 'Jobs',
    url: routes.jobs(),
  },
  {
    id: 'campuses',
    name: 'Campuses',
    url: routes.home(),
  },
  {
    id: 'admissions',
    name: 'Admissions',
    items: [
      { id: 'primary', name: 'Primary|Middle', url: '/' },
      { id: 'matric', name: 'Matriculation', url: '/' },
      { id: 'intermediate', name: 'Intermediate', url: '/' },
    ],
    url: routes.home(),
  },
  {
    id: 'photo-gallery',
    name: 'Photo Gallery',
    url: routes.home(),
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
    url: routes.home(),
  },
];

export default menuList;
