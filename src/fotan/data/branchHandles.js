const emails = {
  chairman: 'chairman@fotanistan.com',
  dogranwala: 'fdkhead@fotanistan.com',
  kalaske: 'fmchead@@fotanistan.com',
  verpal: 'fverpalhead@fotanistan.com',
  dehla: 'fdehlahead@fotanistan.com',
};

const phoneNumbers = {
  fotan: '+923246256261',
  dogranwala: '+923156256261',
  kalaske: '+923456256261',
  verpal: '+923116256261',
  dehla: '+923306256261',
};

const passwords = {
  fotan: 'rizvi',
};

const branches = {
  verpal: 'Verpal Branch',
  kalaske: 'Kalaske Branch',
  dogranwala: 'Dogranwala Branch',
  dehla: 'Kids Campus\n Dehla Chatha',
};

const branchCards = [
  {
    title: branches.verpal,
    detail: `${phoneNumbers.verpal}`,
    email: emails.verpal,
    img: '/assets/img/fotan/campuses/verpal.JPG',
  },
  {
    title: branches.kalaske,
    detail: `${phoneNumbers.kalaske}`,
    email: emails.kalaske,
    img: '/assets/img/fotan/campuses/verpal.JPG',
  },
  {
    title: branches.dogranwala,
    detail: `${phoneNumbers.dogranwala}`,
    email: emails.dogranwala,
    img: '/assets/img/fotan/campuses/verpal.JPG',
  },
  {
    title: branches.dehla,
    detail: `${phoneNumbers.dehla}`,
    email: emails.dehla,
    img: '/assets/img/fotan/campuses/verpal.JPG',
  },
];

export { emails, passwords, phoneNumbers, branchCards, branches };
